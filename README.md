# FABRIC Website Redesign

Next.js 14 + Tailwind CSS scaffold based on the FABRIC Website Redesign Final Report
and Adobe XD prototype.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animation**: Framer Motion (installed, ready to use)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── page.tsx             # Homepage (Hero → Testimonials → What Can I Do → Resource Map → Stats → News/Events)
│   ├── about/page.tsx       # About FABRIC
│   ├── community/page.tsx   # Community & Events (Project Highlights + News/Events)
│   ├── research/page.tsx    # Research & Collaboration
│   ├── use-fabric/page.tsx  # Use FABRIC (signup flow, support resources)
│   └── documentation/page.tsx  # Documentation & Support
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Responsive nav with dropdown menus (6 top-level items)
│   │   └── Footer.tsx       # Dark navy footer with NSF funding notice
│   ├── sections/            # Page section components
│   │   ├── HeroSection.tsx              # Dark gradient hero with network SVG
│   │   ├── TestimonialCarousel.tsx      # User quote carousel (Fatou Secka, Elie Kfoury)
│   │   ├── WhatCanIDoSection.tsx        # 3 capability bullets + "Still have questions" card
│   │   ├── ResourceMapSection.tsx       # SVG US map with node locations + table
│   │   ├── ByTheNumbersSection.tsx      # Stats grid (43,808 slices / 2,267 users / etc.)
│   │   ├── NewsEventsSection.tsx        # News articles + event cards side by side
│   │   ├── IsRightForMeSection.tsx      # "Is FABRIC Right for Me?" with use cases
│   │   ├── SignUpStepsSection.tsx       # 4-step signup flow (blue cards)
│   │   ├── AvailableSupportSection.tsx  # 5 support resource cards
│   │   └── ProjectHighlightsSection.tsx # Image grid with optional filters
│   └── ui/
│       └── PageHero.tsx     # Reusable inner-page hero (dark or light variant)
│
└── lib/
    ├── utils.ts             # cn(), formatDate()
    └── data/
        ├── navigation.ts    # Full nav tree (6 top-level items, dropdowns)
        ├── stats.ts         # By the Numbers data
        ├── news.ts          # NewsItem + EventItem types + seed data
        ├── highlights.ts    # Project highlight cards
        ├── testimonials.ts  # User testimonials
        └── support.ts       # Available Support resources
```

## Navigation Architecture
Matches the Transformation phase from the roadmap:

| Nav Item                    | URL            | Key Children                                 |
|-----------------------------|----------------|----------------------------------------------|
| About FABRIC                | /about         | Overview, Team, Advisory Boards, Funding     |
| Facilities & Infrastructure | /facilities    | Overview, Resource Map, Prism, AERO          |
| Community & Events          | /community     | News, Events, Project Highlights, Newsletter |
| Research & Collaboration    | /research      | Current Projects, Publications, Partnerships |
| Documentation & Support     | /documentation | Knowledge Base (ext), Forums (ext), etc.     |
| Use FABRIC                  | /use-fabric    | Get Started, Overview, Portal (ext)          |

## Brand Colors (FABRIC Brand)
| Token                  | Hex       | Use                          |
|------------------------|-----------|------------------------------|
| `fabric-navy`          | `#1B3A5C` | Headers, footer bg           |
| `fabric-blue`          | `#1A73B5` | Primary brand blue           |
| `fabric-teal`          | `#2196C9` | Hero bg, active states, CTAs |
| `fabric-sky`           | `#5BC4E5` | Accents, borders             |
| `fabric-yellow`        | `#F5C518` | Primary CTA buttons          |
| `fabric-yellow-dark`   | `#D4A800` | CTA hover                    |
| `fabric-light`         | `#EAF4FB` | Section backgrounds          |
| `fabric-off-white`     | `#F5F7FA` | Alternating sections         |

## Next Steps (from the Redesign Report)

### Stabilization
- [ ] Replace SVG map placeholder with real interactive Resource Map
- [ ] Replace color-block image placeholders with real photography
- [ ] Add "Return to Portal" button in Navbar
- [ ] Connect News/Events to a CMS (Contentful, Sanity, or Markdown files)
- [ ] User test updated navigation for clarity

### Modernization
- [ ] Implement `/facilities` page with full infrastructure overview
- [ ] Add `/community/newsletter` signup page
- [ ] Implement search across Knowledge Base content
- [ ] Add external link icons to cross-ecosystem nav items
- [ ] Move Project Highlights to filterable database

### Transformation
- [ ] Integrate with FABRIC Portal auth (SSO)
- [ ] Full CMS migration for News/Events/Highlights
- [ ] Interactive Resource Map with live site status
- [ ] Unified navigation testing (tree tests, walkthroughs)
- [ ] A11y audit (WCAG 2.1 AA)
