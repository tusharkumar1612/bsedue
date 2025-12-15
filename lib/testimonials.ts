// Static testimonial data for BSEduworld

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  review: string;
  course?: string;
  degree?: string;
  outcome?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Senior Data Scientist",
    company: "Google",
    image: "/images/testimonials/priya.jpg",
    rating: 5,
    review: "The Data Science Bootcamp completely transformed my career. I went from a support role to becoming a data scientist at Google within 8 months. The curriculum was rigorous and industry-relevant.",
    course: "Data Science & Machine Learning Bootcamp",
    outcome: "3x salary increase",
    featured: true,
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Full Stack Developer",
    company: "Microsoft",
    image: "/images/testimonials/rahul.jpg",
    rating: 5,
    review: "Coming from a non-tech background, I was skeptical about transitioning to software development. BSEduworld's Full Stack bootcamp exceeded all my expectations. The mentorship and projects made me job-ready.",
    course: "Full Stack Web Development Bootcamp",
    outcome: "Career transition to tech",
    featured: true,
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Product Manager",
    company: "Amazon",
    image: "/images/testimonials/ananya.jpg",
    rating: 5,
    review: "The Online MBA from Manipal University was perfect for my schedule. I could balance work and studies effectively. The faculty and peer network were invaluable.",
    degree: "Online MBA",
    outcome: "Promoted to Senior PM",
    featured: true,
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Cloud Architect",
    company: "AWS",
    image: "/images/testimonials/vikram.jpg",
    rating: 5,
    review: "The AWS Solutions Architect course was comprehensive and helped me clear the certification on my first attempt. Now I'm working at AWS itself!",
    course: "AWS Solutions Architect Professional",
    outcome: "AWS certification + job",
    featured: true,
  },
  {
    id: "5",
    name: "Sneha Reddy",
    role: "UX Lead",
    company: "Flipkart",
    image: "/images/testimonials/sneha.jpg",
    rating: 5,
    review: "The UI/UX Design Mastery program gave me practical skills and a portfolio that helped me land my dream job. The real client projects were game-changing.",
    course: "UI/UX Design Mastery Program",
    outcome: "Lead designer role",
    featured: true,
  },
  {
    id: "6",
    name: "Arjun Menon",
    role: "Cybersecurity Analyst",
    company: "Deloitte",
    image: "/images/testimonials/arjun.jpg",
    rating: 5,
    review: "The Cybersecurity Expert Program with CEH certification opened doors I never thought possible. The hands-on labs and real-world simulations were excellent.",
    course: "Cybersecurity Expert Program",
    outcome: "CEH certified + 2x salary",
  },
  {
    id: "7",
    name: "Meera Krishnan",
    role: "Digital Marketing Manager",
    company: "Swiggy",
    image: "/images/testimonials/meera.jpg",
    rating: 4,
    review: "The Digital Marketing course covered everything from SEO to paid ads. The live campaign experience and Google certification helped me stand out in interviews.",
    course: "Digital Marketing Professional Certificate",
    outcome: "Marketing leadership role",
  },
  {
    id: "8",
    name: "Karthik Nair",
    role: "Business Analyst",
    company: "KPMG",
    image: "/images/testimonials/karthik.jpg",
    rating: 5,
    review: "The Business Analytics course from IIM Bangalore was worth every penny. The case studies and Power BI training were directly applicable to my work.",
    course: "Business Analytics & Intelligence",
    outcome: "Consulting role at Big 4",
  },
];

export const partnerLogos = [
  { name: "Google", logo: "/images/partners/google.svg" },
  { name: "Microsoft", logo: "/images/partners/microsoft.svg" },
  { name: "Amazon", logo: "/images/partners/amazon.svg" },
  { name: "IBM", logo: "/images/partners/ibm.svg" },
  { name: "Meta", logo: "/images/partners/meta.svg" },
  { name: "Flipkart", logo: "/images/partners/flipkart.svg" },
  { name: "Infosys", logo: "/images/partners/infosys.svg" },
  { name: "TCS", logo: "/images/partners/tcs.svg" },
  { name: "Wipro", logo: "/images/partners/wipro.svg" },
  { name: "Deloitte", logo: "/images/partners/deloitte.svg" },
  { name: "Accenture", logo: "/images/partners/accenture.svg" },
  { name: "KPMG", logo: "/images/partners/kpmg.svg" },
];

export const universityLogos = [
  { name: "IIT Madras", logo: "/images/universities/iitm.svg" },
  { name: "IIM Bangalore", logo: "/images/universities/iimb.svg" },
  { name: "Manipal University", logo: "/images/universities/manipal.svg" },
  { name: "Amity University", logo: "/images/universities/amity.svg" },
  { name: "NMIMS", logo: "/images/universities/nmims.svg" },
  { name: "LPU", logo: "/images/universities/lpu.svg" },
  { name: "Chandigarh University", logo: "/images/universities/chandigarh.svg" },
  { name: "Jain University", logo: "/images/universities/jain.svg" },
];

export const stats = [
  { label: "Learners Worldwide", value: "500K+", icon: "👨‍🎓" },
  { label: "Industry Partners", value: "100+", icon: "🤝" },
  { label: "Courses & Programs", value: "300+", icon: "📚" },
  { label: "Placement Rate", value: "94%", icon: "💼" },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}

export function getTestimonialsByCourse(courseName: string): Testimonial[] {
  return testimonials.filter((t) => t.course === courseName);
}
