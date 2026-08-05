# Proteus Kids Sports Academy — Project Brief

> **This document is the authoritative source for all implementation work.**
> No redesigns unless explicitly requested by the project owner.
> The creative direction is locked. Focus on execution, refinement, and production quality.

---

## 1. Brand Architecture (v1.6) — Locked Decisions

### Identity

| Field              | Value                                                    |
| ------------------ | -------------------------------------------------------- |
| Brand name         | Proteus Kids Sports Academy                              |
| Parent org         | Proteus Sports Group                                     |
| Tagline            | I Adapt. I Grow. I Can Do Anything!                      |
| Philosophy         | Movement before competition                              |
| Location           | Canterbury, New Zealand                                  |
| Audience           | Children aged 2–12, their parents, and school partners   |

### Colour Palette

| Token        | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| `--teal`     | `#00B2A9` | Primary brand, CTAs, links         |
| `--teal-dark`| `#007A74` | Hover states, gradients            |
| `--orange`   | `#FF6B00` | Accent, Performance Pathway        |
| `--navy`     | `#0D1B3D` | Headings, dark backgrounds         |
| `--yellow`   | `#FFC107` | Highlight, primary CTA buttons     |
| `--sky`      | `#4FC3F7` | Little Movers, focus rings         |
| `--bg`       | `#F7FAF9` | Page background                    |
| `--ink`      | `#17302E` | Body text                          |
| `--muted`    | `#5E706E` | Secondary text                     |

### Typography

| Role     | Family       | Weight(s)        | Usage                           |
| -------- | ------------ | ---------------- | ------------------------------- |
| Display  | Bebas Neue   | 400              | h1, h2, h3, section titles     |
| UI       | Poppins      | 400–800          | Labels, eyebrows, buttons, nav |
| Body     | Open Sans    | 400, 600         | Paragraphs, descriptions       |

### Visual Identity

| Asset              | Description                                              |
| ------------------ | -------------------------------------------------------- |
| Dynamic P          | `images/dynamic-p.svg` — primary logo mark               |
| Proto (mascot)     | Character in 10 poses (PNG + WebP pairs in `images/`)    |
| Brand word         | "PROTEUS" set in Bebas Neue alongside Dynamic P          |

### Proto Mascot Poses (Available)

- `proto-basketball` — Basketball pose
- `proto-celebrating` — Celebration (hero default)
- `proto-champion` — Victory/champion stance
- `proto-coach` — Coaching/teaching pose
- `proto-cricket` — Cricket pose
- `proto-running` — Running/athletics
- `proto-soccer` — Soccer/football kick
- `proto-swimming` — Swimming pose
- `proto-tennis` — Tennis pose
- `proto-welcoming` — Welcoming/open arms (Little Movers)

---

## 2. Programme Architecture — Locked

### Development Pathways

| Programme          | Ages | Colour     | Focus                                           |
| ------------------ | ---- | ---------- | ----------------------------------------------- |
| Little Movers      | 2–4  | `--sky`    | Balance, coordination, motor skills through play |
| Fundamentals       | 5–8  | `--teal`   | Multi-sport: soccer, basketball, tennis, cricket, swimming, running |
| Performance Pathway| 9–12 | `--orange` | Sport-specific development, leadership, game understanding |

### Delivery Channels

| Channel              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| Schools' Sports      | Curriculum support, PE enrichment, aftercare sport      |
| Holiday Programmes   | Multi-sport camps during school breaks                  |
| Community Programmes | Outreach and engagement across Canterbury               |

### Achievement System

Badges (competency-based, not age-gated):
**Explorer → Focus → Agility → Teamwork → Resilience → Champion**

Levels define progression (Little Movers → Fundamentals → Performance Pathway).
Badges define achievement. Both operate together.

---

## 3. Information Architecture — Locked

```
/                           → Home (landing page)
/about                      → About Proteus Kids Sports Academy
/programmes/                → Programmes overview
/programmes/little-movers   → Little Movers (ages 2–4)
/programmes/fundamentals    → Fundamentals (ages 5–8)
/programmes/performance-pathway → Performance Pathway (ages 9–12)
/delivery/schools           → Schools' Sports
/delivery/holiday           → Holiday Programmes
/delivery/community         → Community Programmes
/parent-hub                 → Parent Hub (badges, progress, FAQ)
/contact                    → Contact / Enrol
```

---

## 4. Design Principles — Locked

1. **Child-first, parent-reassured** — Content speaks to what children experience; design reassures parents about quality and safety.
2. **Movement, not still** — Subtle animations, Proto mascot, energy in layout. Respect `prefers-reduced-motion`.
3. **Progression is visible** — The pathway from Little Movers to Performance Pathway should be visually clear on every page.
4. **Consistency over novelty** — Every page uses the same tokens, components, and patterns.
5. **Accessible by default** — WCAG 2.1 AA minimum. Focus rings, skip links, semantic HTML, colour contrast.
6. **Deployable at all times** — The repository must be deployable after every phase. No broken states.

---

## 5. Technical Decisions

| Decision            | Choice                                                  |
| ------------------- | ------------------------------------------------------- |
| Architecture        | Static HTML + CSS + vanilla JS (no framework)           |
| Styling             | CSS custom properties, shared stylesheet                |
| Fonts               | Google Fonts CDN (Bebas Neue, Poppins, Open Sans)       |
| Images              | WebP with PNG fallback, lazy loading below the fold     |
| Deployment target   | Static hosting (Netlify, Vercel, or GitHub Pages)       |
| SEO                 | Semantic HTML, Schema.org JSON-LD, Open Graph, meta     |
| Accessibility       | WCAG 2.1 AA, skip links, focus management, ARIA where needed |

---

## 6. Implementation Roadmap

| Phase | Objective                    | Deliverable                                                |
| ----- | ---------------------------- | ---------------------------------------------------------- |
| 0     | Repository & technical audit | Gap analysis and implementation plan (this document)       |
| 1     | Design system                | Shared CSS: tokens, components, typography, layouts        |
| 2     | Site architecture            | Shared nav, footer, page shell, routing structure          |
| 3     | Core pages                   | Home (refactored), About, Contact                          |
| 4     | Programme pages              | Little Movers, Fundamentals (refactored), Performance Pathway |
| 5     | Delivery channel pages       | Schools, Holiday Programmes, Community                     |
| 6     | Parent Hub                   | Badges, certificates, progress visualisation, FAQ          |
| 7     | Polish                       | Accessibility audit, performance, SEO validation           |
| 8     | Launch                       | Deployment config, final QA, documentation                 |

### Phase Workflow (every phase)

1. Analyse the existing implementation.
2. Explain the proposed changes.
3. List affected files.
4. Implement only those files.
5. Self-review against this locked architecture.
6. Produce a QA checklist.
7. Summarise what was committed to Git.

---

## 7. Constraints

- No invented programme names, badge names, or event names beyond what is documented above.
- No claims of Lighthouse scores without measurement.
- No assets that don't exist in the repository.
- Placeholder sections must be visually marked as placeholders until real content is provided.
- Every phase must produce working, deployable code.
- Every phase ends with QA and a Git commit summary.

---

## 8. Phase 0 — Gap Analysis

### What exists

| File                          | Status    | Notes                                           |
| ----------------------------- | --------- | ----------------------------------------------- |
| `index.html`                  | Exists    | Full landing page, inline CSS/JS, 2 placeholders |
| `programmes/fundamentals.html`| Exists    | Complete, inline CSS, .example domains          |
| `images/dynamic-p.svg`        | Exists    | Logo mark                                       |
| `images/proto-*.png`          | Exists    | 10 mascot poses, PNG originals                  |
| `images/proto-*.webp`         | Exists    | 10 mascot poses, WebP optimised                 |

### What's missing

| Gap                                        | Priority | Phase |
| ------------------------------------------ | -------- | ----- |
| Shared CSS file (tokens + components)      | Critical | 1     |
| Shared navigation component                | Critical | 2     |
| Shared footer component                    | Critical | 2     |
| About page                                 | High     | 3     |
| Contact page                               | High     | 3     |
| Little Movers programme page               | High     | 4     |
| Performance Pathway programme page         | High     | 4     |
| Programmes overview/index page             | High     | 4     |
| Schools delivery page                      | Medium   | 5     |
| Holiday Programmes delivery page           | Medium   | 5     |
| Community Programmes delivery page         | Medium   | 5     |
| Parent Hub page                            | Medium   | 6     |
| 404 page                                   | Low      | 7     |
| sitemap.xml                                | Low      | 7     |
| robots.txt                                 | Low      | 7     |
| Accessibility audit                        | High     | 7     |
| Deployment configuration                   | High     | 8     |

### Technical debt in existing files

| Issue                                         | File(s)                    | Phase |
| --------------------------------------------- | -------------------------- | ----- |
| ~150 lines of CSS duplicated across files      | index.html, fundamentals   | 1     |
| Inline styles in HTML elements                 | index.html                 | 1     |
| `.example` domains in canonical/OG URLs        | fundamentals.html          | 2     |
| No skip-to-content link on home page           | index.html                 | 2     |
| No `<main>` landmark on home page              | index.html                 | 2     |
| Hamburger menu missing on mobile               | Both files                 | 2     |
| Philosophy section has placeholder content     | index.html                 | 3     |
| Testimonials section has placeholder content   | index.html                 | 3     |
| No `loading="lazy"` on below-fold images       | index.html                 | 3     |
| No `width`/`height` attributes on images       | index.html                 | 3     |
| Footer lacks useful links and information      | Both files                 | 2     |
