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
  const isCollections = item.label === "Collections";
  const isPersonalDev = item.label === "Personal Development";

  // Calculate menu width based on content
  const getMenuWidth = () => {
    if (isCertifications) return "max-w-5xl w-[1000px]";
    if (isDegrees) return "max-w-4xl w-[900px]";
    if (isSupport) return "w-[340px]";
    if (isCollections) return "w-[400px]";
    if (isPersonalDev) return "w-[450px]";
    return "w-[600px]";
  };

  // Get grid columns based on sections
  const getGridCols = () => {
    if (isCertifications) return "grid-cols-4";
    if (isDegrees) return "grid-cols-3";
    if (isCollections || isPersonalDev) return "grid-cols-1";
    return "grid-cols-2";
  };

  // Determine positioning - left-aligned menus for first few items to prevent going off-screen
  const getPositioning = () => {
    if (isCertifications || isDegrees) {
      // Large menus - position from left edge of screen
      return "left-0";
    }
    if (isSupport) {
      // Support is on the right, align to right
      return "right-0";
    }
    // Default - center align
    return "left-1/2 -translate-x-1/2";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full pt-3 ${getMenuWidth()} ${getPositioning()}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="p-5">
          {isSupport ? (
            // Support Menu Layout
            <div className="space-y-1">
              {item.sections[0]?.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors group"
                >
                  <span className="text-xl flex-shrink-0">{subItem.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 group-hover:text-indigo-600 text-sm">
                      {subItem.label}
                    </p>
                    {subItem.description && (
                      <p className="text-xs text-gray-500 truncate">{subItem.description}</p>
                    )}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0"
                  />
                </Link>
              ))}
            </div>
          ) : (
            // Regular Mega Menu Layout
            <div className="flex gap-6">
              {/* Menu Sections */}
              <div className={`flex-1 grid ${getGridCols()} gap-6`}>
                {item.sections.map((section) => (
                  <div key={section.title} className="min-w-0">
                    <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
                      {section.title}
                    </h3>
                    <ul className="space-y-0.5">
                      {section.items.slice(0, 8).map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-lg text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all group"
                          >
                            {subItem.icon && (
                              <span className="text-sm flex-shrink-0">
                                {subItem.icon}
                              </span>
                            )}
                            <span className="flex-1 min-w-0 truncate group-hover:text-indigo-600 transition-colors">
                              {subItem.label}
                            </span>
                            {subItem.badge && (
                              <span
                                className={`flex-shrink-0 px-1.5 py-0.5 text-[9px] font-semibold rounded-full whitespace-nowrap ${
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
                <div className="w-48 flex-shrink-0">
                  <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white">
                    <div className="absolute top-2 right-2">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div className="pt-3">
                      <h4 className="font-semibold text-sm mb-2 leading-tight">
                        {item.featured.title}
                      </h4>
                      <p className="text-xs text-white/80 mb-3 leading-relaxed line-clamp-3">
                        {item.featured.description}
                      </p>
                      <Link
                        href={item.featured.href}
                        className="inline-flex items-center gap-1 text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={12} />
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
          <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
            <Link
              href={item.href}
              className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              <span>View All {item.label}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
