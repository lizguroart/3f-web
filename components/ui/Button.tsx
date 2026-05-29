"use client";

import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  target?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  target,
  ...props
}: ButtonProps) {
  const styles = clsx(
    `
      group
      inline-flex
      items-center
      gap-2
      rounded-2xl
      px-6
      py-3
      text-sm
      font-semibold
      transition-all
      duration-300
      hover:scale-[1.02]
    `,
    variant === "primary" &&
      `
        bg-[#FF6600]
        text-white
        shadow-lg
        shadow-orange-500/20
        hover:bg-orange-500
      `,
    variant === "secondary" &&
      `
        border
        border-white/10
        bg-white/[0.03]
        text-white
        hover:bg-white/[0.05]
      `,
    className
  );

  /* LINK VERSION */
  if (href) {
    return (
      <Link href={href} className={styles} target={target}>
        <span>{children}</span>

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Link>
    );
  }

  /* BUTTON VERSION */
  return (
    <button className={styles} {...props}>
      <span>{children}</span>

      <ArrowRight
        size={18}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  );
}