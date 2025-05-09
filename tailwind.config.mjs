/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#063b26",
          200: "#0a4d33",
          300: "#0e5f40",
          400: "#02140d",
        },
        natural: {
          white: "#FFFFFF",
          200: "#f5f6f4",
          300: "#4b5852",
          400: "#4e4e4e4e",
          black: "#000000",
        },
        secondary: {
          100: "#10b981",
          200: "#cfff92",
          300: "#ffeb69",
          400: "#532e07",
          500: "#fec091",
          600: "#666666",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      fontSize: {
        base: "14px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "44px",
      },
      maxWidth: {
        container: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "24px",
          lg: "32px",
        },
      },
      borderRadius: {
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
