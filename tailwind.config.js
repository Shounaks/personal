/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,jsx}",
    "./src/app/**/**.{html,ts,tsx,jsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        // 'base':{
        //   100: '#00DB00',
        //   200: '#00BB60',
        //   300: '#F9C15D',
        // }
      }
    },
  },
  plugins: [require("daisyui")],
}
