// Central configuration. Edit this file to update contact details, links, skills and projects.

export const profile = {
  name: 'Sanket Kadam',
  headline: 'Software Developer | Python Backend Developer | Generative AI Engineer',
  footerTagline: 'Software Developer | Python | Generative AI',
  email: 'sanketkadam122003@gmail.com',
  phone: '+91 9021670542',
  phoneHref: 'tel:+919021670542',
  location: 'Sangli, Maharashtra, India',
  resumeUrl: '/resume.pdf',
}

export const social = {
  github: 'https://github.com/sanketkadam09',
  linkedin: 'https://www.linkedin.com/in/sanket-kadam-577b2a243/',
  leetcode: 'https://leetcode.com/u/kadamsanket09/',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  label: 'OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES',
  title: "Hi, I'm Sanket Kadam.",
  subtitle: 'I build backend systems and AI-powered applications.',
  text: 'Computer Science graduate with six months of software development internship experience, building Python APIs, document intelligence systems, and AI-driven workflows.',
}

export const about = {
  paragraphs: [
    'I graduated in Computer Science in 2026 and completed a six-month Software Developer internship at Xtensible Software Technologies Pvt. Ltd., where I worked on REST APIs, a document management system, and a hybrid search pipeline under the guidance of senior developers.',
    'My interests are backend engineering, API development, Generative AI, RAG systems, and Agentic AI. Outside of work experience, I build personal projects with LangChain and LangGraph to explore multi-step AI workflows.',
  ],
  highlights: [
    { icon: 'server', title: 'Backend & REST APIs', text: 'Python, Flask, Node.js and Express with JWT authentication.' },
    { icon: 'file', title: 'AI Document Apps', text: 'RAG-based question answering over PDFs, DOCX and scanned images.' },
    { icon: 'search', title: 'Semantic & Hybrid Search', text: 'Keyword and embedding-based retrieval combined.' },
    { icon: 'database', title: 'Databases & Caching', text: 'PostgreSQL with pgvector, MongoDB, SQLite and Redis.' },
    { icon: 'container', title: 'Docker & AWS', text: 'Docker Compose deployments on AWS EC2 with GitHub Actions.' },
  ],
}

export const skillGroups = [
  { icon: 'code', title: 'Programming Languages', items: ['Python', 'Core Java', 'JavaScript', 'SQL'] },
  {
    icon: 'server',
    title: 'Backend Development',
    items: ['Flask', 'REST API Design', 'CRUD Operations', 'JWT Authentication', 'Object-Oriented Programming'],
  },
  { icon: 'layout', title: 'Frontend Development', items: ['React.js', 'HTML5', 'CSS3'] },
  {
    icon: 'brain',
    title: 'Generative AI & Agentic AI',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'Large Language Models',
      'Gemini Embeddings',
      'Semantic Search',
      'Hybrid Search',
      'Vector Databases',
      'LangChain',
      'LangGraph',
      'Whisper Speech-to-Text',
      'gTTS Text-to-Speech',
      'OCR',
    ],
  },
  { icon: 'database', title: 'Databases & Caching', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'pgvector'] },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD fundamentals'],
  },
  { icon: 'wrench', title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export const experience = {
  role: 'Software Developer Intern',
  company: 'Xtensible Software Technologies Pvt. Ltd.',
  location: 'Baner, Pune',
  period: 'December 2025 – May 2026',
  points: [
    'Built a document management system with JWT-based role-based access control for Admin and User roles.',
    'Developed REST APIs and prepared technical documentation under the guidance of senior developers.',
    'Implemented OCR-based text extraction pipelines for document indexing.',
    'Developed a hybrid search system combining keyword and semantic search.',
    'Used Redis caching to reduce latency by 30–40%, as reported in my resume.',
    'Integrated Whisper speech-to-text and gTTS text-to-speech for voice-based interaction.',
    'Enhanced in-browser PDF search using PDF.js.',
    'Containerized and deployed the application using Docker and AWS EC2.',
    'Worked with CI/CD pipelines using GitHub Actions.',
  ],
}

// filters: 'backend' | 'ai' | 'fullstack'. A project can appear under several filters.
// Add a `demoUrl` field only when a genuine live demo exists; a Live Demo button then appears automatically.
export const projects = [
  {
    id: 'smartdoc',
    title: 'SmartDoc AI Engine',
    category: 'AI / RAG / Backend Development',
    period: 'Feb 2026 – Mar 2026',
    filters: ['ai', 'backend'],
    repo: 'https://github.com/sanketkadam09/Rag-Document-Assistant',
    description:
      'An AI-powered document question-answering system that processes uploaded documents and answers user questions using retrieval-augmented generation.',
    features: [
      'PDF, DOCX, and image document processing.',
      'OCR-based text extraction for scanned documents.',
      'Document chunking and embedding generation.',
      'Semantic similarity search using PostgreSQL and pgvector.',
      'Gemini embeddings and Gemini 2.5 Flash for context-aware question answering.',
      'Hybrid keyword and semantic retrieval.',
      'Redis caching for repeated queries.',
      'JWT authentication and role-based access control.',
      'Voice-based interaction with Whisper and gTTS.',
      'React frontend with PDF viewing and search highlighting.',
      'Docker Compose deployment on AWS EC2.',
    ],
    tech: ['Python', 'Flask', 'React.js', 'PostgreSQL', 'pgvector', 'Gemini API', 'Redis', 'Docker', 'AWS EC2'],
  },
  {
    id: 'clarity',
    title: 'Clarity Desk',
    category: 'Agentic AI / Workflow Automation',
    period: '2026',
    filters: ['ai', 'backend'],
    repo: 'https://github.com/sanketkadam09/Clarity-Desk',
    description:
      'An AI-powered document generation application that uses a multi-step agent workflow to create structured project proposals from natural-language requirements.',
    features: [
      'Accepts natural-language project requests.',
      'Plans and drafts project proposals.',
      'Uses LangChain and LangGraph for workflow orchestration.',
      'Implements reflection, review, and validation.',
      'Detects missing critical information, including budget, timeline, and team size, and asks the user rather than fabricating values.',
      'Generates structured documents.',
      'Supports asynchronous job processing.',
      'Stores agent history using SQLite.',
      'Provides a React frontend with pipeline visualization.',
    ],
    tech: ['Python', 'Flask', 'LangChain', 'LangGraph', 'Groq API', 'SQLite', 'React.js', 'python-docx'],
  },
  {
    id: 'findmyspace',
    title: 'FindMySpace — Room and Roommate Finder',
    category: 'Full-Stack Web Development',
    period: 'Jul 2025 – Nov 2025',
    filters: ['fullstack'],
    repo: 'https://github.com/sanketkadam09/FindMySpace--Room-And-Roommate-find-',
    description:
      'A full-stack MERN platform designed to help users find rooms and roommates, manage property listings, and discover relevant accommodation.',
    features: [
      'JWT authentication and role-based permissions.',
      'Room listings and booking functionality.',
      'Google Maps API integration.',
      'Roommate matching using a weighted rule-based algorithm.',
      'Redis caching for repeated lookups.',
      'Reviews and ratings.',
      'Property-owner CRUD operations.',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Redis', 'Google Maps API'],
  },
]

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai', label: 'AI/GenAI' },
  { id: 'fullstack', label: 'Full Stack' },
]

// Add or edit entries here. `period` is optional; leave it out if you don't want a date shown.
export const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Sharad Institute of Technology, Yadrav',
    period: '2022 – 2026',
    scoreLabel: 'CGPA',
    score: '7.88/10',
  },
  {
    degree: '12th (HSC)',
    school: 'New English School & Jr. College, Vita',
    scoreLabel: 'Percentage',
    score: '80.30%',
  },
  {
    degree: '10th (SSC)',
    school: 'Babasaheb Patil Vidyamandir, Yelavi',
    scoreLabel: 'Percentage',
    score: '92.80%',
  },
]

export const achievements = [
  { title: 'TCS iON National Qualifier Test (NQT) – IT', detail: 'June 2026' },
  { title: 'Programming (Java)', detail: 'Score: 79%' },
  { title: 'Advanced Quantitative & Reasoning', detail: 'Score: 81%' },
]

export const certifications = [
  { title: 'Web Development Certification', issuer: 'TecSpeak IT Solutions' },
  { title: 'C Programming Certification', issuer: 'Stormsofts Technology' },
]

export const developerProfiles = {
  intro: 'I continuously practice programming and build projects to strengthen my development and problem-solving skills.',
}

export const contact = {
  heading: "Let's Build Something Meaningful.",
  text: "I'm open to entry-level opportunities in Software Development, Python Backend Development, and Generative AI. If you're hiring or would like to discuss a project, feel free to connect.",
  // Optional EmailJS config (see README). Leave unset to use the mailto: fallback.
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
}
