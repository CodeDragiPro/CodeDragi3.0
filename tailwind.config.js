/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'codedragi-primary': '#131b42',
        'codedragi-secondary': '#2783fe',
        'codedragi-tertiary':'#932bff',
        'codedragi-quartary':'#ff2dff',
      }
    },
  },
  plugins: [],
}

