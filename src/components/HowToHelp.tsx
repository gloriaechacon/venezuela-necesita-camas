"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";
import PaymentModal from "./PaymentModal";

export default function HowToHelp() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const [showPayment, setShowPayment] = useState(false);

  const waMaterials = (msg: string) =>
    `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
  const wa = (msg: string) =>
    `https://wa.me/${campaign.contact.whatsappSecondary!.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

  const materials = lang === "en" ? campaign.materialsNeededEn : campaign.materialsNeeded;

  // Fondos patria: amarillo → azul → rojo → amarillo
  const cardIconBg = [
    "bg-brand-yellow/20 border border-brand-yellow/40",
    "bg-brand-blue/10  border border-brand-blue/30",
    "bg-brand-red/10   border border-brand-red/30",
    "bg-brand-yellow/20 border border-brand-yellow/40",
  ];

  const cards: {
    icon: string;
    title: string;
    description: string;
    list?: string[];
    action: React.ReactNode;
  }[] = [
    {
      icon: "💛",
      title: t.helpCard1Title,
      description: t.helpCard1Desc,
      action: (
        <button onClick={() => setShowPayment(true)} className="btn-primary w-full justify-center mt-4">
          {t.helpCard1Btn}
        </button>
      ),
    },
    {
      icon: "🔩",
      title: t.helpCard2Title,
      description: t.helpCard2Desc,
      list: materials,
      action: (
        <a
          href={waMaterials(t.waMaterials)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center mt-4"
        >
          {t.helpCard2Btn}
        </a>
      ),
    },
    {
      icon: "🛠️",
      title: t.helpCard3Title,
      description: t.helpCard3Desc,
      action: (
        <a
          href={wa(t.waVolunteer)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center mt-4"
        >
          {t.helpCard3Btn}
        </a>
      ),
    },
    {
      icon: "🏢",
      title: t.helpCard4Title,
      description: t.helpCard4Desc,
      action: (
        <a
          href={wa(t.waCompany)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center mt-4"
        >
          {t.helpCard4Btn}
        </a>
      ),
    },
  ];

  return (
    <section id="como-ayudar" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t.helpTitle}</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {t.helpSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={c.title} className="card flex flex-col">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-3 ${cardIconBg[i]}`}>
                {c.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">{c.description}</p>

              {/* Lista de materiales */}
              {c.list && (
                <ul className="flex-1 space-y-1 mb-1">
                  {c.list.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-brand-yellow mt-0.5 font-bold flex-shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {!c.list && <div className="flex-1" />}
              {c.action}
            </div>
          ))}
        </div>
      </div>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </section>
  );
}
