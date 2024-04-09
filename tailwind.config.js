/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px 5px rgb(0 0 0 / 0.1)',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(.43,1.34,.35,1.03)'
      }
    },
  },
  plugins: [],
}

