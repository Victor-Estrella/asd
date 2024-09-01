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
      colors: {        
        fundo: 'var(--fundo)',
        azul: 'var(--azul)',
        azulescuro: 'var(--azul-escuro)',
        azulclaro: 'var(--azul-claro)',
        branco: 'var(--branco)',
        cinza: 'var(--cinza)',
        creme: 'var(--creme)',
        fonte: 'var(--fonte)',
        preto: 'var(--preto)',
        fundoheader: 'var(--fundoheader)'
      }
    }
  },
  plugins: [],
};

