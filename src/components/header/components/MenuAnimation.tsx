"use client";

import { useState } from "react";
import { Lottie } from "lottie-react";
import menuAnimation from "../../../../public/icons/icons-menu.json";

export default function MenuAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Menu icon */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isHovered}
        className="flex h-[50px] w-[50px] items-center justify-center"
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <Lottie
          src={menuAnimation}
          autoplay={isHovered}
          loop={false}
          className="h-[50px] w-[50px]"
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 top-full z-50 mt-2 w-48 rounded-lg
          border border-gray-200 bg-white py-2 shadow-lg
          transition-all duration-200
          ${
            isHovered
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
      >
        <a href="/documents" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Documents
        </a>
        <a href="/templates" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Templates
        </a>
        <a href="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Pricing
        </a>
      </div>
    </div>
  );
}