import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-10 pb-14 md:pt-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 order-2 md:order-1">
            {/* Mobile badge */}
            <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4 md:hidden">
              Servicio Técnico 24/7
            </p>

            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4 md:text-4xl lg:text-5xl">
              {/* Mobile copy */}
              <span className="md:hidden">
                Expertos en Reparación de{" "}
                <span className="text-blue-600">Calderas y Hostelería</span>
              </span>
              {/* Desktop copy */}
              <span className="hidden md:inline">
                Mantenimiento y Reparación Profesional para{" "}
                <span className="text-blue-600">Calderas y Hostelería</span>
              </span>
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg md:text-lg">
              <span className="md:hidden">
                Mantenimiento profesional para que su negocio o vivienda nunca
                se detenga. Confianza y rapidez garantizada.
              </span>
              <span className="hidden md:inline">
                Servicio rápido, fiable y con garantía en toda la zona.
                Aseguramos el rendimiento óptimo de su maquinaria industrial y
                sistemas de calefacción.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Link
                href="#contacto"
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                href="#servicios"
                className="hidden md:inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Ver servicios
              </Link>
            </div>

            {/* Mobile trust note */}
            <p className="text-xs text-gray-400 text-center sm:text-left md:hidden">
              Asistencia inmediata en menos de 2 horas
            </p>

            {/* Desktop trust badges */}
            <div className="hidden md:flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4 text-green-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Técnicos Certificados
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4 text-green-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Respuesta Rápida
              </div>
            </div>
          </div>

          {/* Hero image — desktop only */}
          <div className="hidden md:block flex-1 order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/furgoneta.png"
                alt="Furgoneta de servicio técnico Sermayrep"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
