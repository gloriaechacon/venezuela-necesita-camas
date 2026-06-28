import Navbar from "@/components/Navbar";
import ShelterForm from "@/components/ShelterForm";
import Footer from "@/components/Footer";

export default function RefugiosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-brand-blue py-12 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Solicitud para refugios</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto px-4">
            Si administras un refugio o albergas familias afectadas, completa el formulario y nos
            pondremos en contacto contigo para coordinar la entrega de camas.
          </p>
          <a
            href="/"
            className="inline-block mt-6 text-brand-yellow text-sm font-semibold hover:underline"
          >
            ← Volver a la campaña
          </a>
        </div>
        <ShelterForm />
      </main>
      <Footer />
    </>
  );
}
