/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navbar-light': '#FFF',
        'navbar-dark': '#7CACF8',
        'navbar-dark-font-color': '#041E49',
        'navbar-light-font-color': '#041E49B3',

        'intro-dark-font-color': '#FFF',
        'intro-dark-button-bg': '#FFF',
        'intro-dark-button-font-color': '#041E49B3',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      fontWeight: {
        'intro-content': 600,
      },
    },
  },
  plugins: [],
}
