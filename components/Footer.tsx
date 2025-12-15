"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  courses: {
    title: "Popular Courses",
    links: [
      { label: "Data Science Bootcamp", href: "/certifications/data-science-bootcamp" },
      { label: "Full Stack Development", href: "/certifications/full-stack-development" },
      { label: "AWS Solutions Architect", href: "/certifications/aws-solutions-architect" },
      { label: "Digital Marketing", href: "/certifications/digital-marketing-pro" },
      { label: "UI/UX Design", href: "/certifications/ui-ux-mastery" },
      { label: "Cybersecurity Expert", href: "/certifications/cybersecurity-expert" },
    ],
  },
  degrees: {
    title: "Online Degrees",
    links: [
      { label: "Online MBA", href: "/degrees/online-mba" },
      { label: "Online MCA", href: "/degrees/online-mca" },
      { label: "Online BCA", href: "/degrees/online-bca" },
      { label: "Online BBA", href: "/degrees/online-bba" },
      { label: "MBA in Finance", href: "/degrees/online-mba-finance" },
      { label: "M.Sc Data Science", href: "/degrees/online-msc-data-science" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Partner With Us", href: "/partners" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "/support" },
      { label: "FAQs", href: "/support#faqs" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/bseduworld", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/bseduworld", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/bseduworld", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/bseduworld", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/bseduworld", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-main py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated with Latest Courses & Offers
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for exclusive deals and career tips.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  BSEdu<span className="text-indigo-400">world</span>
                </span>
                <p className="text-xs text-gray-500">Learn. Grow. Succeed.</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering learners worldwide with industry-recognized certifications
              and online degrees from top universities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+911800XXXXXXX"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+91 1800-XXX-XXXX (Toll Free)</span>
              </a>
              <a
                href="mailto:support@bseduworld.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>support@bseduworld.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="container-main py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">
                UGC
              </span>
              UGC Approved
            </span>
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">
                NAAC
              </span>
              NAAC Accredited
            </span>
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">
                AICTE
              </span>
              AICTE Recognized
            </span>
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">
                ISO
              </span>
              ISO 9001:2015
            </span>
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">
                SSL
              </span>
              Secure Payments
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2024 BSEduworld. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
