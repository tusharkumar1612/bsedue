"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import MegaMenu from "./MegaMenu";
import Logo from "./Logo";
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+911800XXXXXXX" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone size={14} />
                <span>+91 1800-XXX-XXXX (Toll Free)</span>
              </a>
              <span className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors">
                <MessageCircle size={14} />
                <span>Chat with Counselor</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/blog" className="hover:text-white/80 transition-colors">
                Blog
              </Link>
              <span className="text-white/40">|</span>
              <Link href="/support" className="hover:text-white/80 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo - positioned on left */}
            <div className="flex-shrink-0 -ml-2 sm:-ml-4 lg:-ml-6">
              <Logo variant="full" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {megaMenuItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeMenu === item.label
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.sections.length > 0 && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform flex-shrink-0 ${
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
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/support"
                className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Phone size={16} />
                <span className="hidden xl:inline">Get Guidance</span>
              </Link>
              <Link
                href="/certifications"
                className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 inline-flex items-center gap-1 sm:gap-2"
              >
                <span>Enroll Now</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="hidden sm:inline"
                >
                  →
                </motion.span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                  <Logo variant="compact" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {mobileNavItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 px-5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown size={18} className="-rotate-90 text-gray-400" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t bg-gray-50 space-y-3">
                  <Link
                    href="/certifications"
                    className="btn-primary w-full text-center block py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enroll Now
                  </Link>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <a href="tel:+911800XXXXXXX" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                      <Phone size={16} />
                      <span>Call Us</span>
                    </a>
                    <Link 
                      href="/support" 
                      className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageCircle size={16} />
                      <span>Chat</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16 lg:h-[104px]" />
    </>
  );
}
