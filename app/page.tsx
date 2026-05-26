import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
    </main>
  );
}