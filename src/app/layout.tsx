import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const bricolage = localFont({
  src: "../fonts/BricolageGrotesque.woff2",
  variable: "--font-bricolage",
  weight: "400 800",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/Inter.woff2",
  variable: "--font-inter",
  weight: "400 800",
  display: "swap",
});

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
    <html lang="es" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
