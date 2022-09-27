/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['tugas/index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#a855f7',
        gelap: '#0f172a',
        abu: '#64748b',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}