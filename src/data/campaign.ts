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
  earthquakeEn: "June 24, 2026",

  // ── GOOGLE SHEETS (contador en tiempo real) ───────────────
  // Para activar: publicar la hoja en Google Sheets
  //   Archivo → Compartir → Publicar en la web → Hoja1 → CSV → Publicar
  // Luego pegar el ID de la URL entre /d/ y /edit:
  //   https://docs.google.com/spreadsheets/d/[ESTE_ID]/edit
  // Estructura de la hoja (columna A = campo, columna B = valor):
  //   campo                  | valor
  //   literas_fabricadas     | 0
  //   colchones_conseguidos  | 0
  //   literas_entregadas     | 0
  //   refugios_atendidos     | 0
  //   herreros_confirmados   | 2
  //   ultima_actualizacion   | 30 de junio de 2026
  googleSheetsCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ274qwpamR8o1_rLqdABb1iS3dfvG-8dG3uJ637Cjej9UtzZrpUgkOwEPTEzEaSL0d9-9RvXCmmAY-/pub?output=csv",

  // ── CONTACTO PRINCIPAL ────────────────────────────────────
  contact: {
    whatsapp: "+584247333705",            // Mariangel Carvajal — Logística / Materiales
    whatsappDisplay: "+58 424-733-3705",
    whatsappSecondary: "+584243310544",
    whatsappSecondaryDisplay: "+58 424-331-0544",
    email: "",
    instagram: "",
    website: "venezuelanecesitacamas.vercel.app",
  },

  // ── PROGRESO (valores iniciales / fallback si no hay Sheet) ─
  progress: {
    litersGoal: 100,
    mattressesGoal: 200,
    litersFinanced: 0,
    mattressesObtained: 0,
    litersDelivered: 0,
    sheltersServed: 0,
    ironworkersNeeded: 8,
    ironworkersConfirmed: 2,
    lastUpdated: "30 de junio de 2026",
  },

  // ── MÉTODOS DE PAGO ───────────────────────────────────────
  payments: {
    pagoMovil: { enabled: false },
    zelle:     { enabled: false },
    zinli:     { enabled: false },
    binance:   { enabled: false },
    stripeLink: "",
    paypalLink: "",
  },

  // ── MONTOS SUGERIDOS ──────────────────────────────────────
  sponsorship: {
    litera: {
      showAmounts: false,
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

  // ── MATERIALES NECESARIOS PARA 100 LITERAS ───────────────
  materialsNeeded: [
    "440 tubos de 1½ × 1½",
    "110 kilos de electrodos 3/32",
    "110 tubos de 1 × 1",
    "440 platinas de 1 × 1",
    "28 galones de fondo anticorrosivo",
    "600 regatones (tapas)",
  ],
  materialsNeededEn: [
    "440 pipes 1½ × 1½",
    "110 kg of 3/32 electrodes",
    "110 pipes 1 × 1",
    "440 flat bars 1 × 1",
    "28 gallons of anti-corrosion primer",
    "600 end caps",
  ],

  // ── EQUIPO ────────────────────────────────────────────────
  team: [
    { name: "Valentina Gómez Medina",    role: "Coordinadora general",       roleEn: "General coordinator",         initials: "VG" },
    { name: "Estefanía Salgado",         role: "Logística",                  roleEn: "Logistics",                   initials: "ES" },
    { name: "Mariangel Carvajal",        role: "Logística / Materiales",     roleEn: "Logistics / Materials",       initials: "MC" },
    { name: "Mauricio Hernández",        role: "Alianza con organizaciones", roleEn: "Alliance with organizations",  initials: "MH" },
    { name: "Omar Ramírez",              role: "Alianza con organizaciones", roleEn: "Alliance with organizations",  initials: "OR" },
    { name: "Daniel Rodríguez",          role: "Marketing",                  roleEn: "Marketing",                   initials: "DR" },
    { name: "Jennipher Dolinski Azócar", role: "Marketing",                  roleEn: "Marketing",                   initials: "JD" },
    { name: "Luis Torrealba",            role: "Planificador",               roleEn: "Planner",                     initials: "LT" },
    { name: "Gloria Chacón",             role: "IT",                         roleEn: "IT",                          initials: "GC" },
  ],

  // ── EMPRESA DE COLCHONES ──────────────────────────────────
  mattressCompany: {
    name: "",
    location: "",
    contact: "",
  },

  // ── GALPÓN / PUNTO DE PRODUCCIÓN ─────────────────────────
  workshop: {
    name: "Punto de producción — Turmero",
    location: "Casco Central de Turmero, calle Petión, frente al antiguo Banco Fondo Común",
    contact: "",
  },

  // ── HERREROS CONFIRMADOS ──────────────────────────────────
  confirmedIronworkers: [] as { name: string; location: string }[],

  // ── EMPRESAS ALIADAS ──────────────────────────────────────
  partners: [
    { name: "Por confirmar", logo: "", url: "" },
    { name: "Por confirmar", logo: "", url: "" },
    { name: "Por confirmar", logo: "", url: "" },
    { name: "Por confirmar", logo: "", url: "" },
  ],

  // ── GALERÍA / AVANCES ────────────────────────────────────
  gallery: [
    { src: "/Galpon 1.jpeg", alt: "Foto galpón", altEn: "Workshop photo", category: "produccion" as const },
    { src: "/Galpon 2.jpeg", alt: "Foto galpón", altEn: "Workshop photo", category: "produccion" as const },
    { src: "", alt: "Fabricación de literas",    altEn: "Bunk bed manufacturing", category: "produccion" as const },
    { src: "", alt: "Materiales recibidos",      altEn: "Materials received",      category: "materiales" as const },
    { src: "", alt: "Colchones donados",         altEn: "Donated mattresses",      category: "colchones"  as const },
    { src: "", alt: "Entrega en refugio",        altEn: "Shelter delivery",        category: "entregas"   as const },
  ],

  // ── TEXTOS EDITABLES (español) ────────────────────────────
  texts: {
    mision: "Somos un grupo de voluntarios, herreros, empresas y ciudadanos organizados para fabricar camas y entregar colchones a refugios afectados. Cada aporte se transforma en materiales, trabajo, transporte y descanso digno para una familia.",
    transparencia: "Publicaremos avances, fotos de producción, entregas y actualización del contador para que cada donante pueda ver el impacto de su aporte.",
    footerTagline: "Una iniciativa ciudadana de voluntarios venezolanos. Todos los fondos se destinan directamente a materiales, fabricación y logística.",
  },

  // ── TRADUCCIONES ES/EN ────────────────────────────────────
  i18n: {
    es: {
      // Meta
      metaTitle: "Venezuela Necesita Camas | Campaña de Ayuda Humanitaria",
      metaDescription: "Campaña para fabricar y entregar literas y colchones a familias afectadas por el terremoto en Venezuela.",

      // Navbar
      navHelp: "Cómo ayudar",
      navProgress: "Avance",
      navShelters: "Refugios",
      navTeam: "Equipo",

      // Hero
      heroTitle: "Un suelo frío no es lugar para reconstruir una vida.",
      heroSubtitle: "El terremoto dejó a cientos de familias en Venezuela durmiendo en el piso de refugios y espacios improvisados. Hemos transformado un galpón familiar en un taller de esperanza: un equipo de herreros locales ya está fabricando literas de hierro y estamos articulando alianzas para conseguir colchones a precio de costo.",
      heroBadge: "Emergencia — Terremoto Venezuela",
      heroCampaignGoal: "Meta de la campaña",
      heroCampaignSubtext: "100 literas + 200 colchones para refugios venezolanos",
      heroBunkBedsLabel: "Literas",
      heroMattressesLabel: "Colchones",
      heroBunkBedsFundedLabel: "Literas financiadas",

      // CTAs
      btnDonate: "Donar ahora",
      btnHelp: "Quiero ayudar",
      btnShelter: "Soy refugio y necesito camas",

      // WhatsApp messages
      waVolunteer: "Hola, quiero ser voluntario en Venezuela Necesita Camas.",
      waMaterials: "Hola, quiero donar materiales para Venezuela Necesita Camas.",
      waCompany: "Hola, represento una empresa y quiero apoyar la campaña Venezuela Necesita Camas.",
      waDonationConfirm: "Hola, ya realicé mi donación para Venezuela Necesita Camas. Adjunto comprobante.",
      waShortFormMsg: "Hola, soy de *{refugio}* ({ubicacion}). Necesitamos {camas} camas. Mi WhatsApp: {whatsapp}. Solicitud enviada desde Venezuela Necesita Camas.",
      waFullFormMsg: "Hola, soy de *{refugio}* ubicado en *{ubicacion}*.\nPersona de contacto: {contacto}\nWhatsApp: {whatsapp}\nCantidad de personas: {personas}\nCamas necesarias: {camas}\nObservaciones: {observaciones}\n\nSolicito camas para Venezuela Necesita Camas.",
      waPaymentRequest: "Hola, quiero solicitar los datos de {method}.",

      // Process
      processTitle: "¿Cómo funciona?",
      processSubtitle: "Del dinero a la cama: así se transforma tu donación.",
      processStep1Title: "Recibimos la donación",
      processStep1Desc: "El aporte llega a través de los métodos de pago habilitados.",
      processStep2Title: "Compramos materiales",
      processStep2Desc: "Adquirimos hierro, electrodos, colchones y todo lo necesario.",
      processStep3Title: "Fabricamos las literas",
      processStep3Desc: "Nuestros herreros trabajan en el taller de producción en Aragua.",
      processStep4Title: "Coordinamos transporte",
      processStep4Desc: "Organizamos el flete seguro hacia cada refugio.",
      processStep5Title: "Entregamos en refugios",
      processStep5Desc: "Las literas y colchones llegan directamente a las familias.",

      // HowToHelp
      helpTitle: "¿Cómo puedes ayudar?",
      helpSubtitle: "Hay muchas formas de sumarte. Elige la que más se adapte a ti.",
      helpCard1Title: "Donar dinero",
      helpCard1Desc: "Tu aporte monetario nos permite comprar materiales, pagar herreros justos y costear el transporte hacia los refugios.",
      helpCard1Btn: "Ver métodos de pago",
      helpCard2Title: "Donar materiales",
      helpCard2Desc: "Materiales necesarios para 100 literas:",
      helpCard2Btn: "📲 Coordinar donación de materiales",
      helpCard3Title: "Ser voluntario",
      helpCard3Desc: "Necesitamos herreros con equipo, apoyo logístico, transporte, carga y descarga.",
      helpCard3Btn: "📲 Quiero ser voluntario",
      helpCard4Title: "Empresas aliadas",
      helpCard4Desc: "Si tu empresa puede apoyar con colchones, materiales, transporte, galpón, herramientas o fondos, queremos coordinar contigo.",
      helpCard4Btn: "📲 Contactar como empresa",

      // ShelterFormShort
      shelterShortTitle: "🏠 Pedir una cama",
      shelterShortSubtitle: "¿Estás en un refugio o eres una familia afectada? Cuéntanos qué necesitas.",
      shelterShortLabelName: "Nombre del refugio o familia *",
      shelterShortLabelLocation: "Ubicación *",
      shelterShortLabelBeds: "Camas necesarias *",
      shelterShortLabelWA: "Tu WhatsApp *",
      shelterShortPlaceholderName: "Ej: Refugio Esperanza",
      shelterShortPlaceholderLocation: "Ej: La Guaira, Vargas",
      shelterShortPlaceholderBeds: "Ej: 5",
      shelterShortSubmit: "📲 Enviar solicitud por WhatsApp",
      shelterShortMoreDetails: "¿Necesitas enviar más detalles?",
      shelterShortFullFormLink: "Usa el formulario completo →",

      // Progress
      progressTitle: "Avance de la campaña",
      progressLastUpdated: "Última actualización:",
      progressBunkBedsFundedBar: "🛏️ Literas financiadas",
      progressMattressesObtainedBar: "🪑 Colchones conseguidos",
      progressOfLabel: "de",
      progressBunkBedsUnit: "literas",
      progressMattressesUnit: "colchones",
      progressGoalBunkBeds: "Meta literas",
      progressGoalMattresses: "Meta colchones",
      progressBunkBedsFunded: "Literas financiadas",
      progressMattressesObtained: "Colchones conseguidos",
      progressBunkBedsDelivered: "Literas entregadas",
      progressSheltersServed: "Refugios atendidos",
      progressIronworkersNeeded: "Herreros necesarios",
      progressIronworkersConfirmed: "Herreros confirmados",
      progressLiveNote: "Los datos se actualizan en tiempo real desde Google Sheets.",

      // Mission
      missionTitle: "Nuestra misión",
      missionPillar1: "Fabricación local",
      missionPillar2: "Literas dignas",
      missionPillar3: "Colchones nuevos",
      missionPillar4: "Entrega en refugios",

      // Transparency
      transparencyTitle: "Transparencia total",
      transparencySubtitle: "¿En qué se usa tu donación?",
      transUse1Label: "Materiales de hierro",
      transUse1Desc: "Tubos, perfiles, electrodos y ferretería para fabricar las literas.",
      transUse2Label: "Colchones nuevos",
      transUse2Desc: "Compra de colchones directamente a proveedores.",
      transUse3Label: "Pago justo a herreros",
      transUse3Desc: "Reconocemos el trabajo de cada herrero involucrado.",
      transUse4Label: "Transporte y flete",
      transUse4Desc: "Movilización de materiales y literas hacia los refugios.",
      transUse5Label: "Logística",
      transUse5Desc: "Coordinación, comunicación, embalaje y administración.",
      transUse6Label: "Entrega en refugios",
      transUse6Desc: "Montaje y entrega directa en cada refugio atendido.",

      // Gallery
      galleryTitle: "Galería de avances",
      gallerySubtitle: "Seguimiento visual de la campaña. Las fotos propias se irán publicando aquí.",
      galleryPhotoSoon: "Foto próximamente",
      galleryFootnote: "Las fotos propias de producción y entregas se irán publicando aquí en tiempo real.",
      galleryCatAll: "Todas",
      galleryCatProduccion: "Producción",
      galleryCatMateriales: "Materiales",
      galleryCatColchones: "Colchones",
      galleryCatEntregas: "Entregas",
      galleryCatRefugios: "Refugios",

      // Share
      shareTitle: "Comparte esta campaña",
      shareMsg: "🛏️ Venezuela necesita camas. Ayuda a fabricar literas y conseguir colchones para familias afectadas por el terremoto. Cada donación cuenta:",
      shareCopied: "¡Enlace copiado!",
      shareSubtitle: "Cada vez que compartes, la campaña llega a más venezolanos y extranjeros que pueden ayudar.",
      shareCopyLink: "Copiar enlace",

      // Team
      teamTitle: "Quiénes somos",
      teamSubtitle: "Un equipo de venezolanos comprometidos con la respuesta inmediata al terremoto.",
      teamIronworkersLabel: "Herreros",
      teamIronworkersConfirmedLabel: "confirmados",
      teamMattressSupplier: "Proveedor de colchones",

      // Partners
      partnersTitle: "Empresas y organizaciones aliadas",
      partnersSubtitle: "Gracias a quienes hacen posible esta campaña.",
      partnersCta: "📲 Mi empresa quiere ser aliada",

      // Sponsor
      sponsorTitle: "Apadrina una cama",
      sponsorSubtitle: "Tu aporte tiene nombre y apellido: una familia que puede descansar dignamente.",
      sponsorBunkBedTitle: "Apadrina una litera",
      sponsorBunkBedDesc: "Cubre el costo de fabricación de 1 litera completa",
      sponsorMattressTitle: "Apadrina un colchón",
      sponsorMattressDesc: "Cubre 1 colchón nuevo para una familia",
      sponsorFreeDonateTitle: "Dona libremente",
      sponsorFreeDonateDesc: "Cualquier aporte suma. Tú decides el monto.",
      sponsorFreeFromUSD: "Desde ${usd} USD",
      sponsorFreeAnyAmount: "Cualquier monto",
      sponsorAmountTBD: "Monto por confirmar",
      sponsorDonateBtn: "Donar ahora",

      // ShelterForm (full)
      shelterFormTitle: "Soy refugio y necesito camas",
      shelterFormSubtitle: "Completa el formulario y nos pondremos en contacto contigo para coordinar la entrega.",
      shelterFormLabelName: "Nombre del refugio *",
      shelterFormLabelLocation: "Ubicación *",
      shelterFormLabelContact: "Persona de contacto *",
      shelterFormLabelWA: "WhatsApp *",
      shelterFormLabelPeople: "Cantidad de personas en el refugio *",
      shelterFormLabelBeds: "Camas necesarias *",
      shelterFormLabelNotes: "Observaciones",
      shelterFormPlaceholderName: "Ej: Refugio Esperanza",
      shelterFormPlaceholderLocation: "Ej: La Guaira, Vargas",
      shelterFormPlaceholderContact: "Tu nombre completo",
      shelterFormPlaceholderPeople: "Ej: 45",
      shelterFormPlaceholderBeds: "Ej: 10",
      shelterFormPlaceholderNotes: "Condiciones del refugio, acceso, urgencias, etc.",
      shelterFormSubmit: "📲 Enviar solicitud por WhatsApp",
      shelterFormDisclaimer: "Al enviar, se abrirá WhatsApp con tu solicitud prellenada. No guardamos tus datos.",

      // PaymentModal (simplified)
      paymentTitle: "💛 Donar ahora",
      paymentSubtitle: "Escríbenos por WhatsApp para recibir los datos de donación.",
      paymentNote: "Toda donación va directamente a materiales y fabricación de literas.",
      paymentInternational: "Pago internacional",
      paymentStripeBtn: "💳 Donar con tarjeta (Stripe)",
      paymentPaypalBtn: "🅿️ Donar con PayPal",
      paymentConfirmWA: "✅ Ya doné — Confirmar por WhatsApp",
      paymentPendingMsg: "Los datos de este método están siendo confirmados.",
      paymentPendingWA: "Escríbenos por WhatsApp para coordinar tu donación.",
      paymentCopyBtn: "Copiar",
      paymentRequestBtn: "Solicitar datos por WhatsApp",

      // Footer
      footerPartnersLabel: "Empresas y organizaciones aliadas",
      footerGalleryLabel: "Galería de avances",
      footerGalleryPending: "Las fotos propias de producción y entregas se publicarán aquí.",
      footerContactLabel: "Contacto",
      footerSectionsLabel: "Secciones",
      footerTagline: "Una iniciativa ciudadana de voluntarios venezolanos. Todos los fondos se destinan directamente a materiales, fabricación y logística.",
      footerCopyright: "© 2026 Venezuela Necesita Camas. Campaña de ayuda humanitaria ciudadana.",
      footerFundsNote: "Todos los fondos se destinan directamente a materiales, fabricación y logística.",
      footerLink1: "Cómo funciona",
      footerLink2: "Cómo ayudar",
      footerLink3: "Pedir una cama",
      footerLink4: "Avance",
      footerLink5: "Nuestra misión",
      footerLink6: "Transparencia",
      footerLink7: "Quiénes somos",
      footerLink8: "Formulario refugios",

      // Pages
      refugiosPageTitle: "Solicitud para refugios",
      refugiosPageSubtitle: "Si administras un refugio o albergas familias afectadas, completa el formulario y nos pondremos en contacto contigo para coordinar la entrega de camas.",
      refugiosPageBack: "← Volver a la campaña",
      equipoPageTitle: "Quiénes somos",
      equipoPageSubtitle: "Un equipo de venezolanos comprometidos con la respuesta inmediata al terremoto del 24 de junio de 2026.",
      equipoPageBack: "← Volver a la campaña",
    },
    en: {
      // Meta
      metaTitle: "Venezuela Needs Beds | Humanitarian Aid Campaign",
      metaDescription: "Campaign to manufacture and deliver bunk beds and mattresses to families affected by the earthquake in Venezuela.",

      // Navbar
      navHelp: "How to help",
      navProgress: "Progress",
      navShelters: "Shelters",
      navTeam: "Team",

      // Hero
      heroTitle: "A cold floor is no place to rebuild a life.",
      heroSubtitle: "The earthquake left hundreds of families in Venezuela sleeping on shelter floors and improvised spaces. We have transformed a family workshop into a workshop of hope: a team of local ironworkers is already manufacturing iron bunk beds and we are building alliances to source mattresses at cost price.",
      heroBadge: "Emergency — Venezuela Earthquake",
      heroCampaignGoal: "Campaign goal",
      heroCampaignSubtext: "100 bunk beds + 200 mattresses for Venezuelan shelters",
      heroBunkBedsLabel: "Bunk beds",
      heroMattressesLabel: "Mattresses",
      heroBunkBedsFundedLabel: "Bunk beds funded",

      // CTAs
      btnDonate: "Donate now",
      btnHelp: "I want to help",
      btnShelter: "I run a shelter and need beds",

      // WhatsApp messages
      waVolunteer: "Hello, I want to volunteer for Venezuela Needs Beds.",
      waMaterials: "Hello, I want to donate materials for Venezuela Needs Beds.",
      waCompany: "Hello, I represent a company and want to support the Venezuela Needs Beds campaign.",
      waDonationConfirm: "Hello, I have made my donation for Venezuela Needs Beds. I am attaching proof.",
      waShortFormMsg: "Hello, I am from *{refugio}* ({ubicacion}). We need {camas} beds. My WhatsApp: {whatsapp}. Request submitted from Venezuela Needs Beds.",
      waFullFormMsg: "Hello, I am from *{refugio}* located in *{ubicacion}*.\nContact person: {contacto}\nWhatsApp: {whatsapp}\nNumber of people: {personas}\nBeds needed: {camas}\nNotes: {observaciones}\n\nI am requesting beds from Venezuela Needs Beds.",
      waPaymentRequest: "Hello, I would like to request the payment details for {method}.",

      // Process
      processTitle: "How does it work?",
      processSubtitle: "From money to bed: this is how your donation transforms.",
      processStep1Title: "We receive the donation",
      processStep1Desc: "The contribution arrives through the enabled payment methods.",
      processStep2Title: "We buy materials",
      processStep2Desc: "We purchase iron, electrodes, mattresses and everything needed.",
      processStep3Title: "We manufacture the bunk beds",
      processStep3Desc: "Our ironworkers work in the production workshop in Aragua.",
      processStep4Title: "We coordinate transport",
      processStep4Desc: "We organize safe freight to each shelter.",
      processStep5Title: "We deliver to shelters",
      processStep5Desc: "Bunk beds and mattresses arrive directly to the families.",

      // HowToHelp
      helpTitle: "How can you help?",
      helpSubtitle: "There are many ways to get involved. Choose what works best for you.",
      helpCard1Title: "Donate money",
      helpCard1Desc: "Your monetary contribution allows us to buy materials, pay fair wages to ironworkers and cover transport to shelters.",
      helpCard1Btn: "View payment methods",
      helpCard2Title: "Donate materials",
      helpCard2Desc: "Materials needed for 100 bunk beds:",
      helpCard2Btn: "📲 Coordinate materials donation",
      helpCard3Title: "Volunteer",
      helpCard3Desc: "We need ironworkers with equipment, logistical support, transport, loading and unloading.",
      helpCard3Btn: "📲 I want to volunteer",
      helpCard4Title: "Allied companies",
      helpCard4Desc: "If your company can support with mattresses, materials, transport, warehouse, tools or funds, we want to coordinate with you.",
      helpCard4Btn: "📲 Contact as a company",

      // ShelterFormShort
      shelterShortTitle: "🏠 Request a bed",
      shelterShortSubtitle: "Are you at a shelter or an affected family? Tell us what you need.",
      shelterShortLabelName: "Shelter or family name *",
      shelterShortLabelLocation: "Location *",
      shelterShortLabelBeds: "Beds needed *",
      shelterShortLabelWA: "Your WhatsApp *",
      shelterShortPlaceholderName: "E.g.: Shelter Hope",
      shelterShortPlaceholderLocation: "E.g.: La Guaira, Vargas",
      shelterShortPlaceholderBeds: "E.g.: 5",
      shelterShortSubmit: "📲 Send request via WhatsApp",
      shelterShortMoreDetails: "Need to send more details?",
      shelterShortFullFormLink: "Use the full form →",

      // Progress
      progressTitle: "Campaign progress",
      progressLastUpdated: "Last updated:",
      progressBunkBedsFundedBar: "🛏️ Bunk beds funded",
      progressMattressesObtainedBar: "🪑 Mattresses obtained",
      progressOfLabel: "of",
      progressBunkBedsUnit: "bunk beds",
      progressMattressesUnit: "mattresses",
      progressGoalBunkBeds: "Bunk bed goal",
      progressGoalMattresses: "Mattress goal",
      progressBunkBedsFunded: "Bunk beds funded",
      progressMattressesObtained: "Mattresses obtained",
      progressBunkBedsDelivered: "Bunk beds delivered",
      progressSheltersServed: "Shelters served",
      progressIronworkersNeeded: "Ironworkers needed",
      progressIronworkersConfirmed: "Ironworkers confirmed",
      progressLiveNote: "Data updates in real time from Google Sheets.",

      // Mission
      missionTitle: "Our mission",
      missionPillar1: "Local manufacturing",
      missionPillar2: "Dignified bunk beds",
      missionPillar3: "New mattresses",
      missionPillar4: "Delivery to shelters",

      // Transparency
      transparencyTitle: "Full transparency",
      transparencySubtitle: "How is your donation used?",
      transUse1Label: "Iron materials",
      transUse1Desc: "Pipes, profiles, electrodes and hardware for building bunk beds.",
      transUse2Label: "New mattresses",
      transUse2Desc: "Purchasing mattresses directly from suppliers.",
      transUse3Label: "Fair pay to ironworkers",
      transUse3Desc: "We recognize the work of each ironworker involved.",
      transUse4Label: "Transport and freight",
      transUse4Desc: "Moving materials and bunk beds to shelters.",
      transUse5Label: "Logistics",
      transUse5Desc: "Coordination, communication, packaging and administration.",
      transUse6Label: "Delivery to shelters",
      transUse6Desc: "Assembly and direct delivery at each shelter served.",

      // Gallery
      galleryTitle: "Progress gallery",
      gallerySubtitle: "Visual campaign tracking. Our own photos will be published here.",
      galleryPhotoSoon: "Photo coming soon",
      galleryFootnote: "Our own production and delivery photos will be published here in real time.",
      galleryCatAll: "All",
      galleryCatProduccion: "Production",
      galleryCatMateriales: "Materials",
      galleryCatColchones: "Mattresses",
      galleryCatEntregas: "Deliveries",
      galleryCatRefugios: "Shelters",

      // Share
      shareTitle: "Share this campaign",
      shareMsg: "🛏️ Venezuela needs beds. Help manufacture bunk beds and get mattresses for families affected by the earthquake. Every donation counts:",
      shareCopied: "Link copied!",
      shareSubtitle: "Every time you share, the campaign reaches more Venezuelans and foreigners who can help.",
      shareCopyLink: "Copy link",

      // Team
      teamTitle: "Who we are",
      teamSubtitle: "A team of Venezuelans committed to the immediate earthquake response.",
      teamIronworkersLabel: "Ironworkers",
      teamIronworkersConfirmedLabel: "confirmed",
      teamMattressSupplier: "Mattress supplier",

      // Partners
      partnersTitle: "Allied companies and organizations",
      partnersSubtitle: "Thanks to those who make this campaign possible.",
      partnersCta: "📲 My company wants to be a partner",

      // Sponsor
      sponsorTitle: "Sponsor a bed",
      sponsorSubtitle: "Your contribution has a name: a family that can rest with dignity.",
      sponsorBunkBedTitle: "Sponsor a bunk bed",
      sponsorBunkBedDesc: "Covers the manufacturing cost of 1 complete bunk bed",
      sponsorMattressTitle: "Sponsor a mattress",
      sponsorMattressDesc: "Covers 1 new mattress for a family",
      sponsorFreeDonateTitle: "Donate freely",
      sponsorFreeDonateDesc: "Every contribution counts. You choose the amount.",
      sponsorFreeFromUSD: "From ${usd} USD",
      sponsorFreeAnyAmount: "Any amount",
      sponsorAmountTBD: "Amount TBD",
      sponsorDonateBtn: "Donate now",

      // ShelterForm (full)
      shelterFormTitle: "I run a shelter and need beds",
      shelterFormSubtitle: "Fill out the form and we will contact you to coordinate delivery.",
      shelterFormLabelName: "Shelter name *",
      shelterFormLabelLocation: "Location *",
      shelterFormLabelContact: "Contact person *",
      shelterFormLabelWA: "WhatsApp *",
      shelterFormLabelPeople: "Number of people at the shelter *",
      shelterFormLabelBeds: "Beds needed *",
      shelterFormLabelNotes: "Notes",
      shelterFormPlaceholderName: "E.g.: Shelter Hope",
      shelterFormPlaceholderLocation: "E.g.: La Guaira, Vargas",
      shelterFormPlaceholderContact: "Your full name",
      shelterFormPlaceholderPeople: "E.g.: 45",
      shelterFormPlaceholderBeds: "E.g.: 10",
      shelterFormPlaceholderNotes: "Shelter conditions, access, urgencies, etc.",
      shelterFormSubmit: "📲 Send request via WhatsApp",
      shelterFormDisclaimer: "When you submit, WhatsApp will open with your request pre-filled. We do not store your data.",

      // PaymentModal (simplified)
      paymentTitle: "💛 Donate now",
      paymentSubtitle: "Write to us on WhatsApp to receive donation details.",
      paymentNote: "Every donation goes directly to materials and bunk bed manufacturing.",
      paymentInternational: "International payment",
      paymentStripeBtn: "💳 Donate with card (Stripe)",
      paymentPaypalBtn: "🅿️ Donate with PayPal",
      paymentConfirmWA: "✅ I donated — Confirm via WhatsApp",
      paymentPendingMsg: "The details for this method are being confirmed.",
      paymentPendingWA: "Write to us via WhatsApp to coordinate your donation.",
      paymentCopyBtn: "Copy",
      paymentRequestBtn: "Request details via WhatsApp",

      // Footer
      footerPartnersLabel: "Allied companies and organizations",
      footerGalleryLabel: "Progress gallery",
      footerGalleryPending: "Our own production and delivery photos will be published here.",
      footerContactLabel: "Contact",
      footerSectionsLabel: "Sections",
      footerTagline: "A citizen initiative by Venezuelan volunteers. All funds go directly to materials, manufacturing and logistics.",
      footerCopyright: "© 2026 Venezuela Necesita Camas. Citizen humanitarian aid campaign.",
      footerFundsNote: "All funds go directly to materials, manufacturing and logistics.",
      footerLink1: "How it works",
      footerLink2: "How to help",
      footerLink3: "Request a bed",
      footerLink4: "Progress",
      footerLink5: "Our mission",
      footerLink6: "Transparency",
      footerLink7: "Who we are",
      footerLink8: "Shelter form",

      // Pages
      refugiosPageTitle: "Shelter request",
      refugiosPageSubtitle: "If you manage a shelter or house affected families, fill out the form and we will contact you to coordinate bed delivery.",
      refugiosPageBack: "← Back to campaign",
      equipoPageTitle: "Who we are",
      equipoPageSubtitle: "A team of Venezuelans committed to the immediate response to the June 24, 2026 earthquake.",
      equipoPageBack: "← Back to campaign",
    },
  },
};

export type Lang = "es" | "en";
export type GalleryCategory = "produccion" | "materiales" | "colchones" | "entregas" | "refugios";
