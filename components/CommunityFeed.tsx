'use client'

import "../app/globals.css"
import { useState } from "react"

interface Post {
    id: number
    author: string
    content: string
    date: string
    comments: string[]
    liked: boolean
    likeCount: number
    image?: string
}

const initialPosts: Post[] = [
    {
        id: 1,
        author: 'Anónimo',
        content: 'Hoy logré hablar con una psicóloga gracias a una ruta de atención. ¡Sí se puede!',
        date: 'Hace 2 horas',
        comments: ['¡Qué valiente! Gracias por compartir ❤️'],
        liked: false,
        likeCount: 3,
        image: '/imagen1comunidad.png',
    },
    {
        id: 2,
        author: 'LucíaP',
        content: '¿Qué hago si mi amiga tiene miedo de denunciar? Me preocupa mucho 😢',
        date: 'Hace 5 horas',
        comments: [],
        liked: false,
        likeCount: 1,
    },
    {
        id: 3,
        author: 'Ali88',
        content: 'Hoy acompañé a una amiga a la Comisaría de Familia. Fue difícil pero importante 💪🏼',
        date: 'Ayer',
        comments: ['Eres una gran amiga ❤️', 'Gracias por estar con ella'],
        liked: false,
        likeCount: 4,
        image: '/imagen3comunidad.png',
    },
    {
        id: 4,
        author: 'Valen_C',
        content: 'No sabía que existía la línea 155 para denunciar violencia. ¡Compartan esa info!',
        date: 'Hace 1 día',
        comments: ['¡Sí! Es confidencial y gratuita 📞'],
        liked: false,
        likeCount: 2,
        image: '/imagen2comunidad.png',
    },
    {
        id: 5,
        author: 'EstebanQ',
        content: '¿Es normal que mi pareja revise mi celular todo el tiempo? Me siento incómodo.',
        date: 'Hace 2 días',
        comments: ['No, eso es control. Mereces privacidad.'],
        liked: false,
        likeCount: 6,
    },
    {
        id: 6,
        author: 'Anónimo',
        content: 'Leí que una relación sana se basa en respeto, confianza y comunicación. 💜',
        date: 'Hace 2 días',
        comments: ['Totalmente de acuerdo 🙌', 'Eso debemos enseñarlo desde jóvenes'],
        liked: false,
        likeCount: 5,
    },
    {
        id: 7,
        author: 'Jime',
        content: 'Me animé a dejar esa relación. Estoy empezando de nuevo, con miedo, pero en paz.',
        date: 'Hace 3 días',
        comments: ['Te admiro mucho 💪', 'Gracias por inspirarnos'],
        liked: false,
        likeCount: 8,
    }
]

export default function CommunityPage() {
    const [posts, setPosts] = useState(initialPosts)
    const [newPost, setNewPost] = useState("")
    const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({})

    const handlePost = () => {
        if (!newPost.trim()) return
        const post: Post = {
            id: posts.length + 1,
            author: 'Tú (anónimo)',
            content: newPost,
            date: 'Ahora',
            comments: [],
            liked: false,
            likeCount: 0,
        }
        setPosts([post, ...posts])
        setNewPost("")
    }

    const handleComment = (postId: number) => {
        const text = commentInputs[postId]?.trim()
        if (!text) return

        setPosts(prev =>
            prev.map(post =>
                post.id === postId
                    ? { ...post, comments: [...post.comments, text] }
                    : post
            )
        )

        setCommentInputs(prev => ({ ...prev, [postId]: '' }))
    }

    const toggleLike = (postId: number) => {
        setPosts(prev =>
            prev.map(post =>
                post.id === postId
                    ? {
                        ...post,
                        liked: !post.liked,
                        likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1
                    }
                    : post
            )
        )
    }

    return (
        <section className="max-w-2xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Comunidad RutaSegura 💬</h2>
            <p className="text-center text-gray-600 mb-6">
                Comparte tus experiencias, preguntas o consejos. Estamos para apoyarnos 💜
            </p>

            {/* Publicador */}
            <div className="bg-white p-4 rounded-xl shadow mb-6">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="¿Qué deseas compartir hoy?"
                    className="w-full resize-none border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    rows={3}
                />
                <div className="flex justify-end mt-2">
                    <button
                        onClick={handlePost}
                        className="bg-[#AFD3F5] hover:bg-[#9ec6f1] text-white px-4 py-2 rounded-md text-sm transition"
                    >
                        Publicar
                    </button>
                </div>
            </div>

            {/* Feed */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 shadow">
                        {post.image && (
                            <img
                            src={post.image}
                            alt="Imagen del post"
                            className="w-full h-auto object-cover rounded-lg mt-3 shadow-sm"
                          />
                        )}
                        <div className="text-sm text-gray-500 mb-1">{post.author} · {post.date}</div>
                        <p className="text-gray-800 text-sm whitespace-pre-wrap">{post.content}</p>

                        {/* Reacciones */}
                        <div className="flex gap-6 mt-3 text-sm text-gray-500">
                            <span>💬 {post.comments.length} Comentario{post.comments.length !== 1 ? 's' : ''}</span>
                            <span
                                onClick={() => toggleLike(post.id)}
                                className={`flex items-center gap-1 transition cursor-pointer hover:scale-110 duration-150 ${post.liked ? 'text-pink-500' : 'hover:text-pink-500'
                                    }`}
                            >
                                ❤️ {post.likeCount}
                            </span>
                        </div>

                        {/* Comentarios */}
                        <div className="mt-3 space-y-2 pl-3 border-l border-blue-100">
                            {post.comments.map((comment, i) => (
                                <div key={i} className="text-sm text-gray-700 bg-blue-50 rounded-md p-2">
                                    {comment}
                                </div>
                            ))}
                        </div>

                        {/* Input comentario */}
                        <div className="mt-3 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Escribe un comentario..."
                                value={commentInputs[post.id] || ''}
                                onChange={(e) =>
                                    setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))
                                }
                                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md outline-none"
                            />
                            <button
                                onClick={() => handleComment(post.id)}
                                className="text-sm text-white bg-[#AFD3F5] hover:bg-[#9ec6f1] px-3 py-2 rounded-md"
                            >
                                Comentar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
