"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Phone,
  MessageSquare,
  Calendar,
  PhoneCall,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

const supportOptions = [
  {
    id: "chat",
    icon: MessageSquare,
    label: "Live Chat",
    description: "Chat with our team",
    href: "/support?action=chat",
    color: "bg-indigo-500",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Quick responses",
    href: "https://wa.me/911800XXXXXXX",
    external: true,
    color: "bg-green-500",
  },
  {
    id: "call",
    icon: Phone,
    label: "Call Us",
    description: "1800-XXX-XXXX",
    href: "tel:+911800XXXXXXX",
    external: true,
    color: "bg-blue-500",
  },
  {
    id: "callback",
    icon: PhoneCall,
    label: "Request Callback",
    description: "We'll call you",
    href: "/support?action=callback",
    color: "bg-orange-500",
  },
  {
    id: "meeting",
    icon: Calendar,
    label: "Book Meeting",
    description: "1:1 consultation",
    href: "/support?action=meeting",
    color: "bg-purple-500",
  },
];

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Support Widget Button and Panel */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Support Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-72"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-4 text-white">
                <h3 className="font-semibold">Need Help?</h3>
                <p className="text-sm text-white/80">Choose how you&apos;d like to connect</p>
              </div>

              {/* Options */}
              <div className="p-3 space-y-1">
                {supportOptions.map((option) => {
                  const OptionIcon = option.icon;
                  const Wrapper = option.external ? "a" : Link;

                  return (
                    <Wrapper
                      key={option.id}
                      href={option.href}
                      {...(option.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${option.color} flex items-center justify-center text-white`}
                      >
                        <OptionIcon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {option.label}
                        </p>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Available 24/7 for your queries
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
            isOpen
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
          }`}
          aria-label="Toggle support options"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative"
              >
                <MessageCircle size={24} />
                {/* Ping animation */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
