/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "lol-blue-6": "#091428",
        "lol-blue-7": "#0A1428",
        "lol-gold-4": "#C89B3C",
        "lol-gold-3": "#C8AA6E",
        "lol-white": "#f0e6d2",
        "lol-grey": "#A09B8C",
      },
    },
  },
  plugins: [],
};
