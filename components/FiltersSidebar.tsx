"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Filter } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
}

interface FiltersSidebarProps {
  filters: FilterSection[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (sectionId: string, optionId: string) => void;
  onClearFilters: () => void;
}

export default function FiltersSidebar({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
}: FiltersSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    filters.map((f) => f.id)
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const totalActiveFilters = Object.values(activeFilters).flat().length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Filter size={18} />
          Filters
          {totalActiveFilters > 0 && (
            <span className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-600 rounded-full">
              {totalActiveFilters}
            </span>
          )}
        </h3>
        {totalActiveFilters > 0 && (
          <button
            onClick={onClearFilters}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Sections */}
      {filters.map((section) => (
        <div key={section.id} className="border-b border-gray-100 pb-4">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <span className="font-medium text-gray-900">{section.title}</span>
            <ChevronDown
              size={18}
              className={`text-gray-400 transition-transform ${
                expandedSections.includes(section.id) ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedSections.includes(section.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pt-2 space-y-2">
                  {section.options.map((option) => {
                    const isActive = activeFilters[section.id]?.includes(option.id);
                    return (
                      <label
                        key={option.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-indigo-600 border-indigo-600"
                              : "border-gray-300 group-hover:border-indigo-400"
                          }`}
                        >
                          {isActive && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={() => onFilterChange(section.id, option.id)}
                          className="sr-only"
                        />
                        <span
                          className={`text-sm ${
                            isActive ? "text-indigo-600 font-medium" : "text-gray-600"
                          }`}
                        >
                          {option.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-32 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-24 left-4 z-40 flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-full shadow-lg"
      >
        <Filter size={18} />
        <span className="font-medium">Filters</span>
        {totalActiveFilters > 0 && (
          <span className="px-2 py-0.5 text-xs bg-indigo-600 text-white rounded-full">
            {totalActiveFilters}
          </span>
        )}
      </button>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X size={20} />
                  </button>
                </div>
                <FilterContent />
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="btn-primary w-full"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
