import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldCheck, Cpu, Code, HelpCircle, Maximize2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SEO } from '../components/SEO';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Active architecture step selection
  const [activeArchStep, setActiveArchStep] = useState<number>(0);

  // Image lightbox modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number>(0);

  useEffect(() => {
    // If project id is invalid, send user back to projects list
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  if (!project) return null;

  const { detail } = project;

  // Find related projects to show at bottom ("Continue Watching")
  const relatedProjects = projects.filter((p) => p.id !== project.id);

  const slides = [
    { title: 'FRAME 01 // INTERFACE MOCK', desc: 'Main user control dashboard layout.', img: detail.screenshots?.[0] },
    { title: 'FRAME 02 // PIPELINE ARCHITECTURE', desc: 'Data-flow diagram and messaging brokers.', img: detail.screenshots?.[1] },
    { title: 'FRAME 03 // DB SCHEMATICS', desc: 'Normalized tables, keys, and indexes.', img: detail.screenshots?.[2] }
  ];

  const lightboxImages = slides
    .filter((slide) => Boolean(slide.img))
    .map((slide) => ({
      src: slide.img as string,
      title: slide.title,
      desc: slide.desc,
      alt: `${project.title} - ${slide.title}`,
    }));

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title={`${project.title} Case Study`}
        description={project.tagline}
      />

      <ImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={activeLightboxIndex}
        onNavigate={setActiveLightboxIndex}
        projectTitle={project.title}
      />

      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-studio-muted hover:text-studio-amber transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects catalog</span>
        </Link>

        {/* --- PROJECT HERO --- */}
        <section className="mb-16">
          <span className="mono-code text-[11px] tracking-[0.25em] text-studio-amber uppercase block mb-2">
            EPISODE CASE STUDY // {project.category.toUpperCase()}
          </span>
          <h1 className="title-serif text-4xl md:text-6xl font-bold text-studio-cream mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-studio-muted font-sans mb-8 leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-studio-card/60 p-5 rounded-lg border border-studio-border mb-8 font-mono text-xs">
            <div>
              <span className="text-studio-muted block mb-1">Duration</span>
              <span className="text-studio-cream font-semibold">{project.duration}</span>
            </div>
            <div>
              <span className="text-studio-muted block mb-1">My Role</span>
              <span className="text-studio-cream font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-studio-muted block mb-1">Status</span>
              <span className="text-studio-amber font-semibold">{project.status}</span>
            </div>
            <div>
              <span className="text-studio-muted block mb-1">Category</span>
              <span className="text-studio-cream font-semibold">{project.category}</span>
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {detail.liveUrl && (
              <a
                href={detail.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {detail.githubUrl && (
              <a
                href={detail.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-studio-border text-studio-cream font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-border/30 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </section>

        {/* --- HORIZONTAL FILM PHOTO REEL --- */}
        <section className="mb-16">
          <div className="horizontal-film-roll rounded-lg overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-6 min-w-max px-2 py-4">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    if (slide.img) {
                      setActiveLightboxIndex(idx);
                      setIsLightboxOpen(true);
                    }
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && slide.img) {
                      e.preventDefault();
                      setActiveLightboxIndex(idx);
                      setIsLightboxOpen(true);
                    }
                  }}
                  className="film-frame w-72 h-44 flex flex-col justify-between p-4 bg-studio-black text-center relative rounded select-none overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-studio-amber"
                  title="Click to view full image in cinema lightbox"
                >
                  <div className="absolute top-2 left-2 right-2 flex justify-between text-[7px] font-mono text-studio-muted z-10">
                    <span>{slide.title}</span>
                    <span>SCENE: 0{idx + 1}</span>
                  </div>

                  {slide.img ? (
                    <>
                      <img 
                        src={slide.img} 
                        alt={slide.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-300"
                      />
                      {/* Hover Inspect Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 z-20">
                        <div className="p-2 rounded-full bg-studio-amber text-black shadow-lg mb-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                        <span className="text-[8px] font-mono text-studio-cream tracking-wider uppercase font-semibold bg-black/80 px-2 py-0.5 rounded border border-white/15">
                          Inspect &amp; Zoom
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex-grow flex flex-col items-center justify-center pt-2">
                      <svg className="w-8 h-8 text-studio-amber/20 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="text-[7.5px] font-mono text-studio-amber/80 tracking-widest mt-1">[ FILM FRAME PROJECTED IMAGE ]</span>
                    </div>
                  )}

                  <span className="text-[8px] font-mono text-studio-muted leading-tight z-10 bg-studio-black/80 p-1 rounded">
                    {slide.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- QUICK OVERVIEW & PROBLEM --- */}
        <section className="mb-16 border-t border-studio-border pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 space-y-4">
            <h3 className="title-serif text-xl font-bold text-studio-cream">The Context</h3>
            <p className="text-xs text-studio-muted leading-relaxed font-sans">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-6 space-y-4">
            <h3 className="title-serif text-xl font-bold text-studio-cream">The Problem</h3>
            <p className="text-xs text-studio-muted leading-relaxed font-sans">
              {detail.problem}
            </p>
          </div>
          <div className="md:col-span-12 p-5 bg-studio-card/40 border border-studio-border rounded-lg mt-4">
            <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-widest font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              The Solution
            </h4>
            <p className="text-xs text-studio-cream/90 leading-relaxed font-sans">
              {detail.solution}
            </p>
          </div>
        </section>

        {/* --- INTERACTIVE ARCHITECTURE DIAGRAM --- */}
        <section className="mb-20 border-t border-studio-border pt-12">
          <div className="mb-8">
            <h3 className="title-serif text-2xl font-bold text-studio-cream mb-2">
              {detail.architecture.title}
            </h3>
            <p className="text-xs text-studio-muted font-sans">
              {detail.architecture.description} Click on any stage box below to review its technical processing logic.
            </p>
          </div>

          {/* Interactive Steps timeline boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
            {detail.architecture.flow.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveArchStep(idx)}
                className={`p-3 border rounded text-left transition-all duration-300 font-mono text-[10px] ${
                  activeArchStep === idx
                    ? 'border-studio-amber bg-studio-amber/5 text-studio-amber'
                    : 'border-studio-border bg-studio-card/45 text-studio-muted hover:border-studio-amber/40 hover:text-studio-cream'
                }`}
              >
                <span className="block text-[8px] text-studio-muted mb-1">STAGE 0{idx + 1}</span>
                <span className="font-semibold block truncate">
                  {step.split('->')[0].trim().split(' ')[0]} {step.split('->')[0].trim().split(' ')[1] || ''}
                </span>
              </button>
            ))}
          </div>

          {/* Explanatory description card */}
          <div className="p-5 bg-studio-dark/60 border border-studio-border rounded-lg">
            <h4 className="mono-code text-[9px] text-studio-amber uppercase mb-2 tracking-widest font-semibold">
              Stage details: STAGE 0{activeArchStep + 1}
            </h4>
            <p className="text-xs text-studio-cream/90 font-mono leading-relaxed">
              {detail.architecture.flow[activeArchStep]}
            </p>
          </div>
        </section>

        {/* --- TECHNICAL DECISION MATRIX --- */}
        <section className="mb-20 border-t border-studio-border pt-12">
          <div className="mb-8">
            <h3 className="title-serif text-2xl font-bold text-studio-cream mb-2">
              Engineering Trade-Offs
            </h3>
            <p className="text-xs text-studio-muted font-sans">
              Strategic design decisions made during planning to optimize performance and deployment limits.
            </p>
          </div>

          <div className="space-y-6">
            {detail.decisions.map((dec, i) => (
              <div key={i} className="bg-studio-card/50 border border-studio-border p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-4 h-4 text-studio-amber" />
                  <h4 className="text-xs font-bold text-studio-cream">
                    {dec.question}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-sans text-xs">
                  <div className="sm:col-span-1 bg-studio-black border border-studio-border p-3 rounded text-center">
                    <span className="text-[9px] font-mono text-studio-muted block uppercase mb-1">Selected Path</span>
                    <span className="text-studio-amber font-semibold">{dec.choice}</span>
                  </div>
                  <div className="sm:col-span-3 text-studio-muted leading-relaxed">
                    {dec.reasoning}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CHALLENGES & BUGS FOLDER --- */}
        <section className="mb-20 border-t border-studio-border pt-12 space-y-12">
          {/* Challenges */}
          <div>
            <div className="mb-8">
              <h3 className="title-serif text-2xl font-bold text-studio-cream mb-2">
                Deployment Obstacles
              </h3>
              <p className="text-xs text-studio-muted font-sans">
                Real engineering issues faced during development cycles and their corresponding mitigations.
              </p>
            </div>

            <div className="space-y-6">
              {detail.challenges.map((ch, idx) => (
                <div key={idx} className="border-l-2 border-studio-amber pl-6 py-1">
                  <h4 className="text-sm font-bold text-studio-cream mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-studio-amber" />
                    {ch.title}
                  </h4>
                  <div className="space-y-3 font-sans text-xs text-studio-muted">
                    <p><strong className="text-studio-cream">Cause:</strong> {ch.cause}</p>
                    <p><strong className="text-studio-cream">Resolution:</strong> {ch.solution}</p>
                    <p className="italic text-studio-amber/90 font-mono text-[11px]">
                      "Key Takeaway: {ch.learning}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interesting Debug Cases */}
          {detail.bugs && detail.bugs.length > 0 && (
            <div className="pt-6 border-t border-studio-border/30">
              <div className="mb-8">
                <h3 className="title-serif text-2xl font-bold text-studio-cream mb-2">
                  Interesting Debug Cases
                </h3>
                <p className="text-xs text-studio-muted font-sans">
                  Deep traces showing root-cause analysis investigations and browser constraints.
                </p>
              </div>

              <div className="space-y-6">
                {detail.bugs.map((bug, idx) => (
                  <div key={idx} className="bg-studio-dark/50 border border-studio-border p-5 rounded-lg">
                    <h4 className="text-xs font-mono text-studio-amber uppercase mb-3 font-semibold flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" />
                      BUG: {bug.title}
                    </h4>
                    <div className="space-y-3 font-sans text-xs text-studio-muted">
                      <p><strong className="text-studio-cream">Investigation:</strong> {bug.investigation}</p>
                      <p><strong className="text-studio-cream font-mono">Root Cause:</strong> {bug.cause}</p>
                      <p><strong className="text-studio-cream">Fix:</strong> {bug.solution}</p>
                      <p className="italic text-studio-amber/95 font-mono text-[11px] bg-studio-black p-3 border border-studio-border rounded mt-2">
                        Lessons: {bug.learning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* --- PERFORMANCE & ROADMAP --- */}
        <section className="mb-20 border-t border-studio-border pt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Performance items */}
          <div>
            <h3 className="title-serif text-xl font-bold text-studio-cream mb-4">
              Performance Optimization
            </h3>
            <ul className="space-y-3 text-xs text-studio-muted font-sans">
              {detail.performance.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-studio-amber mt-1.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future roadmap */}
          <div>
            <h3 className="title-serif text-xl font-bold text-studio-cream mb-4">
              Future Roadmap
            </h3>
            <ul className="space-y-3 text-xs text-studio-muted font-sans">
              {detail.futureImprovements.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-studio-amber mt-1.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- CONTINUE WATCHING (RELATED PROJECTS) --- */}
        <section className="border-t border-studio-border pt-16">
          <div className="mb-8">
            <span className="mono-code text-[9px] text-studio-amber uppercase tracking-widest block mb-1">
              CONTINUE THE EXPERIENCE
            </span>
            <h3 className="title-serif text-2xl font-bold text-studio-cream">
              Continue Watching
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group flex flex-col justify-between bg-studio-card border border-studio-border p-6 rounded-lg hover:border-studio-amber/40 hover:scale-[1.01] transition-all duration-300 shadow-lg text-left"
              >
                <div>
                  <span className="mono-code text-[9px] tracking-wider text-studio-amber uppercase block mb-1.5">
                    {p.category} // {p.duration}
                  </span>
                  <h4 className="title-serif text-lg font-bold text-studio-cream group-hover:text-studio-amber transition-colors mb-2">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-studio-muted leading-relaxed font-sans line-clamp-2">
                    {p.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-studio-amber font-semibold mt-4">
                  <span>Open Chapter</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default ProjectDetail;
