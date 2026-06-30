"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import type { GalleryCategory } from "@/data/campaign";
import { campaign } from "@/data/campaign";
import Lightbox from "./Lightbox";

const categoryIcons: Record<GalleryCategory | "todas", string> = {
  todas: "📷",
  produccion: "🔧",
  materiales: "🔩",
  colchones: "🪑",
  entregas: "🚛",
  refugios: "🏠",
};

const placeholderBg: Record<GalleryCategory, string> = {
  produccion: "bg-orange-100",
  materiales: "bg-gray-100",
  colchones: "bg-blue-50",
  entregas: "bg-green-50",
  refugios: "bg-yellow-50",
};

export default function Gallery() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const [filter, setFilter] = useState<GalleryCategory | "todas">("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: (GalleryCategory | "todas")[] = [
    "todas", "produccion", "materiales", "colchones", "entregas", "refugios",
  ];

  const categoryLabels: Record<GalleryCategory | "todas", string> = {
    todas:      t.galleryCatAll,
    produccion: t.galleryCatProduccion,
    materiales: t.galleryCatMateriales,
    colchones:  t.galleryCatColchones,
    entregas:   t.galleryCatEntregas,
    refugios:   t.galleryCatRefugios,
  };

  const filtered = filter === "todas"
    ? campaign.gallery
    : campaign.gallery.filter((g) => g.category === filter);

  // All real images across the full gallery (for correct lightbox indices)
  const allRealImages = campaign.gallery
    .filter((g) => !!g.src)
    .map((g) => ({
      src: g.src!,
      alt: lang === "en" && g.altEn ? g.altEn : g.alt,
    }));

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">{t.galleryTitle}</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === c
                  ? "bg-brand-blue text-white"
                  : "bg-brand-gray text-gray-600 hover:bg-brand-gray-mid"
              }`}
            >
              <span>{categoryIcons[c]}</span>
              {categoryLabels[c]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, i) => {
            if (item.src) {
              const realIdx = allRealImages.findIndex((r) => r.src === item.src);
              const alt = lang === "en" && item.altEn ? item.altEn : item.alt;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxIndex(realIdx)}
                  className="aspect-square rounded-2xl overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  aria-label={alt}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-3 px-2">
                    <span className="text-xs text-white text-center leading-tight font-medium drop-shadow">
                      {alt}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <span className="text-white text-3xl drop-shadow">🔍</span>
                  </div>
                </button>
              );
            }

            return (
              <div
                key={i}
                className={`aspect-square rounded-2xl overflow-hidden flex flex-col items-center justify-center ${
                  placeholderBg[item.category]
                } border-2 border-dashed border-gray-200`}
              >
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">{categoryIcons[item.category]}</div>
                  <p className="text-xs text-gray-400 font-medium">
                    {lang === "en" && item.altEn ? item.altEn : item.alt}
                  </p>
                  <p className="text-xs text-gray-300 mt-1">{t.galleryPhotoSoon}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          {t.galleryFootnote}
        </p>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allRealImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
