const brands = [
  "VAILLANT",
  "BAXI",
  "JUNKERS",
  "LASIAN",
  "EIDER biomasa",
  "KARMEN one",
];

export default function Brands() {
  return (
    <section id="marcas" className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase text-center mb-8">
          Marcas con las que trabajamos
        </p>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-8 overflow-x-auto pb-2 md:hidden scrollbar-hide">
          {brands.map((brand) => (
            <span
              key={brand}
              className="shrink-0 text-xl font-bold text-gray-300 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Desktop: centered flex wrap */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
