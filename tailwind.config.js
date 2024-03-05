/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bg_otra_ronda_servicios": 'linear-gradient(0deg, rgba(1,15,4,1) 9%, rgba(0,0,0,1) 53%, rgba(4,0,60,1) 100%)',
      },
      colors: {
        'otra_ronda_yellow': '#eab308',
        'otra_ronda_grey_bg': '#545454',
        
    },
    },
  },
  plugins: [],
};
