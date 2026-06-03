"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const navigation = [
  {
    label: "Inicio",
    href: "/",
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

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/5
        bg-[#050816]/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >
            <Image
              src="/logo_3f.svg"
              alt="3F Logo"
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
        </Link>

        {/* NAVIGATION */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                text-gray-300
                transition
                duration-300
                hover:text-white
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[#FF6600]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
                      ))}
        </nav>

        {/* CTA */}
        <Button href="https://wa.me/573176360046" target="_blank">
          Solicitar asesoría
        </Button>
      </div>
    </header>
  );
}