"use client";
import { useState } from "react";
import { campaign } from "@/data/campaign";

type Method = "pagoMovil" | "zelle" | "zinli" | "binance";

interface Props {
  onClose: () => void;
}

export default function PaymentModal({ onClose }: Props) {
  const [active, setActive] = useState<Method | null>(null);
  const p = campaign.payments;

  const waConfirm = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, ya realicé mi donación para Venezuela Necesita Camas. Adjunto comprobante."
  )}`;

  const methods: { id: Method; label: string; icon: string }[] = [
    { id: "pagoMovil", label: "Pago Móvil", icon: "📱" },
    { id: "zelle",     label: "Zelle",       icon: "💵" },
    { id: "zinli",     label: "Zinli",        icon: "💳" },
    { id: "binance",   label: "Binance Pay",  icon: "🔶" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-blue text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">💛 Donar ahora</h3>
              <p className="text-blue-100 text-sm mt-1">Selecciona tu método de pago</p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white text-2xl leading-none">×</button>
          </div>
        </div>

        <div className="p-6">
          {/* Method tabs */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(active === m.id ? null : m.id)}
                className={`flex items-center gap-2 p-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                  active === m.id
                    ? "border-brand-blue bg-blue-50 text-brand-blue"
                    : "border-brand-gray-mid text-gray-600 hover:border-brand-blue"
                }`}
              >
                <span className="text-xl">{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>

          {/* Accordion content */}
          {active === "pagoMovil" && (
            p.pagoMovil.enabled ? (
              <DataBox title="Pago Móvil" icon="📱">
                <Row label="Banco" value={p.pagoMovil.banco} />
                <Row label="Teléfono" value={p.pagoMovil.telefono} copyable />
                <Row label="Cédula" value={p.pagoMovil.cedula} copyable />
                <Row label="Nombre" value={p.pagoMovil.nombre} />
                <Row label="Concepto" value={p.pagoMovil.concepto} />
              </DataBox>
            ) : <PendingBox title="Pago Móvil" icon="📱" />
          )}
          {active === "zelle" && (
            p.zelle.enabled ? (
              <DataBox title="Zelle" icon="💵">
                <Row label="Email" value={p.zelle.email} copyable />
                <Row label="A nombre de" value={p.zelle.nombre} />
                <Row label="Nota" value={p.zelle.nota} note />
              </DataBox>
            ) : <PendingBox title="Zelle" icon="💵" />
          )}
          {active === "zinli" && (
            p.zinli.enabled ? (
              <DataBox title="Zinli" icon="💳">
                <Row label="Usuario" value={p.zinli.usuario} copyable />
                <Row label="Email" value={p.zinli.email} copyable />
                <Row label="Nota" value={p.zinli.nota} note />
              </DataBox>
            ) : <PendingBox title="Zinli" icon="💳" />
          )}
          {active === "binance" && (
            p.binance.enabled ? (
              <DataBox title="Binance Pay" icon="🔶">
                <Row label="Pay ID" value={p.binance.pay_id} copyable />
                <Row label="Wallet USDT TRC-20" value={p.binance.wallet_usdt_trc20} copyable />
                <Row label="Nota" value={p.binance.nota} note />
              </DataBox>
            ) : <PendingBox title="Binance Pay" icon="🔶" />
          )}

          {/* Optional: Stripe / PayPal */}
          {(p.stripeLink || p.paypalLink) && (
            <div className="mt-4 pt-4 border-t border-brand-gray-mid">
              <p className="text-sm font-semibold text-gray-500 mb-3">Pago internacional</p>
              <div className="flex flex-col gap-2">
                {p.stripeLink && (
                  <a
                    href={p.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    💳 Donar con tarjeta (Stripe)
                  </a>
                )}
                {p.paypalLink && (
                  <a
                    href={p.paypalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    🅿️ Donar con PayPal
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Confirm by WhatsApp */}
          <a
            href={waConfirm}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full mt-6 justify-center"
          >
            ✅ Ya doné — Confirmar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function PendingBox({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4 text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-bold text-yellow-800 mb-1">{title}</div>
      <p className="text-sm text-yellow-700">
        Los datos de este método están siendo confirmados.
        <br />
        Escríbenos por WhatsApp para coordinar tu donación.
      </p>
    </div>
  );
}

function DataBox({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
      <div className="font-bold text-brand-blue mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Row({ label, value, copyable, note }: {
  label: string;
  value: string;
  copyable?: boolean;
  note?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (note) {
    return (
      <p className="text-xs text-gray-500 italic border-t border-blue-100 pt-2 mt-2">{value}</p>
    );
  }

  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{label}:</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-800">{value}</span>
        {copyable && (
          <button
            onClick={copy}
            className="text-xs text-brand-blue border border-brand-blue rounded px-2 py-0.5 hover:bg-brand-blue hover:text-white transition-colors"
          >
            {copied ? "✓" : "Copiar"}
          </button>
        )}
      </div>
    </div>
  );
}
