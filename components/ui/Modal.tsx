"use client";

import { useEffect, ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        p-4
      "
    >
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/10
          backdrop-blur-md
        "
      />

      {/* MODAL */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-[32px]
          border
          border-white/10
          bg-[#040B1A]
          shadow-2xl
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6
            z-20
            text-gray-400
            transition
            hover:text-white
          "
        >
          <X className="h-6 w-6" />
        </button>

        {children}
      </div>
    </div>
  );
}