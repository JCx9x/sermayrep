"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">
            S
          </div>
          <span className="font-bold text-gray-900 text-lg tracking-tight">
            Sermayrep
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#servicios"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#marcas"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Marcas
          </Link>
          <Link
            href="#nosotros"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Nosotros
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contacto"
          className="hidden md:inline-flex bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Solicitar presupuesto
        </Link>

        {/* Mobile: call button + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+34975123456"
            className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
              />
            </svg>
            Llamar
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-4">
          <Link href="#servicios" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700">
            Servicios
          </Link>
          <Link href="#marcas" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700">
            Marcas
          </Link>
          <Link href="#nosotros" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700">
            Nosotros
          </Link>
          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center"
          >
            Solicitar presupuesto
          </Link>
        </div>
      )}
    </header>
  );
}
