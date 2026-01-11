// Personal Information
export const personalInfo = {
  name: "Athina Karthikeyan",
  title: "Software Integration Engineer",
  location: "Chennai, Tamil Nadu",
  phone: "+91 6379479639",
  email: "athinax09@gmail.com",
  linkedin: "https://linkedin.com/in/athina-karthikeyan",
  github: "https://github.com/Athina09",
};

// Education
export const education = [
  {
    institution: "Chennai Institute of Technology",
    degree: "Bachelor of Engineering, Computer Science",
    period: "2025 - 2029",
  },
];

// Experience
export const experience = [
  {
    company: "Software Team (GMAT)",
    role: "Project Intern",
    period: "Jul 2025 - Aug 2025",
    location: "Remote",
    highlights: [
      "Collaborated with aerospace engineers to build real-world space mission software using Python and C/C++",
      "Contributed to GMAT for orbital simulation and trajectory modeling",
      "Applied programming, physics, and design thinking to troubleshoot integration challenges",
    ],
  },
  {
    company: "GSSOC 2025",
    role: "Open Source Contributor",
    period: "2025",
    location: "Remote",
    highlights: [
      "Analyzed project prototypes to identify integration and debugging issues",
      "Implemented fixes to enhance software development and integration reliability",
      "Gained experience in debugging, software testing, and cross-functional collaboration",
    ],
  },
];

// Projects
export const projects = [
  {
    name: "Social Media Simulation",
    tech: "C++, STL, File I/O",
    description: "Console-based simulation with profiles, messaging, friend system & file persistence.",
    image: "/images/project-1.png",
  },
  {
    name: "AI Image Generator MVP",
    tech: "Python, Hugging Face, AWS",
    description: "Lightweight image generation using Stable Diffusion on AWS Lambda.",
    image: "/images/project-2.png",
  },
  {
    name: "Ollama AI Chat System",
    tech: "Python, Ollama, LLMs",
    description: "Private AI chatbot system using Ollama and open-source LLMs (Mistral, Gemma).",
    image: "/images/project-3.png",
  },
  {
    name: "Library Management System",
    tech: "C++",
    description: "Tracks books, borrowing, and users with file-based storage.",
    image: "/images/folder.png",
  },
  {
    name: "Rocket Trajectory Calculator",
    tech: "Excel, Newtonian Mechanics",
    description: "Spreadsheet tool applying physics formulas to model rocket movement.",
    image: "/images/folder.png",
  },
  {
    name: "Drug Addiction Recovery System",
    tech: "C++",
    description: "Tool for medication tracking, therapy scheduling, and billing.",
    image: "/images/folder.png",
  },
];

// Technical Skills
export const skills = {
  languages: ["Python", "Java", "C/C++", "HTML/CSS", "JavaScript", "MySQL"],
  tools: ["VS Code", "Figma", "Git", "GitHub", "AWS Lambda", "Hugging Face", "Excel", "Stable Diffusion"],
  concepts: ["OOP", "System Design", "File I/O", "APIs", "Serverless Architecture", "Frontend & Backend Development"],
};

// Leadership
export const leadership = [
  {
    organization: "Space Technology and Aeronautical Rocketry (STAR)",
    role: "Project Lead",
    period: "Aug 2025",
    highlights: [
      "Designed spacecraft path from Earth's orbit to the Moon using step-by-step orbit changes",
      "Calculated engine burns (ΔV) and timings for efficient Moon trajectory",
      "Simulated Moon landing with safe landing plan using controlled free fall",
    ],
  },
];

// Social Links for Contact
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Athina09",
    icon: "/icons/github.svg",
    color: "bg-gray-900",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/athina-karthikeyan",
    icon: "/icons/linkedin.svg",
    color: "bg-blue-600",
  },
  {
    name: "Email",
    url: "mailto:athinax09@gmail.com",
    icon: "/icons/user.svg",
    color: "bg-pink-500",
  },
];

// Dock Items
export const dockItems = [
  { name: "Finder", icon: "/images/finder.png", window: "finder" },
  { name: "Safari", icon: "/images/safari.png", window: "safari" },
  { name: "Terminal", icon: "/images/terminal.png", window: "terminal" },
  { name: "Photos", icon: "/images/photos.png", window: "photos" },
  { name: "Contact", icon: "/images/contact.png", window: "contact" },
  { name: "Resume", icon: "/images/pdf.png", window: "resume" },
  { name: "Trash", icon: "/images/trash.png", window: null },
];

// Dock Apps (macOS style)
export const dockApps = [
  {
    id: "finder",
    name: "Projects",
    icon: "/images/finder.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "/images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "/images/terminal.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Blog",
    icon: "/images/safari.png",
    canOpen: true,
  },
  {
    id: "resume",
    name: "Resume",
    icon: "/images/pdf.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "/images/trash.png",
    canOpen: false,
  },
];

// Window Configuration
export const INITIAL_Z_INDEX = 10;

export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

// Blog Posts (for Safari window)
export const blogPosts = [
  {
    title: "Building Space Mission Software with GMAT",
    date: "August 2025",
    excerpt: "My experience as a Project Intern working on orbital simulation and trajectory modeling...",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    title: "Contributing to Open Source: GSSOC Journey",
    date: "2025",
    excerpt: "Lessons learned from debugging, testing, and collaborating in open source projects...",
    image: "/images/blog2.png",
    link: "#",
  },
  {
    title: "AI Image Generation with Stable Diffusion on AWS",
    date: "2025",
    excerpt: "How I built a lightweight image generator using serverless architecture...",
    image: "/images/blog3.png",
    link: "#",
  },
];




