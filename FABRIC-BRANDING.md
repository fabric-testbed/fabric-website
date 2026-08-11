# FABRIC Branding Guide

Use this file as context when building FABRIC-branded websites. Drop it into a project's `CLAUDE.md` or provide it as context to Claude.

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `fabric-navy` | `#1B3A5C` | Dark navy — headers, footer, strong text |
| `fabric-blue` | `#1A73B5` | Primary brand blue — links, buttons, accents |
| `fabric-teal` | `#2196C9` | Mid blue-teal — hero bg, active states, section labels |
| `fabric-sky` | `#5BC4E5` | Light accent blue — badges, decorative |
| `fabric-yellow` | `#F5C518` | Yellow accent — CTAs, highlights |
| `fabric-yellow-dark` | `#D4A800` | Yellow hover state |
| `fabric-off-white` | `#F5F7FA` | Off-white background |
| `fabric-light` | `#EAF4FB` | Very light blue-tinted background |
| `fabric-gray-100` | `#F0F2F5` | Lightest gray |
| `fabric-gray-200` | `#E2E6EA` | Borders, dividers |
| `fabric-gray-400` | `#9BA3AE` | Muted text, icons |
| `fabric-gray-600` | `#5A6370` | Body text |
| `fabric-gray-800` | `#2D3540` | Dark text |
| `fabric-dark` | `#1A1F2B` | Footer background |

## Gradients

- **Hero gradient:** `linear-gradient(135deg, #1B3A5C 0%, #1A73B5 50%, #2196C9 100%)`
- **Hero radial overlay:** `radial-gradient(ellipse at 70% 50%, rgba(91,196,229,0.15) 0%, transparent 60%)`
- **Section light bg:** `linear-gradient(180deg, #EAF4FB 0%, #F5F7FA 100%)`

## Typography

- **Primary font:** Inter (weights: 300, 400, 500, 600, 700)
- **Monospace font:** JetBrains Mono (weights: 400, 500)
- **Google Fonts import:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`
- **Headings:** `fabric-navy`, `font-semibold`, `leading-tight`
- **Body text:** `fabric-gray-600` or `fabric-gray-800`
- **Display sizes:** `3.5rem` (lg), `2.75rem` (md), `2rem` (sm) — all with tight line-height and negative letter-spacing

## Shadows

- **Card:** `0 2px 12px rgba(27,58,92,0.08), 0 1px 3px rgba(27,58,92,0.06)`
- **Card hover:** `0 8px 32px rgba(27,58,92,0.14), 0 2px 8px rgba(27,58,92,0.08)`
- **Button (yellow):** `0 2px 8px rgba(245,197,24,0.3)`
- **Button (blue):** `0 2px 8px rgba(26,115,181,0.3)`

## Border Radius

- Cards and containers: `1rem` (rounded-2xl)
- Large containers: `1.5rem` (rounded-3xl)
- Buttons: `rounded-lg` (0.5rem) or `rounded-full` for pill buttons

## Buttons

### Primary CTA (Yellow)
```
bg-fabric-yellow text-fabric-navy font-semibold text-sm
px-5 py-2.5 rounded-lg shadow-btn
hover:bg-fabric-yellow-dark hover:shadow-md
```

### Secondary (Blue)
```
bg-fabric-blue text-white font-semibold text-sm
px-5 py-2.5 rounded-lg shadow-btn-blue
hover:bg-fabric-navy hover:shadow-md
```

### Outline
```
bg-transparent text-fabric-blue font-semibold text-sm
px-5 py-2.5 rounded-lg border border-fabric-blue
hover:bg-fabric-light
```

## Cards

### Default Card
```
bg-white rounded-2xl border border-fabric-gray-200
shadow-card hover:shadow-card-hover hover:-translate-y-0.5
transition-all duration-300
```

### Blue Card
```
bg-fabric-teal text-white rounded-2xl
hover:bg-fabric-blue hover:-translate-y-0.5
transition-all duration-300
```

## Component Patterns

- **Page container:** `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`
- **Section spacing:** `py-16 md:py-24`
- **Section label (eyebrow):** `text-fabric-teal font-semibold text-sm uppercase tracking-wider`
- **Stat number:** `text-4xl font-bold text-fabric-teal`
- **Badge:** `px-2.5 py-0.5 rounded-full bg-fabric-light text-fabric-teal text-xs font-medium border border-fabric-sky/30`
- **Links:** `text-fabric-blue hover:underline`
- **Nav link:** `text-sm font-medium text-fabric-gray-600 hover:text-fabric-blue`
- **Active nav:** `text-fabric-blue border-b-2 border-fabric-yellow`
- **Focus ring:** `2px solid #2196C9` with `2px` offset
- **Selection highlight:** `bg-fabric-teal/20 text-fabric-navy`

## Animations

- **Fade up:** `translateY(20px) → 0` + `opacity 0 → 1`, 0.55s ease-out
- **Fade in:** `opacity 0 → 1`, 0.4s ease-out

## Tailwind Config (copy-paste ready)

```ts
colors: {
  fabric: {
    navy:      "#1B3A5C",
    blue:      "#1A73B5",
    teal:      "#2196C9",
    sky:       "#5BC4E5",
    yellow:    "#F5C518",
    "yellow-dark": "#D4A800",
    white:     "#FFFFFF",
    "off-white": "#F5F7FA",
    light:     "#EAF4FB",
    "gray-100":"#F0F2F5",
    "gray-200":"#E2E6EA",
    "gray-400":"#9BA3AE",
    "gray-600":"#5A6370",
    "gray-800":"#2D3540",
    dark:      "#1A1F2B",
  },
},
fontFamily: {
  sans:  ["Inter", "system-ui", "sans-serif"],
  mono:  ["JetBrains Mono", "monospace"],
},
boxShadow: {
  "card":       "0 2px 12px rgba(27,58,92,0.08), 0 1px 3px rgba(27,58,92,0.06)",
  "card-hover": "0 8px 32px rgba(27,58,92,0.14), 0 2px 8px rgba(27,58,92,0.08)",
  "btn":        "0 2px 8px rgba(245,197,24,0.3)",
  "btn-blue":   "0 2px 8px rgba(26,115,181,0.3)",
},
```

## Bootstrap Integration

If using Bootstrap instead of Tailwind, override Bootstrap's Sass variables or use CSS custom properties:

### Sass Variable Overrides (place before Bootstrap import)

```scss
// Colors — map to Bootstrap's theme colors
$primary:       #1A73B5; // fabric-blue
$secondary:     #2196C9; // fabric-teal
$dark:          #1B3A5C; // fabric-navy
$warning:       #F5C518; // fabric-yellow
$light:         #F5F7FA; // fabric-off-white
$body-color:    #5A6370; // fabric-gray-600
$body-bg:       #FFFFFF;

// Typography
$font-family-sans-serif: "Inter", system-ui, sans-serif;
$font-family-monospace:  "JetBrains Mono", monospace;
$headings-color:         #1B3A5C; // fabric-navy
$headings-font-weight:   600;
$link-color:             #1A73B5; // fabric-blue

// Border radius
$border-radius:    0.5rem;   // buttons, inputs
$border-radius-lg: 1rem;     // cards (rounded-2xl equivalent)

// Cards
$card-border-radius: 1rem;
$card-border-color:  #E2E6EA; // fabric-gray-200
$card-cap-bg:        transparent;

// Buttons
$btn-font-weight: 600;
$btn-font-size:   0.875rem;
$btn-padding-y:   0.625rem;
$btn-padding-x:   1.25rem;
```

### CSS Custom Properties (alternative, no Sass needed)

```css
:root {
  --fabric-navy:      #1B3A5C;
  --fabric-blue:      #1A73B5;
  --fabric-teal:      #2196C9;
  --fabric-sky:       #5BC4E5;
  --fabric-yellow:    #F5C518;
  --fabric-yellow-dark: #D4A800;
  --fabric-off-white: #F5F7FA;
  --fabric-light:     #EAF4FB;
  --fabric-gray-200:  #E2E6EA;
  --fabric-gray-400:  #9BA3AE;
  --fabric-gray-600:  #5A6370;
  --fabric-gray-800:  #2D3540;
  --fabric-dark:      #1A1F2B;

  /* Override Bootstrap variables */
  --bs-primary:     var(--fabric-blue);
  --bs-secondary:   var(--fabric-teal);
  --bs-dark:        var(--fabric-navy);
  --bs-warning:     var(--fabric-yellow);
  --bs-light:       var(--fabric-off-white);
  --bs-body-color:  var(--fabric-gray-600);
  --bs-link-color:  var(--fabric-blue);
  --bs-border-radius:    0.5rem;
  --bs-border-radius-lg: 1rem;
}
```

### Component Mapping (Tailwind → Bootstrap)

| Tailwind | Bootstrap Equivalent |
|----------|---------------------|
| `btn-yellow` | `btn btn-warning` (with `$warning: #F5C518`) |
| `btn-blue` | `btn btn-primary` |
| `btn-outline` | `btn btn-outline-primary` |
| `card` with `rounded-2xl` | `card` (with `$card-border-radius: 1rem`) |
| `card-blue` | `card bg-secondary text-white` |
| `page-container max-w-6xl` | `container` (max-width ~1140px) |
| `py-16 md:py-24` | `py-5` or custom `section { padding: 4rem 0; }` |
| `badge` | `badge rounded-pill bg-light text-secondary` |
| `text-fabric-navy font-semibold` | Headings automatically via `$headings-color` + `$headings-font-weight` |
