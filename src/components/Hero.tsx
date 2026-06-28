"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";
import PaymentModal from "./PaymentModal";

export default function Hero() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const [showPayment, setShowPayment] = useState(false);

  const waHelp = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, quiero ser voluntario en Venezuela Necesita Camas."
  )}`;

  // Venezuelan flag stripes in grayscale with deep-blue overlay
  const flagBg = {
    background: `
      linear-gradient(rgba(15,36,71,0.91), rgba(15,36,71,0.91)),
      linear-gradient(to bottom,
        #d0d0d0 0%, #d0d0d0 33.33%,
        #888888 33.33%, #888888 66.66%,
        #505050 66.66%, #505050 100%
      )
    `.trim(),
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16" style={flagBg}>
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            🆘 Emergencia — Terremoto Venezuela {campaign.earthquake}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8">
            {t.heroSubtitle}
          </p>

          {/* Meta goal */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
              <div className="text-3xl font-black text-brand-yellow">100</div>
              <div className="text-blue-100 text-sm">Literas</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
              <div className="text-3xl font-black text-brand-yellow">200</div>
              <div className="text-blue-100 text-sm">Colchones</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowPayment(true)}
              className="btn-primary text-base px-6 py-3"
            >
              💛 {t.btnDonate}
            </button>
            <a
              href={waHelp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-6 py-3"
            >
              🤝 {t.btnHelp}
            </a>
            <a href="/refugios" className="btn-outline-white text-base px-6 py-3">
              🏠 {t.btnShelter}
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm aspect-square bg-white/10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center gap-4 p-8">
            <div className="text-8xl">🛏️</div>
            <div className="text-center">
              <div className="text-white font-bold text-xl mb-1">Meta de la campaña</div>
              <div className="text-blue-100 text-sm">
                100 literas + 200 colchones para refugios venezolanos
              </div>
            </div>
            <div className="w-full mt-2">
              <div className="flex justify-between text-xs text-blue-200 mb-1">
                <span>Literas financiadas</span>
                <span>{campaign.progress.litersFinanced}/{campaign.progress.litersGoal}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-brand-yellow h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.max(
                      (campaign.progress.litersFinanced / campaign.progress.litersGoal) * 100,
                      campaign.progress.litersFinanced > 0 ? 2 : 0
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </section>
  );
}
