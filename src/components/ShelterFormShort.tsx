"use client";
import { useState } from "react";
import { campaign } from "@/data/campaign";

export default function ShelterFormShort() {
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
    const msg =
      `Hola, soy de *${form.refugio}* (${form.ubicacion}). ` +
      `Necesitamos ${form.camas} camas. Mi WhatsApp: ${form.whatsapp}. ` +
      `Solicitud enviada desde Venezuela Necesita Camas.`;
    const url = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full border border-brand-gray-mid rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 transition-all text-base bg-white";

  return (
    <section id="pedir-cama" className="py-16 bg-brand-blue">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">🏠 Pedir una cama</h2>
          <p className="text-blue-100 text-lg">
            ¿Estás en un refugio o eres una familia afectada? Cuéntanos qué necesitas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre del refugio o familia *
              </label>
              <input
                name="refugio"
                required
                value={form.refugio}
                onChange={handleChange}
                placeholder="Ej: Refugio Esperanza"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ubicación *
              </label>
              <input
                name="ubicacion"
                required
                value={form.ubicacion}
                onChange={handleChange}
                placeholder="Ej: La Guaira, Vargas"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Camas necesarias *
              </label>
              <input
                name="camas"
                required
                type="number"
                min="1"
                value={form.camas}
                onChange={handleChange}
                placeholder="Ej: 5"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tu WhatsApp *
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
            📲 Enviar solicitud por WhatsApp
          </button>

          <p className="text-center text-xs text-gray-400">
            ¿Necesitas enviar más detalles?{" "}
            <a href="/refugios" className="text-brand-blue underline font-medium">
              Usa el formulario completo →
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
