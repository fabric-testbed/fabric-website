import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fabric: {
          // Primary blues from the prototype
          navy:      "#1B3A5C",   // dark navy for headers/footer
          blue:      "#1A73B5",   // primary brand blue
          teal:      "#2196C9",   // mid blue-teal (hero bg, active states)
          sky:       "#5BC4E5",   // light accent blue
          // Yellow accent (CTAs, highlights)
          yellow:    "#F5C518",
          "yellow-dark": "#D4A800",
          // Neutrals
          white:     "#FFFFFF",
          "off-white": "#F5F7FA",
          light:     "#EAF4FB",   // very light blue-tinted bg
          "gray-100":"#F0F2F5",
          "gray-200":"#E2E6EA",
          "gray-400":"#9BA3AE",
          "gray-600":"#5A6370",
          "gray-800":"#2D3540",
          dark:      "#1A1F2B",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono:  ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["3.5rem",  { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display":    ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2rem",    { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      backgroundImage: {
        "hero-gradient":    "linear-gradient(135deg, #1B3A5C 0%, #1A73B5 50%, #2196C9 100%)",
        "hero-radial":      "radial-gradient(ellipse at 70% 50%, rgba(91,196,229,0.15) 0%, transparent 60%)",
        "section-light":    "linear-gradient(180deg, #EAF4FB 0%, #F5F7FA 100%)",
        "card-hover":       "linear-gradient(135deg, rgba(33,150,201,0.08) 0%, rgba(91,196,229,0.05) 100%)",
      },
      boxShadow: {
        "card":   "0 2px 12px rgba(27,58,92,0.08), 0 1px 3px rgba(27,58,92,0.06)",
        "card-hover": "0 8px 32px rgba(27,58,92,0.14), 0 2px 8px rgba(27,58,92,0.08)",
        "btn":    "0 2px 8px rgba(245,197,24,0.3)",
        "btn-blue": "0 2px 8px rgba(26,115,181,0.3)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-up":    "fadeUp 0.55s ease-out both",
        "fade-in":    "fadeIn 0.4s ease-out both",
        "spin-slow":  "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
