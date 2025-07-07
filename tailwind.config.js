/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',      // azul claro (para botones, enlaces)
          secondary: '#10B981',    // verde menta (acciones)
          accent: '#F59E0B',       // ámbar para llamados a la acción
          'bg-light': '#F9FAFB',   // fondo general suave
          'bg-soft': '#EFF6FF',    // secciones suaves
          'text-dark': '#1F2937',  // texto principal
          'text-muted': '#6B7280', // texto secundario
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [],
  }
  