// ============================================================
// ARCHIVO CENTRAL DE CONFIGURACIÓN DE LA CAMPAÑA
// Edita aquí todos los datos: contacto, pagos, progreso, equipo.
// ============================================================

export const campaign = {
  // ── GENERAL ──────────────────────────────────────────────
  name: "Venezuela Necesita Camas",
  tagline: "Fabricamos literas y conseguimos colchones para familias afectadas por el terremoto.",
  url: "https://venezuelanecesitacamas.vercel.app",
  earthquake: "24 de junio de 2026",

  // ── CONTACTO PRINCIPAL ────────────────────────────────────
  contact: {
    whatsapp: "+584247333705",            // Mariangel Carvajal — Logística / Materiales
    whatsappDisplay: "+58 424-733-3705",
    whatsappSecondary: "+584243310544",   // Contacto secundario
    whatsappSecondaryDisplay: "+58 424-331-0544",
    email: "",          // Dejar vacío hasta confirmar
    instagram: "",      // Dejar vacío hasta confirmar
    website: "venezuelanecesitacamas.vercel.app",
  },

  // ── PROGRESO (editar cada vez que haya avances) ───────────
  progress: {
    litersGoal: 100,
    mattressesGoal: 200,
    litersFinanced: 0,
    mattressesObtained: 0,
    litersDelivered: 0,
    sheltersServed: 0,
    ironworkersNeeded: 8,
    ironworkersConfirmed: 2,
    lastUpdated: "28 de junio de 2026",
  },

  // ── MÉTODOS DE PAGO ───────────────────────────────────────
  payments: {
    pagoMovil: {
      enabled: false,           // Cambiar a true cuando estén confirmados los datos
      banco: "Por confirmar",
      telefono: "Por confirmar",
      cedula: "Por confirmar",
      nombre: "Por confirmar",
      concepto: "Camas VNZ",
    },
    zelle: {
      enabled: false,
      email: "Por confirmar",
      nombre: "Por confirmar",
      nota: "Información disponible próximamente.",
    },
    zinli: {
      enabled: false,
      usuario: "Por confirmar",
      email: "Por confirmar",
      nota: "Información disponible próximamente.",
    },
    binance: {
      enabled: false,
      pay_id: "Por confirmar",
      wallet_usdt_trc20: "Por confirmar",
      nota: "Red TRC-20 (TRON). Información disponible próximamente.",
    },
    // Opcionales — se ocultan automáticamente si están vacíos
    stripeLink: "",   // Ej: "https://buy.stripe.com/xxxx"
    paypalLink: "",   // Ej: "https://www.paypal.com/donate/?hosted_button_id=xxx"
  },

  // ── MONTOS SUGERIDOS (null = "Monto por confirmar") ───────
  sponsorship: {
    litera: {
      showAmounts: false,   // true cuando tengas los montos reales
      bsf: null as number | null,
      usd: null as number | null,
      labelBsf: "Monto por confirmar",
      labelUsd: "Amount TBD",
    },
    colchon: {
      showAmounts: false,
      bsf: null as number | null,
      usd: null as number | null,
      labelBsf: "Monto por confirmar",
      labelUsd: "Amount TBD",
    },
    freeMin: {
      bsf: null as number | null,
      usd: 5 as number | null,
    },
  },

  // ── MATERIALES NECESARIOS ─────────────────────────────────
  materialsNeeded: [
    "Tubos y perfiles de hierro",
    "Electrodos para soldar",
    "Pintura anticorrosiva",
    "Tornillos y ferretería",
    "Transporte y flete",
    "Herramientas (esmeriles, soldadoras)",
    "Colchones (sencillos o dobles)",
    "Somieres o bases",
  ],

  // ── EQUIPO ────────────────────────────────────────────────
  team: [
    { name: "Valentina Gómez Medina",    role: "Coordinadora general",        initials: "VG" },
    { name: "Estefanía Salgado",         role: "Logística",                   initials: "ES" },
    { name: "Mariangel Carvajal",        role: "Logística / Materiales",      initials: "MC" },
    { name: "Mauricio Hernández",        role: "Alianza con organizaciones",  initials: "MH" },
    { name: "Omar Ramírez",              role: "Alianza con organizaciones",  initials: "OR" },
    { name: "Daniel Rodríguez",          role: "Marketing",                   initials: "DR" },
    { name: "Jennifer Dolinski Azócar", role: "Marketing",                   initials: "JD" },
    { name: "Luis Torrealba",            role: "Finanzas",                    initials: "LT" },
    { name: "Gloria Chacón",             role: "IT",                          initials: "GC" },
  ],

  // ── EMPRESA DE COLCHONES (Aragua) ────────────────────────
  mattressCompany: {
    name: "",       // Ej: "Colchones El Descanso"
    location: "",   // Ej: "Maracay, Aragua"
    contact: "",
  },

  // ── GALPÓN / PUNTO DE PRODUCCIÓN ─────────────────────────
  workshop: {
    name: "Punto de producción — Turmero",
    location: "Casco Central de Turmero, calle Petión, frente al antiguo Banco Fondo Común",
    contact: "",
  },

  // ── HERREROS CONFIRMADOS ──────────────────────────────────
  confirmedIronworkers: [
    // { name: "Por confirmar", location: "Aragua" },
  ] as { name: string; location: string }[],

  // ── EMPRESAS ALIADAS (logos) ──────────────────────────────
  partners: [
    { name: "Por confirmar", logo: "", url: "" },
    { name: "Por confirmar", logo: "", url: "" },
    { name: "Por confirmar", logo: "", url: "" },
    { name: "Por confirmar", logo: "", url: "" },
  ],

  // ── GALERÍA / AVANCES ────────────────────────────────────
  // Agregar src con rutas reales cuando estén disponibles las fotos propias
  gallery: [
    { src: "", alt: "Fabricación de literas",  category: "produccion" as const },
    { src: "", alt: "Materiales recibidos",    category: "materiales" as const },
    { src: "", alt: "Colchones donados",       category: "colchones"  as const },
    { src: "", alt: "Entrega en refugio",      category: "entregas"   as const },
    { src: "", alt: "Familias en refugio",     category: "refugios"   as const },
    { src: "", alt: "Producción en taller",    category: "produccion" as const },
  ],

  // ── TEXTOS EDITABLES ─────────────────────────────────────
  texts: {
    mision: "Somos un grupo de voluntarios, herreros, empresas y ciudadanos organizados para fabricar camas y entregar colchones a refugios afectados. Cada aporte se transforma en materiales, trabajo, transporte y descanso digno para una familia.",
    transparencia: "Publicaremos avances, fotos de producción, entregas y actualización del contador para que cada donante pueda ver el impacto de su aporte.",
    footerTagline: "Una iniciativa ciudadana de voluntarios venezolanos. Todos los fondos se destinan directamente a materiales, fabricación y logística.",
  },

  // ── TRADUCCIONES ES/EN (solo Hero, botones, share, meta) ─
  i18n: {
    es: {
      metaTitle: "Venezuela Necesita Camas | Campaña de Ayuda Humanitaria",
      metaDescription: "Campaña para fabricar y entregar literas y colchones a familias afectadas por el terremoto en Venezuela.",
      heroTitle: "Venezuela necesita camas",
      heroSubtitle: "Tras el terremoto, muchas familias quedaron durmiendo en refugios, pisos y espacios improvisados. Estamos fabricando literas y consiguiendo colchones para devolverles un lugar digno donde descansar.",
      btnDonate: "Donar ahora",
      btnHelp: "Quiero ayudar",
      btnShelter: "Soy refugio y necesito camas",
      shareTitle: "Comparte esta campaña",
      shareMsg: "🛏️ Venezuela necesita camas. Ayuda a fabricar literas y conseguir colchones para familias afectadas por el terremoto. Cada donación cuenta:",
      shareCopied: "¡Enlace copiado!",
    },
    en: {
      metaTitle: "Venezuela Needs Beds | Humanitarian Aid Campaign",
      metaDescription: "Campaign to manufacture and deliver bunk beds and mattresses to families affected by the earthquake in Venezuela.",
      heroTitle: "Venezuela needs beds",
      heroSubtitle: "After the earthquake, many families were left sleeping on shelter floors and improvised spaces. We are manufacturing bunk beds and sourcing mattresses to give them a dignified place to rest.",
      btnDonate: "Donate now",
      btnHelp: "I want to help",
      btnShelter: "I run a shelter and need beds",
      shareTitle: "Share this campaign",
      shareMsg: "🛏️ Venezuela needs beds. Help manufacture bunk beds and get mattresses for families affected by the earthquake. Every donation counts:",
      shareCopied: "Link copied!",
    },
  },
};

export type Lang = "es" | "en";
export type GalleryCategory = "produccion" | "materiales" | "colchones" | "entregas" | "refugios";
