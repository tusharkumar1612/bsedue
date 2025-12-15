"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, BookOpen, Star, Users, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
        {/* Placeholder pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-indigo-300" />
        </div>

        {/* Badge */}
        {course.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                course.badge === "Bestseller" || course.badge === "Hot"
                  ? "bg-red-500 text-white"
                  : course.badge === "New"
                  ? "bg-green-500 text-white"
                  : course.badge === "Popular" || course.badge === "Trending"
                  ? "bg-amber-500 text-white"
                  : "bg-indigo-500 text-white"
              }`}
            >
              {course.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-bold bg-green-500 text-white rounded-lg">
              {discount}% OFF
            </span>
          </div>
        )}

        {/* Provider Logo */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
          <span className="text-xs font-medium text-gray-700">
            {course.provider.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
            {course.category.replace("-", " ")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={14} />
            {course.mode}
          </span>
        </div>

        {/* Rating & Enrollments */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900">{course.rating}</span>
            </div>
            <span className="text-sm text-gray-400">
              ({course.reviewCount.toLocaleString()} reviews)
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users size={14} />
            {course.enrolledCount.toLocaleString()}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                ₹{course.price.toLocaleString()}
              </span>
              {course.originalPrice > course.price && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{course.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {course.emiAvailable && course.emiStartsAt && (
              <p className="text-xs text-gray-500">
                EMI from ₹{course.emiStartsAt.toLocaleString()}/mo
              </p>
            )}
          </div>
          <Link
            href={`/certifications/${course.slug}`}
            className="flex items-center gap-1 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium rounded-lg transition-colors text-sm"
          >
            View
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
