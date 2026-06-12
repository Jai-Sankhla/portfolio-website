# Cinematic Portfolio Redesign

## Design Direction
- **Vibe**: Light & airy + Full cinematic
- **Layout**: Multi-page with animated page transitions
- **Colors**: Charcoal (#2D2D2D) + Saffron (#F4A259) — "Bold Editorial Duo"
  - Light mode: Off-white (#FAF8F5) bg, Charcoal text, Saffron accent
  - Dark mode: Near-black (#1A1A1A) bg, Warm-white (#F0EDE8) text, Saffron accent
- **Hero**: Split screen — text left + particle/dot grid visual right
- **Animations**: Page transitions, staggered reveals, parallax, cursor glow, horizontal scroll
- **Case studies**: All 5 kept, dedicated pages
- **Work page**: Horizontal scroll strip
- **Dark/Light mode toggle**: Yes

## Tech Stack
- Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS v4 + Framer Motion 12
- **Zero new dependencies**

---

## 5 Pages

| Page | Route | Content |
|---|---|---|
| Home | `/` | Split hero → Featured projects (horizontal scroll) → About preview → Contact CTA |
| Work | `/work` | Full horizontal scroll gallery of all 5 projects |
| Case Study | `/work/[slug]` | Cover → Title/metadata → Impact stat → Content sections → Next project |
| About | `/about` | Photo + bio → Timeline → Skills grid → Testimonials |
| Contact | `/contact` | Bold headline + email/social links |

---

## Files to Create (22)

### Foundation (5)
- `src/app/globals.css` — Color tokens, dark mode, custom utilities
- `src/app/layout.tsx` — Root layout with ThemeProvider, Navbar, Footer, CursorGlow
- `src/app/template.tsx` — AnimatePresence page transitions
- `src/components/ThemeProvider.tsx` — Dark/light context, localStorage, system pref
- `src/hooks/useMousePosition.ts` — Track mouse coordinates

### Nav & Shell (4)
- `src/components/Navbar.tsx` — Fixed nav, transparent→solid, theme toggle, mobile menu
- `src/components/ThemeToggle.tsx` — Animated sun/moon toggle
- `src/components/Footer.tsx` — Minimal footer
- `src/components/CursorGlow.tsx` — Custom cursor follower (spring-delayed radial gradient)

### Animation Utilities (3)
- `src/components/ScrollReveal.tsx` — Reusable fade+slide up on scroll
- `src/components/ParallaxImage.tsx` — Image with scroll-driven parallax
- `src/components/AnimatedCounter.tsx` — Number counter on scroll

### Hero (2)
- `src/components/HeroSection.tsx` — Split: staggered text + canvas
- `src/components/ParticleCanvas.tsx` — Canvas particle grid, mouse-reactive

### Projects (2)
- `src/components/ProjectCard.tsx` — Image zoom + overlay on hover
- `src/components/HorizontalScroll.tsx` — Vertical scroll drives horizontal translateX

### Pages (6)
- `src/app/page.tsx` — Homepage
- `src/app/work/page.tsx` — Full horizontal project gallery
- `src/app/work/[slug]/page.tsx` — Case study SSG
- `src/components/CaseStudyLayout.tsx` — Case study layout
- `src/app/about/page.tsx` — About page
- `src/app/contact/page.tsx` — Contact page

### Plus
- `src/components/Timeline.tsx`, `src/components/ContactSection.tsx`, `src/data/site.ts`

---

## Animation Details

| Effect | Implementation |
|---|---|
| Page transitions | `template.tsx` — AnimatePresence mode="wait", scale+y |
| Hero text stagger | Framer Motion variants, staggerChildren 0.04 |
| Particle canvas | HTML5 Canvas 2D, ~120 dots, mouse proximity |
| Scroll reveals | useInView + spring bounce 0.1 |
| Horizontal scroll | useScroll + useTransform |
| Parallax images | useScroll + useTransform (different y rates) |
| Cursor glow | useSpring (damping 25, stiffness 200) |
| Project hover | whileHover scale 1.03 + overlay |
| Theme toggle | localStorage + prefers-color-scheme + CSS class |
| Animated counters | useInView + useSpring 0→target |
| Dark mode transition | CSS transition on body bg + color |

---

## Implementation Order (10 Batches)

1. **Foundation**: globals.css → layout.tsx → template.tsx → ThemeProvider → hooks → site.ts
2. **Nav & shell**: Navbar → ThemeToggle → Footer → CursorGlow
3. **Animation utils**: ScrollReveal → ParallaxImage → AnimatedCounter
4. **Hero**: HeroSection → ParticleCanvas
5. **Projects**: ProjectCard → HorizontalScroll
6. **Pages: Home + Work**: page.tsx → work/page.tsx
7. **Case studies**: CaseStudyLayout → work/[slug]/page.tsx
8. **About page**: Timeline → about/page.tsx
9. **Contact page**: ContactSection → contact/page.tsx
10. **Cleanup & build**: Delete old files, npm run build, fix TS errors

---

## Mobile Adaptations
- Horizontal scroll → regular vertical grid
- Particle canvas → simplified/static
- Split hero → stacked layout
- Cursor glow → hidden on touch
- Page transitions → fade only

## Constraints
- Zero new npm dependencies
- Zero TypeScript errors
- All 5 case study static pages via generateStaticParams
- Canvas particles: pure JS, no Three.js
- Dark/light: localStorage + system preference fallback
