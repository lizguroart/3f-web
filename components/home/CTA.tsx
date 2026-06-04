"use client";

import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
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
          text-center
          lg:flex-row
          lg:items-center
          lg:text-left
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-2xl flex
          flex-col
          items-center
          lg:items-start">
          
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

          <Button href="https://wa.me/573176360046" target="_blank" className="mt-8 inline-flex w-full lg:w-fit">
               Contáctanos ahora
          </Button>
        
        </div>
      </div>
    </section>
  );
}