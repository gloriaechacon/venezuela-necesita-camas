"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "@/data/campaign";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "es", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  const toggle = () =>
    setLang((l) => {
      const next = l === "es" ? "en" : "es";
      localStorage.setItem("lang", next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
