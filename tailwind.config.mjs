/** @type {import('tailwindcss').Config} */
export default {
  // Aquí le decimos a Tailwind dónde buscar clases CSS para que no te dé la advertencia
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF3A1D',
        'brand-secondary': '#54595F',
        'brand-text': '#7A7A7A',
        'brand-dark': '#222222',
        'brand-light': '#F9FAFB',
      },
      fontFamily: {
        sans: ['"Avenir LT Std"', '"Nunito Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Avenir LT Std"', '"Nunito Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}