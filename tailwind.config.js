/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,

      screens: {
        "4k": "1644px",
      },
    },

    extend: {
      fontFamily: {
        "Yekan-thin": "Yekan-thin",
        "Yekan-regular": "Yekan-regular",
        "Yekan-medium": "Yekan-medium",
        "Yekan-light": "Yekan-light",
        "Yekan-extraBold": "Yekan-extraBold",
        "Yekan-bold": "Yekan-bold",
        "Yekan-extraBlack": "Yekan-extraBlack",
        "Yekan-black": "Yekan-black",
      },

      screens: {
        "4k": "1440px",
        // => @media (min-width: 1440px) { ... }

        "Laptop-L": "1024px",
        // => @media (min-width: 1024px) { ... }

        Laptop: "768px",
        // => @media (min-width: 768px) { ... }

        "Tablet": "425px",
        // => @media (min-width: 425px) { ... }

        "Mobile-L": "375px",
        // => @media (min-width: 375px) { ... }

        "Mobile-M": "320px",
        // => @media (min-width: 320px) { ... }

        "Mobile-S": "290px",
        // => @media (min-width: 290px) { ... }
      },
    },
  },
  plugins: [],
};
