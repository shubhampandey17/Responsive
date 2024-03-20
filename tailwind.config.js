/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#1b1d4d",
          "200": "#1a1c4c",
        },
        brown: "#b22a2e",
        gainsboro: {
          "100": "#e5e5e9",
          "200": "#dbe5ed",
        },
        gray: {
          "100": "#232425",
          "200": "#161515",
        },
        pink: "#facdd1",
        lightgray: {
          "100": "#dfd4dc",
          "200": "#ccc",
        },
        lightslategray: "#7b8793",
        black: "#000",
        lavenderblush: "#f2e1ed",
        dodgerblue: "#2890f8",
        whitesmoke: {
          "100": "#f9fafc",
          "200": "#f4f5f8",
          "300": "#e8e9ea",
        },
        dimgray: "#707070",
        limegreen: "#33cc5c",
        darkslategray: "#4b5155",
        lavender: "#e3eefe",
        darkgray: "#aaa",
        yellowgreen: "#76c00d",
        silver: "#afbbc6",
        olivedrab: "#759a40",
        aliceblue: "#eaf2ff",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "sofia-pro": "'Sofia Pro'",
      },
      borderRadius: {
        "3xs": "10px",
        sm: "14px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      lg: "18px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
