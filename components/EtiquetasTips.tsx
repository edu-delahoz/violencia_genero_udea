const tips = [
    {
        title: 'Comunicación abierta',
        image: '/etiqueta1.jpeg',
        text: 'Fomentar conversaciones honestas y frecuentes con todos los miembros de la familia ayuda a resolver tensiones antes de que escalen.',
    },
    {
        title: 'Establece límites sanos',
        image: '/etiqueta4.jpeg',
        text: 'Reconocer y respetar los límites personales evita situaciones de control o abuso emocional.',
    },
    {
        title: 'Respeto mutuo',
        image: '/etiqueta2.jpeg',
        text: 'Tratar a cada miembro de la familia con dignidad fortalece el vínculo y evita comportamientos violentos o humillantes.',
    },
    {
        title: 'Tiempo de calidad',
        image: '/etiqueta3.jpeg',
        text: 'Compartir actividades recreativas fortalece los lazos familiares y reduce el estrés que puede desencadenar conflictos.',
    },
]

export default function EtiquetasTips() {
    return (
        <section className="bg-blue-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Tips para prevenir violencia intrafamiliar
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex flex-col items-center text-center space-y-4"
             >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-40 h-40 object-cover border-4 border-blue-100 shadow-sm"
              />
              <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

    )   
}
