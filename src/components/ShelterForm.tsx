"use client";
import { useState } from "react";
import { campaign } from "@/data/campaign";

export default function ShelterForm() {
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
    const msg = `Hola, soy de *${form.refugio}* ubicado en *${form.ubicacion}*.
Persona de contacto: ${form.contacto}
WhatsApp: ${form.whatsapp}
Cantidad de personas: ${form.personas}
Camas necesarias: ${form.camas}
Observaciones: ${form.observaciones}

Solicito camas para Venezuela Necesita Camas.`;
    const url = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  // Future: para conectar Formspree, reemplazar handleSubmit con:
  // fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } })

  const inputClass =
    "w-full border border-brand-gray-mid rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 transition-all text-base";

  return (
    <section id="refugios" className="py-16 bg-brand-gray">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Soy refugio y necesito camas</h2>
          <p className="section-subtitle">
            Completa el formulario y nos pondremos en contacto contigo para coordinar la entrega.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre del refugio *
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
                Persona de contacto *
              </label>
              <input
                name="contacto"
                required
                value={form.contacto}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                WhatsApp *
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
                Cantidad de personas en el refugio *
              </label>
              <input
                name="personas"
                required
                type="number"
                min="1"
                value={form.personas}
                onChange={handleChange}
                placeholder="Ej: 45"
                className={inputClass}
              />
            </div>
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
                placeholder="Ej: 10"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Observaciones
            </label>
            <textarea
              name="observaciones"
              rows={3}
              value={form.observaciones}
              onChange={handleChange}
              placeholder="Condiciones del refugio, acceso, urgencias, etc."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="btn-whatsapp w-full justify-center text-base py-4"
          >
            📲 Enviar solicitud por WhatsApp
          </button>

          <p className="text-xs text-gray-400 text-center">
            Al enviar, se abrirá WhatsApp con tu solicitud prellenada. No guardamos tus datos.
          </p>
        </form>
      </div>
    </section>
  );
}
