"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryChipsProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function CategoryChips({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryChipsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Categories Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 overflow-x-auto hide-scrollbar py-2 px-1"
      >
        {/* All Category */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange(null)}
          className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
            activeCategory === null
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
              : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
          }`}
        >
          All Courses
        </motion.button>

        {/* Category Chips */}
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(category.id)}
            className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === category.id
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {category.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Gradient Fades */}
      {showLeftArrow && (
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      )}
      {showRightArrow && (
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      )}
    </div>
  );
}
