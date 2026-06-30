"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Transparency() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const transparencyText = lang === "en"
    ? "We will publish progress updates, production photos, deliveries and counter updates so every donor can see the impact of their contribution."
    : campaign.texts.transparencia;

  const uses = [
    { icon: "🔩", label: t.transUse1Label, desc: t.transUse1Desc },
    { icon: "🪑", label: t.transUse2Label, desc: t.transUse2Desc },
    { icon: "👷", label: t.transUse3Label, desc: t.transUse3Desc },
    { icon: "🚛", label: t.transUse4Label, desc: t.transUse4Desc },
    { icon: "📦", label: t.transUse5Label, desc: t.transUse5Desc },
    { icon: "🏠", label: t.transUse6Label, desc: t.transUse6Desc },
  ];

  return (
    <section id="transparencia" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t.transparencyTitle}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t.transparencySubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {uses.map((u) => (
            <div key={u.label} className="card flex gap-4 items-start">
              <div className="text-3xl flex-shrink-0">{u.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{u.label}</h4>
                <p className="text-gray-600 text-sm">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <div className="text-3xl mb-4">📢</div>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-200">
            {transparencyText}
          </p>
        </div>
      </div>
    </section>
  );
}
