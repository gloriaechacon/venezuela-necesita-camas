import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a3a6b',
          'blue-dark': '#0f2447',
          'blue-light': '#2a5298',
          yellow: '#f5c842',
          'yellow-light': '#fef3b0',
          red: '#cf142b',
          gray: '#f5f6f8',
          'gray-mid': '#e2e5ea',
          'gray-text': '#6b7280',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',     'system-ui', 'sans-serif'],
        heading: ['var(--font-bricolage)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
