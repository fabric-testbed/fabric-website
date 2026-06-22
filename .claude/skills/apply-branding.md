# Apply FABRIC Branding

Apply the official FABRIC brand guidelines to CSS/SCSS files in this project. Read the branding spec at `src/app/about/branding/page.tsx` and the current styles at `src/styles/globals.css`, then ensure all design tokens and component styles conform.

## Color Palette

| Token              | Hex       | Usage                                    |
|--------------------|-----------|------------------------------------------|
| `fabric-navy`      | `#1B3A5C` | Primary headers, footer, navigation      |
| `fabric-blue`      | `#1A73B5` | Primary brand, links, CTAs               |
| `fabric-teal`      | `#2196C9` | Hero backgrounds, active states          |
| `fabric-sky`       | `#5BC4E5` | Light accents, highlights                |
| `fabric-yellow`    | `#F5C518` | CTAs, highlights, active underlines      |
| `fabric-off-white` | `#F5F7FA` | Page backgrounds, card fills             |
| `fabric-gray-200`  | `#E2E6EA` | Borders, dividers                        |
| `fabric-gray-600`  | `#5A6370` | Body text, secondary content             |

### Gradients

- **Hero gradient:** `linear-gradient(135deg, #1B3A5C 0%, #1A73B5 50%, #2196C9 100%)`
- **News card:** `linear-gradient(135deg, #2196C9, #1B3A5C)` (Teal -> Navy)
- **Blog card:** `linear-gradient(135deg, #5BC4E5, #2196C9)` (Sky -> Teal)

## Typography

- **Primary typeface:** Inter (weights 300-700)
- **Monospace:** JetBrains Mono (weights 400-500) -- used for site names, codes, technical identifiers
- **Google Fonts import:** `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');`

### Type Scale

| Label      | Tailwind Classes                                            |
|------------|-------------------------------------------------------------|
| Display LG | `text-[3.5rem] font-bold leading-tight tracking-tight`     |
| Display    | `text-[2.75rem] font-bold leading-tight tracking-tight`    |
| Display SM | `text-[2rem] font-bold leading-snug`                       |
| H1         | `text-3xl font-bold`                                       |
| H2         | `text-2xl font-bold`                                       |
| H3         | `text-xl font-semibold`                                    |
| Body LG    | `text-base leading-relaxed`                                |
| Body       | `text-sm leading-relaxed`                                  |
| Caption    | `text-xs text-[#5A6370]`                                   |
| Mono       | `text-sm font-mono`                                        |

## UI Component Classes (defined in globals.css)

### Buttons
- `btn-yellow` -- Yellow CTA (fabric-yellow bg, fabric-navy text)
- `btn-blue` -- Blue primary (fabric-blue bg, white text, hover -> navy)
- `btn-outline` -- Outline (transparent bg, fabric-blue border/text)
- `btn-white` -- White (white bg, fabric-navy text)

All buttons: `rounded-lg`, `px-5 py-2.5`, `text-sm font-semibold`, `active:scale-[0.98]`

### Cards
- `card` -- White bg, `rounded-2xl`, `border-fabric-gray-200`, subtle shadow, hover lift
- `card-blue` -- Teal bg, white text, `rounded-2xl`, hover -> fabric-blue

### Other
- `badge` -- `rounded-full`, `bg-fabric-light`, `text-fabric-teal`, `text-xs font-medium`
- `section-label` -- Eyebrow text: `text-fabric-teal`, `text-sm uppercase tracking-wider font-semibold`
- `stat-number` -- `text-4xl font-bold text-fabric-teal`
- `nav-link` -- `text-sm font-medium text-fabric-gray-600`, hover -> fabric-blue
- `nav-link-active` -- `text-fabric-blue border-b-2 border-fabric-yellow`

## CSS Variables (set on :root)

```css
--font-inter: "Inter", system-ui, sans-serif;
--font-mono:  "JetBrains Mono", monospace;
--fabric-navy:   #1B3A5C;
--fabric-blue:   #1A73B5;
--fabric-teal:   #2196C9;
--fabric-sky:    #5BC4E5;
--fabric-yellow: #F5C518;
```

## Instructions

When this skill is invoked:

1. Read `src/styles/globals.css` and `tailwind.config.ts` (or `tailwind.config.js`).
2. Verify all color tokens, font imports, CSS variables, and component classes match the spec above.
3. Fix any deviations -- wrong hex values, missing tokens, incorrect class definitions.
4. Check component files for hardcoded colors that should use tokens (e.g., `#1B3A5C` instead of `fabric-navy`).
5. Report what was changed and what was already compliant.
