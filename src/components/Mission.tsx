import { campaign } from "@/data/campaign";

export default function Mission() {
  return (
    <section id="mision" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-5xl mb-6">🤝</div>
        <h2 className="section-title">Nuestra misión</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          {campaign.texts.mision}
        </p>

        {/* Pilares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { icon: "🔩", label: "Fabricación local" },
            { icon: "🛏️", label: "Literas dignas" },
            { icon: "🪑", label: "Colchones nuevos" },
            { icon: "🏠", label: "Entrega en refugios" },
          ].map((p) => (
            <div key={p.label} className="bg-brand-gray rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className="text-sm font-semibold text-brand-blue">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
