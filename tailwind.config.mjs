/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Zilla Slab", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        rubik: ["Rubik", "system-ui", "sans-serif"],
      },
      colors: {
        // NetSci 2026 site palette (inner pages follow netsci2026.com)
        ns: { red: "#C50C0C", gray: "#7C7C7C", ink: "#171717", dark: "#242A2F", panel: "#EFEFEF" },
        // 2027 key-visual palette (names kept from the earlier TU palette)
        tu: {
          deep: "#00005C",
          navy: "#00008C",
          blue: "#2F6DB5",
          sky: "#4186C7",
          ice: "#EEEEFF",
          cream: "#F5F1EA",
          gold: "#FFBE78",
          ember: "#B5471B",
          ink: "#0B1726",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0, 0, 92, 0.25)",
        card: "0 2px 8px rgba(0, 0, 92, 0.06), 0 12px 28px -12px rgba(0, 0, 92, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
