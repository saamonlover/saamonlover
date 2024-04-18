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

        'intro-font-color': '#FFF',
        'intro-button-bg': '#FFF',
        'intro-light-button-font-color': '#1A73E8',
        'intro-dark-button-font-color': '#112537',

        'project-dark-card-bg': '#1B3A57',
        'project-light-card-bg': '#FFF',
        'project-light-subcard-bg': '#F8F9FA',
        'project-light-subcard-bg-hover': '#D2E3F4',
        'project-dark-subcard-bg-hover': '#112537',
        'project-light-font-color': '#424242',
        'project-dark-font-color': '#FFF',
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
