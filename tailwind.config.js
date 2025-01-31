/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "acs-gradient": `linear-gradient(to right, #03249c, #021b79, #021b79, #03249c)`,
        "cia-gradient": `linear-gradient(to right, #775641,
    #a07255,
    #ac7b5c,
    #ac7b5c,
    #a07255,
    #775641)`,
        "ois-gradient": `linear-gradient(to right, rgb(146, 1, 1) ,#a90000 ,#a90000,rgb(146, 1, 1))`,
      },
      colors: {
        "cia-color": "#775641",
      },
    },
  },
  plugins: [],
};
