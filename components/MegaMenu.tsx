"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { MegaMenuItem } from "@/lib/navigation";

interface MegaMenuProps {
  item: MegaMenuItem;
}

export default function MegaMenu({ item }: MegaMenuProps) {
  const isSupport = item.label === "Support";
  const isCertifications = item.label === "Online Certifications";
  const isDegrees = item.label === "Online Degrees";
  const isWide = item.sections.length > 2;

  // Calculate menu width based on content
  const getMenuWidth = () => {
    if (isCertifications) return "w-[1100px]";
    if (isDegrees) return "w-[950px]";
    if (isSupport) return "w-[380px]";
    if (isWide) return "w-[900px]";
    return "w-[650px]";
  };

  // Get grid columns based on sections
  const getGridCols = () => {
    if (isCertifications) return "grid-cols-4";
    if (isDegrees) return "grid-cols-3";
    if (isWide) return "grid-cols-4";
    return "grid-cols-2";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 ${getMenuWidth()}`}
      style={{ maxWidth: "calc(100vw - 2rem)" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="p-6">
          {isSupport ? (
            // Support Menu Layout
            <div className="space-y-2">
              {item.sections[0]?.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-50 transition-colors group"
                >
                  <span className="text-2xl flex-shrink-0">{subItem.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 group-hover:text-indigo-600">
                      {subItem.label}
                    </p>
                    {subItem.description && (
                      <p className="text-sm text-gray-500">{subItem.description}</p>
                    )}
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0"
                  />
                </Link>
              ))}
            </div>
          ) : (
            // Regular Mega Menu Layout
            <div className="flex gap-6">
              {/* Menu Sections */}
              <div className={`flex-1 grid ${getGridCols()} gap-8`}>
                {item.sections.map((section) => (
                  <div key={section.title} className="min-w-0">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.slice(0, 8).map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="flex items-start gap-2 py-2 px-2 -mx-2 rounded-lg text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all group"
                          >
                            {subItem.icon && (
                              <span className="text-base flex-shrink-0 mt-0.5">
                                {subItem.icon}
                              </span>
                            )}
                            <span className="flex-1 min-w-0">
                              <span className="block group-hover:translate-x-0.5 transition-transform leading-snug">
                                {subItem.label}
                              </span>
                            </span>
                            {subItem.badge && (
                              <span
                                className={`flex-shrink-0 px-1.5 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap ${
                                  subItem.badge === "Hot" || subItem.badge === "Bestseller"
                                    ? "bg-red-100 text-red-600"
                                    : subItem.badge === "New"
                                    ? "bg-green-100 text-green-600"
                                    : subItem.badge === "Popular" || subItem.badge === "Trending"
                                    ? "bg-amber-100 text-amber-600"
                                    : subItem.badge === "Free"
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-indigo-100 text-indigo-600"
                                }`}
                              >
                                {subItem.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured Section */}
              {item.featured && (
                <div className="w-56 flex-shrink-0">
                  <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-5 text-white">
                    <div className="absolute top-3 right-3">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2 leading-tight">
                        {item.featured.title}
                      </h4>
                      <p className="text-sm text-white/80 mb-4 leading-relaxed">
                        {item.featured.description}
                      </p>
                      <Link
                        href={item.featured.href}
                        className="inline-flex items-center gap-2 text-sm font-medium bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* View All Link */}
        {!isSupport && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <Link
              href={item.href}
              className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              <span>View All {item.label}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
