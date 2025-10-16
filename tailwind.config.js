
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
      screens: {
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        yt: {
          red: '#FF0000',
          dark: '#0f0f0f',
          light: '#f9f9f9',
        },
      },
    },
  },
  plugins: [],
};
