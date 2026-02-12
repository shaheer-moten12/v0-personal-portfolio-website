// Portfolio Data Structure and Sample Data

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: string;
  hourlyRate: string;
  imageUrl: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
    instagram?: string;
    codepen?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent: boolean;
  companyLogo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web-app' | 'mobile' | 'full-stack' | 'open-source';
  year: number;
  isFeatured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
  proficiency: number; // 1-10
  yearsExperience: number;
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  category: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  price?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl?: string;
  rating: number;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Alex Johnson',
  title: 'Full-Stack Developer & Creative Technologist',
  bio: 'I build beautiful, performant web applications with cutting-edge technologies. Specializing in React, Node.js, and cloud infrastructure.',
  email: 'hello@alexjohnson.dev',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  timezone: 'Pacific Time (PT)',
  availability: 'Open to opportunities',
  hourlyRate: '$85-$150/hr',
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    portfolio: 'https://alexjohnson.dev',
    instagram: 'https://instagram.com',
    codepen: 'https://codepen.io',
  },
};

// Work Experience
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechVenture Labs',
    position: 'Senior Full-Stack Engineer',
    duration: '2 years',
    startDate: '2022-06',
    endDate: 'present',
    description:
      'Led development of scalable web applications serving 100K+ monthly active users. Architected microservices infrastructure and mentored junior developers.',
    responsibilities: [
      'Designed and implemented REST APIs using Node.js and Express',
      'Built responsive React applications with complex state management',
      'Optimized database queries reducing load time by 40%',
      'Mentored 3 junior developers in React best practices',
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'AWS',
      'GraphQL',
    ],
    isCurrent: true,
    companyLogo: 'https://via.placeholder.com/40',
  },
  {
    id: '2',
    company: 'Digital Creative Agency',
    position: 'Full-Stack Developer',
    duration: '2 years',
    startDate: '2020-03',
    endDate: '2022-05',
    description:
      'Developed 15+ client projects including e-commerce platforms, marketing websites, and web applications using modern technologies.',
    responsibilities: [
      'Built full-stack web applications from design to deployment',
      'Collaborated with designers and product managers',
      'Implemented responsive designs with Tailwind CSS',
      'Set up CI/CD pipelines for automated deployment',
    ],
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Tailwind CSS',
      'Firebase',
      'Stripe',
      'Vercel',
    ],
    isCurrent: false,
    companyLogo: 'https://via.placeholder.com/40',
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Junior Web Developer',
    duration: '1.5 years',
    startDate: '2018-09',
    endDate: '2020-02',
    description:
      'Started career learning full-stack web development. Contributed to product features and fixed bugs in existing codebase.',
    responsibilities: [
      'Developed React components following design specifications',
      'Fixed bugs and implemented feature requests',
      'Wrote unit tests for critical features',
      'Participated in code reviews and team discussions',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Firebase', 'Git'],
    isCurrent: false,
    companyLogo: 'https://via.placeholder.com/40',
  },
];

// Featured Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js, featuring real-time inventory updates, payment integration with Stripe, and an intuitive admin dashboard for managing products and orders.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'Stripe',
      'Tailwind CSS',
    ],
    features: [
      'Real-time inventory updates',
      'Stripe payment integration',
      'Admin dashboard',
      'User authentication',
      'Order tracking',
      'Product reviews',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'full-stack',
    year: 2023,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    longDescription:
      'A real-time task management application with WebSocket integration for instant collaboration, allowing teams to organize, track, and complete projects efficiently.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    technologies: [
      'React',
      'WebSocket',
      'Firebase',
      'Tailwind CSS',
      'Redux',
    ],
    features: [
      'Real-time collaboration',
      'Task categories and filters',
      'User roles and permissions',
      'Email notifications',
      'Progress tracking',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web-app',
    year: 2023,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'Web app powered by GPT-4 for content creation',
    longDescription:
      'An AI-powered content generation platform that leverages GPT-4 to help users create blog posts, social media content, and marketing copy with customizable tones and styles.',
    imageUrl: 'https://images.unsplash.com/photo-1677442d019cecf8181e4dcafcf9844d28b385351?w=600&h=400&fit=crop',
    technologies: [
      'Next.js',
      'React',
      'OpenAI API',
      'Tailwind CSS',
      'Vercel',
    ],
    features: [
      'GPT-4 integration',
      'Multiple content types',
      'Tone customization',
      'Export to multiple formats',
      'Usage analytics',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'full-stack',
    year: 2024,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Design System Component Library',
    description: 'Reusable component library for design consistency',
    longDescription:
      'An open-source component library built with React and Storybook, providing a comprehensive set of accessible, customizable UI components for building modern web applications.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Tailwind CSS'],
    features: [
      'Comprehensive documentation',
      'Accessibility compliant',
      'Customizable themes',
      'TypeScript support',
      ' 50+ components',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'open-source',
    year: 2023,
    isFeatured: false,
  },
];

// Skills
export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 10, yearsExperience: 5 },
  { name: 'TypeScript', category: 'frontend', proficiency: 9, yearsExperience: 3 },
  { name: 'Next.js', category: 'frontend', proficiency: 9, yearsExperience: 4 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 10, yearsExperience: 3 },
  {
    name: 'Framer Motion',
    category: 'frontend',
    proficiency: 8,
    yearsExperience: 2,
  },
  { name: 'GSAP', category: 'frontend', proficiency: 8, yearsExperience: 2 },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 9, yearsExperience: 5 },
  { name: 'Express.js', category: 'backend', proficiency: 9, yearsExperience: 4 },
  { name: 'GraphQL', category: 'backend', proficiency: 8, yearsExperience: 3 },
  { name: 'REST APIs', category: 'backend', proficiency: 10, yearsExperience: 5 },

  // Database
  { name: 'MongoDB', category: 'database', proficiency: 8, yearsExperience: 4 },
  { name: 'PostgreSQL', category: 'database', proficiency: 8, yearsExperience: 3 },
  { name: 'Firebase', category: 'database', proficiency: 7, yearsExperience: 3 },
  { name: 'Redis', category: 'database', proficiency: 7, yearsExperience: 2 },

  // DevOps
  { name: 'Docker', category: 'devops', proficiency: 8, yearsExperience: 3 },
  { name: 'AWS', category: 'devops', proficiency: 7, yearsExperience: 3 },
  { name: 'GitHub Actions', category: 'devops', proficiency: 8, yearsExperience: 2 },
  { name: 'Vercel', category: 'devops', proficiency: 9, yearsExperience: 3 },

  // Tools
  { name: 'Git', category: 'tools', proficiency: 10, yearsExperience: 5 },
  { name: 'VS Code', category: 'tools', proficiency: 10, yearsExperience: 5 },
  { name: 'Figma', category: 'tools', proficiency: 7, yearsExperience: 2 },
  { name: 'Webpack', category: 'tools', proficiency: 7, yearsExperience: 3 },
];

// Education
export const education: Education[] = [
  {
    id: '1',
    institution: 'Tech University',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startDate: '2014-09',
    endDate: '2018-05',
    gpa: '3.8/4.0',
    description:
      'Focused on web development, data structures, and software engineering principles.',
  },
  {
    id: '2',
    institution: 'Online Learning Platform',
    degree: 'Advanced React Course',
    fieldOfStudy: 'Web Development',
    startDate: '2020-01',
    endDate: '2020-04',
    description: 'Completed comprehensive React course including hooks, context, and performance optimization.',
  },
];

// Certificates
export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2023-06',
    credentialId: 'AWS-2023-001',
    credentialUrl: 'https://example.com/verify',
    category: 'Cloud',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    issueDate: '2023-03',
    credentialId: 'GCP-2023-001',
    credentialUrl: 'https://example.com/verify',
    category: 'Cloud',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    issueDate: '2022-12',
    credentialId: 'FCC-2022-001',
    credentialUrl: 'https://example.com/verify',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    issueDate: '2022-06',
    credentialId: 'FCC-2022-002',
    credentialUrl: 'https://example.com/verify',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Web Application Development',
    description: 'Custom full-stack web applications tailored to your business needs',
    features: [
      'React/Next.js frontend development',
      'Node.js backend architecture',
      'Database design and optimization',
      'API development and integration',
      'Responsive design',
      'Performance optimization',
    ],
    icon: 'Code',
    price: 'Custom',
    duration: '4-12 weeks',
  },
  {
    id: '2',
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration',
    features: [
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking system',
      'Admin dashboard',
    ],
    icon: 'ShoppingCart',
    price: 'Custom',
    duration: '6-16 weeks',
  },
  {
    id: '3',
    title: 'UI/UX Implementation',
    description: 'Converting designs into interactive, performant interfaces',
    features: [
      'Design to code conversion',
      'Responsive implementation',
      'Animation and interactions',
      'Accessibility compliance',
      'Cross-browser testing',
      'Performance optimization',
    ],
    icon: 'Palette',
    price: 'Custom',
    duration: '2-8 weeks',
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with React Native',
    features: [
      'iOS and Android support',
      'Native performance',
      'Offline functionality',
      'Push notifications',
      'App store deployment',
      'User analytics',
    ],
    icon: 'Smartphone',
    price: 'Custom',
    duration: '8-20 weeks',
  },
  {
    id: '5',
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs with robust architecture',
    features: [
      'API design and documentation',
      'Authentication & authorization',
      'Rate limiting and security',
      'Database optimization',
      'Third-party integrations',
      'Testing and monitoring',
    ],
    icon: 'Zap',
    price: 'Custom',
    duration: '2-8 weeks',
  },
  {
    id: '6',
    title: 'Consulting & Code Review',
    description: 'Technical guidance and code quality improvement',
    features: [
      'Architecture consulting',
      'Code review and refactoring',
      'Performance audits',
      'Security assessments',
      'Best practices guidance',
      'Team mentoring',
    ],
    icon: 'Lightbulb',
    price: '$85-150/hr',
    duration: 'Hourly',
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'StartupXYZ',
    text: 'Alex delivered an exceptional web application that exceeded our expectations. Their attention to detail and performance optimization skills are outstanding.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'CEO',
    company: 'TechVenture Labs',
    text: 'Working with Alex has been transformative for our team. Their full-stack expertise and mentoring have elevated our entire development process.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Design Lead',
    company: 'Digital Creative Agency',
    text: 'Alex perfectly translates designs into functional, beautiful applications. Their communication and problem-solving skills make collaboration effortless.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
  },
];
