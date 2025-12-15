"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Clock,
  HelpCircle,
  ChevronRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FAQAccordion from "@/components/FAQAccordion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const supportOptions = [
  {
    id: "chat",
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team instantly",
    action: "Start Chat",
    available: "Available 24/7",
    color: "bg-green-500",
  },
  {
    id: "call",
    icon: Phone,
    title: "Call Us",
    description: "Speak to a counselor directly",
    action: "1800-XXX-XXXX",
    available: "Mon-Sat, 9AM-9PM",
    color: "bg-blue-500",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses on WhatsApp",
    action: "Send Message",
    available: "Available 24/7",
    color: "bg-emerald-500",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Us",
    description: "Get detailed responses",
    action: "support@bseduworld.com",
    available: "Response within 24hrs",
    color: "bg-purple-500",
  },
  {
    id: "callback",
    icon: Phone,
    title: "Request Callback",
    description: "We'll call you back",
    action: "Schedule Call",
    available: "Within 2 hours",
    color: "bg-orange-500",
  },
  {
    id: "meeting",
    icon: Calendar,
    title: "Book a Meeting",
    description: "1:1 consultation session",
    action: "Book Slot",
    available: "Mon-Sat, 10AM-7PM",
    color: "bg-indigo-500",
  },
];

const helpTopics = [
  { title: "Getting Started", description: "How to enroll, payment options, and more", href: "#" },
  { title: "Course Information", description: "Curriculum, duration, and certification details", href: "#" },
  { title: "Payment & Refunds", description: "EMI options, refund policy, and billing", href: "#" },
  { title: "Technical Issues", description: "Login problems, video playback, and certificates", href: "#" },
  { title: "Career Services", description: "Placement support, resume building, and interviews", href: "#" },
  { title: "University Programs", description: "Admission process, eligibility, and documents", href: "#" },
];

const supportFAQs = [
  {
    question: "How do I enroll in a course?",
    answer: "You can enroll directly through our website by clicking the 'Enroll Now' button on any course page. You'll be guided through the payment process, and upon successful payment, you'll receive immediate access to the course.",
  },
  {
    question: "What payment options are available?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and offer no-cost EMI options on select bank cards. You can also pay through popular wallets like PayTM and PhonePe.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee for most courses. If you're not satisfied, contact our support team within 7 days of enrollment for a full refund. Note that some programs may have different refund policies.",
  },
  {
    question: "How do I access my course after enrollment?",
    answer: "After successful payment, you'll receive login credentials via email. Log in to your dashboard at learn.bseduworld.com to access all your enrolled courses, assignments, and certificates.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, all our certificates are industry-recognized and can be shared on LinkedIn. For degree programs, certificates are issued by UGC-approved universities and are valid for all government and private sector jobs.",
  },
];

export default function SupportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 lg:py-20">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
              <HelpCircle size={16} />
              We&apos;re Here to Help
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get instant support through live chat, phone, or schedule a callback. Our team is available 24/7 to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 bg-white -mt-8 relative z-10">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center mb-4`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{option.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">{option.action}</span>
                  <span className="text-xs text-gray-400">{option.available}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Browse Help Topics
            </h2>
            <p className="text-gray-600">
              Find answers to common questions organized by topic
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={topic.href}
                  className="block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    {topic.title}
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-gray-500">{topic.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className="input-field"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="input-field"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="input-field"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select {...register("subject")} className="input-field">
                        <option value="">Select a topic</option>
                        <option value="enrollment">Course Enrollment</option>
                        <option value="payment">Payment Issues</option>
                        <option value="refund">Refund Request</option>
                        <option value="technical">Technical Support</option>
                        <option value="career">Career Services</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Please describe your query in detail..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-semibold text-gray-900 text-lg mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone (Toll Free)</p>
                      <a href="tel:+911800XXXXXXX" className="text-indigo-600">
                        1800-XXX-XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:support@bseduworld.com" className="text-indigo-600">
                        support@bseduworld.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Working Hours</p>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Head Office</p>
                      <p className="text-gray-600">
                        123 Tech Park, Koramangala<br />
                        Bangalore, Karnataka 560034<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Follow us on social media</p>
                  <div className="flex items-center gap-4">
                    {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:shadow-md transition-all"
                      >
                        <span className="text-xs">{social.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={supportFAQs}
        title="Frequently Asked Questions"
        subtitle="Quick answers to common queries"
      />
    </>
  );
}

