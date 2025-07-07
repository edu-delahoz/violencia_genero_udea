import "../app/globals.css"
import { useState } from 'react'
import Link from 'next/link'
import FloatingChatButton from "./FloatingChatButton"
import { usePathname } from 'next/navigation' // 👈 Importar pathname




export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <div className="flex flex-col min-h-screen bg-blue-50 text-gray-800 font-sans select-none        ">
            {/* HEADER */}
            <header className="bg-white shadow-md">
                <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
                    <Link href="/" className="text-2xl font-bold">
                        RutaSegura Hub
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-sm font-medium">
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/chat', label: 'Chat' },
                            { href: '/community', label: 'Community' },
                            { href: '/map', label: 'Map' }
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`px-3 py-1 rounded-md transition-all duration-300 ${pathname === href
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open
                            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </button>
                </nav>

                {/* Mobile Menu */}
                {open && (
                    <ul className="md:hidden bg-white border-t border-gray-200">
                        {['/', '/chat', '/community', '/map'].map((href, i) => {
                            const label = href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)
                            return (
                                <li key={i} className="border-b border-gray-200">
                                    <Link
                                        href={href}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                                        onClick={() => setOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </header>

            {/* MAIN */}
            <main className="flex-1">
                {children}
            </main>
            <FloatingChatButton />
            {/* FOOTER */}
            <footer className="bg-white py-4 text-center text-gray-600 text-sm">
                © 2025 RutaSegura Hub by Eduardo De La Hoz
            </footer>
        </div>
    )
}
