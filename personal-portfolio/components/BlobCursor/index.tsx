'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import './index.css';

export interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMoveNative = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const { left, top } = updateOffset();
      let x = 0;
      let y = 0;

      if ('clientX' in e) {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      } else if ((e as TouchEvent).touches && (e as TouchEvent).touches[0]) {
        x = (e as TouchEvent).touches[0].clientX;
        y = (e as TouchEvent).touches[0].clientY;
      }

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    // hide native cursor on devices that support hover (skip touch)
    const canHover = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
    const prevCursor = canHover ? document.body.style.cursor : '';
    if (canHover) document.body.style.cursor = 'none';

    // attach native listeners so the cursor works even when the container is pointer-events: none
    window.addEventListener('mousemove', handleMoveNative);
    window.addEventListener('touchmove', handleMoveNative, { passive: true });

    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);

    return () => {
      // restore native cursor
      if (canHover) document.body.style.cursor = prevCursor;
      window.removeEventListener('mousemove', handleMoveNative);
      window.removeEventListener('touchmove', handleMoveNative);
      window.removeEventListener('resize', onResize);
    };
  }, [handleMoveNative, updateOffset]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      // make the container cover the viewport so positions calculate correctly
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex,
        pointerEvents: 'none' // allow clicks to pass through; we attach window listeners for movement
      }}
    >
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="blob-main"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined, pointerEvents: 'none' }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => {
              blobsRef.current[i] = el;
            }}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              willChange: 'transform'
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%',
                position: 'absolute'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
