import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Venezuela Necesita Camas | Campaña de Ayuda Humanitaria",
  description:
    "Campaña para fabricar y entregar literas y colchones a familias afectadas por el terremoto en Venezuela.",
  openGraph: {
    title: "Venezuela Necesita Camas",
    description:
      "Ayuda a fabricar literas y conseguir colchones para familias venezolanas afectadas por el terremoto del 24 de junio de 2026.",
    url: "https://venezuelanecesitacamas.vercel.app",
    siteName: "Venezuela Necesita Camas",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Venezuela Necesita Camas - Campaña humanitaria",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venezuela Necesita Camas",
    description:
      "Campaña para fabricar y entregar literas y colchones a familias afectadas por el terremoto.",
    images: ["/og-image.svg"],
  },
  metadataBase: new URL("https://venezuelanecesitacamas.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
