"use client";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ServiceModal from "@/components/layout/ServiceModal";
import { useState } from "react";

import {
  Code2,
  Headphones,
  Network,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Soluciones\nDigitales",
    description:
      "Desarrollo web, ecommerce, software a medida y automatización.",

    longDescription:
      "Creamos soluciones digitales modernas que ayudan a las empresas a fortalecer su presencia en línea, optimizar procesos y generar nuevas oportunidades de negocio mediante tecnología escalable y experiencias digitales de alto impacto.",

    icon: Code2,
    color: "text-[#1185F5]",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
    ],

    features: [
      "Landing Pages",
      "Sitios Corporativos",
      "Tiendas Online",
      "Aplicaciones Web",
      "Automatización de procesos",
      "Optimización SEO",
    ],

    whatsappMessage:
      "Hola, quiero información sobre Soluciones Digitales.",
  },

  {
    title: "Soporte\nTecnológico",
    description:
      "Mantenimiento, optimización y asistencia técnica para tus sistemas.",

    longDescription:
      "Brindamos soporte tecnológico preventivo y correctivo para garantizar la continuidad operativa de tu empresa, minimizando incidentes y mejorando el rendimiento de tus equipos y plataformas.",

    icon: Headphones,
    color: "text-[#FB5802]",

    technologies: [
      "Windows",
      "Linux",
      "Microsoft 365",
      "Google Workspace",
      "AnyDesk",
      "TeamViewer",
    ],

    features: [
      "Soporte remoto",
      "Soporte presencial",
      "Mantenimiento preventivo",
      "Mantenimiento correctivo",
      "Diagnóstico de equipos",
      "Mesa de ayuda",
    ],

    whatsappMessage:
      "Hola, quiero información sobre Soporte Tecnológico.",
  },

  {
    title: "Infraestructura\ny Redes",
    description:
      "Cableado estructurado, conectividad, servidores y redes empresariales.",

    longDescription:
      "Diseñamos e implementamos infraestructuras tecnológicas confiables y escalables, asegurando conectividad, estabilidad y seguridad para el crecimiento de tu organización.",

    icon: Network,
    color: "text-[#1185F5]",

    technologies: [
      "MikroTik",
      "Ubiquiti",
      "Cisco",
      "Windows Server",
      "Linux Server",
      "VPN",
    ],

    features: [
      "Cableado estructurado",
      "Configuración de redes",
      "Administración de servidores",
      "Redes inalámbricas",
      "VPN corporativas",
      "Monitoreo de infraestructura",
    ],

    whatsappMessage:
      "Hola, quiero información sobre Infraestructura y Redes.",
  },

  {
    title: "Seguridad\nTecnológica",
    description:
      "Sistemas de CCTV, control de acceso y monitoreo inteligente.",

    longDescription:
      "Implementamos soluciones de seguridad tecnológica para proteger instalaciones, recursos e información mediante sistemas modernos de vigilancia y control.",

    icon: ShieldCheck,
    color: "text-[#FB5802]",

    technologies: [
      "CCTV IP",
      "Control de Acceso",
      "Biometría",
      "Alarmas",
      "Monitoreo Remoto",
      "Videovigilancia",
    ],

    features: [
      "Cámaras de seguridad",
      "Control de acceso",
      "Sistemas biométricos",
      "Monitoreo remoto",
      "Alarmas inteligentes",
      "Diagnóstico de vulnerabilidades",
    ],

    whatsappMessage:
      "Hola, quiero información sobre Seguridad Tecnológica.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] =
  useState<(typeof services)[0] | null>(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#040B1A]
        py-10
      "
      id="services"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#1185F5]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      {/* GRID */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          gap-4
          px-6
          lg:grid-cols-[0.9fr_1.1fr]
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-col
            justify-center

            lg:rounded-[28px]
            lg:border
            lg:border-white/10
            lg:bg-white/[0.02]
            lg:p-10
            lg:backdrop-blur-sm
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#1185F5]
            "
          >
            Nuestros Servicios
          </span>

          <h2
            className="
              mt-4
              max-w-sm
              text-4xl
              font-black
              leading-tight
              text-white
               mb-8
            "
          >
            Soluciones completas para tu negocio
          </h2>

          <Button variant="third"  href="https://wa.me/573176360046" target="_blank" className="hidden lg:inline-flex w-full lg:w-fit">
              Conócenos más
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
          "
        >
          {services.map((service) => (
            <Card
              key={service.title}
              {...service}
              onViewMore={() =>
                setSelectedService(service)
              }
            />
          ))}
        </div>
      </div>
            <ServiceModal
            open={!!selectedService}
            service={selectedService}
            onClose={() =>
              setSelectedService(null)
            }
          />
    </section>
  );
}

