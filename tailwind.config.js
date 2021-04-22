module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#0A192F',
        light: '#CCD6F6',
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
