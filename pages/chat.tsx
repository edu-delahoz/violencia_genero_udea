import "../app/globals.css"
import Layout from '@/components/Layout'
import ChatWindow from '@/components/ChatWindow'

export default function ChatPage() {
  return (
    <Layout>
      <section className="bg-blue-50 min-h-screen py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          💬 Chat de Atención
        </h2>
        <p className="text-gray-600 text-center max-w-lg ">
          Habla con nuestro asistente virtual <span className="font-semibold text-[#AFD3F5]">RutaSegura</span> y recibe orientación confidencial, segura y empática para ti o alguien más.
        </p>
        <ChatWindow />
      </section>
    </Layout>
  )
}
