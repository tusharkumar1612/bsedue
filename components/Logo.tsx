"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - BS with Graduation Cap */}
      <div className="relative flex-shrink-0">
        {/* Graduation Cap */}
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1 -left-1"
        >
          <path
            d="M6 14L22 6L38 14L22 22L6 14Z"
            fill="#C65D21"
          />
          <path
            d="M34 16V26C34 26 28 30 22 30C16 30 10 26 10 26V16"
            stroke="#C65D21"
            strokeWidth="2"
            fill="none"
          />
          <line x1="38" y1="14" x2="38" y2="28" stroke="#C65D21" strokeWidth="2" />
          <circle cx="38" cy="29" r="1.5" fill="#C65D21" />
        </svg>
        
        {/* BS Text */}
        <div className="relative z-10 mt-5">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ color: "#C65D21" }}
          >
            BS
          </span>
        </div>
      </div>

      {variant === "full" && (
        <>
          {/* Divider */}
          <div
            className="w-px h-10 hidden sm:block"
            style={{ backgroundColor: "#2B5F9E" }}
          />

          {/* Text */}
          <div className="hidden sm:flex flex-col -space-y-1">
            <span
              className="text-[11px] font-medium tracking-wide"
              style={{ color: "#2B5F9E" }}
            >
              Building Scholars
            </span>
            <div className="flex items-baseline">
              <span
                className="text-lg font-bold"
                style={{ color: "#C65D21" }}
              >
                edu
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: "#2B5F9E" }}
              >
                world
              </span>
            </div>
            <span
              className="text-[8px] tracking-wide"
              style={{ color: "#6B7280" }}
            >
              Quality Education Throughout The World
            </span>
          </div>
        </>
      )}
    </Link>
  );
}

