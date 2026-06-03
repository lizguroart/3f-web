"use client";

import {
  BarChart3,
  Users,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const benefits = [
  {
    title: "Atención\npersonalizada",
    icon: BarChart3,
    color: "text-[#FB5802]",
  },
  {
    title: "Soporte\nconfiable",
    icon: Users,
    color: "text-[#1185F5]",
  },
  {
    title: "Tecnología\nmoderna",
    icon: BadgeCheck,
    color: "text-[#FB5802]",
  },
  {
    title: "Disponibilidad\ncontinua",
    icon: Clock3,
    color: "text-[#1185F5]",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/5
        bg-[#040B1A]
        py-16
      "
      id="about"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(17,133,245,0.08),transparent_30%)]
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
          gap-5
          px-6
          lg:grid-cols-[0.9fr_1.1fr]
        "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          
          <h2
            className="
              text-4xl
              font-black
              leading-tight
              text-white
            "
          >
            ¿Por qué elegir{" "}
            <span className="text-[#1185F5]">
              3F?
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-md
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Combinamos tecnología, experiencia y compromiso para brindar
            soluciones que realmente hacen crecer tu negocio.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/20
                  hover:bg-white/[0.05]
                "
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-20
                    w-20
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
                    h-10
                    w-10
                    ${benefit.color}
                  `}
                />

                {/* TITLE */}
                <h3
                  className="
                    mt-6
                    min-h-[56px]
                    whitespace-pre-line
                    text-l
                    font-bold
                    leading-snug
                    text-white
                  "
                >
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}