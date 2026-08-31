import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Film } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import { SEO } from '../components/SEO';

export function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = [...projectCategories];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const easing = [0.16, 1, 0.3, 1] as any;

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title="Engineering Projects"
        description="Review engineering case studies for SyncStreamHub, SoMo, Saveior, and more — full-stack, distributed, and AI-powered projects by Vivek Pandit."
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="mono-code text-[11px] tracking-[0.25em] text-studio-amber uppercase block mb-2">
            CHAPTER 03 // FEATURED ALBUMS
          </span>
          <h1 className="title-serif text-4xl md:text-6xl font-bold text-studio-cream">
            Cinematic Projects
          </h1>
          <p className="text-[10px] text-studio-muted font-mono mt-3 uppercase tracking-wider">
            Also on reel — SCENE 02 // PRODUCTION ROLL
          </p>
          <div className="w-20 h-[2px] bg-studio-amber mt-4" />
        </div>

        {/* Filter categories */}
        <section className="mb-12 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 border rounded text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 font-mono ${filter === cat
                ? 'bg-studio-amber border-studio-amber text-studio-black font-semibold'
                : 'bg-studio-dark border-studio-border text-studio-cream/70 hover:border-studio-amber/60 hover:text-studio-amber'
                }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Projects Celluloid Reel Grid */}
        <motion.section
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: easing }}
                className="film-frame flex flex-col justify-between rounded overflow-hidden bg-studio-dark/50 group"
              >
                {/* Sprocket Film Frame Image Placeholder */}
                <div className="h-44 bg-studio-black relative overflow-hidden border-b border-studio-black flex flex-col justify-end p-5">

                  {/* Photo frame details */}
                  <div className="absolute top-2 left-2 right-2 flex justify-between text-[7px] font-mono text-studio-muted pointer-events-none select-none">
                    <span>REEL: {project.id.toUpperCase()}</span>
                    <span>TAKE: 01</span>
                  </div>

                  {/* Exposed Celluloid Film Negative Background or Project Image */}
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 border-b border-studio-border/30"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#0c0c0e] flex flex-col items-center justify-center group-hover:bg-[#070708] transition-colors duration-500 border-b border-studio-border/30">
                      <Film className="w-8 h-8 text-studio-amber/20 group-hover:scale-110 group-hover:text-studio-amber/40 transition-all duration-500" />
                      <span className="text-[7.5px] font-mono text-studio-amber/70 tracking-widest mt-2">
                        [ FILM FRAME PROJECTED IMAGE ]
                      </span>
                    </div>
                  )}

                  {/* Badges overlaid */}
                  <div className="z-10 absolute top-4 right-4 px-2 py-0.5 border border-studio-amber/40 bg-studio-black/95 rounded text-[8px] font-mono tracking-widest text-studio-amber uppercase">
                    {project.category}
                  </div>

                  {/* Lower titles in film boundary */}
                  <div className="z-10 pointer-events-none">
                    <span className="mono-code text-[8px] tracking-[0.2em] text-studio-amber uppercase mb-0.5 block font-semibold">
                      {project.duration} / {project.role}
                    </span>
                    <h3 className="title-serif text-2xl font-bold text-studio-cream">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card description & tools */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <p className="text-[11px] text-studio-muted leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  <div>
                    {/* Tech categories */}
                    <div className="flex flex-wrap gap-1 mb-5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[8px] font-mono bg-studio-black border border-studio-border/60 text-studio-cream/80 px-1.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center justify-between w-full py-2.5 border border-studio-border hover:border-studio-amber/40 rounded text-center text-[10px] tracking-widest uppercase text-studio-cream hover:text-studio-amber hover:bg-studio-black transition-all duration-300 font-semibold"
                    >
                      <span className="pl-3">Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 pr-3 box-content" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Continuous horizontal roll outline separator */}
        <div className="horizontal-film-roll rounded-lg my-24 opacity-60">
          <div className="py-2 text-center">
            <span className="mono-code text-[9px] text-studio-muted uppercase tracking-[0.3em]">
              🎬 end of directory reel 🎬
            </span>
          </div>
        </div>

        {/* Next Scene CTA */}
        <section className="border-t border-studio-border pt-16 text-center">
          <span className="mono-code text-[10px] text-studio-amber uppercase tracking-widest font-semibold block mb-4">
            CHAPTER 04 // TOOLKIT
          </span>
          <h3 className="title-serif text-2xl md:text-4xl font-bold text-studio-cream mb-8">
            Explore the Engineering Stack
          </h3>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
          >
            <span>View Skills Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
export default Projects;
