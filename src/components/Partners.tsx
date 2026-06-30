"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Partners() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];

  return (
    <section id="aliados" className="py-16 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">{t.partnersTitle}</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {t.partnersSubtitle}
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
            href={`https://wa.me/${campaign.contact.whatsappSecondary!.replace(/\D/g, "")}?text=${encodeURIComponent(t.waCompany)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            {t.partnersCta}
          </a>
        </div>
      </div>
    </section>
  );
}
