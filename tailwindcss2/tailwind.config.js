/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   mode: 'jit',
//   purge: ['./index.html'],
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [],
// }

/* Add this to your tailwind.config.js file */
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#E5E5EA',
          600: '#4B5563',
          800: '#2F3E46',
          900: '#1A1D23',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}