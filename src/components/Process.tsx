const steps = [
  { n: 1, icon: "💳", title: "Recibimos la donación", desc: "El aporte llega a través de los métodos de pago habilitados." },
  { n: 2, icon: "🛒", title: "Compramos materiales", desc: "Adquirimos hierro, electrodos, colchones y todo lo necesario." },
  { n: 3, icon: "🔨", title: "Fabricamos las literas", desc: "Nuestros herreros trabajan en el taller de producción en Aragua." },
  { n: 4, icon: "🚛", title: "Coordinamos transporte", desc: "Organizamos el flete seguro hacia cada refugio." },
  { n: 5, icon: "🏠", title: "Entregamos en refugios", desc: "Las literas y colchones llegan directamente a las familias." },
];

export default function Process() {
  return (
    <section id="proceso" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Del dinero a la cama: así se transforma tu donación.
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-2xl mb-3 shadow-md">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-brand-yellow bg-brand-blue rounded-full w-6 h-6 flex items-center justify-center -mt-1 mb-3">
                  {s.n}
                </div>
                <h4 className="font-bold text-brand-blue text-sm mb-1">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 mt-8 mx-1 text-brand-gray-mid text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-xl shadow flex-shrink-0">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-white bg-brand-blue rounded-full w-5 h-5 flex items-center justify-center -mt-1">
                  {s.n}
                </div>
              </div>
              <div className="card flex-1 py-3 px-4">
                <h4 className="font-bold text-brand-blue text-sm mb-1">{s.title}</h4>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
