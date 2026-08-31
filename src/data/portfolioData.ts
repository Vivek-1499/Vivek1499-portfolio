export interface ProjectGalleryItem {
  src: string;
  alt: string;
}

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
  imageAlt?: string;
  gallery?: ProjectGalleryItem[];
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
  tagline: "I'm Vivek, a Full Stack Developer who likes building systems that actually work. From building realtime WebRTC p2p Video calling to shipping accessible UI components for public-sector platforms, I focus on solving real engineering problems and keeping the architecture clean.",
  status: "Open to Work",
  preferredRoles: ["Full Stack Developer", "Software Engineer", "Backend Engineer", "Frontend Engineer"],
  location: "Mumbai, India",
  phone: "+91 83694 19969",
  email: "vivek.pandit1499@gmail.com",
  github: "https://github.com/Vivek-1499",
  linkedin: "https://www.linkedin.com/in/vivek-pandit-368b012a7/",
  resumeUrl: "/Vivek_Pandit_Resume.pdf",
  aiAssistantUrl: "https://vivek1499-ai.streamlit.app/",
  introduction: "I'm a B.Tech Information Technology student (KJ Somaiya, Class of 2026) who values working code over corporate buzzwords. Across two internships and production-grade projects like SyncStreamHub, SoMo, and Saveior, I've built Spring Boot & Node.js backends, real-time services (WebSockets / WebRTC), and multi-database architectures (PostgreSQL, Redis, MongoDB) — with clean design tokens, background jobs, and cloud media pipelines.",
  musicNote: "Code by day, playlists by night — I build software with the same care I curate a setlist: pacing, flow, and knowing when to drop the beat.",
  favoriteGenres: ["Alternate Pop", "Pop", "Lofi", "J-pop", "DHH"]
};

export const journeyTimeline = [
  {
    year: "2022",
    title: "Engineering Foundations",
    description: "Started B.Tech in Information Technology at KJ Somaiya College of Engineering. Built core CS fundamentals through DSA, OS, DBMS, and networking coursework.",
    expanded: "Started with programming architectures, HTTP request lifecycles, and a lot of late nights on layout bugs and JavaScript event listeners. Coursework in DSA, OS, DBMS, and networks is still the base I reach for when something in production doesn't make sense."
  },
  {
    year: "2023",
    title: "Smart India Hackathon",
    description: "Participated in Smart India Hackathon 2023 — delivered a working AI traffic management prototype within a 36-hour timeline.",
    expanded: "First time shipping a working prototype under a 36-hour clock. Applied AI/ML ideas from class to a traffic problem and learned how much you can cut when the demo has to run, not just look good in slides."
  },
  {
    year: "2024",
    title: "MeshCraft — Design to Code",
    description: "Frontend Developer Intern at MeshCraft. Produced WCAG 2.1-compliant Figma prototypes and partnered with engineers to compress design-to-code iteration.",
    expanded: "Produced accessibility-first Figma prototypes covering full user journeys, then sat with frontend engineers so the handoff actually converted to CSS and React. Baking WCAG 2.1 in before engineering cut QA remediations later."
  },
  {
    year: "2025",
    title: "CommonWealth & Personal Projects",
    description: "Software Engineer Intern at CommonWealth on GPMS. Built SoMo and Saveior — full-stack and AI-powered apps with real-time and production-quality infra patterns.",
    expanded: "On GPMS I shipped reusable React components with shared design tokens in a 6-engineer Agile team. Off hours I built SoMo (MERN + Socket.io) and Saveior (Next.js + Gemini Vision + Inngest) to practice real-time and production infra patterns myself."
  },
  {
    year: "2026",
    title: "Mehery, SyncStreamHub & Graduation",
    description: "Full-Stack Developer Intern at Mehery Soccom — architected a production P2P video platform. Built SyncStreamHub with Spring Boot 3.3, WebSockets, and a multi-DB architecture. Graduating B.Tech IT (GPA 8.75/10).",
    expanded: "At Mehery I designed the WebRTC signaling layer and ICE negotiation from scratch in Vue.js + Node.js. In parallel, I built SyncStreamHub to explore enterprise Java/Spring Boot event-driven architectures with STOMP WebSockets and polyglot persistence (Postgres + Mongo + Redis + Cloudflare R2)."
  }
];

export const internships: Internship[] = [
  {
    id: "mehery-soccom",
    company: "Mehery Soccom Pvt. Ltd.",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2026 – Jun 2026",
    overview: "Designed and built a web-based peer-to-peer video calling platform using Vue.js and Node.js. With additional features like Screensharing and screen recording",
    techStack: ["Vue.js", "Node.js", "WebRTC", "Socket.io", "STUN/TURN"],
    responsibilities: [
      "Architected a production P2P video-calling platform supporting 10+ concurrent peers with sub-second connection setup.",
      "Designed and implemented the WebRTC signaling layer and ICE negotiation service from scratch, enabling seamless call setup and teardown with automatic peer reconnection on network changes.",
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
    id: "syncstreamhub",
    title: "SyncStreamHub — Collaborative Watch Party Platform",
    imageUrl: "/images/projects/syncstreamhub/image.png",
    imageAlt: "SyncStreamHub architecture diagram: React client, Spring Boot WebSocket broker, Redis state cache, PostgreSQL, MongoDB, and Cloudflare R2",
    gallery: [
      { src: "/images/projects/syncstreamhub/screenshot-01.png", alt: "SyncStreamHub watch party dashboard and real-time interface mock" },
      { src: "/images/projects/syncstreamhub/screenshot-02.png", alt: "SyncStreamHub WebSocket STOMP and cloud storage dataflow pipeline" },
      { src: "/images/projects/syncstreamhub/screenshot-03.png", alt: "SyncStreamHub multi-database schema: PostgreSQL, Redis, MongoDB" }
    ],
    tagline: "A real-time collaborative watch party platform synchronizing video playback, live group chat, and party rooms with sub-second WebSocket accuracy.",
    description: "A high-performance watch party platform built with Spring Boot 3.3 (Java 17), React (Vite + TypeScript), and a multi-database architecture (PostgreSQL, MongoDB, Redis). Features sub-second synchronized video playback (play/pause/seek), Cloudflare R2 video storage, real-time group chat, friends & invite system, and customizable room privacy controls.",
    category: "Full Stack",
    techStack: ["Java 17", "Spring Boot 3.3", "React", "TypeScript", "WebSockets (STOMP)", "PostgreSQL", "MongoDB", "Redis", "Cloudflare R2", "Docker", "AWS EC2"],
    duration: "2026",
    role: "Creator & Full-Stack Architect",
    status: "Live",
    impactMetric: "Sub-second synchronized playback across distributed rooms",
    highlights: [
      "Architected a decoupled, event-driven watch party platform using Spring Boot 3.3 (Java 17) and React (Vite + TypeScript) with sub-second STOMP/WebSocket playback synchronization.",
      "Designed a polyglot persistence architecture combining PostgreSQL (relational auth/rooms), MongoDB (high-throughput chat message streams), and Redis (live in-memory playback & socket sessions).",
      "Integrated Cloudflare R2 zero-egress object storage with local disk fallback for scalable user video uploads and streaming.",
      "Engineered room privacy controls, friend requests, live party invites, and ReactPlayer stabilization guards to eliminate re-render loops."
    ],
    detail: {
      problem: "Synchronizing video playback (play, pause, seek) across remote viewers without jarring drift or infinite re-render loops, while handling high-throughput chat streams and volatile room state without overwhelming relational databases.",
      solution: "Built an event-driven backend with Spring Boot STOMP over SockJS, caching active room state in Redis for sub-5ms lookups. Backed user accounts and permissions with PostgreSQL, offloaded chat streams to MongoDB asynchronously, and streamed video from Cloudflare R2.",
      architecture: {
        title: "Multi-Tier Event-Driven Watch Party Architecture",
        description: "How client playback events, chat streams, and media uploads flow through Spring Boot, WebSockets, multi-database persistence, and Cloudflare R2.",
        flow: [
          "React client connects via STOMP over SockJS to Spring Boot message broker on AWS EC2",
          "Host playback actions (play/pause/seek) broadcast to room topic with sub-second sync latency",
          "Redis caches active room memberships, socket sessions, and live playback timestamps",
          "PostgreSQL manages user authentication, friendship graphs, and room ownership permissions",
          "MongoDB persists chat message streams and watch party session history asynchronously",
          "Cloudflare R2 serves uploaded video streams with high throughput and low egress cost"
        ]
      },
      decisions: [
        {
          question: "Why a multi-database architecture (Postgres + MongoDB + Redis)?",
          choice: "Polyglot Persistence",
          reasoning: "PostgreSQL handles relational consistency (auth/friends), Redis provides ultra-fast in-memory state for real-time sync, and MongoDB handles high-volume chat logs asynchronously without blocking real-time frames."
        },
        {
          question: "Why STOMP over SockJS for video synchronization?",
          choice: "Spring WebSocket + STOMP",
          reasoning: "STOMP message routing simplifies pub-sub topic management per watch party room with automatic fallback transport and reconnection handling."
        },
        {
          question: "Why Cloudflare R2 for video storage?",
          choice: "Cloudflare R2 + Local Fallback",
          reasoning: "Cloudflare R2 provides S3-compatible cloud object storage with zero egress fees, enabling cost-effective video streaming with seamless local disk fallback."
        }
      ],
      challenges: [
        {
          title: "ReactPlayer Bidirectional Re-render Loops",
          cause: "Incoming WebSocket sync events triggered player state updates, which in turn emitted outgoing sync events, causing infinite re-render loops and video stutter.",
          solution: "Implemented onReady lifecycle guards, useCallback memoization, and precise threshold-based seek diff checks to break the event loop.",
          learning: "Bidirectional real-time state synchronization requires explicit event suppression mechanisms to distinguish user-initiated actions from incoming broadcast updates."
        },
        {
          title: "Session Teardown & Inactive Room Cleanup",
          cause: "Unclean socket disconnects caused ghost rooms and dangling sessions in memory.",
          solution: "Implemented Redis TTL keys and Spring WebSocket disconnect listeners to automatically purge empty rooms and notify remaining participants.",
          learning: "In-memory session state must always have proactive heartbeat monitoring and TTL expirations."
        }
      ],
      bugs: [],
      performance: [
        "Sub-second sync accuracy across all connected watch party peers without polling overhead.",
        "Redis in-memory caching keeps socket session lookup and room state updates under 5ms.",
        "Asynchronous MongoDB write queues prevent chat traffic from degrading video synchronization."
      ],
      lessonsLearned: "Complex real-time systems require clear separation of state concerns: volatile playback belongs in memory (Redis), transactional relationships in relational SQL, and append-only event logs in document stores.",
      futureImprovements: [
        "Add adaptive bitrate streaming (HLS/DASH) transcoding pipeline.",
        "Implement WebRTC mesh audio/video voice channels for watch party members.",
        "Add synchronized subtitles and collaborative playlist queues."
      ],
      liveUrl: "https://syncstreamhub.pages.dev",
      githubUrl: "https://github.com/Vivek-1499/SyncStreamHub",
      screenshots: [
        "/images/projects/syncstreamhub/screenshot-01.png",
        "/images/projects/syncstreamhub/screenshot-02.png",
        "/images/projects/syncstreamhub/screenshot-03.png"
      ]
    }
  },
  {
    id: "ai-portfolio-agent",
    title: "AI Portfolio Agent",
    imageUrl: "/images/projects/ai-portfolio-agent/hero.png",
    imageAlt: "Cyclical LangGraph agent: classify query, FAISS search, Self-RAG grade, then Groq/OpenAI/Gemini fallback",
    gallery: [
      { src: "/images/projects/ai-portfolio-agent/screenshot-01.png", alt: "Streamlit UI with conversational chat and live graph execution trace" },
      { src: "/images/projects/ai-portfolio-agent/screenshot-02.png", alt: "LangGraph cyclical state machine and Self-RAG dataflow architecture" },
      { src: "/images/projects/ai-portfolio-agent/screenshot-03.png", alt: "FAISS vector document chunk schema and TypedDict AgentState data model" }
    ],
    tagline: "A LangGraph agent that grades its own retrieval, falls back to the web, and keeps answering when one LLM provider rate-limits.",
    description: "A cyclical LangGraph state machine with dynamic query classification, FAISS vector search, and Self-RAG document relevance grading. Live web fallback via DuckDuckGo and a Groq → OpenAI → Google Gemini cascade keep the Streamlit UI answering when a provider is down.",
    category: "AI",
    techStack: ["LangGraph", "LangChain", "Groq", "FAISS", "Streamlit"],
    duration: "2026",
    role: "Creator",
    status: "Completed",
    impactMetric: "3-tier LLM fallback for 99.9% uptime under rate limits",
    highlights: [
      "Engineered a cyclical state machine in LangGraph with dynamic query classification, FAISS vector search, and Self-RAG relevance grading to reduce hallucinations.",
      "Integrated live web fallback via DuckDuckGo and a 3-tier LLM cascade (Groq → OpenAI → Google Gemini) to keep answering during rate limits.",
      "Deployed a Streamlit UI with real-time state execution tracing so intermediate reasoning steps are visible."
    ],
    detail: {
      problem: "Single-pass RAG chatbots hallucinate when retrieved docs are irrelevant, and they go dark when one LLM provider hits a rate limit.",
      solution: "Built a LangGraph cycle that classifies the query, searches FAISS, grades document relevance (Self-RAG), and can fall back to DuckDuckGo. Providers cascade Groq → OpenAI → Gemini. Streamlit traces each state.",
      architecture: {
        title: "Cyclical Agent Runtime",
        description: "Query classification, retrieval, grading, and provider fallback as explicit graph states.",
        flow: [
          "Incoming question is classified dynamically",
          "FAISS vector search retrieves candidate documents",
          "Self-RAG grades document relevance before answering",
          "If retrieval is weak, DuckDuckGo live web fallback runs",
          "LLM calls cascade Groq → OpenAI → Google Gemini on failure/rate limits",
          "Streamlit UI traces intermediate graph states in real time"
        ]
      },
      decisions: [
        {
          question: "Why LangGraph instead of a linear LangChain chain?",
          choice: "Cyclical LangGraph state machine",
          reasoning: "Classification, retrieval, grading, and web fallback are loops — a graph makes those retries explicit instead of hiding them in a prompt."
        },
        {
          question: "How to stay up when Groq rate-limits?",
          choice: "Groq → OpenAI → Gemini cascade",
          reasoning: "A 3-tier provider fallback keeps the agent answering during rate limits rather than failing the whole session."
        }
      ],
      challenges: [
        {
          title: "Hallucinations from weak retrieval",
          cause: "Vector search can return documents that don't actually answer the question.",
          solution: "Self-RAG relevance grading before generation, plus DuckDuckGo when local docs fail.",
          learning: "Retrieval without a grade is just a confident wrong answer with citations."
        }
      ],
      bugs: [],
      performance: [
        "3-tier LLM fallback (Groq → OpenAI → Google Gemini) used to keep 99.9% uptime during rate limits."
      ],
      lessonsLearned: "Agent reliability is a systems problem: grade retrieval, fall back to the web, and don't bet the product on one inference API.",
      futureImprovements: [
        "Expose the same graph behind an API instead of only Streamlit.",
        "Add evaluation traces for grading false positives."
      ],
      liveUrl: "https://vivek1499-ai.streamlit.app/",
      githubUrl: "https://github.com/Vivek-1499/AI-portfolio-agent",
      screenshots: [
        "/images/projects/ai-portfolio-agent/screenshot-01.png",
        "/images/projects/ai-portfolio-agent/screenshot-02.png",
        "/images/projects/ai-portfolio-agent/screenshot-03.png"
      ]
    }
  },
  {
    id: "sql-data-warehouse",
    title: "Data Warehouse & Analytics",
    imageUrl: "/images/projects/sql-data-warehouse/hero.png",
    imageAlt: "Medallion architecture diagram: Bronze CSV ingest, Silver cleansing, Gold star schema of customers, products, and sales",
    gallery: [
      { src: "/images/projects/sql-data-warehouse/screenshot-01.png", alt: "Medallion Architecture 3-tier lifecycle: Bronze Raw, Silver Cleansed, and Gold Business-Ready layers" },
      { src: "/images/projects/sql-data-warehouse/screenshot-02.png", alt: "CRM and ERP source ingestion lineage, ETL stored procedures, and Gold mapping" },
      { src: "/images/projects/sql-data-warehouse/screenshot-03.png", alt: "Gold layer star schema data model: gold.fact_sales, gold.dim_customers, and gold.dim_products" }
    ],
    tagline: "An end-to-end MySQL 8.0 warehouse using Medallion Architecture to turn ERP and CRM CSVs into a star-schema analytical model.",
    description: "Designed and built a data warehouse in MySQL 8.0 that consolidates ERP and CRM sales data. ETL stored procedures move raw CSVs through Bronze → Silver cleansing, then Gold-layer dimension and fact views power SQL analytics and data-quality checks.",
    category: "Backend",
    techStack: ["MySQL 8.0", "SQL", "Stored Procedures", "ETL", "Star Schema", "Medallion Architecture"],
    duration: "2026",
    role: "Creator & Data Engineer",
    status: "Completed",
    impactMetric: "Bronze → Silver → Gold warehouse in MySQL 8.0",
    highlights: [
      "Designed an end-to-end warehouse using Medallion Architecture (Bronze, Silver, Gold), consolidating ERP and CRM sales data into a unified star-schema model.",
      "Wrote ETL pipelines as MySQL stored procedures to ingest, cleanse, deduplicate, and validate raw CSV data.",
      "Built Gold-layer dimension/fact views (Customer, Product, Sales) with SQL analytics and quality checks for duplicate keys, nulls, and referential integrity."
    ],
    detail: {
      problem: "ERP and CRM sales data lived in raw CSVs with duplicates, nulls, and inconsistent keys — unusable for analytics until it was modeled, cleaned, and checked.",
      solution: "Implemented Medallion Architecture in MySQL 8.0: Bronze for raw ingest, Silver stored procedures for cleansing and validation, Gold views for Customer/Product/Sales star-schema analytics.",
      architecture: {
        title: "Medallion Warehouse Flow",
        description: "How ERP/CRM CSVs become queryable Gold-layer facts and dimensions.",
        flow: [
          "Raw ERP and CRM CSV files land in the Bronze layer",
          "Stored procedures ingest, cleanse, deduplicate, and validate into Silver",
          "Gold layer exposes Customer, Product, and Sales dimension/fact views",
          "Star-schema model supports SQL analytics across sales",
          "Quality checks catch duplicate keys, nulls, and broken referential integrity"
        ]
      },
      decisions: [
        {
          question: "Why Medallion Architecture instead of a single cleaned table?",
          choice: "Bronze / Silver / Gold",
          reasoning: "Keeping raw Bronze data lets you re-run cleansing. Silver is the contract for quality; Gold is the analytical shape analysts actually query."
        },
        {
          question: "Why stored procedures for ETL?",
          choice: "MySQL stored procedures",
          reasoning: "The warehouse lives entirely in MySQL 8.0 — procedures keep ingest, cleansing, and validation next to the data without a separate orchestration stack."
        }
      ],
      challenges: [
        {
          title: "Dirty source CSVs",
          cause: "ERP and CRM exports disagreed on keys, contained duplicates, and had nulls that would break fact/dimension joins.",
          solution: "Silver-layer procedures for deduplication and validation, plus Gold-layer checks for duplicate keys, nulls, and referential integrity.",
          learning: "A warehouse is only as trustworthy as the checks you run before analysts hit Gold."
        }
      ],
      bugs: [],
      performance: [
        "Star-schema Gold views keep analytical queries on Customer, Product, and Sales facts instead of scanning raw CSVs."
      ],
      lessonsLearned: "Layered ETL (raw → cleaned → modeled) is more honest than pretending source exports are analytics-ready.",
      futureImprovements: [
        "Add scheduled refresh of Bronze ingest.",
        "Expose Gold views to a BI tool for visual reporting."
      ],
      githubUrl: "https://github.com/Vivek-1499/sql-data-warehouse-project",
      screenshots: [
        "/images/projects/sql-data-warehouse/screenshot-01.png",
        "/images/projects/sql-data-warehouse/screenshot-02.png",
        "/images/projects/sql-data-warehouse/screenshot-03.png"
      ]
    }
  },
  {
    id: "saveior",
    title: "Saveior — AI Finance Tracker",
    imageUrl: "/images/projects/saveior/hero.png",
    imageAlt: "Saveior pipeline: receipt image in, Gemini Vision extraction, PostgreSQL store, monthly email out",
    gallery: [
      { src: "/images/projects/saveior/screenshot-01.png", alt: "Saveior finance dashboard with receipt scanner OCR and budget breakdown" },
      { src: "/images/projects/saveior/screenshot-02.png", alt: "Gemini Vision OCR, Arcjet security shield, and Inngest dataflow pipeline" },
      { src: "/images/projects/saveior/screenshot-03.png", alt: "Prisma ORM PostgreSQL relational database schema ERD" }
    ],
    tagline: "An AI-driven expense parser that uses LLMs to automate receipt data extraction and background queues for scheduled monthly reports.",
    description: "A Next.js 14 finance app built to eliminate manual expense logging. It uses Gemini Vision to parse uploaded receipt images, features Arcjet for rate-limiting, and utilizes Inngest background jobs for sending monthly automated reports.",
    category: "AI",
    techStack: ["Next.js 14", "Prisma", "PostgreSQL", "Supabase", "Google Gemini API", "Arcjet", "Inngest", "Clerk Auth", "Vercel"],
    duration: "2025",
    role: "Creator & Full-Stack Developer",
    status: "Live",
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
          "Parsed data stored in PostgreSQL via Prisma ORM (Supabase)",
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
      ],
      liveUrl: "https://saveior.vercel.app",
      githubUrl: "https://github.com/Vivek-1499/Saveior",
      screenshots: [
        "/images/projects/saveior/screenshot-01.png",
        "/images/projects/saveior/screenshot-02.png",
        "/images/projects/saveior/screenshot-03.png"
      ]
    }
  },
  {
    id: "somo",
    title: "SoMo — Social Media Platform",
    imageUrl: "/images/projects/somo/hero.png",
    imageAlt: "SoMo feed diagram: posts, real-time likes, and a silent-follow path that skips the feed",
    gallery: [
      { src: "/images/projects/somo/screenshot-01.png", alt: "SoMo MERN newsfeed interface with real-time likes, comments, and silent follow" },
      { src: "/images/projects/somo/screenshot-02.png", alt: "SoMo real-time Socket.io fan-out and REST API dataflow architecture" },
      { src: "/images/projects/somo/screenshot-03.svg", alt: "MongoDB collections schema and silent follow relationship data model" }
    ],
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
      ],
      liveUrl: "https://somo-two.vercel.app",
      githubUrl: "https://github.com/Vivek-1499/SoMo",
      screenshots: [
        "/images/projects/somo/screenshot-01.png",
        "/images/projects/somo/screenshot-02.png",
        "/images/projects/somo/screenshot-03.svg"
      ]
    }
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "Java (17+)",
        level: "Advanced",
        description: "Java 17, Spring Boot 3.3, OOP, concurrency, and multi-database architectures.",
        whyILikeIt: "it is super strict with errors so things don't break randomly, handles heavy traffic easily and gives that solid feeling where the backend just never crashes"
      },
      {
        name: "JavaScript (ES6+) / TypeScript",
        level: "Advanced",
        description: "Modern JS & TS for full-stack apps — async patterns, strong typing, and browser APIs.",
        whyILikeIt: "catches silly spelling and type mistakes before i even run the code, makes building both the screen and the backend super smooth without guessing"
      },
      {
        name: "Python",
        level: "Intermediate",
        description: "Scripting, data workflows, automation, and the LangGraph/Streamlit agent stack.",
        whyILikeIt: "super simple to write almost like english, great when i want to quickly test an idea or build ai tools without writing tons of boilerplate"
      },
      {
        name: "SQL",
        level: "Advanced",
        description: "Relational queries, schema design, indexing, and warehouse-style ETL in MySQL & PostgreSQL.",
        whyILikeIt: "lets you ask direct questions to your database and get exact answers in seconds, super satisfying when organizing millions of rows neatly"
      }
    ]
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js / Vite",
        level: "Advanced",
        description: "Component architecture, hooks, state management, and reusable UI systems.",
        whyILikeIt: "makes building interactive buttons and dynamic pages super fun, everything updates instantly on screen without refreshing the whole page"
      },
      {
        name: "Vue.js",
        level: "Advanced",
        description: "Composition API, reactive state optimization, and production WebRTC UIs.",
        whyILikeIt: "very clean and beginner friendly to set up, makes handling live state and UI updates feel really lightweight and simple"
      },
      {
        name: "Next.js 14",
        level: "Advanced",
        description: "App router, server components, and full-stack Next.js patterns.",
        whyILikeIt: "takes care of all the annoying setup for pages and speed, lets you build a full web app from front to back in one place"
      },
      {
        name: "HTML5 / CSS3 / Tailwind",
        level: "Advanced",
        description: "Semantic markup, responsive layouts, utility-first styling, and design tokens.",
        whyILikeIt: "lets you style things quickly right where you write your layout, saves so much time from jumping between different style files"
      }
    ]
  },
  {
    category: "Backend & Real-Time",
    skills: [
      {
        name: "Spring Boot 3.3 (Java)",
        level: "Advanced",
        description: "Enterprise REST APIs, WebSocket STOMP broker, Spring Security, Spring Data JPA/Mongo/Redis.",
        whyILikeIt: "has everything ready out of the box for security and APIs, very dependable when building serious large-scale backends"
      },
      {
        name: "Node.js / Express",
        level: "Advanced",
        description: "REST APIs, middleware, JWT auth, and real-time signaling servers.",
        whyILikeIt: "super fast to set up a server and handle requests, using javascript on both front and back just makes life way easier"
      },
      {
        name: "WebSockets & WebRTC",
        level: "Advanced",
        description: "STOMP over SockJS, ICE negotiation, sub-second video sync, and Socket.io event fan-out.",
        whyILikeIt: "building live stuff like video calls or instant watch parties where people connect in real-time with zero delay is just super exciting to create"
      },
      {
        name: "PostgreSQL / Redis / MongoDB",
        level: "Advanced",
        description: "Polyglot persistence: PostgreSQL for relations, Redis for live cache, MongoDB for chat streams.",
        whyILikeIt: "lets you pick the best storage for the job, postgres for safe accounts, redis for lightning speed, and mongo for big chat logs"
      }
    ]
  },
  {
    category: "AI & Data",
    skills: [
      {
        name: "LangGraph / LangChain",
        level: "Intermediate",
        description: "Cyclical agent graphs, query classification, and Self-RAG grading loops.",
        whyILikeIt: "helps ai think in steps and self-correct its mistakes instead of just giving one random answer that might be wrong"
      },
      {
        name: "Gemini / Groq / FAISS",
        level: "Intermediate",
        description: "Vision extraction, fast inference, and vector search used in Saveior and the portfolio agent.",
        whyILikeIt: "lets apps understand images and search through huge docs super fast, makes building smart features actually practical"
      },
      {
        name: "ETL / Star Schema",
        level: "Intermediate",
        description: "Medallion Architecture, stored-procedure ETL, and Gold-layer facts/dimensions in MySQL 8.0.",
        whyILikeIt: "takes messy raw data from everywhere and cleans it up into neat tables so anyone can make sense of business numbers easily"
      },
      {
        name: "Streamlit",
        level: "Exploring",
        description: "Interactive UIs for tracing agent state while the graph executes.",
        whyILikeIt: "quickest way to turn python code into a live clickable dashboard to show how an ai or data model works in real time"
      }
    ]
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      {
        name: "AWS EC2 / Cloudflare R2 / Docker",
        level: "Advanced",
        description: "Cloud deployment on EC2, zero-egress R2 video object storage, and Docker Compose orchestration.",
        whyILikeIt: "makes sure my code runs the exact same way on the cloud as on my laptop, and saves money on video storage"
      },
      {
        name: "Git / GitHub Workflows",
        level: "Advanced",
        description: "Version control workflows, branching conventions, and collaborative PR reviews.",
        whyILikeIt: "saves all versions of code so nothing ever gets lost, and makes working with other devs on the same project super smooth"
      },
      {
        name: "Clerk / Arcjet / Inngest",
        level: "Intermediate",
        description: "Production auth, bot detection, rate-limiting, and event-driven scheduling.",
        whyILikeIt: "handles boring stuff like logins, bot protection and scheduled emails so i can focus on actually building the main product"
      },
      {
        name: "Vercel / Cloudflare Pages / Postman",
        level: "Intermediate",
        description: "Shipping frontends and APIs globally, exercising REST endpoints before production.",
        whyILikeIt: "lets you push code live to the internet in seconds and test every link easily before showing it to anyone"
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
      "GPA: 8.75 / 10",
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

export const projectCategories = ['All', 'Full Stack', 'AI', 'Backend'] as const;
