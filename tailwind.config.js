// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'br': '#FFE7D0',
      'dr':'#2B241E',
      'light-dr':"#3A3129",
    },
    boxShadow:{
      'big-l':'-42px 40px 0px 12px rgba(0,0,0,0.1)',
      'big-r':'42px 40px 0px 12px rgba(0,0,0,0.1)',
      'big-a':'0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20)',
    },
    fontFamily:{
      'poppins':'poopins',
    }
  },
};
export const plugins = [];
