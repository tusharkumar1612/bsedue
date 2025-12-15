"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Clock,
  BookOpen,
  Users,
  Award,
  CheckCircle2,
  Download,
  Play,
  ChevronDown,
  Calendar,
  CreditCard,
  Phone,
  ArrowRight,
  Share2,
  Heart,
  Globe,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import { getCourseBySlug, courses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import StickyCTA from "@/components/StickyCTA";
import { notFound } from "next/navigation";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  if (!course) {
    notFound();
  }

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const similarCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
        <div className="container-main py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link href="/certifications" className="hover:text-white">
                  Certifications
                </Link>
                <span>/</span>
                <span className="text-gray-300">{course.title}</span>
              </nav>

              {/* Provider */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">
                    {course.provider.name.charAt(0)}
                  </span>
                </div>
                <span className="text-gray-300">{course.provider.name}</span>
              </div>

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
                  <BookOpen size={18} />
                  <span>{course.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Globe size={18} />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award size={18} />
                  <span>{course.level}</span>
                </div>
              </div>

              {/* Mobile CTA (visible on mobile) */}
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
                <button className="btn-secondary w-full flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Sidebar - Desktop */}
            <div className="hidden lg:block w-96 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-32">
                {/* Video Preview */}
                <div className="relative aspect-video bg-gray-900">
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

                  {course.emiAvailable && course.emiStartsAt && (
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <CreditCard size={16} />
                      <span>EMI from ₹{course.emiStartsAt.toLocaleString()}/month</span>
                    </div>
                  )}

                  {course.nextBatch && (
                    <div className="flex items-center gap-2 mb-6 p-3 bg-indigo-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <div>
                        <p className="text-xs text-gray-500">Next Batch</p>
                        <p className="font-semibold text-gray-900">{course.nextBatch}</p>
                      </div>
                    </div>
                  )}

                  <button className="btn-primary w-full mb-3">Enroll Now</button>
                  <button className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download Brochure
                  </button>

                  {/* Contact */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3">Need help deciding?</p>
                    <a
                      href="tel:+911800XXXXXXX"
                      className="flex items-center justify-center gap-2 text-indigo-600 font-medium"
                    >
                      <Phone size={18} />
                      Talk to Counselor
                    </a>
                  </div>

                  {/* Share & Save */}
                  <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills You'll Learn */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills You&apos;ll Learn</h2>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
                  <button className="flex items-center gap-2 text-indigo-600 font-medium">
                    <Download size={18} />
                    Download Syllabus
                  </button>
                </div>

                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </span>
                          <div className="text-left">
                            <h3 className="font-semibold text-gray-900">{module.title}</h3>
                            <p className="text-sm text-gray-500">
                              {module.lessons.length} lessons • {module.duration}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedModules.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedModules.includes(index) && (
                        <div className="p-5 space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center gap-3 text-gray-600"
                            >
                              <Play className="w-4 h-4 text-gray-400" />
                              <span>{lesson}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Instructors */}
              {course.instructors.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructors</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {course.instructors.map((instructor, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                          {instructor.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{instructor.name}</h3>
                          <p className="text-sm text-indigo-600 mb-2">{instructor.title}</p>
                          <p className="text-sm text-gray-600">{instructor.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificate */}
              {course.certificate && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Certification</h2>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-40 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <Award className="w-16 h-16 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Earn Your Certificate
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Upon successful completion, you&apos;ll receive an industry-recognized certificate from {course.provider.name} that you can share on LinkedIn and with employers.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Shareable on LinkedIn
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Verifiable credential
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Print-ready PDF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Career Outcomes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Software Developer", "Data Analyst", "Product Manager", "Tech Lead", "Consultant", "Freelancer"].map((role, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {course.faqs.length > 0 && (
                <FAQAccordion
                  faqs={course.faqs}
                  title="Course FAQs"
                  subtitle="Common questions about this program"
                />
              )}
            </div>

            {/* Desktop: Sticky Lead Form for wide screens */}
            <div className="hidden xl:block w-80 flex-shrink-0">
              <div className="sticky top-32">
                <LeadForm
                  title="Get Course Details"
                  subtitle="Our experts will call you"
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
                href="/certifications"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarCourses.map((c, index) => (
                <CourseCard key={c.id} course={c} index={index} />
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


