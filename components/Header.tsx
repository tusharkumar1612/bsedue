"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { megaMenuItems, mobileNavItems } from "@/lib/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
          <div className="container-main flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+911800XXXXXXX" className="hover:underline">
                  +91 1800-XXX-XXXX (Toll Free)
                </a>
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle size={14} />
                <span>Chat with Counselor</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span className="text-white/50">|</span>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">
                  BSEdu<span className="text-indigo-600">world</span>
                </span>
                <p className="text-[10px] text-gray-500 -mt-1">
                  Learn. Grow. Succeed.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {megaMenuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeMenu === item.label
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    {item.sections.length > 0 && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeMenu === item.label && item.sections.length > 0 && (
                      <MegaMenu item={item} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/support"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">Get Guidance</span>
              </Link>
              <Link
                href="/certifications"
                className="btn-primary text-sm hidden sm:inline-flex items-center gap-2"
              >
                <span>Enroll Now</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-bold text-gray-900">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  {mobileNavItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown size={18} className="-rotate-90" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t space-y-3">
                  <Link
                    href="/certifications"
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enroll Now
                  </Link>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <a href="tel:+911800XXXXXXX" className="flex items-center gap-1">
                      <Phone size={16} />
                      Call
                    </a>
                    <span className="text-gray-300">|</span>
                    <Link href="/support" className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      Chat
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-28" />
    </>
  );
}
