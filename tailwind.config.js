module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  corePlugins: {
    boxShadow: false,
  },
  plugins: [
    require("tailwindcss-box-shadow"),
    // ...
  ],
  theme: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },

      variants: {
        // ...
        scale: ["responsive", "hover", "focus", "active", "group-hover"],
      },
      fontFamily: {
        neob: ["NeoB"],
        neoeb: ["NeoEB"],
        neoh: ["NeoH"],
        neol: ["NeoL"],
        neom: ["NeoM"],
        neor: ["NeoR"],
        neosb: ["NeoSB"],
        neot: ["NeoT"],
        neoul: ["NeoUL"],
      },
      animation: {
        "bounce-1s": "bounce 1s linear infinite",
        "bounce-2s": "bounce 2s linear infinite",
        "bounce-3s": "bounce 3s linear infinite",
        "bounce-4s": "bounce 4s linear infinite",
        "fade-in": "fade-in 2s ease-out",
        "fade-out": "fade-out 1s ease-out",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
  },
};
