import { colors, nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './screens/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        success: "black",
        warning: colors.warning,
        error: colors.error,
        light: colors.light,
        dark: colors.dark,
        muted: colors.muted,
        text: colors.text,
        background: colors.background,
        surface: colors.surface,
        onPrimary: "#7828C8",
        onSecondary: colors.onSecondary,
        onSuccess: colors.onSuccess,
        onWarning: colors.onWarning,
        onError: colors.onError,
        onLight: colors.onLight,
        onDark: colors.onDark,
        onMuted: colors.onMuted,
        onText: colors.onText,
        onBackground: colors.onBackground,
        onSurface: colors.onSurface,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
