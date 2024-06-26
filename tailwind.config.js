/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik", sans-serif'],
        ibm: ['"IBM Plex Mono", monospace']
      },
      colors: {
        customGreen: '#00a2e8'
      }
    }
  },
  plugins: [],
}

