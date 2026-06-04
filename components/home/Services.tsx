"use client";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

interface ServicesProps {
  onOpenService: (service: any) => void;
}

export default function Services({
  onOpenService,
}: ServicesProps) {
  
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
                onOpenService(service)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

