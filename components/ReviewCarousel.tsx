"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const featuredTestimonials = testimonials.filter((t) => t.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredTestimonials.length]);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) =>
      dir === 1
        ? (prev + 1) % featuredTestimonials.length
        : prev === 0
        ? featuredTestimonials.length - 1
        : prev - 1
    );
  };

  const currentTestimonial = featuredTestimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear From Our Learners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join 500,000+ learners who have transformed their careers with BSEduworld
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl p-8 md:p-12 min-h-[400px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6">
                    &ldquo;{currentTestimonial.review}&rdquo;
                  </blockquote>

                  {/* Outcome */}
                  {currentTestimonial.outcome && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
                        🎯 {currentTestimonial.outcome}
                      </span>
                    </div>
                  )}

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-gray-500">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                    {currentTestimonial.course && (
                      <p className="text-sm text-indigo-600 mt-1">
                        {currentTestimonial.course}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-indigo-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
