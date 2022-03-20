module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        monorope: ["Manrope", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
