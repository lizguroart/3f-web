"use client";
import { useState } from "react";
import ServiceModal from "@/components/layout/ServiceModal";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process"
import Technologies from "@/components/home/Technologies";
import CTA from "@/components/home/CTA"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  const [selectedService, setSelectedService] =
  useState(null);
  return (
    <main>
      <Navbar />
      <Hero />
      <Services
        onOpenService={setSelectedService}
      />
      <Stats />
      <Process />
      <Technologies />
      <CTA />
       <Footer
        onOpenService={setSelectedService}
      />

      <ServiceModal
        open={!!selectedService}
        service={selectedService}
        onClose={() =>
          setSelectedService(null)
        }
      />
    </main>
  );
}