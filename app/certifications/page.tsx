"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import CategoryChips from "@/components/CategoryChips";
import FiltersSidebar from "@/components/FiltersSidebar";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import { courses, courseCategories, filterOptions } from "@/lib/courses";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";

const certificationFAQs = [
  {
    question: "What is the difference between a certificate and a certification?",
    answer: "A certificate is awarded upon completing a course or program, while a certification typically requires passing an exam and may require ongoing education to maintain. Our programs offer both depending on the course.",
  },
  {
    question: "How long are the certification courses?",
    answer: "Course duration varies from 4 weeks to 12 months depending on the depth and complexity. Most popular courses are 3-6 months in duration.",
  },
  {
    question: "Will I get a job after completing the certification?",
    answer: "We offer placement assistance for most courses with access to our hiring partner network. While we don't guarantee jobs, our placement rate is 94% for learners who complete career services.",
  },
  {
    question: "Can I access the course content after completion?",
    answer: "Yes! You get lifetime access to all course materials, including future updates and improvements to the curriculum.",
  },
];

const filterSections = [
  { id: "popularity", title: "Popular Filters", options: filterOptions.popularity },
  { id: "duration", title: "Duration", options: filterOptions.duration },
  { id: "level", title: "Skill Level", options: filterOptions.level },
  { id: "price", title: "Price Range", options: filterOptions.price },
  { id: "mode", title: "Learning Mode", options: filterOptions.mode },
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

  const handleFilterChange = (sectionId: string, optionId: string) => {
    setActiveFilters((prev) => {
      const current = prev[sectionId] || [];
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [sectionId]: updated };
    });
  };

  const clearFilters = () => {
    setActiveFilters({});
    setActiveCategory(null);
  };

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Filter by category
    if (activeCategory) {
      result = result.filter((c) => c.category === activeCategory);
    }

    // Filter by level
    if (activeFilters.level?.length) {
      result = result.filter((c) =>
        activeFilters.level.some((l) => c.level.toLowerCase() === l)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        result.sort((a, b) => b.enrolledCount - a.enrolledCount);
    }

    return result;
  }, [activeCategory, activeFilters, sortBy]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Industry-Recognized Online Certification Courses"
        subtitle="🎓 Upskill & Get Certified"
        description="Choose from 300+ courses in Data Science, Cloud, Marketing, and more. Learn from experts and earn certificates valued by top employers."
        showSearch={true}
        showStats={false}
        ctaPrimary={{ label: "Browse Courses", href: "#courses" }}
        ctaSecondary={{ label: "Talk to Counselor", href: "/support" }}
      />

      {/* Main Content */}
      <section id="courses" className="section-padding bg-white">
        <div className="container-main">
          {/* Category Chips */}
          <div className="mb-8">
            <CategoryChips
              categories={courseCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <FiltersSidebar
              filters={filterSections}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />

            {/* Course Listing */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-gray-600">
                    Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} className="text-gray-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border-0 bg-transparent text-sm font-medium text-gray-700 focus:ring-0 cursor-pointer"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest First</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="hidden md:flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${
                        viewMode === "grid" ? "bg-indigo-50 text-indigo-600" : "text-gray-400 hover:text-gray-600"
                      }`}
                      aria-label="Grid view"
                    >
                      <Grid3X3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list" ? "bg-indigo-50 text-indigo-600" : "text-gray-400 hover:text-gray-600"
                      }`}
                      aria-label="List view"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Course Grid */}
              {filteredCourses.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredCourses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Grid3X3 className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No courses found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}

              {/* Load More */}
              {filteredCourses.length >= 12 && (
                <div className="text-center mt-10">
                  <button className="btn-secondary">Load More Courses</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Counselor CTA */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">
                Need Help Choosing the Right Course?
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Our career counselors can help you find the perfect course based on your goals, background, and budget.
              </p>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <LeadForm
                title="Get Expert Guidance"
                subtitle="We'll help you choose the right course"
                variant="sidebar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={certificationFAQs}
        title="Certification FAQs"
        subtitle="Common questions about our certification courses"
      />
    </>
  );
}


