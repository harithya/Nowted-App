/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      colors: {
        'info': '#312EB5'
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
          info: "#312EB5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
