"use client";

import { ArrowRight, LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onViewMore?: () => void;
}

export default function Card({
  title,
  description,
  icon: Icon,
  color,
  onViewMore
}: CardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.02]
        p-8
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500/20
        hover:bg-white/[0.04]
      "
    >
      {/* HOVER GLOW */}
      <div
        className="
          absolute
          right-0
          top-0
          h-24
          w-24
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
          h-8
          w-8
          ${color}
        `}
      />

      {/* TITLE */}
      <h3
        className="
          mt-6
          whitespace-pre-line
          text-xl
          font-bold
          leading-tight
          text-white
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mt-4
          max-w-xs
          text-sm
          leading-relaxed
          text-gray-400
        "
      >
        {description}
      </p>

      {/* LINK */}
      <button
        onClick={onViewMore}
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-[#1185F5]
          transition
          hover:text-[#FB5802]
        "
      >
        Ver más

        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}