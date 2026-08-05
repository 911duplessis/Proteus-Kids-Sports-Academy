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
