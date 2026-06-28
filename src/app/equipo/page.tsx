import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function EquipoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-brand-blue py-12 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Quiénes somos</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto px-4">
            Un equipo de venezolanos comprometidos con la respuesta inmediata al terremoto del{" "}
            <strong>24 de junio de 2026</strong>.
          </p>
          <a
            href="/"
            className="inline-block mt-6 text-brand-yellow text-sm font-semibold hover:underline"
          >
            ← Volver a la campaña
          </a>
        </div>
        <Team />
      </main>
      <Footer />
    </>
  );
}
