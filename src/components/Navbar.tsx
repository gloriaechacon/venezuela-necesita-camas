"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = campaign.i18n[lang];

  const switchTo = (target: "es" | "en") => {
    if (lang !== target) toggle();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo — Link to "/" always returns to home regardless of current page */}
        <Link href="/" className="text-white font-bold text-lg leading-tight font-heading hover:opacity-80 transition-opacity">
          🛏️ <span className="hidden sm:inline">Venezuela Necesita Camas</span>
          <span className="sm:hidden">VNZ Camas</span>
        </Link>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="/#como-ayudar" className="hover:text-white transition-colors">{t.navHelp}</a>
          <a href="/refugios" className="hover:text-white transition-colors">{t.navShelters}</a>
          <a href="/equipo" className="hover:text-white transition-colors">{t.navTeam}</a>
        </div>

        {/* Right: lang buttons + CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1" aria-label="Cambiar idioma / Switch language">
            <button
              onClick={() => switchTo("es")}
              className={`text-xs font-bold px-2.5 py-1 rounded transition-colors ${
                lang === "es"
                  ? "bg-white text-gray-900"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => switchTo("en")}
              className={`text-xs font-bold px-2.5 py-1 rounded transition-colors ${
                lang === "en"
                  ? "bg-white text-gray-900"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              EN
            </button>
          </div>

          <a href="/#pedir-cama" className="btn-primary text-sm px-4 py-2">
            {t.btnDonate}
          </a>
        </div>
      </div>
    </nav>
  );
}
