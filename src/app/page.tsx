import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import FlagStripe from "@/components/FlagStripe";
import HowToHelp from "@/components/HowToHelp";
import ShelterFormShort from "@/components/ShelterFormShort";
import Progress from "@/components/Progress";
import Mission from "@/components/Mission";
import Transparency from "@/components/Transparency";
import Share from "@/components/Share";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <FlagStripe />
        <HowToHelp />
        <ShelterFormShort />
        <FlagStripe />
        <Progress />
        <Mission />
        <FlagStripe />
        <Transparency />
        <Share />
      </main>
      <Footer />
    </>
  );
}
