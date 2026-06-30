"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Team() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];

  return (
    <section id="quienes-somos" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">{t.teamTitle}</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {t.teamSubtitle}
          </p>
        </div>

        {/* Lista de personas — texto simple, sin protagonismo visual */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-1 max-w-2xl mx-auto mb-8">
          {campaign.team.map((m) => (
            <div key={m.name} className="py-2.5 border-b border-gray-100">
              <div className="text-sm font-medium text-gray-800 leading-snug">{m.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">
                {lang === "en" && m.roleEn ? m.roleEn : m.role}
              </div>
            </div>
          ))}

          {/* Herreros */}
          {campaign.progress.ironworkersConfirmed > 0 && (
            <div className="py-2.5 border-b border-gray-100">
              <div className="text-sm font-medium text-gray-800 leading-snug">
                🔧 {t.teamIronworkersLabel}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {campaign.progress.ironworkersConfirmed} {t.teamIronworkersConfirmedLabel}
              </div>
            </div>
          )}
        </div>

        {/* Taller de producción */}
        {campaign.workshop.name && (
          <div className="max-w-2xl mx-auto border-t border-gray-100 pt-6 text-center">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              {lang === "en" ? "Production workshop" : "Taller de producción"}
            </div>
            <div className="text-sm font-medium text-gray-700">{campaign.workshop.location}</div>
          </div>
        )}
      </div>
    </section>
  );
}
