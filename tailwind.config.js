/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/scss/**/*.scss"],
  darkMode: 'class',
  // important: true,
  safelist: [
    "dark",
    "darkBlue",
    "header-transition",
    "bg-transparent",
    "text-grey",
    "!text-grey",
    "text-white",
    "!text-white",
    "text-white/50",
    "text-grey/50",
    "bg-grenadier",
    "bg-citrine",
    "bg-white",
    "bg-white/20",
    "bg-spring-wood-light",
    "bg-spring-wood",
    "bg-alto",
    "bg-alto/20",
    "border-grey",
    "border-white",
    "opacity-0",
    "opacity-100",
    "[&.open]:border-[#C5B0AC]",
    "hover:text-grenadier",
    "placeholder:text-grey",
    "placeholder:text-white",
    "bg-grey",
    "bg-grey/50",
    "bg-white/50",
    "[&.open]:border-white/50",
    "text-white",
    "bg-spring-wood",
    "lg:text-grey",
    "lg:text-white",
  ],
  theme: {
    screens: {
      xs: "540px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      lg_992: '992px',
    },
    fontFamily: {
      'Phudu': ['"Phudu", serif;'],
      'InstrumentSans': ['"Instrument Sans", sans-serif'],
    },
    extend: {
      colors: {
        dark: "#0f1b61",
        darkBlue: "#0a0521",
        black: "rgba(0, 0, 0, 1)",
        grey: "rgba(51, 51, 51, 1)",
        white: "#F5F7F5",
        lightBlue: "#e1eff7",
        lightBrown: "#e6e6e1"
      },
      spacing: {
        'dynamic': 'clamp(0.75rem, 2.0833333333vw, 2.5rem)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.dark"),
            "--tw-prose-lead": theme("colors.white"),
            "--tw-prose-links": theme("colors.grenadier"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-bullets": theme("colors.white"),
            "--tw-prose-hr": theme("colors.white"),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme, addUtilities }) => {
      addBase({
        body: {
          color: theme("colors.lightBrown"),
          background: theme("colors.darkBlue"),
          fontFamily: theme("fontFamily.InstrumentSans"),
          fontSize: "20px",
          lineHeight: "30px",
          fontWeight: "500",
          margin: "0",
          fontSmoothing: "antialiased",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          overflowX: "hidden",
        },

      });
      const newUtilities = {
        '.text-clamp': {
          '--has-md': '0',
          '--clamp-screen-min': 'max(390px, calc(768px * var(--has-md)))',
          '--clamp-screen-max': '1280px',
          '--clamp-font-min': 'var(--clamp-font-md, var(--clamp-font-sm, 1))',
          '--clamp-font-max': 'var(--clamp-font-xl, 2)',
          '--clamp-font-min-rem': 'calc(var(--clamp-font-min) * 1rem)',
          '--clamp-font-max-rem': 'calc(var(--clamp-font-max) * 1rem)',
          '--clamp-offset': 'calc(100vw - var(--clamp-screen-min))',
          '--clamp-screen-difference': 'calc(var(--clamp-screen-max) - var(--clamp-screen-min))',
          '--clamp-percentage':
            'calc(var(--clamp-offset) / var(--clamp-screen-difference))',
          '--clamp-preferred':
            'calc(var(--clamp-percentage) * (var(--clamp-font-max) - var(--clamp-font-min)) + var(--clamp-font-min-rem))',
          fontSize: 'clamp(var(--clamp-font-min-rem), var(--clamp-preferred), var(--clamp-font-max-rem))',
        },
        '.clamp-max-96': {
          '--clamp-font-xl': '6',
        },
        '.clamp-max-48': {
          '--clamp-font-xl': '3',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);

    }),
  ],
}

