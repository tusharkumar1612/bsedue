"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-mesh">
      <div className="container-main text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Graphic */}
          <div className="mb-8">
            <span className="text-9xl font-bold text-gradient">404</span>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="btn-primary flex items-center gap-2"
            >
              <Home size={18} />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-6">
              Here are some helpful links:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/certifications"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-gray-700">Browse Courses</span>
              </Link>
              <Link
                href="/degrees"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <Search className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-gray-700">Online Degrees</span>
              </Link>
              <Link
                href="/support"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <span className="text-xl">💬</span>
                <span className="font-medium text-gray-700">Get Help</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


