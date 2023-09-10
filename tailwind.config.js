/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        mobile: '300px',
        tablet: '640px',
        laptop: '1024px',
      },
      colors: {
        black: '#18181b',
        white: '#ffffff',
        gray: '#c7c7c7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amiko: ['Amiko', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
