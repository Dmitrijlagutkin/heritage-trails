/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-section":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/homeMainSectionBG.jpg')",
      },
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
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "44px",
        "8xl": "48px",
      },
      lineHeight: {
        heading: "1.2",
      },
      letterSpacing: {
        heading: "-0.02em",
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
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
