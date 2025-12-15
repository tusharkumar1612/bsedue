"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import {
  personalDevCourses,
  personalDevCategories,
  type PersonalDevCourse,
} from "@/lib/personal-development";

const personalDevFAQs = [
  {
    question: "How are personal development courses different from skill courses?",
    answer: "Personal development courses focus on soft skills, mindset, and behavioral changes rather than technical skills. These are essential for career growth, leadership, and overall life success.",
  },
  {
    question: "How long are these courses?",
    answer: "Most personal development courses are 2-4 weeks long, designed for busy professionals. You can complete them alongside your regular work schedule.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, all courses come with a certificate of completion that you can add to your LinkedIn profile and resume.",
  },
  {
    question: "Are there live sessions?",
    answer: "Most courses include live coaching sessions along with self-paced content. You can also schedule 1:1 coaching sessions with instructors.",
  },
];

function PersonalDevCard({ course, index }: { course: PersonalDevCourse; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-br from-violet-500 to-purple-600 p-5">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          {course.badge && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm">
              {course.badge}
            </span>
          )}
        </div>
        {/* Duration */}
        <div className="absolute bottom-3 left-5 px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-700">
          {course.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium text-violet-600 uppercase tracking-wide">
          {personalDevCategories.find((c) => c.id === course.category)?.name}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mt-2 mb-2 group-hover:text-violet-600 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-white text-xs font-semibold">
            {course.instructor.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{course.instructor.name}</p>
            <p className="text-xs text-gray-500 truncate max-w-[180px]">
              {course.instructor.title}
            </p>
          </div>
        </div>

        {/* Rating & Enrolled */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900">{course.rating}</span>
            </div>
            <span className="text-sm text-gray-400">
              ({course.reviewCount.toLocaleString()})
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
          </div>
          <Link
            href={`/personal-development/${course.slug}`}
            className="flex items-center gap-1 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors text-sm"
          >
            Enroll
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PersonalDevelopmentPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCourses = useMemo(() => {
    if (!activeCategory) return personalDevCourses;
    return personalDevCourses.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Unlock Your Full Potential with Personal Development Courses"
        subtitle="✨ Transform Your Life & Career"
        description="Master essential soft skills like leadership, communication, confidence, and productivity. Short courses designed for busy professionals."
        showSearch={false}
        showStats={false}
        ctaPrimary={{ label: "Browse Courses", href: "#courses" }}
        ctaSecondary={{ label: "Get Guidance", href: "/support" }}
        variant="personal"
      />

      {/* Why Personal Development */}
      <section className="py-12 bg-white border-b">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Career Advancement",
                description: "Soft skills are the #1 factor for promotions and leadership roles",
              },
              {
                icon: TrendingUp,
                title: "Higher Income",
                description: "Professionals with strong soft skills earn 12% more on average",
              },
              {
                icon: Sparkles,
                title: "Life Transformation",
                description: "Improve relationships, confidence, and overall life satisfaction",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-violet-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories & Listing */}
      <section id="courses" className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Personal Development Courses
            </h2>
            <p className="text-gray-600">
              Short, impactful courses to level up your soft skills
            </p>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === null
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-violet-300"
              }`}
            >
              All Courses
            </button>
            {personalDevCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-violet-300"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <PersonalDevCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <Sparkles className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-4">
                Try selecting a different category
              </p>
              <button
                onClick={() => setActiveCategory(null)}
                className="text-violet-600 font-medium"
              >
                View all courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Take our free assessment to discover which skills will have the biggest impact on your career.
              </p>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <LeadForm
                title="Get Personalized Recommendations"
                subtitle="Tell us about your goals"
                variant="sidebar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={personalDevFAQs}
        title="Personal Development FAQs"
        subtitle="Common questions about soft skills training"
      />
    </>
  );
}

