import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process"
import Technologies from "@/components/home/Technologies";
import CTA from "@/components/home/CTA"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Technologies />
      <CTA />
      <Footer />
    </main>
  );
}