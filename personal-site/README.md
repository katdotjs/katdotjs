# 🌙 Personal Website 
Built with: **Next.js (App Router)** + **Tailwind CSS** + **TypeScript**

---

## 🛠️ Project Setup
- [x] Create app: `npx create-next-app@latest --app`
- [x] Choose **TypeScript**, **Tailwind CSS**, and **App Router**
- [x] Set `output: 'standalone'` in `next.config.js` (for deployment)
- [x] Set up folders:
  - [x] `app/` for routes and layouts
  - [x] `components/` for UI components
  - [x] `lib/` for utilities/helpers
  - [x] `public/` for static assets
  - [x] `styles/` for custom CSS

---

## 🎨 Theme and Global Styles

### 🌌 Celestial Theme Support
- [ ] Configure Tailwind for `darkMode: 'class'`
- [ ] Add `<ThemeProvider>` using `next-themes`
- [ ] Create theme toggle component:
  - [ ] 🌙 Dark: black grainy bg, gold accent, white text
  - [ ] ☀️ Light: grainy noise bg, gold accent, black text
- [ ] Add SVG/starry noise background (global or per-section)

---

## 🖱️ Custom Cursor
- [ ] Build a `<CustomCursor />` component:
  - [ ] Use `useEffect` to track mouse position
  - [ ] Style cursor with CSS blend modes or SVG
  - [ ] Animate with Framer Motion
  - [ ] Respect theme context (light/dark appearance)

---

## 📄 Pages (App Router)

### `/about` (app/about/page.tsx)
- [ ] Add personal bio content
- [ ] Include image or illustration
- [ ] Style with celestial/ethereal elements

### `/fun` (app/fun/page.tsx)
- [ ] Display list/grid of mini projects:
  - [ ] Flappy Bird
  - [ ] IEEE calculator
  - [ ] Date Night Generator
  - [ ] Character Creator
- [ ] Add card UI with hover animations

### `/blog` (app/blog/page.tsx)
- [ ] Use MDX or content layer to load posts
- [ ] Show list with title, date, excerpt
- [ ] (Optional) Add category filter and pagination

### `/resume` (app/resume/page.tsx)
- [ ] Design layout inspired by [read.cv/seanehalpin](https://read.cv/seanehalpin)
- [ ] Use timeline or modular cards
- [ ] Add print/download button (CSS media query or `@react-pdf`)

### `/contact` (app/contact/page.tsx)
- [ ] Add form with:
  - [ ] Name
  - [ ] Email
  - [ ] Message
- [ ] Use `react-hook-form` or custom validation
- [ ] Submit via Formspree, emailjs, or server action

---

## 🔤 Fonts & Typography
- [ ] Install Google Fonts: Bodoni Moda (600), Lexend (400)
- [ ] Add with `next/font/google` in `layout.tsx`
- [ ] Configure Tailwind typography plugin
- [ ] Apply semantic typography scale

---

## 🔗 Navigation & Layout
- [ ] Create shared `Header` component:
  - [ ] Logo + navigation links
  - [ ] Theme toggle
- [ ] Add `Footer` component:
  - [ ] Links to LinkedIn and GitHub
  - [ ] Styled with hover/focus effects
- [ ] Set up global `app/layout.tsx` with consistent layout

---

## 💎 Extras & UX Polish
- [ ] Add favicon and open graph meta tags
- [ ] Enable smooth scroll with `scroll-behavior: smooth`
- [ ] Custom 404 page: `app/not-found.tsx`
- [ ] Add route transition animations (Framer Motion)
- [ ] Mobile-first responsive design
- [ ] Accessibility audit (color contrast, focus traps, keyboard nav)

