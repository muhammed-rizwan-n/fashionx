/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#b91c1c",
        muted: "#64748b",
        brand: {
          50: "#fff5f5",
          100: "#fee2e2",
          200: "#fecaca",
          500: "#ef4444",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        card: "0 6px 30px -8px rgba(2,6,23,0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
