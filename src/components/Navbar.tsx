"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = campaign.i18n[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-blue shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#hero" className="text-white font-bold text-lg leading-tight">
          🛏️ <span className="hidden sm:inline">Venezuela Necesita Camas</span>
          <span className="sm:hidden">VNZ Camas</span>
        </a>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-100">
          <a href="/#como-ayudar" className="hover:text-white transition-colors">Cómo ayudar</a>
          <a href="/#progreso" className="hover:text-white transition-colors">Avance</a>
          <a href="/refugios" className="hover:text-white transition-colors">Refugios</a>
          <a href="/equipo" className="hover:text-white transition-colors">Equipo</a>
        </div>

        {/* Right: donate + lang */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-bold text-blue-200 border border-blue-300 rounded px-2 py-1 hover:bg-blue-700 transition-colors"
            aria-label="Cambiar idioma / Switch language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#como-ayudar"
            className="btn-primary text-sm px-4 py-2"
          >
            {t.btnDonate}
          </a>
        </div>
      </div>
    </nav>
  );
}
