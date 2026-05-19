import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#F2FBFF",
          100: "#E1F5FD",
          200: "#BDEAF8",
          300: "#89D6EF",
          400: "#55BDE1",
          500: "#2EA3CE",
          600: "#1788B6",
          700: "#0A6F9E",
          800: "#095C84",
          900: "#084765"
        },
        warm: {
          50: "#FBFEFF",
          100: "#F3FAFE",
          200: "#E4F4FB",
          300: "#D2ECF7",
          400: "#B8DCEB"
        },
        sky: "#C7ECFA",
        skyBrand: "#77C8EC",
        sun: "#F7D88B",
        ink: "#173040"
      },
      fontFamily: {
        sans: [
          "var(--font-noto)",
          "Noto Sans JP",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "var(--font-zen)",
          "Noto Sans JP",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(47, 93, 70, 0.12)",
        card: "0 10px 30px rgba(38, 51, 44, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
