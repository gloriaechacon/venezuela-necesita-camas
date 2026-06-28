import { campaign } from "@/data/campaign";

export default function Partners() {
  return (
    <section id="aliados" className="py-16 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Empresas y organizaciones aliadas</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Gracias a quienes hacen posible esta campaña.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {campaign.partners.map((p, i) => (
            <div
              key={i}
              className="card flex flex-col items-center justify-center min-h-[100px] text-center hover:shadow-md transition-shadow"
            >
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.logo} alt={p.name} className="max-h-12 object-contain mb-2" />
              ) : (
                <div className="w-12 h-12 bg-brand-gray-mid rounded-xl flex items-center justify-center text-2xl mb-2">
                  🏢
                </div>
              )}
              <span className="text-sm text-gray-500 font-medium">{p.name || "Por confirmar"}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={`https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
              "Hola, represento una empresa y quiero apoyar la campaña Venezuela Necesita Camas."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            📲 Mi empresa quiere ser aliada
          </a>
        </div>
      </div>
    </section>
  );
}
