"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, GraduationCap, Star, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Degree } from "@/lib/degrees";

interface DegreeCardProps {
  degree: Degree;
  index?: number;
}

export default function DegreeCard({ degree, index = 0 }: DegreeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
    >
      {/* Header with gradient */}
      <div className="relative h-32 bg-gradient-to-br from-indigo-600 to-purple-600 p-5">
        {/* University Info */}
        <div className="flex items-start justify-between">
          <div>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-2">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-white/80 text-sm">{degree.university.name}</p>
          </div>
          {degree.badge && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm">
              {degree.badge}
            </span>
          )}
        </div>

        {/* Approvals */}
        <div className="absolute bottom-3 left-5 right-5 flex gap-2">
          {degree.approvals.slice(0, 3).map((approval) => (
            <span
              key={approval}
              className="px-2 py-1 text-xs font-medium bg-white/90 text-gray-700 rounded"
            >
              {approval}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Program Type */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            {degree.programType}
            {degree.specialization && ` • ${degree.specialization}`}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {degree.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
          <MapPin size={14} />
          <span>{degree.university.location}</span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {degree.duration}
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap size={14} />
            {degree.mode}
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-4">
          {degree.highlights.slice(0, 2).map((highlight, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{degree.rating}</span>
          </div>
          <span className="text-sm text-gray-400">
            ({degree.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Total Fee</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                ₹{degree.totalFee.toLocaleString()}
              </span>
            </div>
            {degree.emiAvailable && degree.emiStartsAt && (
              <p className="text-xs text-gray-500">
                EMI from ₹{degree.emiStartsAt.toLocaleString()}/mo
              </p>
            )}
          </div>
          <Link
            href={`/degrees/${degree.slug}`}
            className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-sm"
          >
            View
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
