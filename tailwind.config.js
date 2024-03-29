/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: { 
        antiqua: ["var(--font-antiqua)"],
      },
      screens: {
        // 'lg': '1024px',
        // 'sxl': '1280px',
        // 'xl': '1366px',
       // '2xl': '1536px',
        '2.5xl': '1920px',
        '3xl': '2560px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
