// Static course data for BSEduworld

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  provider: {
    name: string;
    logo: string;
  };
  category: string;
  subcategory?: string;
  thumbnail: string;
  duration: string;
  mode: "Online" | "Hybrid" | "Self-paced";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  price: number;
  originalPrice: number;
  currency: string;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  language: string;
  certificate: boolean;
  skills: string[];
  highlights: string[];
  curriculum: CurriculumModule[];
  instructors: Instructor[];
  faqs: FAQ[];
  tags: string[];
  badge?: "Bestseller" | "Popular" | "New" | "Trending" | "Hot";
  nextBatch?: string;
  emiAvailable: boolean;
  emiStartsAt?: number;
  createdAt: string;
}

export interface CurriculumModule {
  title: string;
  duration: string;
  lessons: string[];
}

export interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const courseCategories = [
  { id: "data-science", name: "Data Science & Analytics", icon: "📊", count: 45 },
  { id: "ai-ml", name: "AI & Machine Learning", icon: "🤖", count: 38 },
  { id: "cloud", name: "Cloud Computing", icon: "☁️", count: 32 },
  { id: "cybersecurity", name: "Cybersecurity", icon: "🔒", count: 28 },
  { id: "ui-ux", name: "UI/UX Design", icon: "🎨", count: 24 },
  { id: "marketing", name: "Digital Marketing", icon: "📱", count: 35 },
  { id: "finance", name: "Finance & Accounting", icon: "💰", count: 22 },
  { id: "pm", name: "Project Management", icon: "📋", count: 19 },
  { id: "programming", name: "Programming & Development", icon: "💻", count: 52 },
  { id: "business", name: "Business & Strategy", icon: "📈", count: 31 },
];

export const courses: Course[] = [
  {
    id: "1",
    slug: "full-stack-development",
    title: "Full Stack Web Development Bootcamp",
    shortDescription: "Master MERN stack and become a job-ready full stack developer in 6 months",
    description: "This comprehensive bootcamp covers everything you need to become a professional full stack developer. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more through hands-on projects and real-world applications. Get career support and placement assistance upon completion.",
    provider: {
      name: "BSEduworld Academy",
      logo: "/images/providers/bseduworld.svg",
    },
    category: "programming",
    subcategory: "web-development",
    thumbnail: "/images/courses/fullstack.jpg",
    duration: "6 Months",
    mode: "Online",
    level: "Beginner",
    price: 49999,
    originalPrice: 89999,
    currency: "INR",
    rating: 4.8,
    reviewCount: 2847,
    enrolledCount: 15420,
    language: "English",
    certificate: true,
    skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "Git", "REST APIs", "TypeScript"],
    highlights: [
      "100+ hours of live instructor-led training",
      "20+ real-world projects including capstone",
      "Industry-recognized certification",
      "1:1 mentorship sessions",
      "Placement assistance with 500+ hiring partners",
      "Lifetime access to course materials",
    ],
    curriculum: [
      {
        title: "Foundation of Web Development",
        duration: "4 weeks",
        lessons: ["HTML5 & Semantic Markup", "CSS3 & Flexbox/Grid", "Responsive Design", "JavaScript Fundamentals", "DOM Manipulation"],
      },
      {
        title: "Advanced JavaScript & React",
        duration: "6 weeks",
        lessons: ["ES6+ Features", "React Fundamentals", "State Management with Redux", "React Hooks", "Next.js Basics"],
      },
      {
        title: "Backend Development with Node.js",
        duration: "6 weeks",
        lessons: ["Node.js & Express", "RESTful API Design", "Authentication & Authorization", "MongoDB & Mongoose", "File Uploads & Cloud Storage"],
      },
      {
        title: "DevOps & Deployment",
        duration: "4 weeks",
        lessons: ["Git & GitHub", "CI/CD Pipelines", "Docker Basics", "Cloud Deployment (AWS/Vercel)", "Performance Optimization"],
      },
      {
        title: "Capstone Project",
        duration: "4 weeks",
        lessons: ["Project Planning", "Full Stack Application Development", "Testing & QA", "Deployment & Presentation"],
      },
    ],
    instructors: [
      {
        name: "Rahul Sharma",
        title: "Senior Full Stack Developer, Ex-Google",
        image: "/images/instructors/rahul.jpg",
        bio: "10+ years of experience in building scalable web applications. Previously worked at Google, Microsoft, and multiple startups.",
        linkedin: "https://linkedin.com/in/rahulsharma",
      },
      {
        name: "Priya Patel",
        title: "Lead Frontend Engineer, Amazon",
        image: "/images/instructors/priya.jpg",
        bio: "Expert in React ecosystem with 8+ years of experience. Passionate about mentoring and building great user experiences.",
      },
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer: "No prior experience is required. This course is designed for absolute beginners and takes you from zero to job-ready.",
      },
      {
        question: "What is the class schedule?",
        answer: "Live classes are held on weekends (Sat-Sun) for 4 hours each day. Recordings are available for those who miss live sessions.",
      },
      {
        question: "Is placement guaranteed?",
        answer: "While we don't guarantee placement, we provide extensive career support including resume building, mock interviews, and access to our hiring partner network with 95%+ placement rate.",
      },
      {
        question: "Can I pay in EMIs?",
        answer: "Yes, we offer flexible EMI options starting at ₹4,166/month with no-cost EMI available for select bank cards.",
      },
    ],
    tags: ["web development", "javascript", "react", "node.js", "mongodb", "mern stack"],
    badge: "Bestseller",
    nextBatch: "January 15, 2025",
    emiAvailable: true,
    emiStartsAt: 4166,
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    slug: "data-science-bootcamp",
    title: "Data Science & Machine Learning Bootcamp",
    shortDescription: "Become a data scientist with Python, ML, and AI in this comprehensive 8-month program",
    description: "Master the complete data science workflow from data collection to model deployment. Learn Python, statistics, machine learning, deep learning, and work on real industry projects. Get hands-on experience with tools like TensorFlow, PyTorch, and cloud platforms.",
    provider: {
      name: "IIT Madras",
      logo: "/images/providers/iitm.svg",
    },
    category: "data-science",
    subcategory: "machine-learning",
    thumbnail: "/images/courses/datascience.jpg",
    duration: "8 Months",
    mode: "Online",
    level: "Intermediate",
    price: 79999,
    originalPrice: 149999,
    currency: "INR",
    rating: 4.9,
    reviewCount: 1923,
    enrolledCount: 8750,
    language: "English",
    certificate: true,
    skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Deep Learning", "TensorFlow", "SQL", "Data Visualization", "Statistics"],
    highlights: [
      "Curriculum designed by IIT Madras faculty",
      "Industry projects with real datasets",
      "Capstone project with industry mentors",
      "Career transition support",
      "IIT Madras certification",
      "Access to NVIDIA DGX cloud for deep learning",
    ],
    curriculum: [
      {
        title: "Python & Statistics Foundation",
        duration: "6 weeks",
        lessons: ["Python Programming", "NumPy & Pandas", "Statistical Thinking", "Probability Theory", "Hypothesis Testing"],
      },
      {
        title: "Data Analysis & Visualization",
        duration: "4 weeks",
        lessons: ["Exploratory Data Analysis", "Matplotlib & Seaborn", "Plotly & Dash", "SQL for Data Science", "Data Cleaning & Preprocessing"],
      },
      {
        title: "Machine Learning",
        duration: "8 weeks",
        lessons: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Ensemble Methods"],
      },
      {
        title: "Deep Learning & AI",
        duration: "8 weeks",
        lessons: ["Neural Networks", "CNNs for Computer Vision", "RNNs & Transformers", "NLP Applications", "Generative AI Basics"],
      },
      {
        title: "MLOps & Capstone",
        duration: "6 weeks",
        lessons: ["Model Deployment", "MLFlow & Docker", "Cloud ML Platforms", "Industry Capstone Project"],
      },
    ],
    instructors: [
      {
        name: "Dr. Arun Kumar",
        title: "Professor, IIT Madras",
        image: "/images/instructors/arun.jpg",
        bio: "Leading researcher in AI/ML with 50+ publications. PhD from Stanford University.",
      },
    ],
    faqs: [
      {
        question: "What are the prerequisites?",
        answer: "Basic programming knowledge and undergraduate-level mathematics are recommended. We provide bridge courses for those who need a refresher.",
      },
      {
        question: "Will I get an IIT certificate?",
        answer: "Yes, upon successful completion, you'll receive an official certification from IIT Madras.",
      },
    ],
    tags: ["data science", "machine learning", "python", "ai", "deep learning", "iit"],
    badge: "Popular",
    nextBatch: "January 20, 2025",
    emiAvailable: true,
    emiStartsAt: 6666,
    createdAt: "2024-02-01",
  },
  {
    id: "3",
    slug: "aws-solutions-architect",
    title: "AWS Solutions Architect Professional",
    shortDescription: "Master AWS cloud architecture and prepare for the Solutions Architect certification",
    description: "Comprehensive preparation for AWS Solutions Architect certification. Learn to design distributed systems, implement cost-effective solutions, and architect for security and reliability on AWS.",
    provider: {
      name: "AWS Partner",
      logo: "/images/providers/aws.svg",
    },
    category: "cloud",
    subcategory: "aws",
    thumbnail: "/images/courses/aws.jpg",
    duration: "3 Months",
    mode: "Self-paced",
    level: "Advanced",
    price: 34999,
    originalPrice: 59999,
    currency: "INR",
    rating: 4.7,
    reviewCount: 1456,
    enrolledCount: 6320,
    language: "English",
    certificate: true,
    skills: ["AWS EC2", "S3", "Lambda", "VPC", "CloudFormation", "IAM", "RDS", "DynamoDB", "CloudWatch"],
    highlights: [
      "Official AWS curriculum",
      "Hands-on labs with AWS sandbox",
      "Practice exams included",
      "Exam voucher included",
      "1 year of free lab access",
    ],
    curriculum: [
      {
        title: "AWS Fundamentals",
        duration: "2 weeks",
        lessons: ["Cloud Computing Concepts", "AWS Global Infrastructure", "IAM & Security", "Networking Basics"],
      },
      {
        title: "Compute & Storage",
        duration: "3 weeks",
        lessons: ["EC2 Deep Dive", "Lambda & Serverless", "S3 & Storage Classes", "EBS & EFS"],
      },
      {
        title: "Databases & Analytics",
        duration: "2 weeks",
        lessons: ["RDS & Aurora", "DynamoDB", "Redshift", "Data Analytics Services"],
      },
      {
        title: "Architecture Patterns",
        duration: "3 weeks",
        lessons: ["High Availability", "Disaster Recovery", "Cost Optimization", "Well-Architected Framework"],
      },
      {
        title: "Exam Preparation",
        duration: "2 weeks",
        lessons: ["Practice Tests", "Scenario Analysis", "Tips & Strategies"],
      },
    ],
    instructors: [
      {
        name: "Vikram Singh",
        title: "AWS Hero & Solutions Architect",
        image: "/images/instructors/vikram.jpg",
        bio: "AWS Community Hero with 12+ years of cloud experience. Helped 5000+ professionals get certified.",
      },
    ],
    faqs: [
      {
        question: "Is the exam voucher included?",
        answer: "Yes, one AWS certification exam voucher is included with this course.",
      },
    ],
    tags: ["aws", "cloud", "solutions architect", "certification", "devops"],
    badge: "Trending",
    nextBatch: "January 8, 2025",
    emiAvailable: true,
    emiStartsAt: 2916,
    createdAt: "2024-03-01",
  },
  {
    id: "4",
    slug: "digital-marketing-pro",
    title: "Digital Marketing Professional Certificate",
    shortDescription: "Master SEO, SEM, Social Media, and Analytics to become a digital marketing expert",
    description: "Learn end-to-end digital marketing including SEO, Google Ads, Facebook Ads, content marketing, email marketing, and analytics. Work on live campaigns and build a portfolio of real results.",
    provider: {
      name: "Google",
      logo: "/images/providers/google.svg",
    },
    category: "marketing",
    subcategory: "digital-marketing",
    thumbnail: "/images/courses/marketing.jpg",
    duration: "4 Months",
    mode: "Online",
    level: "Beginner",
    price: 29999,
    originalPrice: 49999,
    currency: "INR",
    rating: 4.6,
    reviewCount: 2134,
    enrolledCount: 11200,
    language: "English",
    certificate: true,
    skills: ["SEO", "Google Ads", "Facebook Ads", "Content Marketing", "Email Marketing", "Analytics", "Social Media Marketing"],
    highlights: [
      "Google certification included",
      "Work on live campaigns",
      "₹50,000 ad credits included",
      "Build real portfolio",
      "Freelancing guidance",
    ],
    curriculum: [
      {
        title: "Digital Marketing Fundamentals",
        duration: "2 weeks",
        lessons: ["Marketing Concepts", "Customer Journey", "Channel Overview", "Analytics Basics"],
      },
      {
        title: "Search Engine Optimization",
        duration: "3 weeks",
        lessons: ["On-page SEO", "Off-page SEO", "Technical SEO", "Local SEO", "SEO Tools"],
      },
      {
        title: "Paid Advertising",
        duration: "4 weeks",
        lessons: ["Google Ads", "Facebook & Instagram Ads", "LinkedIn Ads", "Campaign Optimization"],
      },
      {
        title: "Content & Social Media",
        duration: "3 weeks",
        lessons: ["Content Strategy", "Social Media Marketing", "Email Marketing", "Influencer Marketing"],
      },
      {
        title: "Analytics & Strategy",
        duration: "4 weeks",
        lessons: ["Google Analytics 4", "Data-driven Decisions", "Marketing Strategy", "Capstone Campaign"],
      },
    ],
    instructors: [
      {
        name: "Neha Gupta",
        title: "Head of Marketing, Ex-Meta",
        image: "/images/instructors/neha.jpg",
        bio: "15+ years of digital marketing experience. Managed $50M+ in ad spend across Fortune 500 companies.",
      },
    ],
    faqs: [
      {
        question: "Will I get Google certification?",
        answer: "Yes, you'll be prepared for and receive Google Ads and Analytics certifications.",
      },
    ],
    tags: ["digital marketing", "seo", "google ads", "social media", "analytics"],
    badge: "Bestseller",
    nextBatch: "January 10, 2025",
    emiAvailable: true,
    emiStartsAt: 2499,
    createdAt: "2024-01-15",
  },
  {
    id: "5",
    slug: "python-data-science",
    title: "Python for Data Science & Analytics",
    shortDescription: "Learn Python programming for data analysis, visualization, and machine learning",
    description: "Master Python programming with focus on data science applications. Learn NumPy, Pandas, Matplotlib, and Scikit-learn through hands-on projects and real-world datasets.",
    provider: {
      name: "BSEduworld Academy",
      logo: "/images/providers/bseduworld.svg",
    },
    category: "data-science",
    subcategory: "python",
    thumbnail: "/images/courses/python.jpg",
    duration: "3 Months",
    mode: "Self-paced",
    level: "Beginner",
    price: 19999,
    originalPrice: 34999,
    currency: "INR",
    rating: 4.7,
    reviewCount: 3421,
    enrolledCount: 18500,
    language: "English",
    certificate: true,
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter"],
    highlights: [
      "No prior coding experience needed",
      "50+ hands-on exercises",
      "10 real-world projects",
      "Lifetime access",
      "Certificate of completion",
    ],
    curriculum: [
      {
        title: "Python Fundamentals",
        duration: "3 weeks",
        lessons: ["Variables & Data Types", "Control Flow", "Functions", "File Handling", "Object-Oriented Programming"],
      },
      {
        title: "Data Manipulation with Pandas",
        duration: "3 weeks",
        lessons: ["DataFrames", "Data Cleaning", "Merging & Joining", "Groupby Operations", "Time Series"],
      },
      {
        title: "Data Visualization",
        duration: "2 weeks",
        lessons: ["Matplotlib", "Seaborn", "Plotly", "Dashboard Creation"],
      },
      {
        title: "Introduction to ML",
        duration: "4 weeks",
        lessons: ["ML Concepts", "Regression", "Classification", "Model Evaluation", "Mini Projects"],
      },
    ],
    instructors: [
      {
        name: "Amit Verma",
        title: "Lead Data Scientist, Flipkart",
        image: "/images/instructors/amit.jpg",
        bio: "8+ years in data science. Taught 50,000+ students globally.",
      },
    ],
    faqs: [
      {
        question: "Is this suitable for complete beginners?",
        answer: "Absolutely! This course is designed for those with zero programming experience.",
      },
    ],
    tags: ["python", "data science", "pandas", "numpy", "beginner"],
    nextBatch: "Anytime",
    emiAvailable: true,
    emiStartsAt: 1666,
    createdAt: "2024-04-01",
  },
  {
    id: "6",
    slug: "cybersecurity-expert",
    title: "Cybersecurity Expert Program",
    shortDescription: "Become a cybersecurity professional with ethical hacking, network security, and SOC operations",
    description: "Comprehensive cybersecurity program covering ethical hacking, penetration testing, network security, incident response, and SOC operations. Prepare for CEH and CompTIA Security+ certifications.",
    provider: {
      name: "EC-Council",
      logo: "/images/providers/eccouncil.svg",
    },
    category: "cybersecurity",
    subcategory: "ethical-hacking",
    thumbnail: "/images/courses/cybersecurity.jpg",
    duration: "6 Months",
    mode: "Online",
    level: "Intermediate",
    price: 69999,
    originalPrice: 119999,
    currency: "INR",
    rating: 4.8,
    reviewCount: 987,
    enrolledCount: 4200,
    language: "English",
    certificate: true,
    skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "SIEM", "Incident Response", "Malware Analysis"],
    highlights: [
      "CEH certification included",
      "Hands-on virtual labs",
      "Real-world simulations",
      "SOC analyst training",
      "Job placement support",
    ],
    curriculum: [
      {
        title: "Cybersecurity Fundamentals",
        duration: "4 weeks",
        lessons: ["Security Concepts", "Network Fundamentals", "Cryptography", "Security Policies"],
      },
      {
        title: "Ethical Hacking",
        duration: "6 weeks",
        lessons: ["Footprinting", "Scanning", "Enumeration", "Vulnerability Analysis", "System Hacking"],
      },
      {
        title: "Penetration Testing",
        duration: "4 weeks",
        lessons: ["Web App Testing", "Mobile Security", "Wireless Security", "Social Engineering"],
      },
      {
        title: "SOC Operations",
        duration: "6 weeks",
        lessons: ["SIEM Tools", "Incident Response", "Threat Hunting", "Forensics Basics"],
      },
      {
        title: "Certification Prep",
        duration: "4 weeks",
        lessons: ["CEH Exam Prep", "Practice Tests", "Mock Exams"],
      },
    ],
    instructors: [
      {
        name: "Rajesh Kumar",
        title: "CISO, Cybersecurity Consultant",
        image: "/images/instructors/rajesh.jpg",
        bio: "20+ years in cybersecurity. Former CISO at major banks. EC-Council certified instructor.",
      },
    ],
    faqs: [
      {
        question: "Is CEH exam included?",
        answer: "Yes, one CEH exam voucher is included with this program.",
      },
    ],
    tags: ["cybersecurity", "ethical hacking", "penetration testing", "ceh", "security"],
    badge: "New",
    nextBatch: "February 1, 2025",
    emiAvailable: true,
    emiStartsAt: 5833,
    createdAt: "2024-06-01",
  },
  {
    id: "7",
    slug: "ui-ux-mastery",
    title: "UI/UX Design Mastery Program",
    shortDescription: "Master user interface and experience design with Figma, research, and prototyping",
    description: "Become a professional UI/UX designer. Learn design thinking, user research, wireframing, prototyping with Figma, and build a portfolio of 10+ projects.",
    provider: {
      name: "BSEduworld Academy",
      logo: "/images/providers/bseduworld.svg",
    },
    category: "ui-ux",
    subcategory: "design",
    thumbnail: "/images/courses/uiux.jpg",
    duration: "5 Months",
    mode: "Online",
    level: "Beginner",
    price: 44999,
    originalPrice: 74999,
    currency: "INR",
    rating: 4.8,
    reviewCount: 1567,
    enrolledCount: 7800,
    language: "English",
    certificate: true,
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Interaction Design"],
    highlights: [
      "Portfolio of 10+ projects",
      "Real client projects",
      "Figma certification prep",
      "1:1 design critiques",
      "Job-ready portfolio",
    ],
    curriculum: [
      {
        title: "Design Fundamentals",
        duration: "3 weeks",
        lessons: ["Design Principles", "Color Theory", "Typography", "Layout & Composition"],
      },
      {
        title: "User Research",
        duration: "3 weeks",
        lessons: ["Research Methods", "User Interviews", "Personas", "Journey Mapping", "Information Architecture"],
      },
      {
        title: "UI Design with Figma",
        duration: "6 weeks",
        lessons: ["Figma Mastery", "Component Design", "Design Systems", "Responsive Design", "Design Handoff"],
      },
      {
        title: "UX & Prototyping",
        duration: "4 weeks",
        lessons: ["Wireframing", "Interactive Prototypes", "Micro-interactions", "Usability Testing"],
      },
      {
        title: "Portfolio & Career",
        duration: "4 weeks",
        lessons: ["Portfolio Building", "Case Studies", "Interview Prep", "Freelancing"],
      },
    ],
    instructors: [
      {
        name: "Sanya Mehta",
        title: "Principal Designer, Ex-Airbnb",
        image: "/images/instructors/sanya.jpg",
        bio: "Award-winning designer with 12+ years experience. Previously at Airbnb, Uber, and Google.",
      },
    ],
    faqs: [
      {
        question: "Do I need design experience?",
        answer: "No prior design experience needed. We start from the fundamentals.",
      },
    ],
    tags: ["ui design", "ux design", "figma", "user research", "prototyping"],
    badge: "Popular",
    nextBatch: "January 25, 2025",
    emiAvailable: true,
    emiStartsAt: 3749,
    createdAt: "2024-02-15",
  },
  {
    id: "8",
    slug: "business-analytics",
    title: "Business Analytics & Intelligence",
    shortDescription: "Master Power BI, Tableau, SQL, and Excel for data-driven business decisions",
    description: "Learn to analyze business data, create dashboards, and drive decisions with data. Master Excel, SQL, Power BI, and Tableau through real business case studies.",
    provider: {
      name: "IIM Bangalore",
      logo: "/images/providers/iimb.svg",
    },
    category: "data-science",
    subcategory: "business-analytics",
    thumbnail: "/images/courses/analytics.jpg",
    duration: "4 Months",
    mode: "Online",
    level: "Intermediate",
    price: 59999,
    originalPrice: 99999,
    currency: "INR",
    rating: 4.7,
    reviewCount: 1234,
    enrolledCount: 5600,
    language: "English",
    certificate: true,
    skills: ["Excel", "SQL", "Power BI", "Tableau", "Statistical Analysis", "Business Intelligence", "Dashboard Design"],
    highlights: [
      "IIM Bangalore certification",
      "20+ business case studies",
      "Industry projects",
      "Executive mentorship",
      "Alumni network access",
    ],
    curriculum: [
      {
        title: "Excel for Business",
        duration: "2 weeks",
        lessons: ["Advanced Excel", "Pivot Tables", "Data Analysis Functions", "VBA Basics"],
      },
      {
        title: "SQL & Database",
        duration: "3 weeks",
        lessons: ["SQL Fundamentals", "Advanced Queries", "Database Design", "Data Warehousing"],
      },
      {
        title: "Power BI",
        duration: "4 weeks",
        lessons: ["Power BI Desktop", "DAX", "Data Modeling", "Dashboard Design", "Power BI Service"],
      },
      {
        title: "Tableau",
        duration: "3 weeks",
        lessons: ["Tableau Fundamentals", "Calculations", "Advanced Visualizations", "Tableau Server"],
      },
      {
        title: "Capstone Project",
        duration: "4 weeks",
        lessons: ["Business Case Analysis", "Dashboard Development", "Presentation"],
      },
    ],
    instructors: [
      {
        name: "Prof. Suresh Menon",
        title: "Professor, IIM Bangalore",
        image: "/images/instructors/suresh.jpg",
        bio: "20+ years in academia and consulting. Expert in business analytics and strategy.",
      },
    ],
    faqs: [
      {
        question: "Is this good for career transition?",
        answer: "Yes, this program is designed for working professionals looking to transition into analytics roles.",
      },
    ],
    tags: ["business analytics", "power bi", "tableau", "sql", "excel", "iim"],
    nextBatch: "February 5, 2025",
    emiAvailable: true,
    emiStartsAt: 4999,
    createdAt: "2024-03-15",
  },
];

// Filter options for course listings
export const filterOptions = {
  popularity: [
    { id: "most-popular", label: "Most Popular" },
    { id: "recently-added", label: "Recently Added" },
    { id: "industry-recommended", label: "Industry Recommended" },
    { id: "job-ready", label: "Job-Ready Skills" },
    { id: "free", label: "Free Courses" },
  ],
  duration: [
    { id: "under-1-month", label: "Under 1 Month" },
    { id: "1-3-months", label: "1-3 Months" },
    { id: "3-6-months", label: "3-6 Months" },
    { id: "6-plus-months", label: "6+ Months" },
  ],
  level: [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ],
  price: [
    { id: "free", label: "Free" },
    { id: "under-25k", label: "Under ₹25,000" },
    { id: "25k-50k", label: "₹25,000 - ₹50,000" },
    { id: "50k-100k", label: "₹50,000 - ₹1,00,000" },
    { id: "above-100k", label: "Above ₹1,00,000" },
  ],
  mode: [
    { id: "online", label: "Online Live" },
    { id: "self-paced", label: "Self-Paced" },
    { id: "hybrid", label: "Hybrid" },
  ],
};

// Helper function to get course by slug
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

// Helper function to get courses by category
export function getCoursesByCategory(categoryId: string): Course[] {
  return courses.filter((course) => course.category === categoryId);
}

// Helper function to get featured courses
export function getFeaturedCourses(limit = 8): Course[] {
  return courses.filter((course) => course.badge).slice(0, limit);
}
