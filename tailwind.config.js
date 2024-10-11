/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D42",
        secondary: "#EF233C",
        lightGray: "#EDF2F4",
        spanColor: "#8D99AE"
      },
      widths: {
        'widthPerson': "1570px"
      },
      fontFamily: {
        "titilium": ["Titillium Web", "sans-serif"]
      },
      backgroundImage: {
        "banner-home": "url(https://img.freepik.com/foto-gratis/paisaje-analogico-ciudad-edificios_23-2149661456.jpg?t=st=1728515429~exp=1728519029~hmac=9ac7a9780a5fda73cad05ed12b30c9ef9aa6b381ac0ea492c5824f21c684cdfd&w=1380)",
        "banner-about": "url(https://img.freepik.com/foto-gratis/equipo-trabajando-juntos-proyecto_23-2149325409.jpg?t=st=1728666926~exp=1728670526~hmac=cc75ac9e5dce4ec18529ba4a5c46f846166f1bf7cbda007339c826f4cb21242d&w=1380)"
      }
    },
  },
  plugins: [],
}

/* 


      colors: {
        primary: "#2C3E50",
        secondary: "#16A085",
        lightGray: "#ECF0F1",
        spanColor: "#F1C40F"
      },

*/