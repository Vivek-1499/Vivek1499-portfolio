import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, CheckCircle, AlertCircle, Award, Star } from 'lucide-react';
import { internships } from '../data/portfolioData';
import { SEO } from '../components/SEO';

export function Experience() {
  const [expandedCard, setExpandedCard] = useState<string | null>('mehery-soccom');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title="Professional Experience"
        description="Explore Vivek Pandit's developer internships at MeshCraft, CommonWealth, and Mehery Soccom. Review technical contributions, WebRTC pipelines, database optimizations, and metric achievements."
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="mono-code text-[11px] tracking-[0.25em] text-studio-amber uppercase block mb-2">
            CHAPTER 02 // CREDIBILITY
          </span>
          <h1 className="title-serif text-4xl md:text-6xl font-bold text-studio-cream">
            Professional Experience
          </h1>
          <div className="w-20 h-[2px] bg-studio-amber mt-4" />
        </div>

        {/* Narrative */}
        <section className="mb-12">
          <p className="text-sm text-studio-muted leading-relaxed font-sans max-w-2xl">
            My work experience consists of software engineering internships. In each role, I took on increasing responsibility, transitioning from building frontend components to designing real-time WebRTC communications pipelines. Click on any card below to read the case study.
          </p>
        </section>

        {/* TV Guide — tonight's lineup */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 bg-[#0c0a14] border border-studio-border rounded-lg overflow-hidden"
        >
          <div className="bg-studio-amber/10 border-b border-studio-border px-4 py-2 flex items-center justify-between">
            <span className="mono-code text-[9px] text-studio-amber uppercase tracking-[0.2em] font-semibold">
              📺 Career TV Guide
            </span>
            <span className="text-[8px] font-mono text-studio-muted">NOW PLAYING</span>
          </div>
          <div className="divide-y divide-studio-border/40">
            {internships.map((job, idx) => (
              <div key={job.id} className="px-4 py-2.5 flex items-center gap-3 hover:bg-studio-card/40 transition-colors">
                <span className="mono-code text-[9px] text-studio-amber w-16 shrink-0">{job.duration.split('–')[0]?.trim() || job.duration}</span>
                <span className="text-[8px] font-mono text-studio-muted w-8 shrink-0">CH {String(idx + 1).padStart(2, '0')}</span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-studio-cream font-semibold block truncate">{job.role}</span>
                  <span className="text-[9px] text-studio-muted font-mono truncate">{job.company}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Internship Folders / Case Studies */}
        <section className="mb-20 space-y-8">
          {internships.map((job) => {
            const isExpanded = expandedCard === job.id;
            return (
              <motion.div
                key={job.id}
                layout
                className="bg-studio-card border border-studio-border rounded-lg overflow-hidden transition-all duration-300 hover:border-studio-amber/30"
              >
                {/* Header Folder Click bar */}
                <div
                  onClick={() => setExpandedCard(isExpanded ? null : job.id)}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-studio-border/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-studio-black border border-studio-border rounded-lg text-studio-amber">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="mono-code text-[10px] tracking-wider text-studio-amber uppercase block mb-0.5">
                        {job.duration}
                      </span>
                      <h3 className="text-lg font-bold text-studio-cream">
                        {job.role}
                      </h3>
                      <span className="text-xs text-studio-muted font-mono">
                        {job.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="hidden md:flex gap-1.5">
                      {job.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] font-mono bg-studio-black border border-studio-border text-studio-cream/80 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-studio-amber uppercase tracking-widest">
                      {isExpanded ? '[ Collapse ]' : '[ Read Story ]'}
                    </span>
                  </div>
                </div>

                {/* Expanded Content Case Study */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-t border-studio-border p-6 space-y-6 bg-studio-dark/30 font-sans"
                  >
                    <div>
                      <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-widest font-semibold">
                        Role Overview
                      </h4>
                      <p className="text-xs text-studio-muted leading-relaxed">
                        {job.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-3 tracking-widest font-semibold">
                        Key Responsibilities & Contributions
                      </h4>
                      <ul className="space-y-2.5 text-xs text-studio-muted">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-studio-amber shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-studio-border/30">
                      <div>
                        <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-widest font-semibold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-studio-amber" />
                          Biggest Challenge
                        </h4>
                        <p className="text-xs text-studio-muted leading-relaxed">
                          {job.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-widest font-semibold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-studio-amber" />
                          Key Achievement
                        </h4>
                        <p className="text-xs text-studio-muted leading-relaxed">
                          {job.achievement}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-studio-black/80 border border-studio-border rounded-lg mt-4">
                      <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-1.5 tracking-widest font-semibold flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5" />
                        Lessons Learned
                      </h4>
                      <p className="text-xs text-studio-muted leading-relaxed italic">
                        "{job.lessons}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {job.techStack.map((tech) => (
                        <span key={tech} className="text-[9px] font-mono bg-studio-black border border-studio-border text-studio-cream/80 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </section>

        {/* Technical Growth Evolution */}
        <section className="mb-24 border-t border-studio-border pt-16">
          <div className="mb-8">
            <h2 className="title-serif text-2xl md:text-3xl font-bold text-studio-cream mb-2">
              Technology Growth Path
            </h2>
            <p className="text-xs text-studio-muted font-sans">
              How my stack expanded and adapted to complex project demands over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            {[
              { phase: "Phase 1", year: "2022", focus: "Frontend Basics", tech: "HTML / CSS / JS" },
              { phase: "Phase 2", year: "2023", focus: "Component State", tech: "React / Redux / Tailwind" },
              { phase: "Phase 3", year: "2024", focus: "Full Stack Pipelines", tech: "Node / Express / MongoDB" },
              { phase: "Phase 4", year: "2025", focus: "Real-Time Streaming", tech: "Next.js / Docker/ Java" },
              { phase: "Phase 5", year: "Current", focus: "Scaling & Shaders", tech: "WebRTC / Sockets / Redis" }
            ].map((step, idx) => (
              <div key={idx} className="bg-studio-dark/50 border border-studio-border/60 p-5 rounded text-center">
                <span className="mono-code text-[8px] text-studio-amber block uppercase tracking-widest mb-1">{step.phase}</span>
                <span className="text-[10px] text-studio-cream font-mono block font-semibold mb-2">{step.year}</span>
                <h4 className="text-xs font-bold text-studio-cream mb-1">{step.focus}</h4>
                <p className="text-[10px] text-studio-muted font-mono">{step.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exit CTA */}
        <section className="border-t border-studio-border pt-16 text-center">
          <motion.div {...fadeInUp}>
            <span className="mono-code text-[10px] text-studio-amber uppercase tracking-widest font-semibold block mb-4">
              CHAPTER 03 // PROJECTS
            </span>
            <h3 className="title-serif text-2xl md:text-4xl font-bold text-studio-cream mb-8">
              Review Architectural Projects
            </h3>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
export default Experience;
