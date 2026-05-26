"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import {
  ShieldCheck,
  Cpu,
  Layers3,
} from "lucide-react";

const features = [
  {
    text: "Soporte confiable",
    icon: ShieldCheck,
  },
  {
    text: "Tecnología moderna",
    icon: Cpu,
  },
  {
    text: "Soluciones integrales",
    icon: Layers3,
  },
]

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-8
        pb-8
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(17,133,245,0.15),transparent_30%)]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          px-6
          lg:grid-cols-[1fr_1.5fr]
        "
      >
        {/* LEFT SIDE */}
        <div className="z-30" >
          {/* BADGE */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#1185F5]
              
            "
          >
            Tecnología que impulsa negocios
          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-3xl
              font-[family:var(--font-sora)]
              text-5xl
              font-black
              leading-[0.95]
              text-white
              md:text-5xl
            "
          >
            Soluciones tecnológicas modernas para empresas que quieren <strong  className="text-[#FB5802]">crecer.</strong>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Desarrollo web, soporte tecnológico, infraestructura y soluciones
            inteligentes para negocios modernos.
          </p>

          {/* CTA */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <Button>
              Solicitar asesoría
            </Button>

            <Button variant="secondary">
              Ver servicios
            </Button>
          </div>

        
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-[#1185F5]/20
              blur-3xl
            "
          />

          {/* MAIN CARD */}
          <div
            className="
                relative
                flex
                items-center
                justify-center
            "
            >
            {/* Glow Background */}
            <div
                className="
                absolute
                inset-0
                rounded-full
                bg-[#1185F5]/20
                blur-3xl
                "
            />

            {/* Hero Image */}
           <div
            className="
                relative
                w-full
                scale-110
                lg:scale-125
                -mr-10
            "
            >
                <Image
                src="/hero-image.png"
                alt="3F Technology"
                width={1200}
                height={1200}
                priority
                className="
                    relative
                    z-10
                    h-auto
                    w-full
                    object-contain
                    scale-110
                    lg:scale-125
                    translate-x-6
                    drop-shadow-[0_0_40px_rgba(17,133,245,0.18)]
                "
                />
            </div>
            </div>
        </div>
      </div>
       {/* MINI FEATURES */}
            <div
            className="
                mt-6
                flex
                flex-wrap
                gap-4
                max-w-7xl
                mx-auto
            "
            >
            {features.map((item) => {
                const Icon = item.icon;

                return (
                <div
                    key={item.text}
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-2
                    text-sm
                    text-gray-300
                    backdrop-blur-sm
                    hover:bg-white/[0.06]
                    transition
                    "
                >
                    <div
                    className="
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-500/20
                        p-1
                    "
                    >
                    <Icon
                        className="
                        h-4
                        w-4
                        text-orange-400
                        "
                    />
                    </div>

                    <span>{item.text}</span>
                </div>
                );
            })}
            </div>
    </section>
  );
}