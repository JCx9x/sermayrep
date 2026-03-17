const stats = [
  { value: "+10 Años", label: "Experiencia" },
  { value: "100%", label: "Satisfacción" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          {/* Image — desktop only */}
          <div className="hidden md:block flex-1 shrink-0">
            <div className="relative w-full aspect-square max-w-md bg-amber-50 rounded-2xl overflow-hidden">
              {/*
               * TODO: Replace with real photo using next/image
               * <Image src="/images/sobre-nosotros.webp" alt="Sobre Sermayrep" fill className="object-cover" />
               */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-300 gap-3">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-amber-300">Foto sobre nosotros</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
              Compromiso con la Excelencia
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 md:text-base">
              Sermayrep nace con la misión de ofrecer un soporte técnico
              integral y altamente cualificado para el sector de la hostelería y
              los sistemas de climatización por calderas.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 md:text-base">
              Con años de experiencia en el sector, nos hemos consolidado como
              un referente de confianza gracias a nuestra rapidez de respuesta y
              la durabilidad de nuestras reparaciones. Nuestro equipo de
              expertos está en constante formación para dominar las tecnologías
              más avanzadas del mercado.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-blue-600 md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
