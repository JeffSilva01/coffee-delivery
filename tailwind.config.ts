import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      colors: {
        primary: {
          300: '#F1E9C9',
          500: '#DBAC2C',
          700: '#C47F17',
        },

        secondary: {
          300: '#F1E9C9',
          500: '#8047F8',
          700: '#4B2995',
        },

        base: {
          100: '#FAFAFA',
          200: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574F4D',
          800: '#403937',
          900: '#272221',
        },
      },
    },
  },
  plugins: [],
}
export default config
