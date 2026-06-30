"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

export default function ShelterForm() {
  const { lang } = useLang();
  const t = campaign.i18n[lang];

  const [form, setForm] = useState({
    refugio: "",
    ubicacion: "",
    contacto: "",
    whatsapp: "",
    personas: "",
    camas: "",
    observaciones: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = t.waFullFormMsg
      .replace("{refugio}", form.refugio)
      .replace("{ubicacion}", form.ubicacion)
      .replace("{contacto}", form.contacto)
      .replace("{whatsapp}", form.whatsapp)
      .replace("{personas}", form.personas)
      .replace("{camas}", form.camas)
      .replace("{observaciones}", form.observaciones);
    const url = `https://wa.me/${campaign.contact.whatsappSecondary!.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full border border-brand-gray-mid rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 transition-all text-base";

  return (
    <section id="refugios" className="py-16 bg-brand-gray">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">{t.shelterFormTitle}</h2>
          <p className="section-subtitle">
            {t.shelterFormSubtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterFormLabelName}
              </label>
              <input
                name="refugio"
                required
                value={form.refugio}
                onChange={handleChange}
                placeholder={t.shelterFormPlaceholderName}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterFormLabelLocation}
              </label>
              <input
                name="ubicacion"
                required
                value={form.ubicacion}
                onChange={handleChange}
                placeholder={t.shelterFormPlaceholderLocation}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterFormLabelContact}
              </label>
              <input
                name="contacto"
                required
                value={form.contacto}
                onChange={handleChange}
                placeholder={t.shelterFormPlaceholderContact}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterFormLabelWA}
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

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterFormLabelPeople}
              </label>
              <input
                name="personas"
                required
                type="number"
                min="1"
                value={form.personas}
                onChange={handleChange}
                placeholder={t.shelterFormPlaceholderPeople}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t.shelterFormLabelBeds}
              </label>
              <input
                name="camas"
                required
                type="number"
                min="1"
                value={form.camas}
                onChange={handleChange}
                placeholder={t.shelterFormPlaceholderBeds}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t.shelterFormLabelNotes}
            </label>
            <textarea
              name="observaciones"
              rows={3}
              value={form.observaciones}
              onChange={handleChange}
              placeholder={t.shelterFormPlaceholderNotes}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="btn-whatsapp w-full justify-center text-base py-4"
          >
            {t.shelterFormSubmit}
          </button>

          <p className="text-xs text-gray-400 text-center">
            {t.shelterFormDisclaimer}
          </p>
        </form>
      </div>
    </section>
  );
}
