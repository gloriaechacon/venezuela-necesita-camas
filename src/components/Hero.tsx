"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";
import PaymentModal from "./PaymentModal";

export default function Hero() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const [showPayment, setShowPayment] = useState(false);

  const waHelp = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(t.waVolunteer)}`;

  const flagBg = {
    background: `
      linear-gradient(rgba(8,8,8,0.72), rgba(8,8,8,0.72)),
      url('/hero-bandera.jpg') center/cover no-repeat
    `.trim(),
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16" style={flagBg}>
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">

        {/* Badge emergencia */}
        <div className="inline-flex items-center gap-2 bg-brand-yellow text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
          🆘 {t.heroBadge} · {campaign.earthquake}
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-7">
          {t.heroTitle}
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          {t.heroSubtitle}
        </p>

        {/* Acento bandera venezolana */}
        <div className="flex gap-0 w-16 mx-auto mb-10 rounded-full overflow-hidden h-[3px]">
          <div className="flex-1 bg-brand-yellow" />
          <div className="flex-1 bg-blue-500" />
          <div className="flex-1 bg-brand-red" />
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <div className="bg-white/8 border border-white/20 rounded-xl px-5 py-3 text-center">
            <div className="text-3xl font-black text-brand-yellow">{campaign.progress.litersGoal}</div>
            <div className="text-gray-400 text-sm mt-0.5">{t.heroBunkBedsLabel}</div>
          </div>
          <div className="bg-white/8 border border-white/20 rounded-xl px-5 py-3 text-center">
            <div className="text-3xl font-black text-brand-yellow">{campaign.progress.mattressesGoal}</div>
            <div className="text-gray-400 text-sm mt-0.5">{t.heroMattressesLabel}</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="/refugios" className="btn-outline-white text-base px-6 py-3">
            🏠 {t.btnShelter}
          </a>
          <a
            href={waHelp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-base px-6 py-3"
          >
            🤝 {t.btnHelp}
          </a>
          <button
            onClick={() => setShowPayment(true)}
            className="btn-primary text-base px-6 py-3"
          >
            💛 {t.btnDonate}
          </button>
        </div>
      </div>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </section>
  );
}
