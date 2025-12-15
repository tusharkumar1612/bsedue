"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { getCollectionBySlug, collections } from "@/lib/collections";
import { getCourseBySlug } from "@/lib/courses";
import { getDegreeBySlug } from "@/lib/degrees";
import CourseCard from "@/components/CourseCard";
import DegreeCard from "@/components/DegreeCard";
import LeadForm from "@/components/LeadForm";
import { notFound } from "next/navigation";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = use(params);
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  // Get actual course and degree objects
  const collectionCourses = collection.courses
    .map((courseSlug) => getCourseBySlug(courseSlug))
    .filter(Boolean);

  const collectionDegrees = (collection.degrees || [])
    .map((degreeSlug) => getDegreeBySlug(degreeSlug))
    .filter(Boolean);

  const otherCollections = collections
    .filter((c) => c.slug !== collection.slug)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10 py-16 lg:py-24">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/collections/top-online-colleges" className="hover:text-white">Collections</Link>
            <span>/</span>
            <span className="text-white">{collection.title}</span>
          </nav>

          <div className="max-w-3xl">
            {collection.badge && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
                <Sparkles size={16} />
                {collection.badge}
              </span>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{collection.title}</h1>
            <p className="text-xl text-white/80 mb-8">{collection.description}</p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <BookOpen size={20} />
                <span>{collection.courseCount} Programs</span>
              </div>
              {collection.degrees && collection.degrees.length > 0 && (
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} />
                  <span>Degree Programs</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {/* Degrees Section */}
              {collectionDegrees.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Degree Programs in This Collection
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {collectionDegrees.map((degree, index) => (
                      degree && <DegreeCard key={degree.id} degree={degree} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Courses Section */}
              {collectionCourses.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Certification Courses in This Collection
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionCourses.map((course, index) => (
                      course && <CourseCard key={course.id} course={course} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {collectionCourses.length === 0 && collectionDegrees.length === 0 && (
                <div className="text-center py-16 bg-gray-50 rounded-2xl">
                  <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Coming Soon
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We&apos;re adding more courses to this collection. Check back soon!
                  </p>
                  <Link href="/certifications" className="btn-primary inline-flex items-center gap-2">
                    Browse All Courses
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32 space-y-6">
                <LeadForm
                  title="Get Personalized Recommendations"
                  subtitle="Tell us your preferences"
                  variant="sidebar"
                />

                {/* Other Collections */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    More Collections
                  </h3>
                  <div className="space-y-3">
                    {otherCollections.map((c) => (
                      <Link
                        key={c.id}
                        href={`/collections/${c.slug}`}
                        className="block p-3 bg-white rounded-xl hover:shadow-md transition-shadow"
                      >
                        <p className="font-medium text-gray-900 text-sm mb-1">
                          {c.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {c.courseCount} programs
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Program?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our career counselors can help you find the perfect course or degree based on your goals and background.
          </p>
          <Link href="/support" className="btn-primary !bg-white !text-indigo-600 inline-flex items-center gap-2">
            Talk to Counselor
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

