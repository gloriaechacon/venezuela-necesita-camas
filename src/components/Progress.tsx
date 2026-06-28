import { campaign } from "@/data/campaign";

function StatCard({ label, value, total, accent }: {
  label: string;
  value: string | number;
  total?: string | number;
  accent?: boolean;
}) {
  return (
    <div className={`card text-center ${accent ? "border-brand-yellow border-2" : ""}`}>
      <div className={`text-4xl font-black mb-1 ${accent ? "text-brand-blue" : "text-brand-blue"}`}>
        {value}
        {total !== undefined && (
          <span className="text-2xl text-gray-400">/{total}</span>
        )}
      </div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function Progress() {
  const p = campaign.progress;
  const literasPct = Math.round((p.litersFinanced / p.litersGoal) * 100);
  const colchonesPct = Math.round((p.mattressesObtained / p.mattressesGoal) * 100);

  return (
    <section id="progreso" className="py-16 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Avance de la campaña</h2>
          <p className="text-brand-gray-text text-base">
            Última actualización: <strong>{p.lastUpdated}</strong>
          </p>
        </div>

        {/* Progress bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="card">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-brand-blue">🛏️ Literas financiadas</span>
              <span className="text-brand-blue font-black">{literasPct}%</span>
            </div>
            <div className="w-full bg-brand-gray-mid rounded-full h-4 mb-1">
              <div
                className="bg-brand-blue h-4 rounded-full transition-all duration-1000"
                style={{ width: `${literasPct}%` }}
              />
            </div>
            <div className="text-sm text-gray-500">
              {p.litersFinanced} de {p.litersGoal} literas
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-brand-blue">🪑 Colchones conseguidos</span>
              <span className="text-brand-blue font-black">{colchonesPct}%</span>
            </div>
            <div className="w-full bg-brand-gray-mid rounded-full h-4 mb-1">
              <div
                className="bg-brand-yellow h-4 rounded-full transition-all duration-1000"
                style={{ width: `${colchonesPct}%` }}
              />
            </div>
            <div className="text-sm text-gray-500">
              {p.mattressesObtained} de {p.mattressesGoal} colchones
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <StatCard label="Meta literas" value={p.litersGoal} accent />
          <StatCard label="Meta colchones" value={p.mattressesGoal} accent />
          <StatCard label="Literas financiadas" value={p.litersFinanced} total={p.litersGoal} />
          <StatCard label="Colchones conseguidos" value={p.mattressesObtained} total={p.mattressesGoal} />
          <StatCard label="Literas entregadas" value={p.litersDelivered} total={p.litersGoal} />
          <StatCard label="Refugios atendidos" value={p.sheltersServed} />
          <StatCard label="Herreros necesarios" value={p.ironworkersNeeded} />
          <StatCard label="Herreros confirmados" value={p.ironworkersConfirmed} total={p.ironworkersNeeded} />
        </div>
      </div>
    </section>
  );
}
