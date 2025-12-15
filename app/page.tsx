"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  Sparkles,
  Play,
} from "lucide-react";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import DegreeCard from "@/components/DegreeCard";
import CategoryChips from "@/components/CategoryChips";
import ReviewCarousel from "@/components/ReviewCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import { courses, courseCategories } from "@/lib/courses";
import { degrees } from "@/lib/degrees";
import { collections } from "@/lib/collections";
import { partnerLogos, universityLogos } from "@/lib/testimonials";

const whyChooseUs = [
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Get certified by top universities and tech companies like Google, AWS, and IITs.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with 10+ years of real-world experience.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Resume building, mock interviews, and access to 500+ hiring partners.",
  },
  {
    icon: TrendingUp,
    title: "94% Placement Rate",
    description: "Join our successful alumni working at top companies worldwide.",
  },
];

const homeFAQs = [
  {
    question: "How are BSEduworld courses different from other platforms?",
    answer: "Our courses are designed in collaboration with industry experts and top universities. We focus on practical, job-ready skills with hands-on projects, and provide dedicated career support including placement assistance.",
  },
  {
    question: "Are the online degrees recognized by employers?",
    answer: "Yes, all our partner universities are UGC-approved and NAAC accredited. The degrees are equivalent to regular on-campus degrees and are recognized by employers globally.",
  },
  {
    question: "What kind of support will I get during the course?",
    answer: "You'll have access to live instructor support, 1:1 mentorship sessions, peer learning communities, and dedicated career counselors to guide you throughout your learning journey.",
  },
  {
    question: "Can I study while working full-time?",
    answer: "Absolutely! Our programs are designed for working professionals. With flexible schedules, weekend live sessions, and self-paced content, you can balance learning with your job.",
  },
  {
    question: "What are the payment options available?",
    answer: "We offer flexible payment options including no-cost EMI, pay-after-placement programs (for select courses), and various financing options. Scholarships are also available for eligible candidates.",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCourses = activeCategory
    ? courses.filter((c) => c.category === activeCategory)
    : courses.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Upskill Yourself with Industry-Recognized Online Certification Courses"
        subtitle="🎓 India's Most Trusted Learning Platform"
        description="Transform your career with 300+ courses from top universities and industry partners. Join 500,000+ learners who have achieved their career goals."
        showSearch={true}
        showStats={true}
        ctaPrimary={{ label: "Explore Courses", href: "/certifications" }}
        ctaSecondary={{ label: "Get Free Counseling", href: "/support" }}
      />

      {/* Featured Categories */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Explore Certification Courses
              </h2>
              <p className="text-gray-600 mt-2">
                Choose from 300+ industry-recognized certification programs
              </p>
            </div>
            <Link
              href="/certifications"
              className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
            >
              View All Courses
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Category Chips */}
          <div className="mb-8">
            <CategoryChips
              categories={courseCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Course Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-10">
            <Link href="/certifications" className="btn-primary inline-flex items-center gap-2">
              Browse All Courses
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose BSEduworld */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
              <Sparkles size={16} />
              Why BSEduworld
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why 500K+ Learners Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to delivering exceptional learning experiences that lead to real career outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Degrees Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-3">
                <GraduationCap size={14} />
                UGC Approved
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Online Degree Programs
              </h2>
              <p className="text-gray-600 mt-2">
                Earn a recognized degree from top universities, 100% online
              </p>
            </div>
            <Link
              href="/degrees"
              className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
            >
              View All Programs
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Degree Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {degrees.slice(0, 6).map((degree, index) => (
              <DegreeCard key={degree.id} degree={degree} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Curated Learning Paths
            </h2>
            <p className="text-gray-600">
              Hand-picked collections to help you achieve your career goals faster
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.slice(0, 8).map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/collections/${collection.slug}`}
                  className="block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-indigo-600" />
                    </div>
                    {collection.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full">
                        {collection.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {collection.description}
                  </p>
                  <span className="text-sm text-indigo-600 font-medium flex items-center gap-1">
                    {collection.courseCount} Courses
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <ReviewCarousel />

      {/* Partner Universities & Companies */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {/* University Partners */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Learn from Top Institutions
            </h2>
            <p className="text-gray-600">
              Partner universities and organizations trusted by millions
            </p>
          </div>

          {/* University Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
            {universityLogos.map((uni, index) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-28 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-4"
              >
                <span className="text-sm font-medium text-gray-500 text-center">
                  {uni.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Hiring Partners */}
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Learners Work At
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="w-24 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all"
              >
                <span className="text-xs font-medium text-gray-400">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselor CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Course Is Right for You?
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Talk to our career counselors and get personalized recommendations based on your goals, experience, and interests.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 size={18} />
                  <span>Free 1:1 Counseling</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 size={18} />
                  <span>Career Roadmap</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 size={18} />
                  <span>Course Comparison</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <LeadForm
                title="Get Free Career Guidance"
                subtitle="Our experts will call you within 24 hours"
                variant="default"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={homeFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about learning with BSEduworld"
      />

      {/* Final CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join 500,000+ learners who have upskilled with BSEduworld. Start your learning journey today with industry-recognized certifications and degrees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/certifications"
                className="btn-primary text-base px-8 py-4 flex items-center gap-2"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/degrees"
                className="flex items-center gap-2 px-6 py-4 text-white hover:text-indigo-300 font-medium transition-colors"
              >
                <Play size={20} />
                View Degree Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
