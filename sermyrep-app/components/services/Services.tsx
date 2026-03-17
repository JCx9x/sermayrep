const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Reparación de Calderas",
    description:
      "Servicio multimarca. Reparación urgente de gas, gasóil y sistemas de calefacción centralizada. Optimización y limpieza para maximizar la eficiencia energética.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Maquinaria de Hostelería",
    description:
      "Mantenimiento de hornos, lavavajillas industriales, freidoras y cámaras frigoríficas. Mantenga su negocio funcionando sin interrupciones.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Contratos de Mantenimiento",
    description:
      "Planes personalizados para empresas para evitar averías costosas y optimizar consumos. Revisiones periódicas programadas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Nuestros Servicios
            <span className="hidden md:inline"> Especializados</span>
          </h2>
          <div className="mt-2 w-12 h-1 bg-blue-600 rounded md:mx-auto" />
        </div>

        {/* Cards — stacked mobile, 3-col desktop */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile extra service: Servicio Técnico 24/7 */}
        <div className="mt-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100 md:hidden">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-base">
            Servicio Técnico 24/7
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Estamos disponibles para cualquier emergencia crítica. Respuesta
            inmediata para reparaciones urgentes en sistemas vitales.
          </p>
        </div>
      </div>
    </section>
  );
}
