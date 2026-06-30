"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

type ProgressData = typeof campaign.progress;

export default function Progress() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  // null = datos aún no cargados; evita mostrar valores de campaign.ts
  // antes de que llegue la respuesta real del sheet.
  const [p, setP] = useState<ProgressData | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/progress", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const { _source, ...rest } = data as ProgressData & { _source: string };
        setP({ ...campaign.progress, ...rest });
        if (_source === "sheets") setIsLive(true);
      })
      .catch((err: unknown) => {
        if ((err as Error).name === "AbortError") return;
        setP(campaign.progress);
      });

    return () => controller.abort();
  }, []);

  const literasPct = p ? Math.round((p.litersFinanced / p.litersGoal) * 100) : 0;
  const colchonesPct = p ? Math.round((p.mattressesObtained / p.mattressesGoal) * 100) : 0;

  return (
    <section id="progreso" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">{t.progressTitle}</h2>
          <p className="text-gray-500 text-base flex items-center justify-center gap-2 flex-wrap">
            {t.progressLastUpdated} <strong>{p ? p.lastUpdated : "–"}</strong>
            {isLive && (
              <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Live
              </span>
            )}
          </p>
        </div>

        {/* Barras de progreso */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="card">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-900">{t.progressBunkBedsFundedBar}</span>
              <span className="text-gray-900 font-black">{p ? `${literasPct}%` : "–"}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 mb-1">
              <div
                className="bg-brand-yellow h-4 rounded-full transition-all duration-1000"
                style={{ width: `${Math.max(literasPct, literasPct > 0 ? 2 : 0)}%` }}
              />
            </div>
            <div className="text-sm text-gray-500">
              {p ? p.litersFinanced : "–"} {t.progressOfLabel} {p ? p.litersGoal : "–"} {t.progressBunkBedsUnit}
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-900">{t.progressMattressesObtainedBar}</span>
              <span className="text-gray-900 font-black">{p ? `${colchonesPct}%` : "–"}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 mb-1">
              <div
                className="bg-brand-blue h-4 rounded-full transition-all duration-1000"
                style={{ width: `${Math.max(colchonesPct, colchonesPct > 0 ? 2 : 0)}%` }}
              />
            </div>
            <div className="text-sm text-gray-500">
              {p ? p.mattressesObtained : "–"} {t.progressOfLabel} {p ? p.mattressesGoal : "–"} {t.progressMattressesUnit}
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <StatCard label={t.progressGoalBunkBeds}         value={p?.litersGoal}             accent />
          <StatCard label={t.progressGoalMattresses}       value={p?.mattressesGoal}          accent />
          <StatCard label={t.progressBunkBedsFunded}       value={p?.litersFinanced}          total={p?.litersGoal} />
          <StatCard label={t.progressMattressesObtained}   value={p?.mattressesObtained}      total={p?.mattressesGoal} />
          <StatCard label={t.progressBunkBedsDelivered}    value={p?.litersDelivered}         total={p?.litersGoal} />
          <StatCard label={t.progressSheltersServed}       value={p?.sheltersServed} />
          <StatCard label={t.progressIronworkersNeeded}    value={p?.ironworkersNeeded} />
          <StatCard label={t.progressIronworkersConfirmed} value={p?.ironworkersConfirmed}    total={p?.ironworkersNeeded} />
        </div>

        {campaign.googleSheetsCsvUrl && (
          <p className="text-center text-xs text-gray-400 mt-6">{t.progressLiveNote}</p>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value, total, accent }: {
  label: string;
  value: string | number | undefined;
  total?: string | number;
  accent?: boolean;
}) {
  const display = value !== undefined ? value : "–";
  return (
    <div className={`card text-center ${accent ? "border-brand-yellow border-2" : ""}`}>
      <div className="text-4xl font-black mb-1 text-gray-900">
        {display}
        {value !== undefined && total !== undefined && (
          <span className="text-2xl text-gray-300">/{total}</span>
        )}
      </div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  );
}
