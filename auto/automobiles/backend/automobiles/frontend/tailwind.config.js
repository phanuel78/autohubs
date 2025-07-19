module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      spacing: {
        '128': '32rem', // Example custom spacing
        '144': '36rem',
      },
    },
  },
  plugins: [],
};