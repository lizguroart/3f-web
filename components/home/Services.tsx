"use client";

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
    icon: Code2,
    color: "text-[#1185F5]",
  },
  {
    title: "Soporte\nTecnológico",
    description:
      "Mantenimiento, optimización y asistencia técnica para tus sistemas.",
    icon: Headphones,
    color: "text-[#FB5802]",
  },
  {
    title: "Infraestructura\ny Redes",
    description:
      "Cableado estructurado, conectividad, servidores y redes empresariales.",
    icon: Network,
    color: "text-[#1185F5]",
  },
  {
    title: "Seguridad\nTecnológica",
    description:
      "Sistemas de CCTV, control de acceso y monitoreo inteligente.",
    icon: ShieldCheck,
    color: "text-[#FB5802]",
  },
];

export default function Services() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#040B1A]
        py-10
      "
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
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.02]
            p-10
            backdrop-blur-sm
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
            "
          >
            Soluciones completas para tu negocio
          </h2>

          <button
            className="
              mt-10
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-xl
              border
              border-[#1185F5]/40
              bg-[#1185F5]/10
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-[#1185F5]/20
            "
          >
            Conócenos más

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/20
                  hover:bg-white/[0.04]
                "
              >
                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-24
                    w-24
                    rounded-full
                    bg-orange-500/10
                    blur-3xl
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ICON */}
                <Icon
                  className={`
                    h-8
                    w-8
                    ${service.color}
                  `}
                />

                {/* TITLE */}
                <h3
                  className="
                    mt-6
                    whitespace-pre-line
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-relaxed
                    text-gray-400
                  "
                >
                  {service.description}
                </p>

                {/* LINK */}
                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#1185F5]
                    transition
                    hover:text-[#FB5802]
                  "
                >
                  Ver más

                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}