/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep enterprise security theme colors
        dark: {
          950: "#06090e",
          900: "#0a0e17",
          850: "#0e1524",
          800: "#131d31",
          750: "#1a263e",
          700: "#22314e",
          border: "#1e293b",
          subtle: "#334155"
        },
        cyber: {
          cyan: "#00d4ff",
          blue: "#38bdf8",
          emerald: "#10b981",
          amber: "#f59e0b",
          red: "#ef4444",
          purple: "#a855f7"
        },
        // Existing token compatibility
        "on-secondary-container": "#0f6d00",
        "on-surface": "#f1f5f9",
        "tertiary-fixed-dim": "#94a3b8",
        "on-tertiary": "#0f172a",
        "secondary-container": "#059669",
        "on-error-container": "#fecaca",
        "on-primary-fixed": "#082f49",
        "surface": "#0a0e17",
        "surface-bright": "#1e293b",
        "on-primary": "#082f49",
        "error-container": "#7f1d1d",
        "on-secondary-fixed": "#064e3b",
        "surface-container": "#0e1524",
        "inverse-on-surface": "#0f172a",
        "surface-tint": "#00d4ff",
        "surface-container-lowest": "#06090e",
        "on-primary-container": "#00d4ff",
        "on-secondary": "#064e3b",
        "on-tertiary-container": "#38bdf8",
        "on-surface-variant": "#94a3b8",
        "surface-container-high": "#131d31",
        "tertiary": "#38bdf8",
        "secondary-fixed-dim": "#10b981",
        "on-tertiary-fixed": "#0c4a6e",
        "primary-container": "#00d4ff",
        "on-background": "#f8fafc",
        "surface-dim": "#0a0e17",
        "tertiary-container": "#0284c7",
        "on-tertiary-fixed-variant": "#075985",
        "surface-container-low": "#0b111e",
        "secondary": "#10b981",
        "background": "#06090e",
        "surface-variant": "#1e293b",
        "outline": "#475569",
        "on-secondary-fixed-variant": "#065f46",
        "on-error": "#ffffff",
        "primary": "#38bdf8",
        "primary-fixed-dim": "#00d4ff",
        "inverse-primary": "#0284c7",
        "outline-variant": "#1e293b",
        "on-primary-fixed-variant": "#0369a1",
        "inverse-surface": "#f8fafc",
        "primary-fixed": "#7dd3fc",
        "surface-container-highest": "#1a263e",
        "error": "#f87171",
        "secondary-fixed": "#34d399",
        "tertiary-fixed": "#bae6fd"
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "xl": "80px",
        "gutter": "24px",
        "xs": "4px",
        "md": "24px",
        "lg": "48px",
        "sm": "12px",
        "margin": "32px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
        "body-md": ["Inter", "sans-serif"],
        "code-sm": ["JetBrains Mono", "monospace"],
        "terminal-heading": ["JetBrains Mono", "monospace"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "code-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "terminal-heading": ["24px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
        "headline-lg": ["44px", { lineHeight: "52px", letterSpacing: "-0.03em", fontWeight: "800" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
  ],
}
