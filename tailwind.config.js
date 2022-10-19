// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#000",
                text: "#696969",
            },
            fontFamily: {
                ...fontFamily,
                sans: ["lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
