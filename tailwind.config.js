/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
  ],
  theme: {
    extend: {
      willChange: {
        'rotate-transform': 'rotate, transform'
      }
    },
  },
  plugins: [],
}
