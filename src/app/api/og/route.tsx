import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const [fontData, imgData] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/BricolageGrotesque.woff2")),
    readFile(join(process.cwd(), "public/hero-bandera.jpg")),
  ]);

  const imgSrc = `data:image/jpeg;base64,${imgData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#080808",
        }}
      >
        {/* Foto de fondo */}
        <img
          src={imgSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        {/* Overlay oscuro — igual que el Hero (rgba 8,8,8 / 0.75) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            backgroundColor: "rgba(8,8,8,0.75)",
            display: "flex",
          }}
        />

        {/* Contenido centrado */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Badge amarillo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5c842",
              borderRadius: 9999,
              paddingTop: 13,
              paddingBottom: 13,
              paddingLeft: 30,
              paddingRight: 30,
              marginBottom: 38,
            }}
          >
            <span
              style={{
                fontSize: 21,
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "0.07em",
                fontFamily: "Bricolage",
              }}
            >
              🇻🇪 EMERGENCIA — TERREMOTO VENEZUELA · 24 DE JUNIO DE 2026
            </span>
          </div>

          {/* Título principal */}
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              color: "#ffffff",
              fontFamily: "Bricolage",
              textAlign: "center",
              lineHeight: 1.05,
              maxWidth: 1040,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            Venezuela Necesita Camas
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Bricolage",
          data: fontData,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
