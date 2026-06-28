import { campaign } from "@/data/campaign";

export default function Team() {
  const colors = [
    "bg-blue-100 text-brand-blue",
    "bg-yellow-100 text-yellow-700",
    "bg-green-100 text-green-700",
    "bg-purple-100 text-purple-700",
    "bg-rose-100 text-rose-700",
  ];

  return (
    <section id="quienes-somos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Quiénes somos</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Un equipo de venezolanos comprometidos con la respuesta inmediata al terremoto.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {campaign.team.map((m, i) => (
            <div key={m.name} className="card text-center hover:shadow-md transition-shadow">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 ${
                  colors[i % colors.length]
                }`}
              >
                {m.initials}
              </div>
              <div className="font-semibold text-brand-blue text-sm leading-tight">{m.name}</div>
              <div className="text-gray-500 text-xs mt-1">{m.role}</div>
            </div>
          ))}

          {/* Placeholder: Herreros por confirmar */}
          {campaign.progress.ironworkersConfirmed > 0 && (
            <div className="card text-center opacity-60 border-dashed">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl mx-auto mb-3">
                🔧
              </div>
              <div className="font-semibold text-gray-500 text-sm">Herreros</div>
              <div className="text-gray-400 text-xs mt-1">
                {campaign.progress.ironworkersConfirmed} confirmados
              </div>
            </div>
          )}

          {campaign.workshop.name && (
            <div className="card text-center opacity-80">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl mx-auto mb-3">
                🏭
              </div>
              <div className="font-semibold text-brand-blue text-sm">{campaign.workshop.name}</div>
              <div className="text-gray-500 text-xs mt-1">{campaign.workshop.location}</div>
            </div>
          )}

          {campaign.mattressCompany.name && (
            <div className="card text-center opacity-80">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-2xl mx-auto mb-3">
                🪑
              </div>
              <div className="font-semibold text-brand-blue text-sm">{campaign.mattressCompany.name}</div>
              <div className="text-gray-500 text-xs mt-1">Proveedor de colchones</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
