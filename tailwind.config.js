/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'c_cromatik': '#3A74C3',
        'c_cromatik_btnh':'#1A4A8F',
        'c_cromatik_gray_border': '#968787',
        'c_cromatik_gray_bg': '#545454',
        'text_otra' : '#eab308'
    },
    },
  },
  plugins: [],
};
