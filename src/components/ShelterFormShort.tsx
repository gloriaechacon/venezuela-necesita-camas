"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function ShelterFormShort() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];

  const [form, setForm] = useState({
    refugio: "",
    ubicacion: "",
    camas: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = t.waShortFormMsg
      .replace("{refugio}", form.refugio)
      .replace("{ubicacion}", form.ubicacion)
      .replace("{camas}", form.camas)
      .replace("{whatsapp}", form.whatsapp);
    const url = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition-all text-base bg-white";

  return (
    <section id="pedir-cama" className="py-16 bg-gray-900">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">{t.shelterShortTitle}</h2>
          <p className="text-gray-400 text-lg">
            {t.shelterShortSubtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterShortLabelName}
              </label>
              <input
                name="refugio"
                required
                value={form.refugio}
                onChange={handleChange}
                placeholder={t.shelterShortPlaceholderName}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterShortLabelLocation}
              </label>
              <input
                name="ubicacion"
                required
                value={form.ubicacion}
                onChange={handleChange}
                placeholder={t.shelterShortPlaceholderLocation}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterShortLabelBeds}
              </label>
              <input
                name="camas"
                required
                type="number"
                min="1"
                value={form.camas}
                onChange={handleChange}
                placeholder={t.shelterShortPlaceholderBeds}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterShortLabelWA}
              </label>
              <input
                name="whatsapp"
                required
                type="tel"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="+58 412-000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <button type="submit" className="btn-whatsapp w-full justify-center text-base py-4">
            {t.shelterShortSubmit}
          </button>

          <p className="text-center text-xs text-gray-400">
            {t.shelterShortMoreDetails}{" "}
            <a href="/refugios" className="text-gray-700 underline font-medium">
              {t.shelterShortFullFormLink}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
