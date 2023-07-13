/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-deep-blue': '#031346',
                'primary-deep-orange': '#FFC03E',
                'primary-light-orange': '#F1EDCB',
                'primary-desktop-color': '#F8FFF8',
                'primary-light-dark': '#2C2C2C',
                'alternative-light-dark': '#1B1B1B',
                'primary-light-gray': '#707070',
                'primary-deep-dark': '#141414',
                'primary-light-white': '#FEFEFE',
                'body-backdground': '#F8FFF8',
                'primary-medium-green': '#00873C'
            }
            
        },
    },
    plugins: [],
}