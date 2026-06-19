# FABRIC Website

Next.js 16 marketing and documentation site for the [FABRIC Testbed](https://fabric-testbed.net) — a large-scale, programmable research infrastructure for networking, cybersecurity, distributed computing, and AI/ML research.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16 (App Router) | Framework, routing, SSG |
| Decap CMS | 3 | Content management for non-technical editors |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling + design tokens |
| react-simple-maps | 3 | Interactive topology map |
| gray-matter | — | Markdown YAML frontmatter parsing |
| remark / remark-html | — | Markdown → HTML rendering |
| Lucide React | — | Icons |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npx tsc --noEmit   # type-check
npx next build     # production build
```

## Project Structure

```
src/
├── app/                                   # Next.js App Router pages
│   ├── page.tsx                           # Homepage
│   ├── about/
│   │   ├── page.tsx                       # About FABRIC overview
│   │   ├── leadership/page.tsx            # Leadership team
│   │   ├── partners/page.tsx              # Partner institutions
│   │   └── branding/page.tsx             # Brand guidelines (colors, typography, UI elements)
│   ├── facilities/
│   │   ├── resource-map/page.tsx          # Live resource map + site detail panel + tables
│   │   ├── testbeds-and-facilities/page.tsx  # Testbed cards with search
│   │   └── measuring-and-monitoring/page.tsx # Measurement tool cards
│   ├── community/
│   │   ├── events/
│   │   │   ├── page.tsx                   # Events list (upcoming + past toggle, search, year/type filters)
│   │   │   ├── EventsClient.tsx           # Client: search, filter, toggle
│   │   │   └── [slug]/page.tsx            # Event detail
│   │   └── project-highlights/
│   │       ├── page.tsx                   # Project highlights grid
│   │       └── [slug]/page.tsx            # Project highlight detail
│   ├── research/
│   │   ├── publications/page.tsx          # Live publications table (search, sort, pagination)
│   │   ├── opportunities/page.tsx         # Grant & collaboration opportunities
│   │   └── cite/page.tsx                  # How to cite FABRIC
│   ├── documentation/
│   │   └── support/page.tsx              # Support resources (4 cards)
│   ├── use-fabric/
│   │   └── get-started/page.tsx          # New to FABRIC? Start Here
│   ├── news-and-blogs/
│   │   ├── page.tsx                       # News & blogs listing (search, filter by type/category)
│   │   ├── NewsAndBlogsClient.tsx         # Client: search, tabs
│   │   └── [slug]/page.tsx               # Article detail with .article-body styles
│   └── api/
│       ├── resources/route.ts             # Proxy → FABRIC orchestrator (60s revalidate)
│       └── publications/route.ts          # Proxy → publications tracker (1h revalidate)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                     # Fixed responsive nav, xl: breakpoint, dropdown menus
│   │   └── Footer.tsx                     # Dark navy footer with NSF notice
│   ├── sections/                          # Homepage section components
│   │   ├── HeroSection.tsx               # Dark hero with network globe background image
│   │   ├── TestimonialCarousel.tsx        # User quote carousel with topic dots
│   │   ├── WhatCanIDoSection.tsx          # 3 capability cards
│   │   ├── ResourceMapSection.tsx         # Fetches live data → renders FabricTopomap + CTA
│   │   ├── ByTheNumbersSection.tsx        # Floating stats layout (desktop) / grid (mobile)
│   │   ├── NewsEventsSection.tsx          # Latest news + events side by side
│   │   ├── IsRightForMeSection.tsx        # Use-case cards
│   │   ├── SignUpStepsSection.tsx         # 4-step sign-up flow
│   │   ├── AvailableSupportSection.tsx    # Support resource cards
│   │   └── ProjectHighlightsSection.tsx   # Image grid
│   ├── ui/
│   │   ├── FabricTopomap.tsx             # Shared interactive map + site detail panel
│   │   └── PageHero.tsx                  # Reusable inner-page hero
│   └── icons/
│       └── fabric-icon.tsx               # FABRIC logo icon component
│
└── lib/
    ├── utils.ts                           # cn(), formatDate()
    ├── articles.ts                        # gray-matter + remark pipeline for content/news-and-blogs/
    ├── events.ts                          # gray-matter + remark pipeline for content/events/
    └── data/
        ├── navigation.ts                  # Full nav tree (6 top-level items + dropdowns)
        ├── topomap.ts                     # FABRIC topology: coordinates, nodes, lines (from portal)
        ├── stats.ts                       # By the Numbers data
        ├── news.ts                        # NewsItem / EventItem types + seed data
        ├── highlights.ts                  # Project highlight cards
        ├── testimonials.ts               # User testimonials
        └── support.ts                    # Support resource links

content/
├── news-and-blogs/                        # 40+ Markdown articles (news + blog posts)
│   └── *.md                              # Frontmatter: title, date, type, category, excerpt
├── events/                               # 30+ Markdown event files
│   └── *.md                              # Frontmatter: title, date, fabric_hosted, excerpt, tags
└── highlights/                           # Project highlight detail pages
    └── *.md                              # Frontmatter: title, slug, image, institution, domain

public/admin/                              # Decap CMS (content management UI)
├── index.html                            # CMS entry point
└── config.yml                            # Collections: news, events, highlights
```

## Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage with 7 sections |
| `/about` | Static | About FABRIC overview |
| `/about/leadership` | Static | Leadership team |
| `/about/partners` | Static | Partner institutions |
| `/about/branding` | Client | Brand kit (click-to-copy color swatches) |
| `/facilities/resource-map` | Client | Live map + resource tables from orchestrator API |
| `/facilities/testbeds-and-facilities` | Client | Searchable testbed cards |
| `/facilities/measuring-and-monitoring` | Static | Measurement tool cards |
| `/community/events` | Client | Events with search, year filter, Webinar/FABRIC-Hosted filter pills |
| `/community/events/[slug]` | SSG | Event detail (Markdown) |
| `/community/project-highlights` | Static | Project highlights grid |
| `/community/project-highlights/[slug]` | SSG | Project highlight detail (Markdown) |
| `/news-and-blogs` | Client | News & blogs with search and type/category tabs |
| `/news-and-blogs/[slug]` | SSG | Article detail (Markdown) |
| `/research/publications` | Client | Live publications table (search, sort, paginate 20/page) |
| `/research/opportunities` | Static | Grant & collaboration opportunities |
| `/research/cite` | Static | How to cite FABRIC |
| `/documentation/support` | Static | Support cards (forum, tickets, office hours) |
| `/use-fabric/get-started` | Static | New-user onboarding page |

## Content System (Markdown + Decap CMS)

Articles, events, and project highlights are file-based, parsed with `gray-matter` + `remark`.

Non-technical editors can manage content via **Decap CMS** at `/admin/` — no coding required. The CMS commits `.md` files directly to the repo.

### Local CMS Development

```bash
# In a separate terminal:
npx decap-server          # starts local proxy on port 8081
# Then visit http://localhost:3000/admin/index.html
```

> **Note:** `local_backend: true` must be set in `public/admin/config.yml` for local dev. Remove it for production.

### Frontmatter Formats

**News & Blogs** (`content/news-and-blogs/*.md`):
```yaml
---
title: "Article Title"
date: "2025-12-10"
type: "news"          # news | blog
category: "community" # announcements | research | community | technical | maintenance | webinar-recap
excerpt: "Short summary shown on listing page."
tags:
  - news
---
Markdown body...
```

**Events** (`content/events/*.md`):
```yaml
---
title: "Event Title"
date: "2026-04-21"
type: "event"
fabric_hosted: true
category: "webinar"   # webinar | workshop | conference | meeting
excerpt: "Short description shown on listing page."
tags:
  - events
---
Markdown body...
```

**Project Highlights** (`content/highlights/*.md`):
```yaml
---
title: "Highlight Title"
slug: "highlight-slug"
subtitle: "Short description"
image: "/imgs/highlights/image.jpg"
institution: "University Name"
domain: "Networking"
---
Markdown body...
```

## Navigation

| Nav Item | URL | Dropdown Items |
|---|---|---|
| About FABRIC | `/about` | Overview, Leadership, Partners, Branding |
| Facilities & Infrastructure | `/facilities` | Resource Map, Testbed & Facilities, Measuring & Monitoring |
| Community & Events | `/community` | Project Highlights, KNIT (ext), Events & Workshops, News & Blogs |
| Research & Collaboration | `/research` | User Publications, Cite FABRIC, Collaboration & Grant Opportunities |
| Documentation & Support | `/documentation` | Knowledge Base (ext), Community Forum (ext), Support |
| Use FABRIC | `/use-fabric` | New to FABRIC? Start Here, Start an Experiment (ext) |

## Brand Colors

| Token | Hex | Use |
|---|---|---|
| `fabric-navy` | `#1B3A5C` | Headers, footer background |
| `fabric-blue` | `#1A73B5` | Primary brand, links, CTAs |
| `fabric-teal` | `#2196C9` | Hero backgrounds, active states |
| `fabric-sky` | `#5BC4E5` | Accents, map backbone lines |
| `fabric-yellow` | `#F5C518` | Primary CTA buttons, super-backbone |
| `fabric-light` | `#EAF4FB` | Map background, section fills |
| `fabric-off-white` | `#F5F7FA` | Alternating section backgrounds |

Global component classes are defined in `src/styles/globals.css`: `btn-yellow`, `btn-blue`, `btn-outline`, `btn-white`, `card`, `card-blue`, `badge`, `section-label`, `stat-number`, `article-body`.

## CMS Production Setup

To enable Decap CMS in production:

1. Remove `local_backend: true` from `public/admin/config.yml`
2. Update `backend.repo` to your actual GitHub repo (e.g., `your-org/your-repo`)
3. Set up authentication (GitHub OAuth or Netlify Identity)
4. Marketing staff access the CMS at `https://yoursite.com/admin/`
