"use client";

import { FC, useEffect} from "react";

/**
 * A custom cursor component that follows the mouse pointer and changes size on hover over links.
 */
const Cursor: FC = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX + 4}px `;
      cursor.style.top = `${e.pageY + 4}px `;
    };

    document.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("nav ul li a button");
    const navlinks = document.querySelectorAll("nav ul li");    
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("large");
        })
    })

    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("large");
        })
    })

    // Animation
    navlinks.forEach((li, i) => {
        (li as HTMLElement).style.animationDelay = 0 + i * 140 + "ms";
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default Cursor;