"use client";
import { useEffect, useCallback } from "react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [onClose, prev, next]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const img = images[index];
  const showNav = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-gray-300 transition-colors z-10"
        aria-label="Cerrar"
      >
        ×
      </button>

      {showNav && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10 pointer-events-none">
          {index + 1} / {images.length}
        </div>
      )}

      {showNav && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl leading-none hover:text-gray-300 transition-colors z-10 select-none px-2"
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        className="max-w-[88vw] max-h-[82vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {showNav && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl leading-none hover:text-gray-300 transition-colors z-10 select-none px-2"
          aria-label="Siguiente"
        >
          ›
        </button>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center z-10 px-4 pointer-events-none">
        {img.alt}
      </div>
    </div>
  );
}
