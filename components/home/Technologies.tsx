"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiDocker,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#68A063]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#38BDF8]",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-[#3ECF8E]",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-white",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-[#2496ED]",
  },
];

export default function Technologies() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/5
        bg-[#040B1A]
        py-14
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(17,133,245,0.06),transparent_30%)]
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

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* TITLE */}
        <div className="mb-8">
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#1185F5]
            "
          >
            Tecnologías que utilizamos
          </span>
        </div>

        {/* TECH GRID */}
        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/20
                  hover:bg-white/[0.05]
                "
              >
                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#1185F5]/0
                    via-[#1185F5]/5
                    to-[#FB5802]/5
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ICON */}
                <Icon
                  className={`
                    relative
                    z-10
                    h-6
                    w-6
                    ${tech.color}
                  `}
                />

                {/* TEXT */}
                <span
                  className="
                    relative
                    z-10
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}