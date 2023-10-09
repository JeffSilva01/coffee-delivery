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
        title: 'var(--font-ballo)',
      },
      borderRadius: {
        card: '6px 36px',
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(256px, 1fr))',
      },
      colors: {
        primary: {
          300: '#F1E9C9',
          500: '#DBAC2C',
          700: '#C47F17',
        },

        secondary: {
          300: '#EBE5F9',
          500: '#8047F8',
          700: '#4B2995',
        },

        base: {
          background: '#FAFAFA',
          card: '#F3F2F2',
          input: '#EDEDED',
          button: '#E6E5E5',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subtitle: '#403937',
          title: '#272221',
        },
      },
    },
  },
  plugins: [],
}
export default config
