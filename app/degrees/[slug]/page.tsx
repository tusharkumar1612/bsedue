"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Star,
  Clock,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Download,
  Calendar,
  CreditCard,
  Phone,
  ArrowRight,
  Share2,
  Heart,
  Briefcase,
  Users,
  Award,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { getDegreeBySlug, degrees } from "@/lib/degrees";
import DegreeCard from "@/components/DegreeCard";
import FAQAccordion from "@/components/FAQAccordion";
import LeadForm from "@/components/LeadForm";
import StickyCTA from "@/components/StickyCTA";
import { notFound } from "next/navigation";

interface DegreeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function DegreeDetailPage({ params }: DegreeDetailPageProps) {
  const { slug } = use(params);
  const degree = getDegreeBySlug(slug);
  const [expandedSemesters, setExpandedSemesters] = useState<number[]>([0]);

  if (!degree) {
    notFound();
  }

  const similarDegrees = degrees
    .filter((d) => d.programType === degree.programType && d.id !== degree.id)
    .slice(0, 3);

  const toggleSemester = (index: number) => {
    setExpandedSemesters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white">
        <div className="container-main py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/degrees" className="hover:text-white">Degrees</Link>
                <span>/</span>
                <span className="text-gray-300">{degree.programType}</span>
              </nav>

              {/* University Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Offered by</p>
                  <p className="font-semibold text-white">{degree.university.name}</p>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{degree.title}</h1>

              {/* Short Description */}
              <p className="text-lg text-gray-300 mb-6">{degree.shortDescription}</p>

              {/* Approvals */}
              <div className="flex flex-wrap gap-2 mb-6">
                {degree.approvals.map((approval) => (
                  <span
                    key={approval}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                  >
                    {approval}
                  </span>
                ))}
              </div>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {degree.badge && (
                  <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-sm font-semibold rounded-full">
                    {degree.badge}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{degree.rating}</span>
                  <span className="text-gray-400">
                    ({degree.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  <Users size={18} />
                  <span>{degree.enrolledCount.toLocaleString()} enrolled</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={18} />
                  <span>{degree.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <GraduationCap size={18} />
                  <span>{degree.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={18} />
                  <span>{degree.university.location}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden mb-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Total Fee</p>
                  <span className="text-3xl font-bold">₹{degree.totalFee.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">
                    (₹{degree.feePerSemester.toLocaleString()}/sem)
                  </span>
                </div>
                <Link href="#apply" className="btn-primary w-full text-center block mb-3">
                  Apply Now
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
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={20} />
                    <span className="font-medium">{degree.programType} Program</span>
                  </div>
                  <p className="text-white/80 text-sm">{degree.university.name}</p>
                </div>

                {/* Pricing */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Total Program Fee</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ₹{degree.totalFee.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      ₹{degree.feePerSemester.toLocaleString()} per semester
                    </p>
                  </div>

                  {degree.emiAvailable && degree.emiStartsAt && (
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <CreditCard size={16} />
                      <span>EMI from ₹{degree.emiStartsAt.toLocaleString()}/month</span>
                    </div>
                  )}

                  {degree.intakeMonths.length > 0 && (
                    <div className="flex items-center gap-2 mb-6 p-3 bg-purple-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-xs text-gray-500">Admission Open</p>
                        <p className="font-semibold text-gray-900">
                          {degree.intakeMonths.join(", ")}
                        </p>
                      </div>
                    </div>
                  )}

                  <button className="btn-primary w-full mb-3">Apply Now</button>
                  <button className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download Brochure
                  </button>

                  {/* Contact */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3">Need admission guidance?</p>
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

      {/* Program Details */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
                <p className="text-gray-600 leading-relaxed">{degree.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {degree.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700">{degree.eligibility}</p>
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
                  {degree.curriculum.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSemester(index)}
                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                            {module.semester}
                          </span>
                          <div className="text-left">
                            <h3 className="font-semibold text-gray-900">
                              Semester {module.semester}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {module.subjects.length} subjects
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedSemesters.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedSemesters.includes(index) && (
                        <div className="p-5 space-y-3">
                          {module.subjects.map((subject, subIndex) => (
                            <div
                              key={subIndex}
                              className="flex items-center gap-3 text-gray-600"
                            >
                              <BookOpen className="w-4 h-4 text-gray-400" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Career Options */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {degree.careerOptions.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h2>
                <div className="relative">
                  {degree.admissionProcess.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 pb-8 last:pb-0"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        {index < degree.admissionProcess.length - 1 && (
                          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-indigo-200" />
                        )}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* University Info */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About the University</h2>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <GraduationCap className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {degree.university.name}
                      </h3>
                      <p className="text-gray-600">{degree.university.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {degree.university.accreditation.map((acc) => (
                      <span
                        key={acc}
                        className="px-3 py-1 bg-white text-indigo-600 text-sm font-medium rounded-full"
                      >
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs */}
              {degree.faqs.length > 0 && (
                <FAQAccordion
                  faqs={degree.faqs}
                  title="Program FAQs"
                  subtitle="Common questions about this degree"
                />
              )}
            </div>

            {/* Desktop: Sticky Lead Form */}
            <div className="hidden xl:block w-80 flex-shrink-0">
              <div className="sticky top-32">
                <LeadForm
                  title="Get Admission Details"
                  subtitle="Our counselors will guide you"
                  courseName={degree.title}
                  variant="sidebar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Programs */}
      {similarDegrees.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Similar Programs</h2>
              <Link
                href="/degrees"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarDegrees.map((d, index) => (
                <DegreeCard key={d.id} degree={d} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        title={degree.title}
        price={degree.totalFee}
        ctaText="Apply Now"
        ctaHref="#apply"
      />
    </>
  );
}


