"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Filter,
} from "lucide-react";
import Hero from "@/components/Hero";
import DegreeCard from "@/components/DegreeCard";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import { degrees, degreeCategories, degreeFilterOptions } from "@/lib/degrees";

const degreeFAQs = [
  {
    question: "Are online degrees valid in India?",
    answer: "Yes, all our partner universities are UGC-approved, making online degrees equivalent to regular degrees for all government and private sector jobs.",
  },
  {
    question: "Can I pursue a government job with an online degree?",
    answer: "Absolutely! UGC-approved online degrees are recognized for all central and state government job applications, including UPSC, SSC, and state PSC exams.",
  },
  {
    question: "Is there any campus visit required?",
    answer: "Most programs are 100% online. Some universities offer optional campus immersion programs for networking and experiential learning.",
  },
  {
    question: "How are online exams conducted?",
    answer: "Exams are conducted through secure online proctored platforms. Some universities may offer center-based examination options.",
  },
  {
    question: "Can I get education loans for online degrees?",
    answer: "Yes, many banks offer education loans for UGC-approved online degree programs. We can help you with the loan application process.",
  },
];

const approvalBadges = [
  { name: "UGC Approved", icon: "🏛️", description: "University Grants Commission" },
  { name: "NAAC Accredited", icon: "⭐", description: "National Assessment Body" },
  { name: "AICTE Approved", icon: "🎓", description: "For Technical Programs" },
  { name: "WES Recognized", icon: "🌍", description: "Global Credential Evaluation" },
];

export default function DegreesPage() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("popular");

  const filteredDegrees = useMemo(() => {
    let result = [...degrees];

    if (activeProgram) {
      result = result.filter(
        (d) => d.programType.toLowerCase() === activeProgram.toLowerCase()
      );
    }

    switch (sortBy) {
      case "fee-low":
        result.sort((a, b) => a.totalFee - b.totalFee);
        break;
      case "fee-high":
        result.sort((a, b) => b.totalFee - a.totalFee);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.enrolledCount - a.enrolledCount);
    }

    return result;
  }, [activeProgram, sortBy]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="UGC Approved Online Degree Programs"
        subtitle="🎓 Distance Learning Made Easy"
        description="Earn a recognized degree from top universities while working. 100% online, flexible, and career-focused programs."
        showSearch={true}
        showStats={false}
        ctaPrimary={{ label: "Explore Programs", href: "#programs" }}
        ctaSecondary={{ label: "Get Counseling", href: "/support" }}
        variant="degree"
      />

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {approvalBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">
                  {badge.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{badge.name}</p>
                  <p className="text-xs text-gray-500">{badge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section id="programs" className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Browse by Program
            </h2>
            <p className="text-gray-600">
              Choose from MBA, MCA, BCA, BBA, B.Com and more
            </p>
          </div>

          {/* Program Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveProgram(null)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeProgram === null
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              All Programs
            </button>
            {degreeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveProgram(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeProgram === category.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-xs ${
                    activeProgram === category.id
                      ? "bg-white/20"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sort & Filter Bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredDegrees.length}</span> programs
            </p>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-0 bg-transparent text-sm font-medium text-gray-700 focus:ring-0 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="fee-low">Fee: Low to High</option>
                <option value="fee-high">Fee: High to Low</option>
              </select>
            </div>
          </div>

          {/* Degree Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDegrees.map((degree, index) => (
              <DegreeCard key={degree.id} degree={degree} index={index} />
            ))}
          </div>

          {filteredDegrees.length === 0 && (
            <div className="text-center py-16">
              <GraduationCap className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No programs found
              </h3>
              <p className="text-gray-600 mb-4">
                Try selecting a different program type
              </p>
              <button
                onClick={() => setActiveProgram(null)}
                className="text-indigo-600 font-medium"
              >
                View all programs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Online Degree */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                <GraduationCap size={16} />
                Why Choose Online Degrees?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get the Same Degree, More Flexibility
              </h2>
              <p className="text-gray-600 mb-8">
                Online degrees from UGC-approved universities are equivalent to regular degrees. Study at your own pace while continuing your job or other commitments.
              </p>

              <div className="space-y-4">
                {[
                  "100% valid for government & private jobs",
                  "Study from anywhere, anytime",
                  "Same curriculum as campus programs",
                  "Lower fees compared to regular programs",
                  "No career break required",
                  "Industry-relevant specializations",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/support"
                className="btn-primary inline-flex items-center gap-2 mt-8"
              >
                Talk to Admission Counselor
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              {[
                { value: "100+", label: "University Partners" },
                { value: "50K+", label: "Degrees Awarded" },
                { value: "94%", label: "Completion Rate" },
                { value: "4.7★", label: "Average Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center"
                >
                  <p className="text-4xl font-bold text-indigo-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Counselor CTA */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">
                Find the Right University for You
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Compare universities, check eligibility, and get personalized recommendations from our expert counselors.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
                <div className="flex items-center gap-2 text-white/90">
                  <Shield size={18} />
                  <span>Free Counseling</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 size={18} />
                  <span>No Spam</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <LeadForm
                title="Get University Recommendations"
                subtitle="Tell us your preferences"
                variant="sidebar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={degreeFAQs}
        title="Online Degree FAQs"
        subtitle="Everything you need to know about distance learning"
      />
    </>
  );
}


