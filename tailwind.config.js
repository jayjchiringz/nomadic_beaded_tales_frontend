/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
        maasaiRed: '#820000', // Darker, richer Maasai red
        ivory: '#F4EBD0',
        deepBrown: '#4B2E2B',
        accentGold: '#FDB813',
        },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
