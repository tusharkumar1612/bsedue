// Static personal development courses data

export interface PersonalDevCourse {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  thumbnail: string;
  duration: string;
  mode: "Online" | "Self-paced";
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  originalPrice: number;
  currency: string;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  highlights: string[];
  modules: string[];
  badge?: "Bestseller" | "Popular" | "New";
}

export const personalDevCategories = [
  { id: "leadership", name: "Leadership & Management", icon: "👔", count: 12 },
  { id: "communication", name: "Communication Skills", icon: "🗣️", count: 15 },
  { id: "productivity", name: "Productivity & Time Management", icon: "⏰", count: 10 },
  { id: "confidence", name: "Confidence Building", icon: "💪", count: 8 },
  { id: "negotiation", name: "Negotiation Skills", icon: "🤝", count: 6 },
  { id: "psychology", name: "Psychology & Behavior", icon: "🧠", count: 9 },
  { id: "public-speaking", name: "Public Speaking", icon: "🎤", count: 7 },
  { id: "emotional-intelligence", name: "Emotional Intelligence", icon: "❤️", count: 8 },
];

export const personalDevCourses: PersonalDevCourse[] = [
  {
    id: "1",
    slug: "leadership-masterclass",
    title: "Leadership Masterclass: Lead with Impact",
    shortDescription: "Transform your leadership style and inspire teams to achieve extraordinary results",
    description: "Develop the essential skills of effective leadership. Learn to inspire, motivate, and lead teams through change and challenges. Based on proven frameworks used by Fortune 500 executives.",
    category: "leadership",
    thumbnail: "/images/personal-dev/leadership.jpg",
    duration: "4 Weeks",
    mode: "Online",
    level: "Intermediate",
    price: 9999,
    originalPrice: 19999,
    currency: "INR",
    rating: 4.9,
    reviewCount: 2345,
    enrolledCount: 12500,
    instructor: {
      name: "Dr. Anil Kapoor",
      title: "Executive Coach, Ex-McKinsey Partner",
      image: "/images/instructors/anil.jpg",
    },
    highlights: [
      "Real-world case studies from Fortune 500 companies",
      "Personal leadership assessment included",
      "1:1 coaching session with instructor",
      "Leadership toolkit and templates",
      "Certificate of completion",
    ],
    modules: [
      "Understanding Your Leadership Style",
      "Building High-Performance Teams",
      "Strategic Decision Making",
      "Leading Through Change",
      "Authentic Leadership",
      "Creating a Leadership Legacy",
    ],
    badge: "Bestseller",
  },
  {
    id: "2",
    slug: "effective-communication",
    title: "Effective Communication Skills",
    shortDescription: "Master the art of clear, persuasive, and impactful communication",
    description: "Learn to communicate with confidence in any situation. From presentations to difficult conversations, develop skills that make you heard and understood.",
    category: "communication",
    thumbnail: "/images/personal-dev/communication.jpg",
    duration: "3 Weeks",
    mode: "Self-paced",
    level: "Beginner",
    price: 4999,
    originalPrice: 9999,
    currency: "INR",
    rating: 4.7,
    reviewCount: 3456,
    enrolledCount: 18200,
    instructor: {
      name: "Priya Menon",
      title: "Communication Coach, TEDx Speaker",
      image: "/images/instructors/priya-m.jpg",
    },
    highlights: [
      "Practical exercises with video feedback",
      "Email and written communication templates",
      "Conflict resolution techniques",
      "Presentation skills workshop",
    ],
    modules: [
      "Foundations of Effective Communication",
      "Active Listening Skills",
      "Non-Verbal Communication",
      "Persuasive Speaking",
      "Handling Difficult Conversations",
      "Written Communication Excellence",
    ],
    badge: "Popular",
  },
  {
    id: "3",
    slug: "productivity-mastery",
    title: "Productivity Mastery: Get More Done",
    shortDescription: "Unlock peak productivity with proven time management and focus techniques",
    description: "Transform how you work with science-backed productivity systems. Learn to prioritize, eliminate distractions, and achieve more in less time.",
    category: "productivity",
    thumbnail: "/images/personal-dev/productivity.jpg",
    duration: "2 Weeks",
    mode: "Self-paced",
    level: "Beginner",
    price: 2999,
    originalPrice: 5999,
    currency: "INR",
    rating: 4.8,
    reviewCount: 4567,
    enrolledCount: 25400,
    instructor: {
      name: "Vikram Desai",
      title: "Productivity Coach, Author",
      image: "/images/instructors/vikram-d.jpg",
    },
    highlights: [
      "Productivity audit and personalized plan",
      "Digital tools and app recommendations",
      "Daily planning templates",
      "Focus techniques (Pomodoro, Deep Work)",
    ],
    modules: [
      "The Science of Productivity",
      "Goal Setting & Prioritization",
      "Time Blocking Mastery",
      "Eliminating Distractions",
      "Energy Management",
      "Building Productive Habits",
    ],
    badge: "Bestseller",
  },
  {
    id: "4",
    slug: "confidence-building",
    title: "Unshakeable Confidence",
    shortDescription: "Build lasting self-confidence and overcome self-doubt",
    description: "Develop rock-solid confidence that transforms your personal and professional life. Learn practical techniques to overcome fear, self-doubt, and imposter syndrome.",
    category: "confidence",
    thumbnail: "/images/personal-dev/confidence.jpg",
    duration: "4 Weeks",
    mode: "Online",
    level: "Beginner",
    price: 7999,
    originalPrice: 14999,
    currency: "INR",
    rating: 4.9,
    reviewCount: 2890,
    enrolledCount: 15600,
    instructor: {
      name: "Dr. Sneha Rao",
      title: "Psychologist, Life Coach",
      image: "/images/instructors/sneha-r.jpg",
    },
    highlights: [
      "Cognitive behavioral techniques",
      "Daily confidence exercises",
      "Group coaching sessions",
      "Overcoming imposter syndrome",
    ],
    modules: [
      "Understanding Confidence",
      "Overcoming Self-Limiting Beliefs",
      "Body Language & Presence",
      "Public Speaking Confidence",
      "Social Confidence",
      "Maintaining Confidence Under Pressure",
    ],
    badge: "Popular",
  },
  {
    id: "5",
    slug: "negotiation-skills",
    title: "Art of Negotiation",
    shortDescription: "Master negotiation techniques used by top executives and diplomats",
    description: "Learn to negotiate with confidence and achieve win-win outcomes. From salary negotiations to business deals, develop skills that get results.",
    category: "negotiation",
    thumbnail: "/images/personal-dev/negotiation.jpg",
    duration: "3 Weeks",
    mode: "Online",
    level: "Intermediate",
    price: 8999,
    originalPrice: 17999,
    currency: "INR",
    rating: 4.8,
    reviewCount: 1567,
    enrolledCount: 8900,
    instructor: {
      name: "Rajesh Khanna",
      title: "Corporate Trainer, Ex-Diplomat",
      image: "/images/instructors/rajesh-k.jpg",
    },
    highlights: [
      "Real negotiation simulations",
      "Harvard Negotiation Framework",
      "Cross-cultural negotiation",
      "Salary negotiation toolkit",
    ],
    modules: [
      "Negotiation Fundamentals",
      "Preparation & Planning",
      "BATNA & Leverage",
      "Influence & Persuasion",
      "Handling Difficult Negotiators",
      "Closing & Agreement",
    ],
  },
  {
    id: "6",
    slug: "public-speaking-pro",
    title: "Public Speaking Pro",
    shortDescription: "Speak with confidence and captivate any audience",
    description: "Transform your fear of public speaking into your superpower. Learn techniques used by TED speakers and world leaders.",
    category: "public-speaking",
    thumbnail: "/images/personal-dev/public-speaking.jpg",
    duration: "4 Weeks",
    mode: "Online",
    level: "Beginner",
    price: 6999,
    originalPrice: 12999,
    currency: "INR",
    rating: 4.9,
    reviewCount: 2134,
    enrolledCount: 11200,
    instructor: {
      name: "Amit Tandon",
      title: "Stand-up Comedian, Speaking Coach",
      image: "/images/instructors/amit-t.jpg",
    },
    highlights: [
      "Video submissions with feedback",
      "Live practice sessions",
      "Story-telling techniques",
      "Handling Q&A sessions",
    ],
    modules: [
      "Overcoming Stage Fright",
      "Structuring Your Speech",
      "Story-telling for Impact",
      "Voice & Body Language",
      "Engaging Your Audience",
      "Handling Nerves & Q&A",
    ],
    badge: "New",
  },
  {
    id: "7",
    slug: "emotional-intelligence",
    title: "Emotional Intelligence for Success",
    shortDescription: "Develop EQ skills that accelerate career and life success",
    description: "Master the emotional intelligence competencies that differentiate top performers. Learn to manage emotions, build relationships, and influence others positively.",
    category: "emotional-intelligence",
    thumbnail: "/images/personal-dev/eq.jpg",
    duration: "4 Weeks",
    mode: "Online",
    level: "Intermediate",
    price: 8999,
    originalPrice: 16999,
    currency: "INR",
    rating: 4.8,
    reviewCount: 1890,
    enrolledCount: 9500,
    instructor: {
      name: "Dr. Kavita Sharma",
      title: "Organizational Psychologist",
      image: "/images/instructors/kavita.jpg",
    },
    highlights: [
      "EQ assessment included",
      "Mindfulness practices",
      "Relationship management strategies",
      "Stress management techniques",
    ],
    modules: [
      "Understanding Emotional Intelligence",
      "Self-Awareness",
      "Self-Regulation",
      "Empathy & Social Awareness",
      "Relationship Management",
      "EQ in Leadership",
    ],
  },
  {
    id: "8",
    slug: "psychology-influence",
    title: "Psychology of Influence",
    shortDescription: "Understand human behavior and master ethical influence",
    description: "Learn the psychology behind decision-making and influence. Apply behavioral science to leadership, sales, and personal relationships.",
    category: "psychology",
    thumbnail: "/images/personal-dev/psychology.jpg",
    duration: "3 Weeks",
    mode: "Self-paced",
    level: "Intermediate",
    price: 5999,
    originalPrice: 11999,
    currency: "INR",
    rating: 4.7,
    reviewCount: 1234,
    enrolledCount: 7800,
    instructor: {
      name: "Prof. Rajan Verma",
      title: "Behavioral Scientist, Author",
      image: "/images/instructors/rajan.jpg",
    },
    highlights: [
      "Based on Cialdini's principles",
      "Case studies from business",
      "Ethical influence guidelines",
      "Practical exercises",
    ],
    modules: [
      "Foundations of Human Behavior",
      "The 6 Principles of Influence",
      "Cognitive Biases",
      "Persuasion in Practice",
      "Building Trust",
      "Ethical Considerations",
    ],
  },
];

export function getPersonalDevBySlug(slug: string): PersonalDevCourse | undefined {
  return personalDevCourses.find((course) => course.slug === slug);
}

export function getPersonalDevByCategory(category: string): PersonalDevCourse[] {
  return personalDevCourses.filter((course) => course.category === category);
}

export function getFeaturedPersonalDev(limit = 6): PersonalDevCourse[] {
  return personalDevCourses.filter((course) => course.badge).slice(0, limit);
}


