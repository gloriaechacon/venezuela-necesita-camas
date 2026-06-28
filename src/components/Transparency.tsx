import { campaign } from "@/data/campaign";

const uses = [
  { icon: "🔩", label: "Materiales de hierro", desc: "Tubos, perfiles, electrodos y ferretería para fabricar las literas." },
  { icon: "🪑", label: "Colchones nuevos", desc: "Compra de colchones directamente a proveedores." },
  { icon: "👷", label: "Pago justo a herreros", desc: "Reconocemos el trabajo de cada herrero involucrado." },
  { icon: "🚛", label: "Transporte y flete", desc: "Movilización de materiales y literas hacia los refugios." },
  { icon: "📦", label: "Logística", desc: "Coordinación, comunicación, embalaje y administración." },
  { icon: "🏠", label: "Entrega en refugios", desc: "Montaje y entrega directa en cada refugio atendido." },
];

export default function Transparency() {
  return (
    <section id="transparencia" className="py-16 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Transparencia total</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            ¿En qué se usa tu donación?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {uses.map((u) => (
            <div key={u.label} className="card flex gap-4 items-start">
              <div className="text-3xl flex-shrink-0">{u.icon}</div>
              <div>
                <h4 className="font-bold text-brand-blue mb-1">{u.label}</h4>
                <p className="text-gray-600 text-sm">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-blue text-white rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">📢</div>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            {campaign.texts.transparencia}
          </p>
        </div>
      </div>
    </section>
  );
}
