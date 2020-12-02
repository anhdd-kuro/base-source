if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like Tailwind is in development mode!');
}

module.exports = {
  future: {},
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['**/*.{tsx,js,ts}', './pages/**/*.{tsx,js,ts}', './components/**/*.{tsx,js,ts}']
  }
};
