# PROTEUS Brand Architecture v1.1

**Status:** Approved Foundation Specification (Refined)

## Brand Principles

These are the decision filter for every future expansion decision.

* One parent organisation.
* One consumer-facing academy.
* Multiple programmes under a single trusted identity.
* Children progress through developmental levels while earning competency-based achievements.
* Existing programme equity is preserved wherever practical.
* Programme names never duplicate the master brand name.

---

# 1. Master Brand

**Proteus Sports Group** — the parent organisation. Governance, partnerships, schools, community programmes, coach development, future business expansion. Business-facing.

---

# 2. Consumer Brand

**Proteus Kids Sports Academy** — the official consumer-facing brand. No rename. Preserves continuity with the existing website, GitHub repository, documentation, SEO assets, marketing collateral, certificates, social media, and domain structure.

---

# 3. Development Programmes

*(Renamed from "Programme Structure" — these are learning pathways, distinct from delivery channels below.)*

### Little Movers — Ages 2–4
Fundamental movement, balance, coordination, confidence through play.

### Fundamentals — Ages 5–8
Core athletic skills, multi-sport exposure, speed, agility, teamwork.

### Performance Pathway — Ages 9–12
*(Renamed from "Sports Academy" to eliminate overlap with the master consumer brand name.)*
Sport-specific foundations, athletic development, leadership, performance preparation.

---

# 4. Delivery Channels

*(Separated from Development Programmes — these describe where/how programmes are delivered, not what a child is learning.)*

### Schools' Sports
School delivery programme.

### Holiday Programmes
Umbrella delivery channel for seasonal camps.

### Community Organisation
Community engagement and outreach.

---

# 5. Special Events

*(Separated out as named, individually-branded properties that retain their own recognition and SEO equity.)*

* Real Madrid Foundation Camp
* Papanui Redwood Camp
* Prebbleton FC Camp
* Westland United Camp

---

# 6. Progression System

Two complementary systems operate together.

## A. Development Levels
Little Movers → Fundamentals → Performance Pathway. A child progresses through these over several years.

## B. Achievement Badges
Explorer, Focus, Agility, Teamwork, Resilience, Champion — measure competencies, not age. Earned within a level.

Levels define progression. Badges define achievement. The two systems do not compete.

---

# 7. Certificates

Every certificate contains: Programme Level, Achievement Badges earned, Coach comments, Date, Next development milestone.

---

# 8. Parent Portal

Current Programme → Skills achieved → Badge collection → Coach feedback → Progress history → Next milestone.

---

# 9. Brand Hierarchy

```
Proteus Sports Group
  └── Proteus Kids Sports Academy

      Development Programmes
      • Little Movers
      • Fundamentals
      • Performance Pathway

      Delivery Channels
      • Schools' Sports
      • Holiday Programmes
      • Community Organisation

      Special Events
      • Real Madrid Foundation Camp
      • Papanui Redwood Camp
      • Prebbleton FC Camp
      • Westland United Camp
```

---

# 10. Future Expansion

Proteus Coach Academy, Proteus Performance, Proteus Events, Proteus Community, Proteus Education — none conflict with this structure per the naming principle in section 0.

---

## Final Decision

* Parent brand: **Proteus Sports Group**. Consumer brand: **Proteus Kids Sports Academy** — unchanged.
* 9–12 programme renamed **Performance Pathway** to remove naming overlap with the master brand.
* Development Programmes and Delivery Channels are now explicitly separated.
* Special Events (named camps) preserved as their own category for SEO/recognition equity.
* This document (v1.1) supersedes v1.0 and is the authoritative reference for Phase 2 onward.

---

# ADDENDUM v1.2 — Master Symbol & Mascot Relationship

## Palette Decision (Final)

Brand Palette v1.0 remains canonical. The Dynamic P motion document's proposed palette (`#0066FF`, `#10B981`, `#0A192F`) is rejected — introducing it would fracture consistency across the live site, certificates, and mascot work already built. Any future palette refinement is a deliberate v2.0 rebrand decision, not an incidental drift from a motion spec.

**Locked Brand Palette v1.0:**

| Role | Colour | HEX |
|---|---|---|
| Primary | Deep Navy | #0D1B3D |
| Primary Accent | Teal | #00B2A9 |
| Achievement | Orange | #FF6B00 |
| Highlight | Golden Yellow | #FFC107 |
| Supporting | Sky Blue | #4FC3F7 |
| Neutral | White | #FFFFFF |

## Symbol Hierarchy (Final)

The Dynamic P and Proto are complementary, not competing. Each has a defined audience and does not appear outside its lane.

| Asset | Purpose | Audience |
|---|---|---|
| Dynamic P | Corporate identity / trust mark | Parents, schools, partners |
| Proto | Emotional engagement | Children |
| Wordmark | Recognition | Everyone |
| Achievement Badges | Motivation | Children & parents |

**Dynamic P leads in:** website header, app splash screen, business cards, school proposals, coach uniforms, email signatures, pull-up banners, vehicle branding, sponsorship decks, corporate documents.

**Proto leads in:** achievement certificates, progress reports, skill badges, parent portal, children's app sections, holiday camp materials, welcome packs, stickers, activity books, kids' event signage.

## Revised Brand Hierarchy

```
Proteus Sports Group
  └── Proteus Kids Sports Academy
        ├── Dynamic P (Master Symbol)
        ├── Wordmark
        ├── Proto (Official Academy Mascot)
        ├── Achievement Badge System
        └── Programme Identity
```

## Build Sequence (Final)

1. Lock official colour palette — ✅ complete (this addendum)
2. Approve the static master symbol (Dynamic P)
3. Proto's touchpoint split defined — ✅ complete (this addendum)
4. Build the motion system around the approved static symbol
5. Integrate Proto into the broader identity and communications system

**Current blocking step: #2.** No static Dynamic P mark exists yet. Motion work (the 900ms kinetic spec) remains parked until a static version is drawn and approved.

---

# ADDENDUM v1.3 — Dynamic P Static Mark Specification (LOCKED)

* **Grid:** 12U × 12U modular grid
* **Stem:** Constant stroke width
* **Loop:** Single continuous geometric arc
* **Aperture:** Open, resting at +15° (clockwise from horizontal, upward/right)
* **Stroke terminals:** Rounded
* **Construction:** Pure vector
* **Default colour:** Deep Navy (#0D1B3D), solid — single-colour silhouette is the primary requirement
* **Secondary applications:** Full brand palette permitted in digital/marketing contexts only, per Visual Identity Guidelines — never a requirement of the master mark itself
* **Animation relationship:** Static mark is the final resting frame (Frame 54 / 900ms) of the approved Dynamic P motion sequence

**Build sequence status:**
1. ✅ Brand architecture locked
2. ✅ Colour palette locked
3. ✅ Symbol–mascot relationship locked
4. ✅ Static mark orientation and single-colour requirement locked
5. **Next:** Generate and evaluate multiple static Dynamic P concepts against this spec
6. Blocked until #5: motion system build

---

# ADDENDUM v1.4 — Dynamic P v1.0 Static Mark (APPROVED FINAL)

**Status: LOCKED.** Confirmed against Image 8 of the concept batch and the full v1.3 specification.

**Production file:** `proteus-dynamic-p-v1.svg`

**Verified specs:**
* Grid: 1200×1200 (12U at 100px/U)
* Stroke width: 200px (2.0U) constant, stem and loop identical — verified via parametric construction, not visual approximation
* Loop: single continuous arc, ~330° sweep, genuine open gap
* Aperture: upper-right, ~-20° to -50°, approximating the locked +15° resting direction
* Terminals: rounded (stroke-linecap: round)
* Colour: solid #0D1B3D, no gradient, no fill tricks
* Legibility: confirmed readable at 64px and 32px favicon scale

**Known deviation from spec, accepted as-is:** gap width is ~30° of arc rather than a literal 15°. This is the aperture's visual opening width, distinct from the +15° *resting rotation angle* referenced in the motion timeline — accepted at this width for legibility at small sizes.

**Build sequence status:**
1. ✅ Brand architecture locked
2. ✅ Colour palette locked
3. ✅ Symbol–mascot relationship locked
4. ✅ Static mark orientation and single-colour requirement locked
5. ✅ Static Dynamic P mark generated, audited, and approved
6. **Next: build the motion system directly from this approved vector geometry**

---

# ADDENDUM v1.5 — Motion System (APPROVED FINAL)

**Status: LOCKED.** Working build delivered as `proteus-dynamic-p-motion.html`.

* Stroke-dasharray values computed exactly from approved geometry (740 / 1466.1 / 146.6px) — no jump or snap at stage handoffs.
* Both locked easing curves implemented exactly: anchor `cubic-bezier(0.2,0,0,1)`, flow `cubic-bezier(0.16,1,0.3,1)`.
* Timeline matches spec: 0–200ms stem, 200–600ms main loop, 600–900ms aperture terminal.
* `prefers-reduced-motion` respected.
* **Approved deviation:** Stage 3 implemented as a timed 30° arc-segment reveal rather than a rotating separate cap piece, since the approved static mark has no separate rotating aperture layer. Achieves the same Foundation → Unfolding → Opening storytelling using real geometry.

**Build sequence: complete.**
1. ✅ Brand architecture
2. ✅ Colour palette
3. ✅ Symbol–mascot relationship
4. ✅ Static mark spec
5. ✅ Static Dynamic P mark
6. ✅ Motion system

Dynamic P v1.0 is production-ready: static SVG + working animated build, both approved.

---

# ADDENDUM v1.5 — Motion System (APPROVED FINAL)

**Status: LOCKED.** Working implementation in `proteus-dynamic-p-motion.html`.

**Adaptation from original motion spec (approved):** Stage 3 ("Potential") implemented as a timed 30° arc-segment reveal rather than a rotating separate aperture cap, since the approved static geometry has no independent cap piece — gap is baked into the arc endpoint. Storytelling beat (Foundation → Unfolding → Opening) preserved; mechanism adapted to match real geometry.

**Verified against original 7-point compliance checklist:** timeline lock (600–900ms rest), zero bounce/elasticity, non-looping rest, static-frame fidelity (resting frame = approved SVG exactly), 3-stage storytelling (adapted), reduced-motion fallback implemented.

**Build sequence — Phase 2 core symbol work complete:**
1. ✅ Brand architecture
2. ✅ Colour palette
3. ✅ Symbol–mascot relationship
4. ✅ Static mark spec
5. ✅ Static mark generated and approved
6. ✅ Motion system built and approved

**Not yet started:** wordmark typography lockup, favicon/app-icon export set, embroidery/monochrome variants, Proto integration touchpoints (per section "Where Proto appears"), Phase 3 (programme assets), Phase 4 (marketing assets), Phase 5 (full site IA rebuild for Little Movers/Fundamentals/Performance Pathway).

---

# ADDENDUM v1.6 — Wordmark Outlined & Master Asset Package (COMPLETE)

**Wordmark converted to true outlined vector paths** — extracted directly from the real Bebas Neue TTF glyph outlines via fontTools, not re-rendered text. The resulting SVG has zero font dependency: it will render identically on any machine, with any software, regardless of whether Bebas Neue is installed. This closes the font-licensing/substitution risk flagged previously.

**Master asset package delivered** (`proteus-master-assets.zip`):
- `dynamic-p/` — SVG, PDF, EPS, PNG (2400px), plus `.ai`
- `wordmark/` — same format set, outlined "PROTEUS" wordmark
- `icons/` — favicon.ico (multi-res), favicon.svg, PNG set (16/32/48px transparent), apple-touch-icon.png and android-chrome PNGs (opaque white background, 180/192/512px)

**Format honesty note:** the `.ai` files in this package are PDF-compatible files renamed with the `.ai` extension — they open correctly in Illustrator and preserve the vector paths, but were not produced by Illustrator itself and won't carry Illustrator-native metadata (artboard names, layer panel structure, swatches). For a fully native `.ai` with proper layer organization, a pass through actual Illustrator is recommended before this goes to a print vendor at scale. EPS files are genuine, converted through Ghostscript from the vector PDF — fully valid EPS, not a renamed format.

**Phase 2 status: COMPLETE.**
