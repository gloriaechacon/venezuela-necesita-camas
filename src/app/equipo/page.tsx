"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function EquipoPage() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-brand-blue py-12 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">{t.equipoPageTitle}</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto px-4">
            {t.equipoPageSubtitle}
          </p>
          <a
            href="/"
            className="inline-block mt-6 text-brand-yellow text-sm font-semibold hover:underline"
          >
            {t.equipoPageBack}
          </a>
        </div>
        <Team />
      </main>
      <Footer />
    </>
  );
}
