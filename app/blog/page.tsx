"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

// Static blog data
const blogPosts = [
  {
    id: "1",
    slug: "best-data-science-courses-2024",
    title: "10 Best Data Science Courses in 2024: A Complete Guide",
    excerpt: "Looking to start a career in data science? Here are the top 10 courses that will help you become job-ready with practical skills.",
    category: "Data Science",
    author: "Priya Sharma",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "online-mba-vs-regular-mba",
    title: "Online MBA vs Regular MBA: Which One Should You Choose?",
    excerpt: "Confused between online and regular MBA? This comprehensive comparison will help you make the right decision for your career.",
    category: "MBA",
    author: "Rahul Verma",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: "3",
    slug: "aws-vs-azure-vs-gcp",
    title: "AWS vs Azure vs GCP: Which Cloud Certification to Pursue?",
    excerpt: "A detailed comparison of the three major cloud platforms to help you decide which certification aligns with your career goals.",
    category: "Cloud Computing",
    author: "Vikram Singh",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: "4",
    slug: "soft-skills-for-career-growth",
    title: "5 Soft Skills That Will Accelerate Your Career Growth",
    excerpt: "Technical skills are important, but soft skills are what set you apart. Learn the top 5 soft skills every professional needs.",
    category: "Career Growth",
    author: "Neha Gupta",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "5",
    slug: "digital-marketing-trends-2024",
    title: "Digital Marketing Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry this year.",
    category: "Digital Marketing",
    author: "Amit Tandon",
    date: "Dec 1, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "6",
    slug: "ugc-approved-universities-guide",
    title: "Complete Guide to UGC Approved Online Universities in India",
    excerpt: "Everything you need to know about UGC-approved online degree programs and how to verify university credentials.",
    category: "Education",
    author: "Dr. Kavita Sharma",
    date: "Nov 28, 2024",
    readTime: "15 min read",
    featured: false,
  },
];

const categories = [
  { name: "Data Science", icon: TrendingUp, count: 24 },
  { name: "Career Growth", icon: Briefcase, count: 18 },
  { name: "Education", icon: GraduationCap, count: 15 },
  { name: "Technology", icon: BookOpen, count: 21 },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const recentPosts = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-16 lg:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
              <BookOpen size={16} />
              BSEduworld Blog
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Insights, Guides & Career Tips
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice on courses, careers, and skills to help you make informed decisions about your learning journey.
            </p>

            {/* Search */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Posts */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex-shrink-0" />
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <button className="btn-secondary">Load More Articles</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog?category=${category.name.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="font-medium text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <LeadForm
                title="Subscribe to Newsletter"
                subtitle="Get weekly insights in your inbox"
                variant="sidebar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

