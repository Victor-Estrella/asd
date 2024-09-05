/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'pergunta': '5px 5px 7px rgba(33,33,33,.7)',
      },
      backgroundImage: {
        'fundoheader': 'linear-gradient(285deg, #0000FF 0%, #0000DD 25%, #0303ab 100%)'
      },
      colors: {        
        azul: '#0000FF',
        azulescuro: '#001D5C',
        azulclaro: '#01a1fc',
        branco: '#FFFFFF',
        cinza: '#D9D9D9',
        creme: '#FBF2E7',
        fonte: 'Montserrat, sans-serif',
        preto: '#000000'
      }
    }
  },
  plugins: [],
};

