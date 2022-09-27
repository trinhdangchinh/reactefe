/** @type {import('tailwindcss').Config} */

huePrim = 360;


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'prim': `hsla(${huePrim}, 80%, 40%, 1)`,
      'prim2': `hsla(${huePrim}, 80%, 60%, 1)`,
      'prim3': `hsla(${huePrim}, 80%, 80%, 1)`,

    },
    extend: {},
  },
  plugins: [],
}