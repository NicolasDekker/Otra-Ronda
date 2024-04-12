/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2md': '813px',
        '3xl': '1920px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bg_otra_ronda_servicios": 'linear-gradient(0deg, rgba(88,2,2,1) 0%, rgba(0,0,0,0.9472163865546218) 35%, rgba(0,0,0,0.938813025210084) 65%, rgba(88,2,2,1) 100%);',
      },
      colors: {
        'otra_ronda_yellow': '#eab308',
        'otra_ronda_grey_bg': '#545454',
        
    },
    fontFamily: {
      medula: ["Medula-One"]
    },
  },
    
  },
  plugins: [],
};
