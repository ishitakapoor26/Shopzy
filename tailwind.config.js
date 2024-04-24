module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('https://media.architecturaldigest.com/photos/622a4e512b9c59af16b36cc9/2:1/w_1280,c_limit/PW%20STORE-PILLOW%20SHELF.jpg')",
      },
    },
  },
  plugins: [],
};
