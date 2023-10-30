/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": "Roboto",
        "dm-sans": "'DM Sans'",
        "single-day": "'Single Day'",
      },
      colors:{
        white: "#fff",
        // green: "#148a08",
        salmon: "#ff6a6a",
        goldenrod: "#f1c75b",
        mediumpurple: "#9f94ff",
        blueviolet: "#5746ea",
        mediumorchid: "#ff4ade",
        darkslateblue: "#101744",
        deepBlue: "#1E2343",
        circleColor: "#191E39",
        newsBackground: "rgba(0, 0, 0, 0.74)"
        
      }
    },
  },
  plugins: [],
}

