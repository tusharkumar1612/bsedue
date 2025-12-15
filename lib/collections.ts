// Static collections data for BSEduworld

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  courseCount: number;
  courses: string[]; // Course slugs
  degrees?: string[]; // Degree slugs
  featured?: boolean;
  badge?: string;
}

export const collections: Collection[] = [
  {
    id: "1",
    slug: "top-online-colleges",
    title: "Top Online Colleges 2024",
    description: "Explore the best UGC-approved online universities for distance learning in India. Compare programs, fees, and placement records.",
    thumbnail: "/images/collections/colleges.jpg",
    courseCount: 45,
    courses: [],
    degrees: ["online-mba", "online-mca", "online-bca", "online-bba"],
    featured: true,
    badge: "Popular",
  },
  {
    id: "2",
    slug: "best-mba-programs",
    title: "Best MBA Distance Programs",
    description: "Find the perfect online MBA program from top business schools. NAAC A+ accredited universities with excellent placement records.",
    thumbnail: "/images/collections/mba.jpg",
    courseCount: 28,
    courses: [],
    degrees: ["online-mba", "online-mba-finance"],
    featured: true,
  },
  {
    id: "3",
    slug: "data-science-courses",
    title: "Top Data Science Courses",
    description: "Master data science with courses from IITs and top tech companies. From Python basics to advanced machine learning.",
    thumbnail: "/images/collections/datascience.jpg",
    courseCount: 35,
    courses: ["data-science-bootcamp", "python-data-science", "business-analytics"],
    featured: true,
    badge: "Trending",
  },
  {
    id: "4",
    slug: "trending-certifications",
    title: "Trending Certifications 2024",
    description: "Stay ahead with the most in-demand certifications in AI, Cloud, Cybersecurity, and more.",
    thumbnail: "/images/collections/trending.jpg",
    courseCount: 42,
    courses: ["aws-solutions-architect", "cybersecurity-expert", "full-stack-development"],
    featured: true,
  },
  {
    id: "5",
    slug: "short-courses",
    title: "Courses Under 3 Months",
    description: "Quick certification courses to upskill fast. Perfect for busy professionals looking for rapid skill acquisition.",
    thumbnail: "/images/collections/short.jpg",
    courseCount: 56,
    courses: ["aws-solutions-architect", "python-data-science"],
  },
  {
    id: "6",
    slug: "job-ready-skills",
    title: "Job-Ready Skills Bundle",
    description: "Comprehensive skill bundles designed to make you job-ready. Includes placement assistance and interview preparation.",
    thumbnail: "/images/collections/jobready.jpg",
    courseCount: 24,
    courses: ["full-stack-development", "data-science-bootcamp", "digital-marketing-pro"],
    badge: "Hot",
  },
  {
    id: "7",
    slug: "free-courses",
    title: "Free Courses",
    description: "Start learning for free with our collection of introductory courses and mini-certifications.",
    thumbnail: "/images/collections/free.jpg",
    courseCount: 32,
    courses: [],
    badge: "Free",
  },
  {
    id: "8",
    slug: "beginner-friendly",
    title: "Beginner Friendly Courses",
    description: "Perfect starting point for career changers. No prior experience required for these foundational courses.",
    thumbnail: "/images/collections/beginner.jpg",
    courseCount: 48,
    courses: ["python-data-science", "full-stack-development", "digital-marketing-pro", "ui-ux-mastery"],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function getFeaturedCollections(): Collection[] {
  return collections.filter((collection) => collection.featured);
}
