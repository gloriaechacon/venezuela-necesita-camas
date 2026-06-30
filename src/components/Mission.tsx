"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Mission() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const missionText = lang === "en"
    ? "We are a group of volunteers, ironworkers, companies and citizens organized to manufacture beds and deliver mattresses to affected shelters. Every contribution transforms into materials, labor, transport and dignified rest for a family."
    : campaign.texts.mision;

  const pillars = [
    { icon: "🔩", label: t.missionPillar1 },
    { icon: "🛏️", label: t.missionPillar2 },
    { icon: "🪑", label: t.missionPillar3 },
    { icon: "🏠", label: t.missionPillar4 },
  ];

  return (
    <section id="mision" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-5xl mb-6">🤝</div>
        <h2 className="section-title">{t.missionTitle}</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          {missionText}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {pillars.map((p) => (
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
