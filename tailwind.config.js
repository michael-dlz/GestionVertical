/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1931",
        lightSecondary: "#e0f2ff",
        primaryGradient: "#0b324d",
        ligthSpan: "#FFF7D8",
        secondary: "#246AF3",
        lightGray: "#ECF0F1",
        spanColor: "#FFC947",
        textBlackp: "#26344B",
        inputColor: "#ECF0F1",
      },
      width: {
        widthRespon: "70rem",
      },
      fontFamily: {
        "titilium": ["Titillium Web", "sans-serif"]
      },
      backgroundImage: {
        "banner-home": "url(https://img.freepik.com/foto-gratis/paisaje-analogico-ciudad-edificios_23-2149661456.jpg?t=st=1728515429~exp=1728519029~hmac=9ac7a9780a5fda73cad05ed12b30c9ef9aa6b381ac0ea492c5824f21c684cdfd&w=1380)"
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