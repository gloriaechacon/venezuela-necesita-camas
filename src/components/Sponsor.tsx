"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";
import PaymentModal from "./PaymentModal";

export default function Sponsor() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const [showPayment, setShowPayment] = useState(false);
  const s = campaign.sponsorship;

  const formatAmount = (bsf: number | null, usd: number | null, show: boolean) => {
    if (!show || (bsf === null && usd === null)) {
      return { bsf: t.sponsorAmountTBD, usd: t.sponsorAmountTBD };
    }
    return {
      bsf: bsf !== null ? `Bs. ${bsf.toLocaleString("es-VE")}` : "—",
      usd: usd !== null ? `$${usd} USD` : "—",
    };
  };

  const litera = formatAmount(s.litera.bsf, s.litera.usd, s.litera.showAmounts);
  const colchon = formatAmount(s.colchon.bsf, s.colchon.usd, s.colchon.showAmounts);
  const freeAmount = s.freeMin.usd !== null
    ? t.sponsorFreeFromUSD.replace("${usd}", String(s.freeMin.usd))
    : t.sponsorFreeAnyAmount;

  const options = [
    {
      icon: "🛏️",
      title: t.sponsorBunkBedTitle,
      subtitle: t.sponsorBunkBedDesc,
      bsf: litera.bsf,
      usd: litera.usd,
      accent: true,
    },
    {
      icon: "🪑",
      title: t.sponsorMattressTitle,
      subtitle: t.sponsorMattressDesc,
      bsf: colchon.bsf,
      usd: colchon.usd,
      accent: false,
    },
    {
      icon: "💛",
      title: t.sponsorFreeDonateTitle,
      subtitle: t.sponsorFreeDonateDesc,
      bsf: freeAmount,
      usd: null,
      accent: false,
    },
  ];

  return (
    <section id="apadrina" className="py-16 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.sponsorTitle}</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            {t.sponsorSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {options.map((o) => (
            <div
              key={o.title}
              className={`rounded-2xl p-6 text-center flex flex-col ${
                o.accent
                  ? "bg-brand-yellow"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              <div className="text-5xl mb-4">{o.icon}</div>
              <h3 className={`font-bold text-xl mb-2 ${o.accent ? "text-brand-blue" : "text-white"}`}>
                {o.title}
              </h3>
              <p className={`text-sm mb-4 flex-1 ${o.accent ? "text-brand-blue/80" : "text-blue-100"}`}>
                {o.subtitle}
              </p>

              <div className={`mb-4 ${o.accent ? "text-brand-blue" : "text-white"}`}>
                <div className="text-2xl font-black">{o.bsf}</div>
                {o.usd && (
                  <div className="text-sm opacity-70 mt-1">{o.usd}</div>
                )}
              </div>

              <button
                onClick={() => setShowPayment(true)}
                className={`w-full py-3 rounded-xl font-bold text-base transition-all ${
                  o.accent
                    ? "bg-brand-blue text-white hover:bg-brand-blue-dark"
                    : "bg-brand-yellow text-brand-blue hover:bg-yellow-400"
                }`}
              >
                {t.sponsorDonateBtn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </section>
  );
}
