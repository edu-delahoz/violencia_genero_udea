// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'https://router.huggingface.co/v1',
  apiKey: process.env.HF_TOKEN,
})

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  try {
    const completion = await openai.chat.completions.create({
      model: 'deepseek-ai/DeepSeek-V3-0324', // modelo disponible con router HF
      messages: [
        {
          role: 'system',
          content: 'Eres un asistente Colombiano empático que responde de forma clara, breve (máximo 5-6 frases) y útil a personas afectadas por violencia de género en colombia. Usa un lenguaje sencillo y respetuoso. No des respuestas largas ni en formato lista.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    })

    const reply = completion.choices[0]?.message?.content || 'Gracias por tu mensaje. ¿En qué más puedo ayudarte?'
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Hugging Face Router Error:', error)
    return NextResponse.json({ error: 'Error al conectar con el modelo IA' }, { status: 500 })
  }
}
