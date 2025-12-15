"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Play, ArrowRight, Sparkles, Users, Building2, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import { stats } from "@/lib/testimonials";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  showSearch?: boolean;
  showStats?: boolean;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: "default" | "certification" | "degree" | "personal";
}

const statIcons: Record<string, React.ElementType> = {
  "👨‍🎓": Users,
  "🤝": Building2,
  "📚": Award,
  "💼": TrendingUp,
};

export default function Hero({
  title,
  subtitle,
  description,
  showSearch = true,
  showStats = true,
  ctaPrimary = { label: "Explore Courses", href: "/certifications" },
  ctaSecondary = { label: "Get Guidance", href: "/support" },
  variant = "default",
}: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/certifications?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative overflow-hidden bg-mesh">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-12 h-12 bg-yellow-400/30 rounded-lg backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] w-8 h-8 bg-indigo-400/30 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-[25%] w-10 h-10 bg-pink-400/30 rounded-lg rotate-45 backdrop-blur-sm"
        />
      </div>

      <div className="container-main relative z-10 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">{subtitle}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {title.split(" ").map((word, i) => (
              <span key={i}>
                {word.toLowerCase().includes("certification") ||
                word.toLowerCase().includes("courses") ||
                word.toLowerCase().includes("degrees") ||
                word.toLowerCase().includes("skills") ? (
                  <span className="text-gradient">{word} </span>
                ) : (
                  `${word} `
                )}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* Search Bar */}
          {showSearch && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSearch}
              className="relative max-w-2xl mx-auto mb-8"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses, skills, or certifications..."
                  className="w-full pl-14 pr-36 py-4 rounded-2xl bg-white border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 btn-primary py-3 px-6"
                >
                  Search
                </button>
              </div>
              {/* Popular Searches */}
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                <span>Popular:</span>
                {["Data Science", "MBA", "Full Stack", "AI/ML"].map((term) => (
                  <Link
                    key={term}
                    href={`/certifications?search=${term}`}
                    className="px-3 py-1 rounded-full bg-white/80 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </motion.form>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href={ctaPrimary.href} className="btn-primary text-base px-8 py-4 flex items-center gap-2">
              {ctaPrimary.label}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={ctaSecondary.href}
              className="flex items-center gap-2 px-6 py-4 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              <Play size={20} className="text-indigo-600" />
              {ctaSecondary.label}
            </Link>
          </motion.div>

          {/* Stats */}
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = statIcons[stat.icon] || Users;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-indigo-600" />
                      <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
