// Static degree program data for BSEduworld

export interface Degree {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  university: {
    name: string;
    logo: string;
    location: string;
    accreditation: string[];
  };
  programType: "MBA" | "MCA" | "BCA" | "BBA" | "BCom" | "MCom" | "MSc" | "BSc" | "MA" | "BA";
  specialization?: string;
  country: string;
  thumbnail: string;
  duration: string;
  mode: "Online" | "Distance" | "Hybrid";
  eligibility: string;
  totalFee: number;
  feePerSemester: number;
  currency: string;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  approvals: string[];
  highlights: string[];
  curriculum: DegreeModule[];
  careerOptions: string[];
  admissionProcess: string[];
  faqs: FAQ[];
  tags: string[];
  badge?: "Top Rated" | "Popular" | "New" | "UGC Approved" | "NAAC A+";
  intakeMonths: string[];
  emiAvailable: boolean;
  emiStartsAt?: number;
}

export interface DegreeModule {
  semester: number;
  subjects: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const degreeCategories = [
  { id: "mba", name: "MBA Programs", icon: "🎓", count: 28 },
  { id: "mca", name: "MCA Programs", icon: "💻", count: 18 },
  { id: "bca", name: "BCA Programs", icon: "🖥️", count: 22 },
  { id: "bba", name: "BBA Programs", icon: "📊", count: 15 },
  { id: "bcom", name: "B.Com Programs", icon: "📈", count: 12 },
  { id: "mcom", name: "M.Com Programs", icon: "💼", count: 10 },
  { id: "msc", name: "M.Sc Programs", icon: "🔬", count: 14 },
  { id: "bsc", name: "B.Sc Programs", icon: "🧪", count: 16 },
];

export const degrees: Degree[] = [
  {
    id: "1",
    slug: "online-mba",
    title: "Online MBA - Master of Business Administration",
    shortDescription: "UGC-approved online MBA with specializations in Marketing, Finance, HR, and more",
    description: "Advance your career with our UGC-approved online MBA program. Learn from industry experts, work on real business cases, and earn a globally recognized degree while continuing your career. Choose from multiple specializations including Marketing, Finance, HR, Operations, and Data Analytics.",
    university: {
      name: "Manipal University Jaipur",
      logo: "/images/universities/manipal.svg",
      location: "Jaipur, India",
      accreditation: ["UGC", "NAAC A+", "AICTE"],
    },
    programType: "MBA",
    specialization: "Multiple Specializations",
    country: "India",
    thumbnail: "/images/degrees/mba.jpg",
    duration: "2 Years",
    mode: "Online",
    eligibility: "Bachelor's degree with 50% marks. Work experience preferred but not mandatory.",
    totalFee: 180000,
    feePerSemester: 45000,
    currency: "INR",
    rating: 4.7,
    reviewCount: 1847,
    enrolledCount: 12500,
    approvals: ["UGC", "NAAC A+", "AICTE", "WES Approved"],
    highlights: [
      "100% online with live interactive sessions",
      "12+ specializations available",
      "Industry mentorship program",
      "Capstone project with real companies",
      "Campus immersion experience included",
      "Global alumni network of 50,000+",
      "No GMAT/CAT required for admission",
      "EMI options starting ₹7,500/month",
    ],
    curriculum: [
      {
        semester: 1,
        subjects: ["Management Principles", "Organizational Behavior", "Business Economics", "Financial Accounting", "Business Statistics"],
      },
      {
        semester: 2,
        subjects: ["Marketing Management", "Financial Management", "Human Resource Management", "Operations Management", "Business Research Methods"],
      },
      {
        semester: 3,
        subjects: ["Strategic Management", "Business Analytics", "Specialization Elective 1", "Specialization Elective 2", "Industry Project"],
      },
      {
        semester: 4,
        subjects: ["Entrepreneurship", "Business Ethics", "Specialization Elective 3", "Specialization Elective 4", "Capstone Project"],
      },
    ],
    careerOptions: [
      "Business Manager",
      "Marketing Manager",
      "Financial Analyst",
      "HR Manager",
      "Operations Manager",
      "Consultant",
      "Entrepreneur",
      "Product Manager",
    ],
    admissionProcess: [
      "Submit online application with documents",
      "Pay application fee (₹1,000)",
      "Appear for online aptitude test",
      "Attend personal interview",
      "Receive admission offer",
      "Pay semester fee and confirm admission",
    ],
    faqs: [
      {
        question: "Is this degree equivalent to regular MBA?",
        answer: "Yes, our online MBA is UGC-approved and holds the same value as a regular on-campus MBA from the university.",
      },
      {
        question: "Can I work while pursuing this MBA?",
        answer: "Absolutely! The program is designed for working professionals with flexible schedules and recorded sessions.",
      },
      {
        question: "What are the specializations available?",
        answer: "We offer 12+ specializations including Marketing, Finance, HR, Operations, IT, Healthcare, Banking, Business Analytics, and more.",
      },
      {
        question: "Is there a campus visit requirement?",
        answer: "One optional 3-day campus immersion is offered for networking and experiential learning.",
      },
    ],
    tags: ["mba", "online mba", "ugc approved", "manipal", "management"],
    badge: "NAAC A+",
    intakeMonths: ["January", "April", "July", "October"],
    emiAvailable: true,
    emiStartsAt: 7500,
  },
  {
    id: "2",
    slug: "online-mca",
    title: "Online MCA - Master of Computer Applications",
    shortDescription: "AICTE-approved online MCA for aspiring software professionals and IT leaders",
    description: "Transform your career in technology with our comprehensive online MCA program. Master programming, software engineering, databases, cloud computing, and AI/ML. Designed for graduates looking to enter the IT industry or upgrade their technical skills.",
    university: {
      name: "Amity University Online",
      logo: "/images/universities/amity.svg",
      location: "Noida, India",
      accreditation: ["UGC", "NAAC A+", "AICTE"],
    },
    programType: "MCA",
    country: "India",
    thumbnail: "/images/degrees/mca.jpg",
    duration: "2 Years",
    mode: "Online",
    eligibility: "BCA/B.Sc (CS/IT) or any graduate with Mathematics at 10+2 level",
    totalFee: 160000,
    feePerSemester: 40000,
    currency: "INR",
    rating: 4.6,
    reviewCount: 1234,
    enrolledCount: 8900,
    approvals: ["UGC", "NAAC A+", "AICTE"],
    highlights: [
      "Industry-aligned curriculum",
      "Cloud labs with AWS & Azure access",
      "Live coding sessions",
      "Placement assistance with IT companies",
      "Specialization in AI/ML, Data Science, or Cybersecurity",
      "Internship opportunities",
    ],
    curriculum: [
      {
        semester: 1,
        subjects: ["Advanced Data Structures", "Object-Oriented Programming", "Database Management Systems", "Computer Networks", "Operating Systems"],
      },
      {
        semester: 2,
        subjects: ["Web Technologies", "Software Engineering", "Cloud Computing", "Python Programming", "Design Patterns"],
      },
      {
        semester: 3,
        subjects: ["Machine Learning", "Big Data Analytics", "Mobile App Development", "Elective 1", "Minor Project"],
      },
      {
        semester: 4,
        subjects: ["Cybersecurity", "DevOps", "Elective 2", "Elective 3", "Major Project"],
      },
    ],
    careerOptions: [
      "Software Developer",
      "Full Stack Developer",
      "Data Scientist",
      "Cloud Engineer",
      "DevOps Engineer",
      "System Analyst",
      "IT Manager",
      "Technical Architect",
    ],
    admissionProcess: [
      "Online application submission",
      "Document verification",
      "Online interview (if required)",
      "Admission confirmation",
      "Fee payment",
    ],
    faqs: [
      {
        question: "Can BCA graduates apply directly?",
        answer: "Yes, BCA graduates can apply directly. Other graduates need Mathematics at 10+2 level.",
      },
      {
        question: "Are there hands-on labs?",
        answer: "Yes, we provide virtual lab access for all programming and cloud-based courses.",
      },
    ],
    tags: ["mca", "online mca", "computer applications", "software", "programming"],
    badge: "Popular",
    intakeMonths: ["February", "August"],
    emiAvailable: true,
    emiStartsAt: 6666,
  },
  {
    id: "3",
    slug: "online-bca",
    title: "Online BCA - Bachelor of Computer Applications",
    shortDescription: "Launch your IT career with an industry-ready BCA degree",
    description: "Start your journey in the world of technology with our online BCA program. Learn programming fundamentals, web development, database management, and software engineering from industry experts.",
    university: {
      name: "Lovely Professional University",
      logo: "/images/universities/lpu.svg",
      location: "Punjab, India",
      accreditation: ["UGC", "NAAC A++"],
    },
    programType: "BCA",
    country: "India",
    thumbnail: "/images/degrees/bca.jpg",
    duration: "3 Years",
    mode: "Online",
    eligibility: "10+2 with Mathematics or equivalent",
    totalFee: 120000,
    feePerSemester: 20000,
    currency: "INR",
    rating: 4.5,
    reviewCount: 2156,
    enrolledCount: 15600,
    approvals: ["UGC", "NAAC A++"],
    highlights: [
      "No entrance exam required",
      "Learn latest technologies",
      "Industry internship support",
      "Coding bootcamps included",
      "Pathway to MCA programs",
    ],
    curriculum: [
      {
        semester: 1,
        subjects: ["Programming in C", "Mathematics-I", "Computer Fundamentals", "Digital Electronics", "Communication Skills"],
      },
      {
        semester: 2,
        subjects: ["Data Structures", "Mathematics-II", "Operating Systems", "Database Concepts", "Web Technology Basics"],
      },
      {
        semester: 3,
        subjects: ["Object-Oriented Programming", "Computer Networks", "Software Engineering", "Python Programming", "Statistics"],
      },
      {
        semester: 4,
        subjects: ["Java Programming", "Web Development", "Database Management", "Computer Architecture", "Minor Project"],
      },
      {
        semester: 5,
        subjects: ["Advanced Web Development", "Mobile Development", "Cloud Computing Basics", "Elective", "Internship"],
      },
      {
        semester: 6,
        subjects: ["AI & ML Introduction", "Cybersecurity Basics", "Elective", "Major Project"],
      },
    ],
    careerOptions: [
      "Junior Developer",
      "Web Developer",
      "Database Administrator",
      "IT Support Specialist",
      "System Administrator",
      "QA Analyst",
    ],
    admissionProcess: [
      "Apply online",
      "Submit 10+2 marksheet",
      "Pay admission fee",
      "Start learning",
    ],
    faqs: [
      {
        question: "Can I do BCA without Mathematics?",
        answer: "Mathematics at 10+2 level is preferred. Some universities accept students with basic math courses.",
      },
    ],
    tags: ["bca", "bachelor", "computer applications", "programming", "entry-level"],
    badge: "Top Rated",
    intakeMonths: ["January", "July"],
    emiAvailable: true,
    emiStartsAt: 3333,
  },
  {
    id: "4",
    slug: "online-bba",
    title: "Online BBA - Bachelor of Business Administration",
    shortDescription: "Build a strong foundation in business management with our online BBA",
    description: "Develop essential business skills and management fundamentals with our comprehensive online BBA program. Learn marketing, finance, HR, and entrepreneurship from experienced faculty and industry professionals.",
    university: {
      name: "Chandigarh University",
      logo: "/images/universities/chandigarh.svg",
      location: "Chandigarh, India",
      accreditation: ["UGC", "NAAC A+"],
    },
    programType: "BBA",
    country: "India",
    thumbnail: "/images/degrees/bba.jpg",
    duration: "3 Years",
    mode: "Online",
    eligibility: "10+2 from any stream with 50% marks",
    totalFee: 90000,
    feePerSemester: 15000,
    currency: "INR",
    rating: 4.4,
    reviewCount: 1678,
    enrolledCount: 11200,
    approvals: ["UGC", "NAAC A+"],
    highlights: [
      "No entrance exam",
      "Industry case studies",
      "Entrepreneurship incubation",
      "Internship placements",
      "Pathway to MBA",
    ],
    curriculum: [
      {
        semester: 1,
        subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication", "Computer Applications"],
      },
      {
        semester: 2,
        subjects: ["Organizational Behavior", "Business Statistics", "Cost Accounting", "Business Law", "Marketing Fundamentals"],
      },
      {
        semester: 3,
        subjects: ["Human Resource Management", "Financial Management", "Operations Management", "Business Research", "Environmental Studies"],
      },
      {
        semester: 4,
        subjects: ["Marketing Management", "Strategic Management", "E-Commerce", "Entrepreneurship", "Minor Project"],
      },
      {
        semester: 5,
        subjects: ["International Business", "Corporate Governance", "Elective 1", "Elective 2", "Internship"],
      },
      {
        semester: 6,
        subjects: ["Business Analytics", "Leadership & Ethics", "Elective 3", "Major Project"],
      },
    ],
    careerOptions: [
      "Management Trainee",
      "Business Analyst",
      "Marketing Executive",
      "HR Executive",
      "Sales Manager",
      "Entrepreneur",
    ],
    admissionProcess: [
      "Online registration",
      "Document upload",
      "Fee payment",
      "Enrollment confirmation",
    ],
    faqs: [
      {
        question: "Can commerce students apply?",
        answer: "Yes, students from any stream (Science, Commerce, Arts) can apply for BBA.",
      },
    ],
    tags: ["bba", "business administration", "management", "bachelor", "business"],
    intakeMonths: ["January", "April", "July", "October"],
    emiAvailable: true,
    emiStartsAt: 2500,
  },
  {
    id: "5",
    slug: "online-mba-finance",
    title: "Online MBA in Finance",
    shortDescription: "Specialize in finance with this comprehensive MBA program from NMIMS",
    description: "Master financial management, investment analysis, and corporate finance with NMIMS's prestigious online MBA in Finance. Ideal for professionals seeking leadership roles in banking, finance, and investment sectors.",
    university: {
      name: "NMIMS Global Access",
      logo: "/images/universities/nmims.svg",
      location: "Mumbai, India",
      accreditation: ["UGC", "NAAC A+", "AACSB"],
    },
    programType: "MBA",
    specialization: "Finance",
    country: "India",
    thumbnail: "/images/degrees/mba-finance.jpg",
    duration: "2 Years",
    mode: "Online",
    eligibility: "Bachelor's degree with 50% marks. 2+ years work experience preferred.",
    totalFee: 220000,
    feePerSemester: 55000,
    currency: "INR",
    rating: 4.8,
    reviewCount: 1234,
    enrolledCount: 6500,
    approvals: ["UGC", "NAAC A+", "AACSB Accredited"],
    highlights: [
      "AACSB accredited program",
      "Bloomberg terminal access",
      "CFA exam preparation included",
      "Live market simulations",
      "Industry expert sessions",
      "Mumbai campus immersion",
    ],
    curriculum: [
      {
        semester: 1,
        subjects: ["Financial Accounting & Analysis", "Business Economics", "Quantitative Methods", "Marketing Management", "Organizational Behavior"],
      },
      {
        semester: 2,
        subjects: ["Corporate Finance", "Investment Analysis", "Financial Markets", "Business Analytics", "Operations Management"],
      },
      {
        semester: 3,
        subjects: ["Portfolio Management", "Financial Derivatives", "International Finance", "Risk Management", "Industry Project"],
      },
      {
        semester: 4,
        subjects: ["Mergers & Acquisitions", "Fintech & Digital Banking", "Wealth Management", "Strategic Finance", "Capstone Project"],
      },
    ],
    careerOptions: [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "CFO",
      "Risk Manager",
      "Wealth Manager",
      "Finance Controller",
    ],
    admissionProcess: [
      "Apply online with resume",
      "Appear for NMAT (score 200+)",
      "Personal interview",
      "Offer letter",
      "Fee payment",
    ],
    faqs: [
      {
        question: "Is NMAT mandatory?",
        answer: "Yes, NMAT score of 200+ is required. Alternatively, a valid CAT/GMAT score is accepted.",
      },
      {
        question: "Does this prepare for CFA?",
        answer: "Yes, the curriculum covers CFA Level 1 topics and includes exam prep modules.",
      },
    ],
    tags: ["mba finance", "nmims", "finance specialization", "investment", "banking"],
    badge: "NAAC A+",
    intakeMonths: ["March", "September"],
    emiAvailable: true,
    emiStartsAt: 9166,
  },
  {
    id: "6",
    slug: "online-msc-data-science",
    title: "Online M.Sc in Data Science",
    shortDescription: "Master data science with this rigorous postgraduate program",
    description: "Develop advanced skills in machine learning, statistical modeling, and big data analytics with our M.Sc in Data Science. Designed for professionals looking to lead data-driven initiatives.",
    university: {
      name: "Jain University",
      logo: "/images/universities/jain.svg",
      location: "Bangalore, India",
      accreditation: ["UGC", "NAAC A"],
    },
    programType: "MSc",
    specialization: "Data Science",
    country: "India",
    thumbnail: "/images/degrees/msc-ds.jpg",
    duration: "2 Years",
    mode: "Online",
    eligibility: "Bachelor's degree in Science/Engineering/Computer Science with 50% marks",
    totalFee: 140000,
    feePerSemester: 35000,
    currency: "INR",
    rating: 4.6,
    reviewCount: 856,
    enrolledCount: 4200,
    approvals: ["UGC", "NAAC A"],
    highlights: [
      "Python & R focused curriculum",
      "Cloud computing labs (AWS/GCP)",
      "Kaggle competition preparation",
      "Industry capstone project",
      "Data science toolkit included",
    ],
    curriculum: [
      {
        semester: 1,
        subjects: ["Statistical Methods", "Python for Data Science", "Linear Algebra & Calculus", "Database Systems", "Data Visualization"],
      },
      {
        semester: 2,
        subjects: ["Machine Learning", "Big Data Analytics", "R Programming", "Natural Language Processing", "Cloud Platforms"],
      },
      {
        semester: 3,
        subjects: ["Deep Learning", "Time Series Analysis", "A/B Testing & Experimentation", "MLOps", "Research Project"],
      },
      {
        semester: 4,
        subjects: ["Advanced AI Topics", "Industry Capstone", "Dissertation"],
      },
    ],
    careerOptions: [
      "Data Scientist",
      "ML Engineer",
      "Data Analyst",
      "AI Researcher",
      "Analytics Manager",
    ],
    admissionProcess: [
      "Online application",
      "Eligibility verification",
      "Merit-based selection",
      "Admission offer",
    ],
    faqs: [
      {
        question: "Do I need programming experience?",
        answer: "Basic programming knowledge is helpful but not mandatory. Foundation courses are provided.",
      },
    ],
    tags: ["msc data science", "data science", "machine learning", "analytics", "postgraduate"],
    badge: "New",
    intakeMonths: ["January", "July"],
    emiAvailable: true,
    emiStartsAt: 5833,
  },
];

// Filter options for degree listings
export const degreeFilterOptions = {
  program: [
    { id: "mba", label: "MBA" },
    { id: "mca", label: "MCA" },
    { id: "bca", label: "BCA" },
    { id: "bba", label: "BBA" },
    { id: "bcom", label: "B.Com" },
    { id: "mcom", label: "M.Com" },
    { id: "msc", label: "M.Sc" },
    { id: "bsc", label: "B.Sc" },
  ],
  country: [
    { id: "india", label: "India" },
    { id: "usa", label: "USA" },
    { id: "uk", label: "UK" },
    { id: "canada", label: "Canada" },
  ],
  approval: [
    { id: "ugc", label: "UGC Approved" },
    { id: "naac-a-plus", label: "NAAC A+" },
    { id: "aicte", label: "AICTE Approved" },
  ],
  fee: [
    { id: "under-50k", label: "Under ₹50,000" },
    { id: "50k-100k", label: "₹50,000 - ₹1,00,000" },
    { id: "100k-200k", label: "₹1,00,000 - ₹2,00,000" },
    { id: "above-200k", label: "Above ₹2,00,000" },
  ],
  duration: [
    { id: "1-year", label: "1 Year" },
    { id: "2-years", label: "2 Years" },
    { id: "3-years", label: "3 Years" },
  ],
};

// Helper functions
export function getDegreeBySlug(slug: string): Degree | undefined {
  return degrees.find((degree) => degree.slug === slug);
}

export function getDegreesByProgram(programType: string): Degree[] {
  return degrees.filter(
    (degree) => degree.programType.toLowerCase() === programType.toLowerCase()
  );
}

export function getDegreesByCountry(country: string): Degree[] {
  return degrees.filter(
    (degree) => degree.country.toLowerCase() === country.toLowerCase()
  );
}

export function getFeaturedDegrees(limit = 6): Degree[] {
  return degrees.filter((degree) => degree.badge).slice(0, limit);
}
