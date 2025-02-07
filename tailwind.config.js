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
        "ois-gradient": `linear-gradient(to right, #333333,
    rgb(146, 1, 1),
    #a90000,
    #a90000,
    rgb(146, 1, 1),
    #333333)`,
        "rp-gradient": `linear-gradient(to right, #770101,
    #a10101,
    #b80303,
    #b80303,
    #a10101,
    #770101)`,
        "bld-gradient": `linear-gradient(to right,
    #00123a,
    #00123a,
    #00123a,
    #00123a)`,
      },
      colors: {
        "cia-color": "#775641",
      },
    },
  },
  plugins: [],
};
