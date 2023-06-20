/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-mode-element': 'hsl(209, 23%, 22%)',
        'dark-mode-bg': 'hsl(207, 26%, 17%)',
        'dark-mode-text': 'hsl(0, 0%, 100%)',
        'light-mode-element': 'hsl(0, 0%, 100%)',
        'light-mode-bg': 'hsl(0, 0%, 98%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-input': 'hsl(0, 0%, 52%)'
      }
    },
  },
  plugins: [],
}
