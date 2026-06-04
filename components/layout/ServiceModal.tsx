"use client";

import {
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  service: {
    title: string;
    longDescription: string;
    icon: LucideIcon;
    color: string;
    technologies: string[];
    features: string[];
    whatsappMessage: string;
  } | null;
}

export default function ServiceModal({
  open,
  onClose,
  service,
}: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <Modal open={open} onClose={onClose}>
      <div
  className="
    relative
    overflow-hidden
    p-6
    lg:p-10
  "
>
  {/* BLUE GLOW */}
  <div
    className="
      absolute
      left-0
      top-0
      h-[300px]
      w-[300px]
      rounded-full
      bg-[#1185F5]/10
      blur-[100px]
    "
  />

  {/* ORANGE GLOW */}
  <div
    className="
      absolute
      bottom-0
      right-0
      h-[350px]
      w-[350px]
      rounded-full
      bg-[#FB5802]/10
      blur-[120px]
    "
  />

  <div
    className="
      relative
      grid
      gap-10
      lg:grid-cols-[1.1fr_0.9fr]
    "
  >
    {/* LEFT */}
    <div>
      {/* ICON */}
      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-[32px]
          border
          border-[#1185F5]/20
          bg-[#1185F5]/5
          shadow-[0_0_40px_rgba(17,133,245,0.25)]
        "
      >
        <Icon
          className={`
            h-14
            w-14
            ${service.color}
          `}
        />
      </div>

      {/* TITLE */}
      <h2
        className="
          mt-8
          whitespace-pre-line
          text-3xl
          font-black
          leading-none
          text-white
        "
      >
        {service.title}
      </h2>

      {/* BLUE LINE */}
      <div
        className="
          mt-6
          h-1
          w-14
          rounded-full
          bg-[#1185F5]
        "
      />

      {/* DESCRIPTION */}
      <p
        className="
          mt-6
          max-w-lg
          text-base
          leading-relaxed
          text-gray-400
        "
      >
        {service.longDescription}
      </p>

      {/* HIGHLIGHT */}
      <div
        className="
          mt-8
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-4
          backdrop-blur-sm
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              flex
              h-2
              w-6
              items-center
              justify-center
              rounded-2xl
              bg-[#1185F5]/10
            "
          >
            ✨
          </div>

          <p
            className="
              text-sm
              font-medium
              text-[#1185F5]
            "
          >
            Tecnología que transforma ideas
            en resultados reales.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div
      className="
        border-t
        border-white/10
        pt-6
        lg:border-l
        lg:border-t-0
        lg:pl-10
        lg:pt-0
      "
    >
      <h3
        className="
          text-xl
          font-bold
          text-white
        "
      >
        ¿Qué incluye?
      </h3>

      <div className="mt-6 space-y-6">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <CheckCircle2
                className="
                  h-5
                  w-5
                  text-[#FB5802]
                "
              />
            </div>

            <span
              className="
                text-base
                text-gray-300
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* BOTTOM */}
  <div
    className="
      relative
      mt-4
      flex
      flex-col
      gap-8
      border-t
      border-white/10
      pt-6

      lg:flex-row
      lg:items-center
      lg:justify-between
    "
  >
    {/* TECHS */}
    <div>
      <h4
        className="
          mb-4
          text-sm
          font-semibold
          text-white
        "
      >
        Tecnologías que usamos
      </h4>

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >
        {service.technologies.map((tech) => (
          <div
            key={tech}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-3
              text-sm
              text-gray-300
            "
          >
            {tech}
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className=" flex-shrink-0
    w-full
    lg:w-auto">
      <Button
        href={`https://wa.me/573176360046?text=${encodeURIComponent(
          service.whatsappMessage
        )}`}
        target="_blank"
        className="
          inline-flex
          w-full
          lg:w-auto
          min-w-[260px]
          bg-gradient-to-r
          from-[#FB5802]
          to-orange-500
          shadow-[0_0_40px_rgba(251,88,2,0.35)]
        "
      >
        Solicitar asesoría
      </Button>

      <p
        className="
          mt-3
          text-center
          text-xs
          text-gray-500
        "
      >
        Atención rápida por WhatsApp
      </p>
    </div>
  </div>
    </div>
    </Modal>
  );
}