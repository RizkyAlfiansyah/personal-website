/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1F2B',
        p: {
          100: '#CDFFF3',
          200: '#2BA386',
        },
      },
    },
  },
  plugins: [],
};
