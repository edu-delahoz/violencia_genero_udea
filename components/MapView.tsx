import "../app/globals.css"

export default function MapView() {
    return (
        <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Mapa de Rutas de Atención</h2>
        <p className="text-center text-gray-600 mb-8">
          Encuentra los centros de ayuda más cercanos a tu ubicación: comisarías, centros psicológicos, líneas 24/7 y más.
          Este mapa es una simulación para fines del prototipo.
        </p>
  
        {/* Imagen del mapa */}
        <div className="rounded-xl overflow-hidden shadow-lg border bg-white">
          <img
            src="/mapa.png"
            alt="Mapa de rutas de atención"
            className="w-auto h-auto object-cover"
          />
        </div>
  
        {/* Información complementaria */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#E2F0FB] p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-1">🏥 Comisarías de Familia</h3>
            <p className="text-sm text-gray-700">Zonas marcadas en azul. Atención psicológica, jurídica y medidas de protección.</p>
          </div>
          <div className="bg-[#FEF3C7] p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-yellow-800 mb-1">📞 Líneas de emergencia</h3>
            <p className="text-sm text-gray-700">Zonas con íconos de teléfono. Atención 24/7 para denuncias y orientación.</p>
          </div>
        </div>
      </section>
    )
  }
  
