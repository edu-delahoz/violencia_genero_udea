import Layout from '@/components/Layout'
import Link from 'next/link'
import EtiquetasTips from '@/components/EtiquetasTips'


export default function HomePage() {
    return (
        <Layout >
            {/* Hero */}
            <section className="bg-soft text-text-dark py-20 px-4 text-center select-none">
                <h1 className="text-5xl font-bold mb-4">Bienvenido a RutaSegura Hub</h1>
                <p className="text-lg text-text-muted mb-8">
                    Consejos y herramientas para prevenir y detectar violencia intrafamiliar
                </p>
            </section>

            {/* Tips */}
            <EtiquetasTips>

            </EtiquetasTips>


            {/* Detección */}
            <section className="bg-soft py-16 px-4 select-none">
                <h2 className="text-3xl font-semibold text-center text-text-dark mb-8">¿Cómo detectar relaciones tóxicas?</h2>
                <ul className="max-w-3xl mx-auto space-y-4 text-text-dark list-disc list-inside text-lg">
                    <li>Control excesivo sobre tus actividades y amistades.</li>
                    <li>Críticas constantes o menosprecio de tus logros.</li>
                    <li>Aislamiento de tu círculo cercano.</li>
                    <li>Explosiones de enojo desproporcionadas.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="bg-secondary py-16 px-4 text-center text-white select-none">
                <h2 className="text-3xl font-semibold mb-4">¿Listo para actuar?</h2>
                <p className="mb-6 text-amber-950">Únete al chatbot o a la comunidad y recibe ayuda inmediata.</p>
                <Link href="/chat" className="px-6 py-3 bg-primary rounded-lg shadow hover:bg-primary/90 transition">
                    Comienza ahora
                </Link>
            </section>
        </Layout>
    )
}
