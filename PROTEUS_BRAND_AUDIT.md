# Proteus Kids Sports Academy — Brand Audit (Phase 1)
**Baseline reviewed:** https://911duplessis.github.io/Proteus-Kids-Sports-Academy/
**Status:** Version 1.0, approved. This audit does not propose new direction — it scores what exists against Keep / Improve / Replace / Expand, plus UX, accessibility, mobile, and SEO.

---

## 1. Section-by-Section Audit

### Hero
| Element | Verdict | Notes |
|---|---|---|
| Tagline "I Adapt. I Grow. I Can Do Anything!" | **Keep** | Strong, ownable, works at every size. Anchor the whole system to this line. |
| Gradient hero background (teal→navy) | **Keep** | On-brand, distinctive, not a generic template gradient. |
| Proto celebrating mascot | **Keep** | Consistent character, good energy for first impression. |
| "P" text wordmark (CSS, no real logo file) | **Replace** | This is a placeholder. No transparent, vector logo asset exists anywhere in the system yet. This is the single highest-priority Phase 2 item — everything else (favicon, app icon, print, merch) depends on it. |
| Hero subcopy | **Improve** | Generic ("builds adaptive kids, one sport, one session, one win at a time"). Needs a parent-outcome-specific rewrite — what does a parent actually get, in concrete terms, in week 1 vs. week 8. |

### Meet Proto
| Element | Verdict | Notes |
|---|---|---|
| Welcoming pose + mission statement | **Keep** | Mission copy is sourced from real brand documentation, reads authentically. |
| Value chips (Adaptability, Growth, Resilience, Teamwork) | **Improve** | Original brand sheet lists 5 core values including "Joy" — dropped for layout. Either make room for it or document why it's cut; right now it's an unexplained inconsistency between brand doc and site. |

### Sport Programs
| Element | Verdict | Notes |
|---|---|---|
| 6-sport card grid, color-coded per sport | **Keep** | Strong pattern, scales well, visually distinct without being chaotic. |
| Per-sport description copy | **Replace** | Currently generic placeholder ("Ball control, teamwork, and agility on the pitch"). No age-specific detail, no outcome language, no differentiation from any other kids' sports program. This is the weakest copy block on the site. |
| No individual program pages | **Expand** | Every sport currently links nowhere — no age-group breakdown, no schedule, no pricing, no "what a session looks like." This is a real conversion gap: a parent interested in swimming has no next step. |

### Coach Proto
| Element | Verdict | Notes |
|---|---|---|
| Coach mascot (corrected palette) | **Keep** | Consistency fix already applied — matches the rest of the character set. |
| Feature bullets (certified coaches, progress tracking, encouragement-first) | **Replace** | Unverifiable claims with no backing. "Certified youth sports coaches" is a factual assertion — either back it with real credentials/bios or soften to aspirational language. This is a trust liability if published as-is. |
| No real human coach photography or bios | **Expand** | A mascot-only "Coaches" section works for brand personality but not for parent trust. Parents choosing a sports program want to see who is actually with their child. This is arguably the single biggest missing trust signal on the site. |

### Achievements
| Element | Verdict | Notes |
|---|---|---|
| Champion + Celebrating cards | **Keep** | Visually strong, matches badge system described in brand doc. |
| Stats strip (6 sports / 6 badges / 100% adaptive) | **Improve** | "100% Adaptive Coaching" is a marketing tautology, not a stat. Replace with a real number if one exists (families served, sessions run, years operating) or cut it. |
| No testimonials or social proof | **Expand** | Zero parent quotes, reviews, or third-party validation anywhere on the site. For a program asking parents to trust a stranger with their child, this is a significant gap. |

---

## 2. UX / UI Audit

- **No dedicated pages** — the entire site is a single scrolling page. Fine for a landing page, insufficient for a real program: no way to deep-link to "Swimming, Ages 5–7" from a Google search or a flyer QR code.
- **CTA buttons ("Book a Trial Session") are non-functional** — no `href`, no form, no booking flow. Every conversion point on the site currently dead-ends.
- **No pricing anywhere.** A parent cannot self-qualify before contacting.
- **Nav has no active-state indicator** — scrolling past a section doesn't highlight the corresponding nav link, so orientation is weak on a long scroll.
- **Floating CTA and scroll-reveal are well-executed** and respect `prefers-reduced-motion` — no changes needed here.

## 3. Accessibility Review

- Focus states, `alt` text, and reduced-motion handling are already implemented correctly (added in this build cycle) — **Keep**.
- **No skip-to-content link** for keyboard/screen-reader users navigating past the sticky nav.
- **Color contrast unverified** — the yellow-on-navy CTA and teal-on-white body text need a formal WCAG AA contrast check before launch; not yet audited.
- **No `<html lang>` region announcements for dynamic content** (scroll-reveal sections appearing) — acceptable for this use case but worth noting for a full audit.

## 4. Mobile Responsiveness

- Grid layouts collapse correctly at 900px and 560px breakpoints — **Keep**.
- Hero text at `4rem` scales down to `2.6rem` on mobile but has not been tested on true small devices (iPhone SE-class, 375px) — recommend a physical device pass, not just browser resize.
- Nav links fully hide below 800px with **no hamburger/mobile menu replacement** — Programs, Coaches, and Achievements become unreachable via nav on mobile entirely. This is a functional gap, not a polish item.

## 5. SEO Audit

- **Title and meta description present and reasonable** — Keep.
- **No Open Graph or Twitter Card tags** — links shared on WhatsApp, Facebook, or iMessage will show no preview image or description. High-impact, low-effort fix.
- **No structured data (schema.org)** — a `SportsActivityLocation` or `Organization` schema would help local search and rich results; currently absent.
- **No sitemap.xml or robots.txt** — not discoverable in the repo; needed before this is meant to rank.
- **No favicon** — currently shows a blank/default browser tab icon, which reads as unfinished to any visitor with multiple tabs open.
- **Single page = single indexable URL.** Real SEO growth (ranking for "kids swimming lessons [city]," "kids basketball program [city]," etc.) requires the individual program pages flagged in the UX section above — this is as much an SEO gap as a UX one.

---

## 6. Priority Order for Phase 2

Ranked by dependency and impact, not by phase-doc order:

1. **Real vector logo file** — every other asset (favicon, app icon, print, merch, OG image) blocks on this.
2. **Working booking flow** — every CTA on the site currently fails silently; this is a revenue-blocking gap, not a design one.
3. **Individual program pages** — unblocks SEO, unblocks per-sport pricing/schedule, unblocks ad/flyer deep-linking.
4. **Real coach bios/photography** — highest-leverage trust signal currently missing.
5. **Favicon + Open Graph tags** — small effort, immediate professionalism gain.
6. **Copy pass on sport descriptions and coach claims** — replace placeholder/unverifiable copy before this is public-facing.

---

*This audit intentionally does not touch visual philosophy, palette, mascot design, or typography — those are approved and out of scope per Version 1.0 sign-off. Every finding above is either a missing asset, a functional gap, or a copy/trust issue — not a redesign recommendation.*
