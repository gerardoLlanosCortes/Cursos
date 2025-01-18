/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(2.5rem, 8vw, 3.75rem)",
      },
    },
  },
  plugins: [],
};
