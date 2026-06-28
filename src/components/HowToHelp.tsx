"use client";
import { useState } from "react";
import { campaign } from "@/data/campaign";
import PaymentModal from "./PaymentModal";

export default function HowToHelp() {
  const [showPayment, setShowPayment] = useState(false);
  const wa = (msg: string) =>
    `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

  const materialsList = campaign.materialsNeeded.join(", ");

  const cards = [
    {
      icon: "💛",
      title: "Donar dinero",
      description:
        "Tu aporte monetario nos permite comprar materiales, pagar herreros justos y costear el transporte hacia los refugios.",
      action: (
        <button onClick={() => setShowPayment(true)} className="btn-primary w-full justify-center mt-4">
          Ver métodos de pago
        </button>
      ),
    },
    {
      icon: "🔩",
      title: "Donar materiales",
      description: `Aceptamos: ${materialsList}.`,
      action: (
        <a
          href={wa("Hola, quiero donar materiales para Venezuela Necesita Camas.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center mt-4"
        >
          📲 Coordinar donación de materiales
        </a>
      ),
    },
    {
      icon: "🛠️",
      title: "Ser voluntario",
      description:
        "Necesitamos herreros con equipo, apoyo logístico, transporte, carga y descarga.",
      action: (
        <a
          href={wa("Hola, quiero ser voluntario en Venezuela Necesita Camas.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center mt-4"
        >
          📲 Quiero ser voluntario
        </a>
      ),
    },
    {
      icon: "🏢",
      title: "Empresas aliadas",
      description:
        "Si tu empresa puede apoyar con colchones, materiales, transporte, galpón, herramientas o fondos, queremos coordinar contigo.",
      action: (
        <a
          href={wa("Hola, represento una empresa y quiero apoyar la campaña Venezuela Necesita Camas.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center mt-4"
        >
          📲 Contactar como empresa
        </a>
      ),
    },
  ];

  return (
    <section id="como-ayudar" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Cómo puedes ayudar?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Hay muchas formas de sumarte. Elige la que más se adapte a ti.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="card flex flex-col">
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-brand-blue text-lg mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{c.description}</p>
              {c.action}
            </div>
          ))}
        </div>
      </div>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </section>
  );
}
