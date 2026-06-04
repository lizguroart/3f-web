"use client";

import Image from "next/image";
import { services } from "@/data/services";

import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
interface FooterProps {
  onOpenService: (service: any) => void;
}
const socials = [
  {
    icon: FaFacebookF,
    url: "https://web.facebook.com/3fic.co/",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/tu-cuenta",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/3f-ingenier%C3%ADa-y-consultor%C3%ADa/",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/573176360046",
  },
];

const navigation = [
  {
    label: "Inicio",
    href: "#hero",
  },
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Nosotros",
    href: "#about",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export default function Footer({
  onOpenService,
}: FooterProps) {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/5
        bg-[#030712]
      "
    >
      {/* TOP ORANGE LINE */}
      <div
        className="
          absolute
          top-0
          left-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-[#1185F5]
          via-[#FB5802]
          to-[#1185F5]
        "
      />

      {/* BACKGROUND EFFECT */}
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
          gap-14
          px-6
          py-20
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* BRAND */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo_3f.svg"
              alt="3FIC"
              width={50}
              height={50}
              className="object-contain"
           
            />

           <div
            className="
              hidden
              sm:flex
              flex-col
              leading-none
            "
          >
            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-gray-300
              "
            >
              Ingeniería
            </span>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-gray-500
                mt-1
              "
            >
              y Consultoría
            </span>
          </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-xs
              leading-relaxed
              text-gray-400
            "
          >
            Soluciones digitales, infraestructura y soporte tecnológico
            para empresas que quieren crecer.
          </p>

          {/* SOCIALS */}
          <div
            className="
              mt-8
              flex
              items-center
              gap-4
            "
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-gray-300
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:bg-orange-500/10
                    hover:text-white
                  "
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Navegación
          </h4>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-4
            "
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  w-fit
                  text-left
                  text-gray-400
                  transition
                  hover:text-[#1185F5]
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Servicios
          </h4>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-4
            "
          >
           {services.map((item) => (
            <button
              key={item.title}
              onClick={() => onOpenService(item)}
              className="
                w-fit
                text-left
                text-gray-400
                transition
                hover:text-[#FB5802]
              "
            >
              {item.title.replace("\n", " ")}
            </button>
          ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Contacto
          </h4>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-5
            "
          >
            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <MapPin
                className="
                  mt-1
                  h-5
                  w-5
                  text-[#1185F5]
                "
              />

              <p className="text-gray-400">
                Bogotá, Colombia
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <Phone
                className="
                  h-5
                  w-5
                  text-[#1185F5]
                "
              />

              <p className="text-gray-400">
                +57 300 000 0000
              </p>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:hola@3fic.com"
              className="
                flex
                items-center
                gap-3
                transition
                hover:text-[#1185F5]
              "
            >
              <Mail
                className="
                  h-5
                  w-5
                  text-[#1185F5]
                "
              />

              <span className="text-gray-400">
                hola@3fic.com
              </span>
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/573176360046"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-green-500/30
                bg-green-500/10
                px-5
                py-4
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-green-500/20
              "
            >
              <MessageCircle className="h-5 w-5 text-green-400" />

              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          relative
          border-t
          border-white/5
          py-6
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            text-sm
            text-gray-500
            md:flex-row
          "
        >
          <p>
            © 2026 3F Ingeniería y Consultoría.
            Todos los derechos reservados.
          </p>

          <p>
            Diseñado por 3FIC Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}