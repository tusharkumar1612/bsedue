// Navigation structure for BSEduworld mega menu

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface MegaMenuItem {
  label: string;
  href: string;
  sections: NavSection[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
}

export const certificationCategories: NavSection = {
  title: "By Category",
  items: [
    { label: "Data Science & Analytics", href: "/certifications?category=data-science", icon: "📊" },
    { label: "Artificial Intelligence & ML", href: "/certifications?category=ai-ml", icon: "🤖" },
    { label: "Cloud Computing", href: "/certifications?category=cloud", icon: "☁️" },
    { label: "Cybersecurity", href: "/certifications?category=cybersecurity", icon: "🔒" },
    { label: "UI/UX Design", href: "/certifications?category=ui-ux", icon: "🎨" },
    { label: "Digital Marketing", href: "/certifications?category=marketing", icon: "📱" },
    { label: "Finance & Accounting", href: "/certifications?category=finance", icon: "💰" },
    { label: "Project Management", href: "/certifications?category=pm", icon: "📋" },
  ],
};

export const topCourses: NavSection = {
  title: "Top 10 Courses",
  items: [
    { label: "Full Stack Development", href: "/certifications/full-stack-development", badge: "Bestseller" },
    { label: "Data Science Bootcamp", href: "/certifications/data-science-bootcamp", badge: "Popular" },
    { label: "AWS Solutions Architect", href: "/certifications/aws-solutions-architect" },
    { label: "Digital Marketing Pro", href: "/certifications/digital-marketing-pro" },
    { label: "Python for Data Science", href: "/certifications/python-data-science" },
    { label: "Cybersecurity Expert", href: "/certifications/cybersecurity-expert", badge: "New" },
    { label: "UI/UX Design Mastery", href: "/certifications/ui-ux-mastery" },
    { label: "Business Analytics", href: "/certifications/business-analytics" },
  ],
};

export const trendingSkills: NavSection = {
  title: "Trending Skills",
  items: [
    { label: "Generative AI", href: "/certifications?skill=generative-ai", badge: "Hot" },
    { label: "Prompt Engineering", href: "/certifications?skill=prompt-engineering" },
    { label: "Power BI", href: "/certifications?skill=power-bi" },
    { label: "Kubernetes", href: "/certifications?skill=kubernetes" },
    { label: "Tableau", href: "/certifications?skill=tableau" },
    { label: "DevOps", href: "/certifications?skill=devops" },
  ],
};

export const universityPrograms: NavSection = {
  title: "University Programs",
  items: [
    { label: "IIT Madras Programs", href: "/certifications?partner=iit-madras" },
    { label: "IIM Bangalore Courses", href: "/certifications?partner=iim-bangalore" },
    { label: "MIT xPRO", href: "/certifications?partner=mit" },
    { label: "Stanford Online", href: "/certifications?partner=stanford" },
    { label: "Google Certifications", href: "/certifications?partner=google" },
    { label: "Microsoft Learn", href: "/certifications?partner=microsoft" },
  ],
};

export const degreesByCountry: NavSection = {
  title: "By Country",
  items: [
    { label: "India (UGC Approved)", href: "/degrees?country=india", icon: "🇮🇳" },
    { label: "USA", href: "/degrees?country=usa", icon: "🇺🇸" },
    { label: "UK", href: "/degrees?country=uk", icon: "🇬🇧" },
    { label: "Canada", href: "/degrees?country=canada", icon: "🇨🇦" },
    { label: "Australia", href: "/degrees?country=australia", icon: "🇦🇺" },
  ],
};

export const degreesByProgram: NavSection = {
  title: "By Program",
  items: [
    { label: "MBA - Master of Business Administration", href: "/degrees?program=mba" },
    { label: "MCA - Master of Computer Applications", href: "/degrees?program=mca" },
    { label: "BCA - Bachelor of Computer Applications", href: "/degrees?program=bca" },
    { label: "BBA - Bachelor of Business Administration", href: "/degrees?program=bba" },
    { label: "B.Com - Bachelor of Commerce", href: "/degrees?program=bcom" },
    { label: "M.Com - Master of Commerce", href: "/degrees?program=mcom" },
    { label: "M.Sc - Master of Science", href: "/degrees?program=msc" },
    { label: "B.Sc - Bachelor of Science", href: "/degrees?program=bsc" },
  ],
};

export const topUniversities: NavSection = {
  title: "Top Universities",
  items: [
    { label: "Manipal University Jaipur", href: "/degrees?university=manipal", badge: "NAAC A+" },
    { label: "Amity University Online", href: "/degrees?university=amity", badge: "UGC" },
    { label: "NMIMS Global Access", href: "/degrees?university=nmims" },
    { label: "Lovely Professional University", href: "/degrees?university=lpu" },
    { label: "Chandigarh University", href: "/degrees?university=chandigarh" },
    { label: "Jain University", href: "/degrees?university=jain" },
  ],
};

export const personalDevCategories: NavSection = {
  title: "Skill Categories",
  items: [
    { label: "Leadership & Management", href: "/personal-development?category=leadership", icon: "👔" },
    { label: "Communication Skills", href: "/personal-development?category=communication", icon: "🗣️" },
    { label: "Productivity & Time Management", href: "/personal-development?category=productivity", icon: "⏰" },
    { label: "Confidence Building", href: "/personal-development?category=confidence", icon: "💪" },
    { label: "Negotiation Skills", href: "/personal-development?category=negotiation", icon: "🤝" },
    { label: "Psychology & Behavioral Skills", href: "/personal-development?category=psychology", icon: "🧠" },
    { label: "Public Speaking", href: "/personal-development?category=public-speaking", icon: "🎤" },
    { label: "Emotional Intelligence", href: "/personal-development?category=emotional-intelligence", icon: "❤️" },
  ],
};

export const collections: NavSection = {
  title: "Popular Collections",
  items: [
    { label: "Top Online Colleges 2024", href: "/collections/top-online-colleges", badge: "Popular" },
    { label: "Best MBA Distance Programs", href: "/collections/best-mba-programs" },
    { label: "Top Data Science Courses", href: "/collections/data-science-courses", badge: "Trending" },
    { label: "Trending Certifications", href: "/collections/trending-certifications" },
    { label: "Courses Under 3 Months", href: "/collections/short-courses" },
    { label: "Job-Ready Skills Bundle", href: "/collections/job-ready-skills" },
    { label: "Free Courses", href: "/collections/free-courses", badge: "Free" },
    { label: "Beginner Friendly", href: "/collections/beginner-friendly" },
  ],
};

export const supportOptions: NavSection = {
  title: "Get Help",
  items: [
    { label: "Live Chat", href: "/support?action=chat", icon: "💬", description: "Chat with our team instantly" },
    { label: "Call Us", href: "/support?action=call", icon: "📞", description: "+91 1800-XXX-XXXX" },
    { label: "WhatsApp", href: "/support?action=whatsapp", icon: "📲", description: "Quick responses on WhatsApp" },
    { label: "Request Callback", href: "/support?action=callback", icon: "🔔", description: "We'll call you back" },
    { label: "Book a Meeting", href: "/support?action=meeting", icon: "📅", description: "Schedule a 1:1 consultation" },
  ],
};

export const megaMenuItems: MegaMenuItem[] = [
  {
    label: "Online Certifications",
    href: "/certifications",
    sections: [certificationCategories, topCourses, trendingSkills, universityPrograms],
    featured: {
      title: "Data Science & AI Bundle",
      description: "Master the most in-demand skills with our comprehensive bundle. Get 40% off!",
      image: "/images/featured-course.jpg",
      href: "/certifications/data-science-bundle",
    },
  },
  {
    label: "Online Degrees",
    href: "/degrees",
    sections: [degreesByCountry, degreesByProgram, topUniversities],
    featured: {
      title: "UGC Approved MBA",
      description: "Get an internationally recognized MBA from top universities. EMI available.",
      image: "/images/featured-degree.jpg",
      href: "/degrees/online-mba",
    },
  },
  {
    label: "Personal Development",
    href: "/personal-development",
    sections: [personalDevCategories],
    featured: {
      title: "Leadership Masterclass",
      description: "Transform your career with world-class leadership training.",
      image: "/images/featured-personal.jpg",
      href: "/personal-development/leadership-masterclass",
    },
  },
  {
    label: "Collections",
    href: "/collections/top-online-colleges",
    sections: [collections],
  },
  {
    label: "Blog",
    href: "/blog",
    sections: [],
  },
  {
    label: "Support",
    href: "/support",
    sections: [supportOptions],
  },
];

export const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Certifications", href: "/certifications" },
  { label: "Online Degrees", href: "/degrees" },
  { label: "Personal Development", href: "/personal-development" },
  { label: "Collections", href: "/collections/top-online-colleges" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
];
