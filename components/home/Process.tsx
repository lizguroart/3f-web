"use client";

import {
  Search,
  ClipboardList,
  Code2,
  Headphones,
} from "lucide-react";

const process = [
  {
    number: "1",
    title: "Diagnóstico",
    description:
      "Analizamos tus necesidades y objetivos para entender tu negocio.",
    icon: Search,
    color: "bg-[#1185F5]",
  },
  {
    number: "2",
    title: "Planeación",
    description:
      "Diseñamos la mejor estrategia y solución tecnológica para alcanzar tus metas.",
    icon: ClipboardList,
    color: "bg-[#FB5802]",
  },
  {
    number: "3",
    title: "Implementación",
    description:
      "Desarrollamos e implementamos la solución con los más altos estándares.",
    icon: Code2,
    color: "bg-[#1185F5]",
  },
  {
    number: "4",
    title: "Soporte",
    description:
      "Te acompañamos con soporte continuo para asegurar tu tranquilidad.",
    icon: Headphones,
    color: "bg-[#FB5802]",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/5
        bg-[#040B1A]
        py-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_left,rgba(17,133,245,0.08),transparent_30%)]
        "
      />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-6
          lg:grid-cols-[0.8fr_1.2fr]
        "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#1185F5]
            "
          >
            Nuestro Proceso
          </span>

          <h2
            className="
              mt-4
              max-w-sm
              text-5xl
              font-black
              leading-tight
              text-white
            "
          >
            Así trabajamos para ti
          </h2>
        </div>

        {/* PROCESS */}
        <div
          className="
            relative
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  relative
                  flex
                  flex-col
                "
              >
                {/* TOP LINE */}
                {index !== process.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[72px]
                      top-[36px]
                      hidden
                      h-px
                      w-[calc(100%-48px)]
                      border-t
                      border-dashed
                      border-white/10
                      xl:block
                    "
                  />
                )}

                {/* NUMBER */}
                <div
                  className={`
                    absolute
                    -top-3
                    left-0
                    z-20
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-sm
                    font-bold
                    text-white
                    ${item.color}
                  `}
                >
                  {item.number}
                </div>

                {/* ICON CARD */}
                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-sm
                  "
                >
                  {/* INNER GLOW */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#1185F5]/10
                      blur-xl
                    "
                  />

                  <Icon
                    className="
                      relative
                      z-10
                      h-9
                      w-9
                      text-white
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    max-w-[220px]
                    text-sm
                    leading-relaxed
                    text-gray-400
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}