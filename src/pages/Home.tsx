import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Award, ChevronRight, Play, FileText, Sparkles } from 'lucide-react';
import { personalInfo, projects, internships, skills, achievements } from '../data/portfolioData';
import { SEO } from '../components/SEO';
import { ProjectMedia } from '../components/ProjectMedia';
import { usePortfolioPreferences } from '../context/PortfolioPreferences';

const ThreeHeroCanvas = lazy(() => import('../components/ThreeHeroCanvas'));

export function Home() {
  const { skipCinematicIntro } = usePortfolioPreferences();
  const [isClapped, setIsClapped] = useState(skipCinematicIntro);
  const [clapperSnapping, setClapperSnapping] = useState(false);

  // Playable Projects Tape Deck States
  const [rollState, setRollState] = useState<'paused' | 'play' | 'fast' | 'rewind'>('paused');
  const filmRollRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to control scroll fade behaviors
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.45]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const easing = [0.16, 1, 0.3, 1] as any;

  useEffect(() => {
    if (skipCinematicIntro) setIsClapped(true);
  }, [skipCinematicIntro]);

  const handleClapperClick = () => {
    setClapperSnapping(true);

    setTimeout(() => {
      setIsClapped(true);
      setClapperSnapping(false);
    }, 450);
  };

  // Manage automatic scrolling and ticking corresponding to the roll state
  useEffect(() => {
    const el = filmRollRef.current;
    if (!el) return;

    let intervalId: any = null;

    if (rollState !== 'paused') {
      let speed = 1;
      if (rollState === 'fast') {
        speed = 4;
      } else if (rollState === 'rewind') {
        speed = -3;
      }

      // Start scroll loop animation
      intervalId = setInterval(() => {
        el.scrollLeft += speed;
        // Loop boundary detection
        if (speed > 0 && el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
          el.scrollLeft = 0;
        } else if (speed < 0 && el.scrollLeft <= 5) {
          el.scrollLeft = el.scrollWidth - el.clientWidth - 10;
        }
      }, 16);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [rollState]);

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: easing }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="relative min-h-screen bg-studio-black overflow-hidden page-enter-opacity">
      <SEO
        title="Home"
        description="Vivek Kumar Pandit — Full Stack Developer in Mumbai. WebRTC at Mehery, GPMS at CommonWealth, plus SoMo, Saveior, a MySQL warehouse, and a LangGraph agent."
        ogType="profile"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: personalInfo.name,
          jobTitle: personalInfo.title,
          email: personalInfo.email,
          telephone: personalInfo.phone,
          address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
          url: 'https://github.com/Vivek-1499',
          sameAs: [personalInfo.github, personalInfo.linkedin],
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 z-10">

        {/* Three.js Backdrop (Dynamic lights brightened if clapped) */}
        <Suspense fallback={
          <div className="absolute inset-0 bg-[#020202] pointer-events-none overflow-hidden">
            <div className={`absolute top-10 left-10 w-96 h-96 rounded-full bg-studio-amber/${isClapped ? '15' : '5'} blur-3xl`} />
          </div>
        }>
          <ThreeHeroCanvas />
        </Suspense>

        {/* Ambient Projector Dimmer overlay */}
        <div className={`absolute inset-0 bg-black/60 pointer-events-none transition-opacity duration-1000 ${isClapped ? 'opacity-20' : 'opacity-80'}`} />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center relative w-full"
        >
          {/* INTERACTIVE CLAPPERBOARD INITIATOR */}
          {!isClapped ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: easing }}
              className="flex flex-col items-center justify-center z-20 my-12"
            >
              <div
                onClick={handleClapperClick}
                className="w-64 bg-studio-card border-2 border-studio-border p-4 rounded-md shadow-2xl cursor-pointer hover:border-studio-amber/60 hover:shadow-studio-amber/5 transition-all duration-300 select-none interactive-hover group"
              >
                {/* Clapper Hinge / Top Lip */}
                <motion.div
                  animate={{ rotate: clapperSnapping ? 0 : -25 }}
                  transition={{ duration: 0.2, ease: "easeIn" }}
                  className="w-full h-8 bg-studio-black border-b border-studio-border flex items-center justify-around origin-bottom-left"
                >
                  {/* Chevron film strip lines */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-6 h-full bg-studio-cream -skew-x-[25deg] opacity-80" />
                  ))}
                </motion.div>

                {/* Clapper Slate Base */}
                <div className="w-full bg-studio-black border-t border-studio-border pt-4 px-2 pb-2 mt-1 flex flex-col gap-2 font-mono text-[9px] text-studio-cream/80 uppercase">
                  <div className="flex justify-between border-b border-studio-border/50 pb-1">
                    <span>PROD: THE PORTFOLIO</span>
                    <span>SCENE: 01</span>
                  </div>
                  <div className="flex justify-between border-b border-studio-border/50 pb-1">
                    <span>DIRECTOR: V. PANDIT</span>
                    <span>TAKE: 01</span>
                  </div>
                  <div className="text-center text-[10px] text-studio-amber font-semibold pt-1 flex items-center justify-center gap-1.5 group-hover:scale-105 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-studio-amber" />
                    <span>CLAP TO START REEL</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- MAIN HERO CONTENT REVEALED --- */
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: easing }}
                className="flex items-center gap-2 px-3 py-1 bg-studio-dark border border-studio-border rounded-full mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-amber opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-amber"></span>
                </span>
                <span className="text-[10px] tracking-widest text-studio-amber uppercase font-mono font-semibold">
                  {personalInfo.status}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easing }}
                className="title-serif text-5xl md:text-7xl text-studio-cream mb-4"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easing }}
                className="mono-code text-sm text-studio-amber mb-6"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: easing }}
                className="text-base md:text-lg text-studio-muted max-w-2xl mb-10 leading-relaxed font-sans text-left sm:text-center"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: easing }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-wrap justify-center"
              >
                {personalInfo.aiAssistantUrl && (
                  <a
                    href={personalInfo.aiAssistantUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-studio-amber via-studio-gold to-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:brightness-110 shadow-lg shadow-studio-amber/20 transition-all duration-300 interactive-hover group"
                  >
                    <Sparkles className="w-4 h-4 fill-studio-black/20 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                    <span>Ask AI Assistant</span>
                  </a>
                )}
                <Link
                  to="/about"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-studio-dark border border-studio-border text-studio-cream font-semibold text-xs tracking-widest uppercase rounded hover:border-studio-amber/60 hover:text-studio-amber transition-all duration-300 interactive-hover"
                >
                  <span>About</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 border border-studio-border text-studio-cream font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-border/30 hover:border-studio-amber/60 transition-all duration-300 interactive-hover"
                >
                  <span>View Projects</span>
                </Link>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 border border-studio-border/50 text-studio-muted font-semibold text-xs tracking-widest uppercase rounded hover:text-studio-cream hover:border-studio-amber/40 transition-all duration-300 interactive-hover"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>

      </section>

      {/* --- SCENE 01: ABOUT PREVIEW --- */}
      <section className="relative py-24 px-6 border-t border-studio-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div {...fadeInUp} className="lg:col-span-5">
            <span className="kicker block mb-3">
              Overview
            </span>
            <h2 className="title-serif text-3xl md:text-5xl text-studio-cream mb-6">
              Internships, then systems I built myself
            </h2>
            <p className="text-studio-muted text-base leading-relaxed mb-6 font-sans">
              I interned on a P2P video stack (Vue + WebRTC) and a public-sector UI (React + design tokens). The rest is personal work: a social app with Socket.io, a finance tracker that reads receipts, a MySQL warehouse, and a LangGraph agent that grades its own retrieval.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-studio-amber hover:text-studio-gold transition-colors font-bold group"
            >
              <span>Read Full Chapter</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 border-l border-studio-border pl-0 sm:pl-8"
          >
            <div>
              <h3 className="mono-code text-xs text-studio-amber uppercase mb-2 tracking-wider">Curiosity First</h3>
              <p className="text-xs text-studio-muted leading-relaxed font-sans">
                Learning by breaking. Diving deep into standard specifications, API endpoints, and database models to truly understand implementation paths.
              </p>
            </div>
            <div>
              <h3 className="mono-code text-xs text-studio-amber uppercase mb-2 tracking-wider">Reliable Architecture</h3>
              <p className="text-xs text-studio-muted leading-relaxed font-sans">
                Prioritizing schema designs, secure webhooks, caching strategies, and responsive loading layers over unnecessary complex visual decorators.
              </p>
            </div>
            <div className="sm:col-span-2 border-t border-studio-border/40 pt-6 mt-2 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-sm text-studio-cream font-sans">B.Tech IT — KJ Somaiya, Mumbai</span>
              <span className="text-sm text-studio-amber font-mono">GPA 8.75 / 10</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SCENE 02: FEATURED PROJECTS (HORIZONTAL FILM ROLL REEL WITH CONTROLS) --- */}
      <section className="relative py-24 px-6 bg-[#030304]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <motion.div {...fadeInUp}>
              <span className="kicker block mb-3">
                Projects
              </span>
              <h2 className="title-serif text-3xl md:text-5xl text-studio-cream">
                Selected work
              </h2>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link
                to="/projects"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-studio-dark border border-studio-border rounded text-xs tracking-widest uppercase text-studio-cream hover:border-studio-amber/60 hover:text-studio-amber transition-all duration-300"
              >
                <span>All projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* PROJECTOR CONTROLLER DECK */}
          <div className="flex justify-center items-center gap-2.5 mb-6 bg-studio-card/60 border border-studio-border p-3 rounded-lg max-w-sm mx-auto font-mono text-[9px] select-none">
            <button
              onClick={() => setRollState('rewind')}
              className={`px-3 py-1.5 border rounded cursor-pointer transition-colors font-semibold ${rollState === 'rewind'
                ? 'bg-studio-amber border-studio-amber text-studio-black font-bold'
                : 'bg-studio-black border-studio-border text-studio-muted hover:text-studio-amber'
                }`}
            >
              ⏪ REWIND
            </button>
            <button
              onClick={() => setRollState('paused')}
              className={`px-3 py-1.5 border rounded cursor-pointer transition-colors font-semibold ${rollState === 'paused'
                ? 'bg-studio-amber border-studio-amber text-studio-black font-bold'
                : 'bg-studio-black border-studio-border text-studio-muted hover:text-studio-amber'
                }`}
            >
              ⏸️ PAUSE
            </button>
            <button
              onClick={() => setRollState('play')}
              className={`px-3 py-1.5 border rounded cursor-pointer transition-colors font-semibold ${rollState === 'play'
                ? 'bg-studio-amber border-studio-amber text-studio-black font-bold'
                : 'bg-studio-black border-studio-border text-studio-muted hover:text-studio-amber'
                }`}
            >
              ▶️ PLAY
            </button>
            <button
              onClick={() => setRollState('fast')}
              className={`px-3 py-1.5 border rounded cursor-pointer transition-colors font-semibold ${rollState === 'fast'
                ? 'bg-studio-amber border-studio-amber text-studio-black font-bold'
                : 'bg-studio-black border-studio-border text-studio-muted hover:text-studio-amber'
                }`}
            >
              ⏩ FAST FWD
            </button>
          </div>

          {/* PLAYABLE HORIZONTAL CELLULOID CAMERA REEL CAROUSEL */}
          <div
            ref={filmRollRef}
            className="horizontal-film-roll rounded-lg overflow-x-auto no-scrollbar scroll-smooth"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="flex gap-8 min-w-max px-2 py-4"
            >
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={{
                    initial: { opacity: 0, x: 50 },
                    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easing } }
                  }}
                  className="film-frame w-[310px] sm:w-[380px] flex flex-col justify-between overflow-hidden border border-studio-border"
                >
                  <div className="h-44 relative border-b border-studio-border">
                    <ProjectMedia project={project} eager={i === 0} sizes="380px" className="opacity-90" />
                    <div className="absolute top-3 right-4 px-2 py-0.5 border border-studio-amber/40 bg-studio-black/90 text-[10px] font-mono text-studio-amber">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between bg-studio-dark/50">
                    <span className="mono-code text-[10px] text-studio-amber mb-1">
                      {project.duration}
                    </span>
                    <h3 className="title-serif text-xl text-studio-cream mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-studio-amber/90 font-mono mb-2 leading-snug">
                      {project.impactMetric}
                    </p>
                    <p className="text-sm text-studio-muted leading-relaxed mb-5 font-sans">
                      {project.tagline}
                    </p>

                    <div>
                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-1 mb-5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[8px] font-mono bg-studio-black border border-studio-border/60 text-studio-cream/80 px-1.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/projects/${project.id}`}
                        className="flex items-center justify-between w-full py-2 border border-studio-border hover:border-studio-amber/40 rounded text-center text-[10px] tracking-widest uppercase text-studio-cream hover:text-studio-amber hover:bg-studio-black transition-all duration-300 font-semibold"
                      >
                        <span className="pl-3">Case study</span>
                        <ArrowRight className="w-3.5 h-3.5 pr-3 box-content" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SCENE 03: EXPERIENCE & TECH PREVIEW --- */}
      <section className="relative py-24 px-6 border-y border-studio-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline Snapshot */}
          <motion.div {...fadeInUp}>
            <span className="kicker block mb-3">
              Experience
            </span>
            <h2 className="title-serif text-2xl md:text-4xl text-studio-cream mb-8">
              Internships
            </h2>

            <div className="space-y-6">
              {internships.map((job) => (
                <div key={job.id} className="relative pl-6 border-l border-studio-border hover:border-studio-amber/40 transition-colors py-1">
                  <div className="absolute left-[-4.5px] top-2.5 w-2.5 h-2.5 rounded-full bg-studio-border border border-studio-black" />
                  <span className="mono-code text-[10px] tracking-wider text-studio-amber font-semibold block mb-1">
                    {job.duration}
                  </span>
                  <h3 className="text-sm font-bold text-studio-cream">
                    {job.role} <span className="text-studio-muted font-normal">at {job.company}</span>
                  </h3>
                  <p className="text-sm text-studio-muted leading-relaxed mt-1.5 font-sans">
                    {job.overview}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-studio-amber hover:text-studio-gold transition-colors font-bold mt-8 group"
            >
              <span>View Experience Details</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Toolkit Snapshot */}
          <motion.div {...fadeInUp} className="flex flex-col justify-between">
            <div>
            <span className="kicker block mb-3">
              Stack
            </span>
            <h2 className="title-serif text-2xl md:text-4xl text-studio-cream mb-8">
              What I actually use
            </h2>

              <p className="text-sm text-studio-muted leading-relaxed mb-8 font-sans">
                Picked from internships and the four projects above — not a laundry list of every tutorial.
              </p>

              {/* Grid of categories */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {skills.map((cat) => (
                  <div key={cat.category} className="bg-studio-dark/50 p-4 border border-studio-border/60 rounded">
                    <h3 className="mono-code text-[10px] tracking-wider text-studio-amber uppercase mb-2.5 font-semibold flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" />
                      {cat.category}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill) => (
                        <span key={skill.name} className="text-[9px] font-mono bg-studio-black text-studio-cream/80 px-1.5 py-0.5 rounded">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-studio-amber hover:text-studio-gold transition-colors font-bold group"
            >
              <span>Explore My Full Toolkit</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SCENE 05: ACHIEVEMENTS SUMMARY --- */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <span className="kicker block mb-3">
              Notes
            </span>
            <h2 className="title-serif text-3xl md:text-5xl text-studio-cream mb-4">
              Hackathon, school, certificates
            </h2>
            <p className="text-studio-muted text-sm max-w-lg mx-auto font-sans leading-relaxed">
              SIH 2023, Coursera certs, B.Tech IT at KJ Somaiya. Nothing inflated.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left"
          >
            {achievements.slice(0, 3).map((ach, idx) => (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 15 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="border border-studio-border p-6 hover:border-studio-amber/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-studio-amber" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-studio-muted">
                    {ach.category}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-studio-cream mb-1">
                  {ach.title}
                </h3>
                <span className="text-[10px] text-studio-amber/90 font-mono block mb-2">
                  {ach.organization} / {ach.date}
                </span>
                <p className="text-[11px] text-studio-muted font-sans leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp}>
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-studio-border text-xs tracking-widest uppercase text-studio-cream hover:border-studio-amber/60 hover:text-studio-amber transition-all duration-300"
            >
              <span>View All Milestones</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SECRET SCENE: THE DARKROOM --- */}
      <section className="relative py-16 px-6 border-t border-studio-border bg-studio-black overflow-hidden select-none">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="flashlight-reveal-container border border-dashed border-studio-border/60 rounded-lg p-12 bg-studio-dark/20 relative group cursor-cell"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - 100;
              const y = e.clientY - rect.top - 100;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '-999px');
              e.currentTarget.style.setProperty('--mouse-y', '-999px');
            }}
            onTouchMove={(e) => {
              if (e.touches.length > 0) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const y = e.touches[0].clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }
            }}
            onTouchStart={(e) => {
              if (e.touches.length > 0) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const y = e.touches[0].clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '-999px');
              e.currentTarget.style.setProperty('--mouse-y', '-999px');
            }}
            onTouchCancel={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '-999px');
              e.currentTarget.style.setProperty('--mouse-y', '-999px');
            }}
          >
            <span className="mono-code text-[9px] text-studio-amber/40 uppercase tracking-widest block mb-4">
              [ SECONDS OF ECLIPSE // FLASHLIGHT DISCOVERY ]
            </span>
            <div className="pointer-events-none select-none my-6">
              <p className="flashlight-reveal-text title-serif text-xl md:text-3xl font-bold tracking-wide leading-relaxed">
                "Thank you for scrolling all the way down and taking the time to view my portfolio! I really appreciate you exploring my work."
              </p>
            </div>
            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <span className="mono-code text-[8px] text-studio-gold uppercase tracking-[0.2em] animate-pulse">
                ◆ Secret Scene Discovered ◆
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SCENE 06: CALL TO ACTION --- */}
      <section className="relative py-24 px-6 border-t border-studio-border text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="title-serif text-3xl md:text-5xl text-studio-cream mb-6">
              Hiring or building something real-time?
            </h2>
            <p className="text-studio-muted text-base mb-10 leading-relaxed font-sans max-w-md mx-auto">
              I am looking for Software / Backend / Full-Stack internship and entry-level roles. Email is faster than the form.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default Home;
