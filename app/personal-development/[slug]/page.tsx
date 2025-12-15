"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Clock,
  Users,
  CheckCircle2,
  Download,
  Play,
  Calendar,
  Phone,
  ArrowRight,
  Share2,
  Heart,
  Target,
  Award,
} from "lucide-react";
import { getPersonalDevBySlug, personalDevCourses, personalDevCategories } from "@/lib/personal-development";
import LeadForm from "@/components/LeadForm";
import StickyCTA from "@/components/StickyCTA";
import { notFound } from "next/navigation";

interface PersonalDevDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function PersonalDevDetailPage({ params }: PersonalDevDetailPageProps) {
  const { slug } = use(params);
  const course = getPersonalDevBySlug(slug);

  if (!course) {
    notFound();
  }

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const categoryName = personalDevCategories.find((c) => c.id === course.category)?.name || course.category;

  const similarCourses = personalDevCourses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-900 to-gray-900 text-white">
        <div className="container-main py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/personal-development" className="hover:text-white">Personal Development</Link>
                <span>/</span>
                <span className="text-gray-300">{course.title}</span>
              </nav>

              {/* Category */}
              <span className="inline-block px-4 py-1 bg-violet-500/30 text-violet-200 text-sm font-medium rounded-full mb-4">
                {categoryName}
              </span>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>

              {/* Short Description */}
              <p className="text-lg text-gray-300 mb-6">{course.shortDescription}</p>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {course.badge && (
                  <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-sm font-semibold rounded-full">
                    {course.badge}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-400">
                    ({course.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  <Users size={18} />
                  <span>{course.enrolledCount.toLocaleString()} enrolled</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={18} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Target size={18} />
                  <span>{course.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award size={18} />
                  <span>{course.level}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-white text-xl font-bold">
                  {course.instructor.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{course.instructor.name}</p>
                  <p className="text-sm text-gray-300">{course.instructor.title}</p>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                  {discount > 0 && (
                    <>
                      <span className="text-lg text-gray-400 line-through">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                      <span className="px-2 py-1 bg-green-500 text-white text-sm font-semibold rounded">
                        {discount}% OFF
                      </span>
                    </>
                  )}
                </div>
                <Link href="#enroll" className="btn-primary w-full text-center block mb-3">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Right Sidebar - Desktop */}
            <div className="hidden lg:block w-96 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-32">
                {/* Video Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-violet-600 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </button>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{course.price.toLocaleString()}
                    </span>
                    {discount > 0 && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ₹{course.originalPrice.toLocaleString()}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                          {discount}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-6 p-3 bg-violet-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900">{course.duration}</p>
                    </div>
                  </div>

                  <button className="btn-primary w-full mb-3 !bg-violet-600 hover:!bg-violet-700">
                    Enroll Now
                  </button>
                  <button className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download Syllabus
                  </button>

                  {/* Contact */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3">Need help?</p>
                    <a
                      href="tel:+911800XXXXXXX"
                      className="flex items-center justify-center gap-2 text-violet-600 font-medium"
                    >
                      <Phone size={18} />
                      Talk to Counselor
                    </a>
                  </div>

                  {/* Share & Save */}
                  <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-violet-600">
                      <Share2 size={18} />
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                      <Heart size={18} />
                      <span className="text-sm">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Get</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-violet-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modules */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <span className="w-10 h-10 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 font-medium">{module}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                    {course.instructor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-1">
                      {course.instructor.name}
                    </h3>
                    <p className="text-violet-600 mb-3">{course.instructor.title}</p>
                    <p className="text-gray-600">
                      Expert instructor with years of experience helping professionals develop crucial soft skills for career success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Certificate</h2>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Award className="w-12 h-12 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Certificate of Completion
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Earn a certificate upon completing all modules. Share it on LinkedIn and add it to your resume.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Shareable credential
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Verifiable online
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Sticky Lead Form */}
            <div className="hidden xl:block w-80 flex-shrink-0">
              <div className="sticky top-32">
                <LeadForm
                  title="Get Course Details"
                  subtitle="Our team will reach out"
                  courseName={course.title}
                  variant="sidebar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Courses */}
      {similarCourses.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Similar Courses</h2>
              <Link
                href="/personal-development"
                className="flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {similarCourses.map((c, index) => (
                <Link
                  key={c.id}
                  href={`/personal-development/${c.slug}`}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {c.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      ₹{c.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-violet-600">{c.duration}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        title={course.title}
        price={course.price}
        originalPrice={course.originalPrice}
        ctaText="Enroll Now"
        ctaHref="#enroll"
      />
    </>
  );
}

