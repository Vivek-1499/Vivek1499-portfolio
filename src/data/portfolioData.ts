export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    flow: string[];
  };
  decisions: {
    question: string;
    choice: string;
    reasoning: string;
  }[];
  challenges: {
    title: string;
    cause: string;
    solution: string;
    learning: string;
  }[];
  bugs: {
    title: string;
    investigation: string;
    cause: string;
    solution: string;
    learning: string;
  }[];
  performance: string[];
  lessonsLearned: string;
  futureImprovements: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Production' | 'Full Stack' | 'Frontend' | 'Backend' | 'AI' | 'Experimental' | 'Open Source';
  techStack: string[];
  duration: string;
  role: string;
  status: string;
  impactMetric: string;
  highlights: string[];
  detail: ProjectDetail;
  imageUrl?: string;
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  overview: string;
  techStack: string[];
  responsibilities: string[];
  challenge: string;
  achievement: string;
  lessons: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Exploring';
    description: string;
    whyILikeIt: string;
  }[];
}

export interface Achievement {
  title: string;
  category: 'Hackathon' | 'Education' | 'Certification' | 'Award' | 'Milestone' | 'Participation';
  organization: string;
  date: string;
  description: string;
  details?: string[];
}

export const personalInfo = {
  name: "Vivek Kumar Pandit",
  title: "Full Stack Developer",
  tagline: "I'm Vivek, a Full Stack Developer who likes building systems that actually work. From a peer-to-peer video platform handling active network swaps to shipping accessible UI components for public-sector platforms, I focus on solving real engineering problems and keeping the architecture clean.",
  status: "Open to Work",
  preferredRoles: ["Full Stack Developer", "Software Engineer", "Frontend Engineer"],
  location: "Mumbai, India",
  phone: "+91 83694 19969",
  email: "vivek.pandit1499@gmail.com",
  github: "https://github.com/Vivek-1499",
  linkedin: "https://www.linkedin.com/in/vivek-pandit-368b012a7/",
  resumeUrl: "/Resume.pdf",
  introduction: "I'm an IT graduate who values working code over corporate buzzwords. I have hands-on experience working in agile teams across the full development lifecycle—whether it's debugging WebRTC signaling states, maintaining design token consistency across frontend components, or setting up background jobs for automated report generation. I focus on solving actual engineering problems with reliable architecture.",
  musicNote: "Code by day, playlists by night — I build software with the same care I curate a setlist: pacing, flow, and knowing when to drop the beat.",
  favoriteGenres: ["Indie Rock", "Lo-Fi", "Classic Rock", "Alternate Pop"]
};

export const journeyTimeline = [
  {
    year: "2022",
    title: "Engineering Foundations",
    description: "Started B.Tech in Information Technology at KJ Somaiya College of Engineering. Built core CS fundamentals through DSA, OS, DBMS, and networking coursework."
  },
  {
    year: "2023",
    title: "Smart India Hackathon",
    description: "Participated in Smart India Hackathon 2023 — delivered a working AI traffic management prototype within a 36-hour timeline."
  },
  {
    year: "2024",
    title: "MeshCraft — Design to Code",
    description: "Frontend Developer Intern at MeshCraft. Produced WCAG 2.1-compliant Figma prototypes and partnered with engineers to compress design-to-code iteration."
  },
  {
    year: "2025",
    title: "CommonWealth & Personal Projects",
    description: "Software Engineer Intern at CommonWealth on GPMS. Built SoMo and Saveior — full-stack and AI-powered apps with real-time and production-quality infra patterns."
  },
  {
    year: "2026",
    title: "Mehery & Graduation",
    description: "Full-Stack Developer Intern at Mehery Soccom — architected a production P2P video-calling platform. Graduating B.Tech IT (GPA 8.52/10)."
  }
];

export const internships: Internship[] = [
  {
    id: "mehery-soccom",
    company: "Mehery Soccom Pvt. Ltd.",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2026 – Jun 2026",
    overview: "Designed and built a web-based peer-to-peer video calling platform using Vue.js and Node.js. Integrated WebRTC with fallback STUN/TURN configurations to handle firewalls and network switches.",
    techStack: ["Vue.js", "Node.js", "WebRTC", "Socket.io", "STUN/TURN"],
    responsibilities: [
      "Architected a production P2P video-calling platform supporting 10+ concurrent peers with sub-second connection setup.",
      "Designed and implemented the WebRTC signaling layer and ICE negotiation service from scratch, enabling automatic peer reconnection on network changes.",
      "Optimised Vue Composition API reactive state for live call sessions, reducing unnecessary re-renders by ~35% and improving frame-rate consistency under load."
    ],
    challenge: "Maintaining video frame-rate consistency and reliable connections when peers switch networks mid-call.",
    achievement: "Reduced unnecessary re-renders by ~35% and achieved sub-second connection setup across 10+ concurrent peers.",
    lessons: "Production WebRTC is as much about signaling stability and ICE negotiation as it is about media streaming."
  },
  {
    id: "commonwealth",
    company: "CommonWealth",
    role: "Software Engineer Intern",
    duration: "Jan 2025 – May 2025",
    overview: "Worked on the Government Performance Management System (GPMS), a public-sector application. Developed reusable UI components and worked in a team of 6 engineers using Git and Agile methodologies.",
    techStack: ["React", "Git", "Agile/Scrum", "Design Tokens"],
    responsibilities: [
      "Built and shipped 15+ reusable React components with shared design tokens, reducing per-feature UI development time by ~30% and eliminating style inconsistencies.",
      "Led Git branching convention adoption (feature/fix/release strategy) for the team, cutting PR review turnaround from 48 hrs to under 12 hrs."
    ],
    challenge: "Scaling UI consistency across multiple modules built by different engineers in parallel sprints.",
    achievement: "Shipped 15+ reusable components and cut PR review turnaround from 48 hrs to under 12 hrs.",
    lessons: "Shared design tokens and branching conventions pay off quickly in multi-engineer Agile teams."
  },
  {
    id: "meshcraft",
    company: "MeshCraft",
    role: "Frontend Developer Intern",
    duration: "Aug 2024 – Sep 2024",
    overview: "Created interactive Figma prototypes focusing on accessibility guidelines (WCAG 2.1) and worked closely with developers to make sure the handoff converted cleanly to CSS/React.",
    techStack: ["Figma", "React", "WCAG 2.1", "HTML/CSS"],
    responsibilities: [
      "Produced 10+ WCAG 2.1-compliant Figma prototypes covering full user journeys; accessibility-first approach reduced QA remediation cycles by ~25% at engineering handoff.",
      "Partnered with frontend engineers to translate specs into production components, compressing design-to-code iteration from 3 rounds to 1 for 80% of delivered features."
    ],
    challenge: "Balancing visual polish with accessibility requirements before engineering handoff.",
    achievement: "Reduced QA remediation cycles by ~25% and compressed design-to-code iteration for 80% of features.",
    lessons: "Accessibility baked into design early saves significant rework downstream."
  }
];

export const projects: Project[] = [
  {
    id: "somo",
    title: "SoMo — Social Media Platform",
    imageUrl: "", // Add path to your project image here (e.g. "/projects/somo.jpg")
    tagline: "A MERN social platform built to handle real-time likes/comments and a custom database schema for 'Silent Follows'.",
    description: "A full-featured social platform built from scratch to understand MERN scaling, authentication flows, and real-time database challenges. It supports posts, nested comments, profile management, and a custom data model for silent follows.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary", "Vercel"],
    duration: "2025 – Ongoing",
    role: "Creator & Full-Stack Developer",
    status: "Live",
    impactMetric: "Sub-100ms real-time update latency",
    highlights: [
      "Designed and built a MERN social platform end-to-end with 10+ features including posts, comments, follows, bookmarks, and profile editing with role-based auth.",
      "Implemented real-time event delivery for likes and comments via Socket.io, achieving sub-100ms latency at the application layer.",
      "Engineered a 'Silent Follow' feature requiring novel backend data-model changes so users can follow without receiving posts."
    ],
    detail: {
      problem: "Handling persistent WebSocket connections for real-time interactions, securing routes reliably without blocking API performance, and designing database relations that support complex social behavior (like follows/unfollows) without slowing down database reads.",
      solution: "Built a backend using Node.js/Express and MongoDB, implementing Socket.io for state synchronization and JWT-based auth. Handled media assets using Cloudinary and deployed the stack on Vercel.",
      architecture: {
        title: "Real-Time Social Platform Architecture",
        description: "How client events flow through REST APIs and Socket.io for instant engagement updates.",
        flow: [
          "User authenticates via JWT — role-based authorization gates protected routes",
          "Client creates post/comment via REST API — persisted in MongoDB",
          "Socket.io broadcasts like/comment events to connected clients",
          "Sub-100ms application-layer latency for real-time engagement",
          "Silent Follow feature uses custom backend schema — follow without receiving posts",
          "Media uploads routed through Cloudinary with optimized delivery"
        ]
      },
      decisions: [
        {
          question: "Why Socket.io for real-time engagement?",
          choice: "Socket.io",
          reasoning: "Socket.io provides reliable event delivery with automatic reconnection — essential for likes and comments that must feel instant."
        },
        {
          question: "How to handle the Silent Follow product requirement?",
          choice: "Custom backend data-model",
          reasoning: "Ambiguous product specs required schema decisions — users follow without receiving posts, demonstrating ability to convert requirements into data models."
        }
      ],
      challenges: [
        {
          title: "Silent Follow Schema Design",
          cause: "Product requirement was ambiguous — users should follow someone without seeing their posts in feed.",
          solution: "Engineered a novel backend data-model separating follow relationships from feed delivery logic.",
          learning: "Unclear product requirements are opportunities to propose and validate schema decisions early."
        }
      ],
      bugs: [],
      performance: [
        "Achieved sub-100ms latency for real-time likes and comments at the application layer.",
        "JWT + role-based auth keeps authorization checks efficient on every request."
      ],
      lessonsLearned: "Real-time social features need both solid REST foundations and event-driven updates — Socket.io bridges that gap cleanly.",
      futureImprovements: [
        "Add push notifications for engagement events.",
        "Expand Silent Follow with user-facing controls and analytics."
      ]
    }
  },
  {
    id: "saveior",
    title: "Saveior — AI Finance Tracker",
    imageUrl: "", // Add path to your project image here (e.g. "/projects/saveior.jpg")
    tagline: "An AI-driven expense parser that uses LLMs to automate receipt data extraction and background queues for scheduled monthly reports.",
    description: "A Next.js 14 finance app built to eliminate manual expense logging. It uses Gemini Vision to parse uploaded receipt images, features Arcjet for rate-limiting, and utilizes Inngest background jobs for sending monthly automated reports.",
    category: "AI",
    techStack: ["Next.js 14", "Prisma", "PostgreSQL", "Google Gemini API", "Arcjet", "Inngest", "Clerk Auth", "Vercel"],
    duration: "2025",
    role: "Creator & Full-Stack Developer",
    status: "Completed",
    impactMetric: "100% manual transaction data-entry eliminated",
    highlights: [
      "Built a smart finance app that auto-extracts receipt data via Google Gemini Vision API, eliminating 100% of manual transaction data-entry.",
      "Integrated Arcjet (bot detection & rate-limiting) and Inngest (event-driven scheduling) for automated monthly email reports via Resend.",
      "Designed an end-to-end data pipeline to automate financial reporting, reducing manual data-entry to zero and enabling monthly analytics delivery."
    ],
    detail: {
      problem: "Parsing unstructured receipt images with different fonts and formats into clean database records, ensuring the API is protected against automated bots, and executing cron-like monthly reporting without blocking the main web thread.",
      solution: "Used Next.js Server Actions with Google's Gemini Vision API for structured JSON extraction. Added Arcjet middleware to handle rate limiting and security, and set up event-driven queues via Inngest to dispatch reports asynchronously.",
      architecture: {
        title: "Automated Finance Data Pipeline",
        description: "End-to-end flow from receipt upload through AI extraction to scheduled email reports.",
        flow: [
          "User uploads receipt image via Next.js frontend",
          "Google Gemini Vision API extracts transaction data automatically",
          "Parsed data stored in PostgreSQL via Prisma ORM",
          "Arcjet validates requests — bot detection and rate-limiting",
          "Inngest schedules monthly report generation events",
          "Automated email reports delivered via Resend integration"
        ]
      },
      decisions: [
        {
          question: "Why Google Gemini Vision for receipt parsing?",
          choice: "Gemini Vision API",
          reasoning: "Vision API eliminates manual data entry entirely — extracting amounts, merchants, and categories from receipt images automatically."
        },
        {
          question: "Why Arcjet and Inngest for production patterns?",
          choice: "Arcjet + Inngest",
          reasoning: "Arcjet handles bot detection and rate-limiting; Inngest manages event-driven scheduling — demonstrating production-quality security and infra patterns."
        }
      ],
      challenges: [
        {
          title: "End-to-End Automated Reporting",
          cause: "Users needed monthly analytics without manual compilation or data entry.",
          solution: "Designed a data pipeline with Inngest event-driven scheduling and Resend for automated monthly email reports.",
          learning: "Event-driven scheduling separates report generation from user actions — reliable and scalable."
        }
      ],
      bugs: [],
      performance: [
        "Eliminated 100% of manual transaction data-entry via Gemini Vision extraction.",
        "Automated monthly analytics delivery via scheduled email reports."
      ],
      lessonsLearned: "Production apps need security and scheduling infrastructure from day one — Arcjet and Inngest integrate cleanly into Next.js.",
      futureImprovements: [
        "Add multi-currency support and budget alerts.",
        "Expand receipt parsing to support additional document formats."
      ]
    }
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        description: "Modern JS for full-stack development — async patterns, modules, and browser APIs.",
        whyILikeIt: "One language across frontend and backend speeds up iteration."
      },
      {
        name: "Java",
        level: "Intermediate",
        description: "OOP, problem-solving, and backend fundamentals.",
        whyILikeIt: "Strong typing habits that transfer to any language."
      },
      {
        name: "Python",
        level: "Intermediate",
        description: "Scripting, data workflows, and automation.",
        whyILikeIt: "Quick to prototype and integrate with data tools."
      },
      {
        name: "SQL",
        level: "Advanced",
        description: "Relational queries, schema design, and indexing.",
        whyILikeIt: "The foundation for any data-driven application."
      }
    ]
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        level: "Advanced",
        description: "Component architecture, hooks, state management, and reusable UI systems.",
        whyILikeIt: "Shipped 15+ production components with shared design tokens."
      },
      {
        name: "Vue.js",
        level: "Advanced",
        description: "Composition API, reactive state optimization, and production WebRTC UIs.",
        whyILikeIt: "Built a production video-calling platform with Vue + WebRTC."
      },
      {
        name: "Next.js 14",
        level: "Advanced",
        description: "App router, server components, and full-stack Next.js patterns.",
        whyILikeIt: "Powers Saveior with production auth, security, and scheduling."
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Utility-first styling, responsive layouts, and design tokens.",
        whyILikeIt: "Fast iteration without stylesheet bloat."
      }
    ]
  },
  {
    category: "Backend & Real-Time",
    skills: [
      {
        name: "Node.js / Express",
        level: "Advanced",
        description: "REST APIs, middleware, JWT auth, and real-time signaling servers.",
        whyILikeIt: "Full-stack JavaScript from API to UI."
      },
      {
        name: "WebRTC / WebSockets",
        level: "Advanced",
        description: "Signaling, ICE negotiation, STUN/TURN fallback, and Socket.io event delivery.",
        whyILikeIt: "Architected production P2P video for 10+ concurrent peers."
      },
      {
        name: "MongoDB / PostgreSQL",
        level: "Advanced",
        description: "NoSQL and relational databases with schema design and Prisma ORM.",
        whyILikeIt: "Right database for the right data shape."
      },
      {
        name: "Prisma ORM",
        level: "Intermediate",
        description: "Type-safe database access, migrations, and schema modeling.",
        whyILikeIt: "Prevents invalid queries and speeds up backend changes."
      }
    ]
  },
  {
    category: "Tools & Concepts",
    skills: [
      {
        name: "Git / GitHub / Docker",
        level: "Advanced",
        description: "Version control workflows, branching conventions, and containerization.",
        whyILikeIt: "Led Git branching adoption that cut PR review time by 75%."
      },
      {
        name: "Clerk / Arcjet / Inngest",
        level: "Intermediate",
        description: "Production auth, bot detection, rate-limiting, and event-driven scheduling.",
        whyILikeIt: "Production-quality patterns without reinventing infrastructure."
      },
      {
        name: "Agile / Scrum",
        level: "Advanced",
        description: "Sprint cycles, cross-functional collaboration, and iterative delivery.",
        whyILikeIt: "Shipped GPMS features across multiple sprint cycles with a 6-engineer team."
      },
      {
        name: "System Design / REST APIs",
        level: "Intermediate",
        description: "API design, MVC architecture, networking fundamentals, and real-time systems.",
        whyILikeIt: "Connects coursework theory to production architecture decisions."
      }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon 2023",
    category: "Participation",
    organization: "Smart India Hackathon",
    date: "2023",
    description: "Participant — delivered a working AI traffic management prototype within a 36-hour timeline.",
    details: [
      "Built and demoed a functional prototype under extreme time constraints.",
      "Applied AI/ML concepts from coursework to a real-world traffic problem."
    ]
  },
  {
    title: "B.Tech in Information Technology",
    category: "Education",
    organization: "KJ Somaiya College of Engineering, Mumbai",
    date: "2022 – 2026",
    description: "Relevant coursework in DSA, Operating Systems, DBMS, Computer Networks, and AI/ML.",
    details: [
      "GPA: 8.52 / 10",
      "Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, AI/ML"
    ]
  },
  {
    title: "Google UX Design Certificate",
    category: "Certification",
    organization: "Google (Coursera)",
    date: "2024",
    description: "Validated UX research, wireframing, and prototyping skills applied at MeshCraft."
  },
  {
    title: "Java Programming: Solving Problems with Software",
    category: "Certification",
    organization: "Duke University (Coursera)",
    date: "2023",
    description: "Foundational Java programming and algorithmic problem-solving."
  },
  {
    title: "Visualization for Data Analysis with Power BI",
    category: "Certification",
    organization: "Microsoft (Coursera)",
    date: "2024",
    description: "Data visualization and analytics reporting skills."
  },
  {
    title: "Version Control",
    category: "Certification",
    organization: "Meta (Coursera)",
    date: "2024",
    description: "Git workflows and collaborative development practices."
  },
  {
    title: "Blockchain Basics",
    category: "Certification",
    organization: "University at Buffalo, SUNY (Coursera)",
    date: "2024",
    description: "Distributed ledger concepts and blockchain fundamentals."
  },
  {
    title: "MS CIT",
    category: "Certification",
    organization: "Keerti Classes",
    date: "2023",
    description: "Microsoft Certified IT professional training."
  }
];

export const projectCategories = ['All', 'Full Stack', 'AI'] as const;
