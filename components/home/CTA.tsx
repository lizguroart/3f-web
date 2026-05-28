"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/5
        py-16
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
        "
      >
        <Image
          src="/cta_bg.png"
          alt="Technology Background"
          width={2000}
          height={1200}
          className="
            object-contain
            opacity-70
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-[#040B1A]/70
          "
        />

        {/* EXTRA GRADIENT */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#1185F5]/15
            via-transparent
            to-[#FB5802]/15
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-start
          justify-between
          gap-10
          px-6
          lg:flex-row
          lg:items-center
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#1185F5]
            "
          >
            ¿Listo para dar el siguiente paso?
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-5xl
            "
          >
            Llevemos tu negocio{" "}
            <span className="text-[#FB5802]">
              al siguiente nivel.
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-md">
          
          <p
            className="
              text-lg
              leading-relaxed
              text-gray-300
            "
          >
            Hablemos sobre cómo podemos ayudarte a crecer con tecnología
            moderna y soluciones confiables.
          </p>

          <button
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-[#FB5802]
              px-6
              py-4
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-orange-500/20
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-[#ff6a1f]
            "
          >
            Contáctanos ahora

            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}