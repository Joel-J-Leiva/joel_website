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
        "on-secondary-container": "#0f6d00",
        "on-surface": "#e5e2e1",
        "tertiary-fixed-dim": "#afc8f0",
        "on-tertiary": "#163152",
        "secondary-container": "#2ff801",
        "on-error-container": "#ffdad6",
        "on-primary-fixed": "#001f27",
        "surface": "#131313",
        "surface-bright": "#393939",
        "on-primary": "#003642",
        "error-container": "#93000a",
        "on-secondary-fixed": "#022100",
        "surface-container": "#20201f",
        "inverse-on-surface": "#313030",
        "surface-tint": "#3cd7ff",
        "surface-container-lowest": "#0e0e0e",
        "on-primary-container": "#00586b",
        "on-secondary": "#053900",
        "on-tertiary-container": "#385173",
        "on-surface-variant": "#bbc9cf",
        "surface-container-high": "#2a2a2a",
        "tertiary": "#cddfff",
        "secondary-fixed-dim": "#2ae500",
        "on-tertiary-fixed": "#001c3a",
        "primary-container": "#00d4ff",
        "on-background": "#e5e2e1",
        "surface-dim": "#131313",
        "tertiary-container": "#abc4ec",
        "on-tertiary-fixed-variant": "#2f486a",
        "surface-container-low": "#1c1b1b",
        "secondary": "#d7ffc5",
        "background": "#131313",
        "surface-variant": "#353535",
        "outline": "#859398",
        "on-secondary-fixed-variant": "#095300",
        "on-error": "#690005",
        "primary": "#a8e8ff",
        "primary-fixed-dim": "#3cd7ff",
        "inverse-primary": "#00677e",
        "outline-variant": "#3c494e",
        "on-primary-fixed-variant": "#004e5f",
        "inverse-surface": "#e5e2e1",
        "primary-fixed": "#b4ebff",
        "surface-container-highest": "#353535",
        "error": "#ffb4ab",
        "secondary-fixed": "#79ff5b",
        "tertiary-fixed": "#d4e3ff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
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
        "body-md": ["Inter", "sans-serif"],
        "code-sm": ["Monospace", "monospace"],
        "terminal-heading": ["Monospace", "monospace"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "code-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "terminal-heading": ["24px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.04em", fontWeight: "800" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
  ],
}
