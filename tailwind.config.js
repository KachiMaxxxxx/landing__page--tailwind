// tailwind.config.js
export default {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      container: {
        padding: "0.9375rem", // 15px
      },

      backgroundImage: {
        "services": "url('../projectassets/img/services/bg.svg')",
        "testimonials": "url('../projectassets/img/testimonials/bg.svg')",
        "quote-left": "url('../projectassets/icons/testimonials/quote-left.svg')",
        "quote-right": "url('../projectassets/icons/testimonials/quote-right.svg')",
      },
    },
  },

  plugins: [],
};
