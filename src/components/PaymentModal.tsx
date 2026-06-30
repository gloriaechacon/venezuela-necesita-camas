"use client";
import { useLang } from "@/context/LanguageContext";
import { campaign } from "@/data/campaign";

interface Props {
  onClose: () => void;
}

const methods = [
  { id: "pagoMovil", label: "Pago Móvil", icon: "📱" },
  { id: "zelle",     label: "Zelle",       icon: "💵" },
  { id: "zinli",     label: "Zinli",        icon: "💳" },
  { id: "binance",   label: "Binance Pay",  icon: "🔶" },
] as const;

export default function PaymentModal({ onClose }: Props) {
  const { lang } = useLang();
  const t = campaign.i18n[lang];
  const wa = campaign.contact.whatsapp.replace(/\D/g, "");

  const waRequest = (label: string) =>
    `https://wa.me/${wa}?text=${encodeURIComponent(
      t.waPaymentRequest.replace("{method}", label)
    )}`;

  const waConfirm = `https://wa.me/${wa}?text=${encodeURIComponent(t.waDonationConfirm)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{t.paymentTitle}</h3>
            <p className="text-gray-500 text-sm mt-1">{t.paymentSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none ml-4 flex-shrink-0"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-3">
          {/* Métodos de pago — lista con botón WA */}
          {methods.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between py-3 px-4 border border-gray-100 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{m.icon}</span>
                <span className="font-semibold text-gray-800">{m.label}</span>
              </div>
              <a
                href={waRequest(m.label)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs px-3 py-2"
              >
                {t.paymentRequestBtn}
              </a>
            </div>
          ))}

          {/* Pago internacional (Stripe / PayPal) si está configurado */}
          {(campaign.payments.stripeLink || campaign.payments.paypalLink) && (
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                {t.paymentInternational}
              </p>
              <div className="flex flex-col gap-2">
                {campaign.payments.stripeLink && (
                  <a
                    href={campaign.payments.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    {t.paymentStripeBtn}
                  </a>
                )}
                {campaign.payments.paypalLink && (
                  <a
                    href={campaign.payments.paypalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    {t.paymentPaypalBtn}
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Nota */}
          <p className="text-xs text-gray-400 text-center pt-1">{t.paymentNote}</p>
        </div>
      </div>
    </div>
  );
}
