"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";
import type { GalleryCategory } from "@/data/campaign";
import Lightbox from "./Lightbox";

const galleryIcons: Record<GalleryCategory, string> = {
  produccion: "🔧",
  materiales: "🔩",
  colchones:  "🪑",
  entregas:   "🚛",
  refugios:   "🏠",
};

const galleryBg: Record<GalleryCategory, string> = {
  produccion: "bg-orange-900/30",
  materiales: "bg-gray-700/30",
  colchones:  "bg-blue-900/30",
  entregas:   "bg-green-900/30",
  refugios:   "bg-yellow-900/30",
};

export default function Footer() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const waMain = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}`;
  const hasPhotos = campaign.gallery.some((g) => g.src);
  const hasPartners = campaign.partners.some((p) => p.logo || p.name !== "Por confirmar");

  const realImages = campaign.gallery
    .filter((g) => !!g.src)
    .map((g) => ({
      src: g.src!,
      alt: lang === "en" && g.altEn ? g.altEn : g.alt,
    }));

  const footerLinks: [string, string][] = [
    ["/#proceso",       t.footerLink1],
    ["/#como-ayudar",   t.footerLink2],
    ["/#pedir-cama",    t.footerLink3],
    ["/#progreso",      t.footerLink4],
    ["/#mision",        t.footerLink5],
    ["/#transparencia", t.footerLink6],
    ["/equipo",         t.footerLink7],
    ["/refugios",       t.footerLink8],
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* ── Empresas aliadas ── */}
      {hasPartners && (
        <div className="border-b border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-center mb-5">
              {t.footerPartnersLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {campaign.partners.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex items-center gap-2 text-sm text-gray-400"
                >
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} className="h-6 object-contain" />
                  ) : (
                    <span>🏢</span>
                  )}
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Galería de avances ── */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-center mb-5">
            {t.footerGalleryLabel}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {campaign.gallery.map((item, i) => {
              if (item.src) {
                const realIdx = realImages.findIndex((r) => r.src === item.src);
                const alt = lang === "en" && item.altEn ? item.altEn : item.alt;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxIndex(realIdx)}
                    className={`aspect-square rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-yellow`}
                    aria-label={alt}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-1.5 px-1">
                      <span className="text-[9px] text-white text-center leading-tight font-medium drop-shadow">
                        {alt}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-2xl drop-shadow">🔍</span>
                    </div>
                  </button>
                );
              }

              return (
                <div
                  key={i}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center ${galleryBg[item.category]} border border-white/10`}
                >
                  <span className="text-2xl">{galleryIcons[item.category]}</span>
                  <span className="text-[9px] text-gray-500 mt-1 text-center px-1 leading-tight">
                    {lang === "en" && item.altEn ? item.altEn : item.alt}
                  </span>
                </div>
              );
            })}
          </div>
          {!hasPhotos && (
            <p className="text-center text-xs text-gray-600 mt-3">
              {t.footerGalleryPending}
            </p>
          )}
        </div>
      </div>

      {/* ── Footer principal ── */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Campaign */}
            <div>
              <div className="text-xl font-bold mb-2 font-heading">🛏️ Venezuela Necesita Camas</div>
              <p className="text-gray-400 text-sm leading-relaxed">{t.footerTagline}</p>
              <div className="mt-4 text-sm text-gray-500">
                📍 {campaign.workshop.location}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="font-semibold mb-3 text-gray-300">{t.footerContactLabel}</div>
              <div className="space-y-2 text-sm">
                <a
                  href={waMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  📱 {campaign.contact.whatsappDisplay}
                </a>
                {campaign.contact.whatsappSecondary && (
                  <a
                    href={`https://wa.me/${campaign.contact.whatsappSecondary.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    📱 {campaign.contact.whatsappSecondaryDisplay}
                  </a>
                )}
                {campaign.contact.email && (
                  <a
                    href={`mailto:${campaign.contact.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    ✉️ {campaign.contact.email}
                  </a>
                )}
                {campaign.contact.instagram && (
                  <span className="flex items-center gap-2 text-gray-400">
                    📸 {campaign.contact.instagram}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            <div>
              <div className="font-semibold mb-3 text-gray-300">{t.footerSectionsLabel}</div>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {footerLinks.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-gray-500 hover:text-white transition-colors py-0.5"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Flag accent stripe */}
          <div className="flex gap-0 w-12 mb-6 rounded-full overflow-hidden h-[2px]">
            <div className="flex-1 bg-brand-yellow" />
            <div className="flex-1 bg-blue-500" />
            <div className="flex-1 bg-brand-red" />
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs text-center md:text-left">
              {t.footerCopyright}
            </p>
            <p className="text-gray-700 text-xs">
              {t.footerFundsNote}
            </p>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={realImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </footer>
  );
}
