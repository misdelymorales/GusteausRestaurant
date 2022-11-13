/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,html,css}"],
  theme: {
    fontFamily: ['Lexend Deca', 'Poppins'],
    colors: {
      primary: {
        50: 'linear-gradient(90.22deg, #aeb5d0 27.11%, #ebc2b6 69.07%)', //fondo gradiente
        100: '#742125', //vinotinto
        200: 'rgba(116, 33, 37, 0.54)', //vinotinto con opacidad
        400: '#2E5D9A', //btn azul
        500: '#FFFFFF',
      },
      secondary:{
        'gray-light': '#D9D9D9',
        'blue-light': '#AEB5D0', // btn celente "En Entrega"-cocina
        'mustard': '#CA7F09', // btn mostaza "En Preparación"-cocina
        'red': '#FF0303', //btn rojo cancelar
        'green': '#4DF94A', //btn verde agregar
        'green-light': '#06BA6E', //estado listo-cocina-mesonero
        'yellow-light': '#F8D72D', //estado En preparación-cocina
        'red-light': '#E44B4B', //estado En pendiente-cocina
        'mustard-light': 'rgba(202, 127, 9, 0.72)', //estado pendiente-mesonero 
      },
    },
    extend:{
      height: {
        '50': '3.125rem',
      }
    },
  },
  plugins: [],
}
