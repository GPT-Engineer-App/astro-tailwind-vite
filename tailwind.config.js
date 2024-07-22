module.exports = {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#064E3B',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};