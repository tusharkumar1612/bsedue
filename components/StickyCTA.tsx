"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

interface StickyCTAProps {
  title: string;
  price?: number;
  originalPrice?: number;
  ctaText?: string;
  ctaHref?: string;
  showAfterScroll?: number;
}

export default function StickyCTA({
  title,
  price,
  originalPrice,
  ctaText = "Enroll Now",
  ctaHref = "#",
  showAfterScroll = 500,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl lg:hidden"
        >
          <div className="container-main py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate text-sm">{title}</p>
                {price && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">
                      ₹{price.toLocaleString()}
                    </span>
                    {originalPrice && originalPrice > price && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2">
                <Link
                  href={ctaHref}
                  className="btn-primary flex items-center gap-2 text-sm py-3 px-5"
                >
                  {ctaText}
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                  aria-label="Dismiss"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
