/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
      keyframes: {
        'hero-shape': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05) rotate(2deg)', opacity: '1' },
        },
      },
      animation: {
        'hero-shape': 'hero-shape 8s ease-in-out infinite',
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}

