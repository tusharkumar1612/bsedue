"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - BS with Graduation Cap */}
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 relative">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Graduation Cap */}
          <path
            d="M8 16L24 8L40 16L24 24L8 16Z"
            fill="#C65D21"
          />
          <path
            d="M36 18V28C36 28 30 32 24 32C18 32 12 28 12 28V18"
            stroke="#C65D21"
            strokeWidth="2"
            fill="none"
          />
          <line x1="40" y1="16" x2="40" y2="30" stroke="#C65D21" strokeWidth="2" />
          <circle cx="40" cy="31" r="2" fill="#C65D21" />
          
          {/* BS Text */}
          <text
            x="24"
            y="44"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#C65D21"
          >
            BS
          </text>
        </svg>
      </div>

      {variant === "full" && (
        <>
          {/* Divider */}
          <div
            className="w-px h-8 sm:h-10 hidden sm:block ml-1"
            style={{ backgroundColor: "#2B5F9E" }}
          />

          {/* Text */}
          <div className="hidden sm:flex flex-col justify-center ml-1">
            <span
              className="text-[10px] sm:text-[11px] font-medium tracking-wide leading-tight"
              style={{ color: "#2B5F9E" }}
            >
              Building Scholars
            </span>
            <div className="flex items-baseline -mt-0.5">
              <span
                className="text-base sm:text-lg font-bold leading-tight"
                style={{ color: "#C65D21" }}
              >
                edu
              </span>
              <span
                className="text-base sm:text-lg font-bold leading-tight"
                style={{ color: "#2B5F9E" }}
              >
                world
              </span>
            </div>
            <span
              className="text-[7px] sm:text-[8px] tracking-wide leading-tight hidden md:block"
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
