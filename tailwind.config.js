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
          midnight: "#071426",
          deep: "#0B1F38",
          surface: "#0e2444",
          card: "#0d2340",
          cardHover: "#122d52",
          border: "rgba(255, 255, 255, 0.09)",
          blue: "#237BFF",
          blueHover: "#1a6be6",
          cyan: "#28D9F2",
          soft: "#F5F8FC",
          muted: "#8FA3BF",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(35, 123, 255, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(40, 217, 242, 0.35)',
        'card-subtle': '0 10px 30px -10px rgba(7, 20, 38, 0.6)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
