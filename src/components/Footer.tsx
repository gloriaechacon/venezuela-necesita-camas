import { campaign } from "@/data/campaign";
import type { GalleryCategory } from "@/data/campaign";

const galleryIcons: Record<GalleryCategory, string> = {
  produccion: "🔧",
  materiales: "🔩",
  colchones:  "🪑",
  entregas:   "🚛",
  refugios:   "🏠",
};

const galleryBg: Record<GalleryCategory, string> = {
  produccion: "bg-orange-900/30",
  materiales: "bg-gray-700/30",
  colchones:  "bg-blue-900/30",
  entregas:   "bg-green-900/30",
  refugios:   "bg-yellow-900/30",
};

export default function Footer() {
  const waMain = `https://wa.me/${campaign.contact.whatsapp.replace(/\D/g, "")}`;
  const hasPhotos = campaign.gallery.some((g) => g.src);
  const hasPartners = campaign.partners.some((p) => p.logo || p.name !== "Por confirmar");

  return (
    <footer className="bg-brand-blue-dark text-white">
      {/* ── Empresas aliadas (simplificado) ── */}
      {hasPartners && (
        <div className="border-b border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest text-center mb-5">
              Empresas y organizaciones aliadas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {campaign.partners.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/8 border border-white/10 rounded-xl px-5 py-3 flex items-center gap-2 text-sm text-blue-200"
                >
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} className="h-6 object-contain" />
                  ) : (
                    <span>🏢</span>
                  )}
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Galería de avances (simplificada) ── */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest text-center mb-5">
            Galería de avances
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {campaign.gallery.map((item, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center ${galleryBg[item.category]} border border-white/10`}
              >
                {item.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <span className="text-2xl">{galleryIcons[item.category]}</span>
                    <span className="text-[9px] text-blue-300 mt-1 text-center px-1 leading-tight">
                      {item.alt}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
          {!hasPhotos && (
            <p className="text-center text-xs text-blue-400 mt-3">
              Las fotos propias de producción y entregas se publicarán aquí.
            </p>
          )}
        </div>
      </div>

      {/* ── Footer principal ── */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Campaign */}
            <div>
              <div className="text-xl font-bold mb-2">🛏️ Venezuela Necesita Camas</div>
              <p className="text-blue-200 text-sm leading-relaxed">{campaign.texts.footerTagline}</p>
              <div className="mt-4 text-sm text-blue-300">
                📍 {campaign.workshop.location}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="font-semibold mb-3 text-blue-100">Contacto</div>
              <div className="space-y-2 text-sm">
                <a
                  href={waMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                >
                  📱 {campaign.contact.whatsappDisplay}
                </a>
                {campaign.contact.whatsappSecondary && (
                  <a
                    href={`https://wa.me/${campaign.contact.whatsappSecondary.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                  >
                    📱 {campaign.contact.whatsappSecondaryDisplay}
                  </a>
                )}
                {campaign.contact.email && (
                  <a
                    href={`mailto:${campaign.contact.email}`}
                    className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                  >
                    ✉️ {campaign.contact.email}
                  </a>
                )}
                {campaign.contact.instagram && (
                  <span className="flex items-center gap-2 text-blue-200">
                    📸 {campaign.contact.instagram}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            <div>
              <div className="font-semibold mb-3 text-blue-100">Secciones</div>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {[
                  ["/#proceso", "Cómo funciona"],
                  ["/#como-ayudar", "Cómo ayudar"],
                  ["/#pedir-cama", "Pedir una cama"],
                  ["/#progreso", "Avance"],
                  ["/#mision", "Nuestra misión"],
                  ["/#transparencia", "Transparencia"],
                  ["/equipo", "Quiénes somos"],
                  ["/refugios", "Formulario refugios"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-blue-300 hover:text-white transition-colors py-0.5"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-xs text-center md:text-left">
              © 2026 Venezuela Necesita Camas. Campaña de ayuda humanitaria ciudadana.
            </p>
            <p className="text-blue-400 text-xs">
              Todos los fondos se destinan directamente a materiales, fabricación y logística.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
