"use client";
import { useState } from "react";
import { campaign } from "@/data/campaign";
import PaymentModal from "./PaymentModal";

export default function Sponsor() {
  const [showPayment, setShowPayment] = useState(false);
  const s = campaign.sponsorship;

  const formatAmount = (bsf: number | null, usd: number | null, show: boolean, labelBsf: string, labelUsd: string) => {
    if (!show || (bsf === null && usd === null)) {
      return { bsf: labelBsf, usd: labelUsd };
    }
    return {
      bsf: bsf !== null ? `Bs. ${bsf.toLocaleString("es-VE")}` : "—",
      usd: usd !== null ? `$${usd} USD` : "—",
    };
  };

  const litera = formatAmount(s.litera.bsf, s.litera.usd, s.litera.showAmounts, s.litera.labelBsf, s.litera.labelUsd);
  const colchon = formatAmount(s.colchon.bsf, s.colchon.usd, s.colchon.showAmounts, s.colchon.labelBsf, s.colchon.labelUsd);

  const options = [
    {
      icon: "🛏️",
      title: "Apadrina una litera",
      subtitle: "Cubre el costo de fabricación de 1 litera completa",
      bsf: litera.bsf,
      usd: litera.usd,
      accent: true,
    },
    {
      icon: "🪑",
      title: "Apadrina un colchón",
      subtitle: "Cubre 1 colchón nuevo para una familia",
      bsf: colchon.bsf,
      usd: colchon.usd,
      accent: false,
    },
    {
      icon: "💛",
      title: "Dona libremente",
      subtitle: "Cualquier aporte suma. Tú decides el monto.",
      bsf: s.freeMin.usd !== null ? `Desde $${s.freeMin.usd} USD` : "Cualquier monto",
      usd: null,
      accent: false,
    },
  ];

  return (
    <section id="apadrina" className="py-16 bg-brand-blue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Apadrina una cama</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Tu aporte tiene nombre y apellido: una familia que puede descansar dignamente.
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
                Donar ahora
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </section>
  );
}
