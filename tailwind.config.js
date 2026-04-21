/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        site: "1240px",
      },
      colors: {
        brand: {
          DEFAULT: "#af4a43",
          dark: "#8e3c36",
          light: "#d88a82",
          wash: "#f6e8e4",
        },
        accent: {
          DEFAULT: "#3d5a3a",
          soft: "#dfe6d8",
          ink: "#2a3f28",
        },
        ink: {
          DEFAULT: "#15120E",
          2: "#2a251d",
          3: "#5a5248",
          4: "#8a8177",
        },
        paper: {
          DEFAULT: "#FAF8F4",
          2: "#F2EEE6",
        },
        line: {
          DEFAULT: "#eceae6",
          2: "#d9d2c3",
        },
        surface: {
          muted: "#f2f2f2",
        },
      },
      fontFamily: {
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.1)",
        "brand-sm": "0 1px 0 rgba(0,0,0,0.05), 0 4px 12px -4px rgba(175,74,67,0.3)",
        brand: "0 1px 0 rgba(0,0,0,0.05), 0 8px 20px -6px rgba(175,74,67,0.4)",
        arch: "0 1px 0 rgba(0,0,0,0.02), 0 20px 50px -20px rgba(21,18,14,0.15)",
        "post-hover": "0 20px 40px -20px rgba(21,18,14,0.15)",
      },
    },
  },
  plugins: [],
};
