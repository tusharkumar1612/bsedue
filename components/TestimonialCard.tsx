"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <Quote className="w-5 h-5 text-indigo-600" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 mb-6 line-clamp-4">&ldquo;{testimonial.review}&rdquo;</p>

      {/* Outcome Badge */}
      {testimonial.outcome && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            🎯 {testimonial.outcome}
          </span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Course/Degree */}
      {(testimonial.course || testimonial.degree) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Completed: <span className="text-indigo-600 font-medium">{testimonial.course || testimonial.degree}</span>
          </p>
        </div>
      )}
    </motion.div>
  );
}
