import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
        grid: "grid 15s linear infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        nohemi: ["Nohemi", "sans-serif"],
        animation: {
          marquee: "marquee var(--duration) linear infinite",
          "marquee-vertical":
            "marquee-vertical var(--duration) linear infinite",
        },
        keyframes: {
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - var(--gap)))" },
          },
          "marquee-vertical": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--gap)))" },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#ff6868",
              400: "#ef4747",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#920b3a",
              900: "#310413",
              DEFAULT: "#ef4747",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#eceef4",
              100: "#505050",
              200: "#f2f2f2",
              300: "#969eb1",
              400: "#80899f",
              500: "#6a758e",
              600: "#5c677d",
              700: "#4b5466",
              800: "#3b4251",
              900: "#282d39",
              DEFAULT: "#5c677d",
              foreground: "#ffffff",
            },
            card: {
              DEFAULT: "#27272A",
              foreground: "#ffffff",
            },
            subtitle: {
              DEFAULT: "#E7E7E7",
              foreground: "#ffffff",
            },
            bgLogo: {
              DEFAULT: "#3F3F46",
              foreground: "#ffffff",
            },
            alternatecard: {
              DEFAULT: "#27272A",
            },

            focus: "#6A71F1",
          },
        },
        light: {
          colors: {
            primary: {
              50: "#F0D3FC",
              100: "#F0D3FC",
              200: "#DDA9F9",
              300: "#C07CEE",
              400: "#A258DE",
              500: "#7828C8",
              600: "#5D1DAC",
              700: "#451490",
              800: "#300C74",
              900: "#220760",
              DEFAULT: "#7828C8",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#eceef4",
              100: "#505050",
              200: "#f2f2f2",
              300: "#969eb1",
              400: "#80899f",
              500: "#6a758e",
              600: "#5c677d",
              700: "#4b5466",
              800: "#3b4251",
              900: "#1a1a1a",
              DEFAULT: "#5c677d",
              foreground: "#ffffff",
            },
            card: {
              DEFAULT: "#C6CDD4",
              foreground: "#ffffff",
            },
            subtitle: {
              DEFAULT: "#52525B",
              foreground: "#ffffff",
            },
            bgLogo: {
              DEFAULT: "#ffffff",
              foreground: "#ffffff",
            },
            alternatecard: {
              DEFAULT: "#E4E9EE",
            },
            focus: "#6A71F1",
            background: "#ffffff",
          },
        },
      },
    }),
  ],
};
