module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    theme: {},
    extend: {
      screens: {
        xshort: { raw: '(max-height: 500px)' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
