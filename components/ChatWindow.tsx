'use client'

import "../app/globals.css"
import { useState } from "react"
import ReactMarkdown from 'react-markdown'

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hola, soy **RutaSegura**. ¿En qué puedo ayudarte hoy?' }
  ])
  const [input, setInput] = useState("")
  const [showOptions, setShowOptions] = useState(true)

  const predefinedOptions = [
    "Quiero denunciar un caso",
    "Necesito ayuda psicológica",
    "Tengo dudas sobre las rutas de atención",
    "Quiero apoyar a alguien"
  ]

  const handleSend = async (text: string) => {
    if (!text.trim()) return
    setMessages(prev => [...prev, { type: 'user', text }])
    setInput("")
    setShowOptions(false)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      const data = await res.json()
      if (data.reply) {
        setMessages(prev => [...prev, { type: 'bot', text: data.reply }])
      } else {
        setMessages(prev => [...prev, { type: 'bot', text: 'Lo siento, hubo un error al procesar tu solicitud.' }])
      }
    } catch (_error) {
        setMessages(prev => [...prev, { type: 'bot', text: 'Hubo un problema de conexión.' }])
      }
  }

  return (
    <div className="flex justify-center items-center bg-blue-50 py-7 px-4">
      <div className="w-full max-w-md h-[60vh] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">

        {/* Encabezado */}
        <div className="bg-[#AFD3F5] text-white text-center py-3 font-semibold text-lg">
          RutaSegura Asistente Virtual
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-gray-700">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`transition duration-300 transform ${
                msg.type === 'bot'
                  ? 'bg-blue-100 text-gray-800 self-start mr-auto'
                  : 'bg-green-100 text-gray-800 self-end ml-auto'
              } p-3 rounded-xl max-w-[80%] shadow-sm whitespace-pre-wrap`}
            >
              {msg.type === 'bot' ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}

          {/* Opciones predefinidas */}
          {showOptions && (
            <div className="flex flex-wrap gap-2 mt-2">
              {predefinedOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(option)}
                  className="bg-blue-200 hover:bg-blue-300 text-sm text-gray-800 px-3 py-1 rounded-full transition-all duration-200 ease-in-out"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          className="flex border-t border-gray-200"
          onSubmit={(e) => {
            e.preventDefault()
            handleSend(input)
          }}
        >
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-3 text-sm outline-none placeholder:text-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#AFD3F5] px-5 text-white font-medium hover:bg-[#9ec6f1] transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
