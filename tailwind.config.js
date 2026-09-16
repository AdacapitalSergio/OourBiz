/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: "#009245",    // Verde Principal
                    emerald: "#8CC63F", // Verde Esmeralda
                    yellow: "#E6EE31",  // Amarelo Destaque
                },
            },
            fontFamily: {
                // Definindo Montserrat como sans (corpo) e Libre Baskerville como serif (títulos)
                sans: ["Montserrat", "sans-serif"],
                serif: ["Libre Baskerville", "serif"],
            },
        },
    },
    plugins: [],
}
