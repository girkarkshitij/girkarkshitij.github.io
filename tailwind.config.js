module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#0B0E11',
        light: '#DEE3EA',
        light2: '#62FCD7',
        medium: '#112240',
        medium2: '#8892B0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
