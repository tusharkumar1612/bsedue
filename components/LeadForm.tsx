"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2, Phone, Mail, User, BookOpen } from "lucide-react";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  interest: z.string().min(1, "Please select your interest"),
  message: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  courseName?: string;
  variant?: "default" | "sidebar" | "modal";
}

const interestOptions = [
  "Data Science & Analytics",
  "Full Stack Development",
  "Cloud Computing",
  "Digital Marketing",
  "Online MBA",
  "Online MCA/BCA",
  "Personal Development",
  "Other",
];

export default function LeadForm({
  title = "Get Free Counseling",
  subtitle = "Our career experts will help you choose the right program",
  courseName,
  variant = "default",
}: LeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      interest: courseName || "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Lead submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white rounded-2xl p-8 text-center ${
          variant === "sidebar" ? "border border-gray-100 shadow-lg" : "shadow-xl"
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Our counselor will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl ${
        variant === "sidebar"
          ? "border border-gray-100 shadow-lg p-6"
          : "shadow-xl p-8"
      }`}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="input-field pl-12"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="input-field pl-12"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone Number"
              className="input-field pl-12"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Interest */}
        <div>
          <div className="relative">
            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select {...register("interest")} className="input-field pl-12 appearance-none">
              <option value="">Select your interest</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {errors.interest && (
            <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>
          )}
        </div>

        {/* Message (optional) */}
        {variant === "default" && (
          <div>
            <textarea
              {...register("message")}
              rows={3}
              placeholder="Any specific questions? (Optional)"
              className="input-field resize-none"
            />
          </div>
        )}

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Free Counseling
            </>
          )}
        </motion.button>
      </form>

      {/* Trust Indicators */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            Free Counseling
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            No Spam
          </span>
        </div>
      </div>
    </div>
  );
}

