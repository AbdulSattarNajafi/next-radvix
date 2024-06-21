import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "575px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        "text-color": "#52525B",
        "text-secondary": "#60646C",
        "text-dark": "#1F1F39",
        heading: "#0B0236",
        primary: "#5746AF",
        "footer-stroke": "#F4F4F4",
        stroke: "#DDDDE3",
        seperator: "#e7e7e7",
        "gray-light": "#FBFBFB",
        "blue-light": "#CCE3FD",
        "gray-lighter": "#EBECEF",
        subtle: "#e4e7ec",
      },
      boxShadow: {
        "hero-shadow": "0px -16px 24px 0px rgba(0, 0, 0, 0.04) inset",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      padding: {
        "13": "3.125rem", // 50px
        "15": "3.75rem", // 60px
        "25": "6.25rem", // 100px
        "22": "5.625rem", // 90px
        "30": "7.5rem", // 120px
      },
      margin: {
        "13": "3.125rem", // 50px
        "15": "3.75rem", // 60px
        "22": "5.625rem", // 90px
        "25": "6.25rem", // 100px
        "30": "7.5rem", // 120px
      },
      gap: {
        "13": "3.125rem", // 50px
        "15": "3.75rem", // 60px
        "25": "6.25rem", // 100px
      },
      width: {
        "51": "12.5rem",
      },
      height: {
        "51": "12.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};

export default config;
