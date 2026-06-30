"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Process() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];

  // Ciclan: amarillo → azul → rojo → amarillo → azul (paleta bandera)
  const stepColors = [
    "bg-brand-yellow text-gray-900",
    "bg-brand-blue   text-white",
    "bg-brand-red    text-white",
    "bg-brand-yellow text-gray-900",
    "bg-brand-blue   text-white",
  ];

  const steps = [
    { n: 1, icon: "💳", title: t.processStep1Title, desc: t.processStep1Desc },
    { n: 2, icon: "🛒", title: t.processStep2Title, desc: t.processStep2Desc },
    { n: 3, icon: "🔨", title: t.processStep3Title, desc: t.processStep3Desc },
    { n: 4, icon: "🚛", title: t.processStep4Title, desc: t.processStep4Desc },
    { n: 5, icon: "🏠", title: t.processStep5Title, desc: t.processStep5Desc },
  ];

  return (
    <section id="proceso" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t.processTitle}</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {t.processSubtitle}
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1 text-center">
                <div className={`w-16 h-16 rounded-full ${stepColors[i]} flex items-center justify-center text-2xl mb-3 shadow-md`}>
                  {s.icon}
                </div>
                <div className={`text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center -mt-1 mb-3 ${stepColors[i]}`}>
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
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${stepColors[i]} flex items-center justify-center text-xl shadow flex-shrink-0`}>
                  {s.icon}
                </div>
                <div className={`text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -mt-1 ${stepColors[i]}`}>
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
