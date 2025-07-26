/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#dc2626",
        "secondary": "#16a34a",
        "accent": "#8b5cf6",
        "background": "#ffffff",
        "text": "#1f2937"
},
      fontFamily: {
        sans: ['Inter, sans-serif']
      },
      spacing: {
        "xs": "0.5rem",
        "sm": "1rem",
        "md": "1.5rem",
        "lg": "2rem",
        "xl": "3rem",
        "2xl": "4rem"
},
      borderRadius: {
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem"
}
    },
  },
  plugins: [],
}