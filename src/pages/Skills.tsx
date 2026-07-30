import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Star } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { SEO } from '../components/SEO';
import { VinylRecord } from '../components/VinylRecord';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(skills[0].category);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title="Technical Toolkit"
        description="Explore Vivek Pandit's technical skills matrix. Advanced capabilities in React, TypeScript, Node.js, Express, MongoDB, WebRTC, and intermediate capacities in PostgreSQL, Docker, and Redis."
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="mono-code text-[11px] tracking-[0.25em] text-studio-amber uppercase block mb-2">
            CHAPTER 04 // TRACKLIST
          </span>
          <h1 className="title-serif text-4xl md:text-6xl font-bold text-studio-cream">
            Studio Rack
          </h1>
          <div className="w-20 h-[2px] bg-studio-amber mt-4" />
        </div>

        {/* Vinyl shelf — pick a record to browse skills */}
        <section className="mb-12">
          <div className="bg-studio-card/40 border border-studio-border rounded-lg p-6">
            <span className="mono-code text-[9px] text-studio-muted uppercase tracking-[0.2em] block mb-5 text-center">
              Select a record to browse the rack
            </span>
            <div className="flex flex-wrap justify-center gap-8">
              {skills.map((cat) => (
                <div key={cat.category} className="flex flex-col items-center gap-2">
                  <VinylRecord
                    label={cat.category.slice(0, 8)}
                    sublabel="TRACK"
                    size="md"
                    spinning={activeCategory === cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={
                      activeCategory === cat.category
                        ? 'ring-2 ring-studio-amber/50 rounded-full'
                        : 'opacity-70 hover:opacity-100 transition-opacity'
                    }
                  />
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider ${
                      activeCategory === cat.category ? 'text-studio-amber font-semibold' : 'text-studio-muted'
                    }`}
                  >
                    {cat.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active category skills */}
        <section className="mb-20">
          <h2 className="mono-code text-[10px] text-studio-amber uppercase tracking-[0.2em] mb-6">
            Now Playing: {activeCategory}
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {skills
              .find((cat) => cat.category === activeCategory)
              ?.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-studio-card border border-studio-border p-6 rounded-lg space-y-4 hover:border-studio-amber/30 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-studio-black border border-studio-border rounded text-studio-amber">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-studio-cream">
                        {skill.name}
                      </h3>
                    </div>
                    <span
                      className={`self-start sm:self-center px-2.5 py-0.5 border text-[9px] font-mono tracking-widest uppercase rounded ${
                        skill.level === 'Advanced'
                          ? 'border-studio-amber/40 text-studio-amber bg-studio-amber/5'
                          : 'border-studio-border text-studio-muted'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div className="space-y-3 font-sans text-xs text-studio-muted">
                    <p>{skill.description}</p>
                    <div className="p-3 bg-studio-black/40 border border-studio-border/50 rounded flex gap-2">
                      <Star className="w-4 h-4 text-studio-amber shrink-0 mt-0.5" />
                      <p className="italic">
                        <strong className="text-studio-cream not-italic font-mono text-[10px] block mb-1">
                          Why I like using it:
                        </strong>
                        "{skill.whyILikeIt}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Current Learning & Continuous Growth */}
        <section className="mb-24 border-t border-studio-border pt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h3 className="title-serif text-xl font-bold text-studio-cream mb-4">
              Current Exploration
            </h3>
            <p className="text-xs text-studio-muted leading-relaxed font-sans mb-4">
              I spend time reading technical RFC specifications and exploring backend paradigms to expand my scale boundaries.
            </p>
            <ul className="space-y-3 text-xs text-studio-muted font-sans">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-studio-amber mt-1.5 shrink-0" />
                <span><strong>Distributed Systems:</strong> Studying consensus algorithms, replication logs, and partition tolerance trade-offs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-studio-amber mt-1.5 shrink-0" />
                <span><strong>Three.js / WebGL:</strong> Custom shaders, buffer geometries, and particle physics simulations in canvas threads.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="title-serif text-xl font-bold text-studio-cream mb-4">
              Future Toolkit Roadmap
            </h3>
            <p className="text-xs text-studio-muted leading-relaxed font-sans mb-4">
              Tools I am eager to integrate into upcoming production projects.
            </p>
            <ul className="space-y-3 text-xs text-studio-muted font-sans">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-studio-amber mt-1.5 shrink-0" />
                <span><strong>Kubernetes & Helm:</strong> Automating container scaling, service mesh routing, and cluster provisioning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-studio-amber mt-1.5 shrink-0" />
                <span><strong>Rust / WebAssembly:</strong> Compiling performance-critical media parsing code directly to client runtimes.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Exit CTA */}
        <section className="border-t border-studio-border pt-16 text-center">
          <motion.div {...fadeInUp}>
            <span className="mono-code text-[10px] text-studio-amber uppercase tracking-widest font-semibold block mb-4">
              CHAPTER 05 // MILESTONES
            </span>
            <h3 className="title-serif text-2xl md:text-4xl font-bold text-studio-cream mb-8">
              Review Participations & Milestones
            </h3>
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
            >
              <span>View Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
export default Skills;
