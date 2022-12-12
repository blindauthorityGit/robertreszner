// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            aspectRatio: {
                "4/3": "4 / 3",
                "3/4": "3 / 4",
            },
            colors: {
                primaryColor: "#000",
                text: "#414141",
            },
            fontFamily: {
                ...fontFamily,
                sans: ["lato", "sans-serif"],
            },
            "aspect-video": {
                width: "100%",
                height: 0,
                paddingBottom: "56.25%",
            },
        },
    },
    plugins: [],
};
