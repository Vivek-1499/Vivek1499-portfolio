import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, Heart } from 'lucide-react';
import { personalInfo, journeyTimeline } from '../data/portfolioData';
import { SEO } from '../components/SEO';
import { StudioMic } from '../components/StudioMic';

export function About() {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  
  // Inception reality fold toggle state
  const [isInceptionFolded, setIsInceptionFolded] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title="About Vivek"
        description="Learn more about Vivek Pandit's journey in software engineering, his values of curiosity and craftsmanship, and what motivates him to build software products."
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
            <span className="kicker block mb-3">
              About
            </span>
            <h1 className="title-serif text-4xl md:text-6xl text-studio-cream">
              Vivek, off the resume
            </h1>
          <div className="w-20 h-[2px] bg-studio-amber mt-4" />
        </div>

        {/* Narrative Introduction - Hollywood Screenplay Script Layout */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Screenplay block */}
            <div className="lg:col-span-8 border border-studio-border p-6 sm:p-8 space-y-5 text-studio-cream/90 leading-relaxed max-w-2xl">
              <div className="text-studio-amber text-xs font-mono border-b border-studio-border/50 pb-3 mb-4 flex items-center gap-2">
                <StudioMic size={14} />
                <span>Director's log</span>
              </div>

              <div className="space-y-4">
                <p className="text-studio-cream font-sans text-base">
                  Hey, I'm Vivek. I'm a B.Tech IT student at KJ Somaiya (Class of 2026, GPA 8.75) who likes building real-time applications and full-stack systems.
                </p>

                <p className="text-studio-muted font-sans text-base">
                  During my internship at <span className="text-studio-cream font-medium">Mehery Soccom</span>, I architected a production P2P video-calling platform using Vue.js and Node.js. ICE negotiation, STUN/TURN fallbacks, and network transitions had to stay coordinated or the call dropped. We got setups down to sub-second speeds and cut Vue Composition API re-renders by about 35%.
                </p>

                <p className="text-studio-muted font-sans text-base">
                  Before that, at <span className="text-studio-cream font-medium">CommonWealth</span>, I worked on GPMS, a public-sector platform. I built and shipped 15+ reusable React components (cutting UI dev time by ~30%) and established Git branching standards that reduced PR review times from 48 hours to under 12.
                </p>

                <p className="text-studio-muted font-sans text-base">
                  When I'm not interning, I build side projects to solve my own problems. I built <span className="text-studio-cream font-medium">Saveior</span>, a finance tracker that uses Gemini Vision to auto-extract receipt data, <span className="text-studio-cream font-medium">SoMo</span>, a MERN social platform with sub-100ms real-time engagement, a <span className="text-studio-cream font-medium">MySQL data warehouse</span> (Medallion / star schema), and a <span className="text-studio-cream font-medium">LangGraph agent</span> that grades retrieved docs before it answers.
                </p>

                <p className="text-studio-muted font-sans text-base">
                  Outside of coding, I'm a cinematography enthusiast, a playlist curator, and a constant reader of technical docs.
                </p>
              </div>
              
              <div className="border-t border-studio-border/50 pt-3 flex justify-between text-[8px] text-studio-muted select-none">
                <span>SCENE 01</span>
                <span>TAKE 02</span>
              </div>
            </div>

            {/* Cinematic Slate Card Info */}
            <div className="lg:col-span-4 bg-studio-card border border-studio-border p-6 rounded-lg text-xs font-mono flex flex-col gap-3">
              <div className="text-studio-amber uppercase tracking-widest font-semibold border-b border-studio-border pb-2 text-center">
                [ PRODUCTION DATA ]
              </div>
              <div className="flex justify-between border-b border-studio-border/40 pb-1">
                <span className="text-studio-muted">NAME:</span>
                <span className="text-studio-cream">{personalInfo.name}</span>
              </div>
              <div className="flex justify-between border-b border-studio-border/40 pb-1">
                <span className="text-studio-muted">ROLE:</span>
                <span className="text-studio-cream">SDE / Full Stack</span>
              </div>
              <div className="flex justify-between border-b border-studio-border/40 pb-1">
                <span className="text-studio-muted">STATUS:</span>
                <span className="text-emerald-400 font-semibold">{personalInfo.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-studio-muted">LOCATION:</span>
                <span className="text-studio-cream">{personalInfo.location}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Interactive Growth Timeline */}
        <section className="mb-24 border-t border-studio-border pt-16 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="title-serif text-2xl md:text-3xl font-bold text-studio-cream mb-2">
                Timeline of Growth
              </h2>
              <p className="text-xs text-studio-muted font-sans">
                Click on each year milestone to expand the detailed chapter details.
              </p>
            </div>

            {/* INCEPTION REALITY FOLD TOGGLE BUTTON */}
            <div>
              <button
                onClick={() => setIsInceptionFolded(!isInceptionFolded)}
                className="px-4 py-2 border border-studio-border hover:border-studio-amber/40 rounded text-[10px] tracking-widest uppercase font-mono text-studio-cream hover:text-studio-amber cursor-pointer transition-all duration-300"
              >
                {isInceptionFolded ? '[ Snapping Level 1 ]' : '[ Kick / Fold Reality ]'}
              </button>
            </div>
          </div>

          {/* Inception 3D Folding Crease Container */}
          <div className="relative my-8" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
            
            {/* Warning overlay on inversion */}
            {isInceptionFolded && (
              <div className="absolute inset-0 z-30 bg-studio-black/20 backdrop-blur-[0.5px] pointer-events-none flex items-center justify-center">
                <span className="mono-code text-[9px] text-studio-gold bg-studio-black/90 p-2 border border-studio-border rounded shadow-2xl animate-pulse">
                  INCEPTION ERROR // REALITY FOLDED AT LEVEL 2
                </span>
              </div>
            )}

            {/* Top Plane: Bends Downwards */}
            <div
              style={{
                transform: isInceptionFolded ? 'rotateX(26deg) translateZ(-10px)' : 'none',
                transformOrigin: 'bottom center',
                transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                transformStyle: 'preserve-3d',
              }}
              className="relative pl-8 border-l border-studio-border space-y-12 pb-6"
            >
              {journeyTimeline.slice(0, 3).map((item, index) => {
                const isActive = activeMilestone === index;
                return (
                  <div key={index} className="relative">
                    {/* Bullet point indicator */}
                    <button
                      onClick={() => setActiveMilestone(isActive ? null : index)}
                      className={`absolute left-[-38px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-studio-amber border-studio-amber scale-125'
                          : 'bg-studio-black border-studio-border hover:border-studio-amber/60'
                      }`}
                      aria-expanded={isActive}
                      aria-label={`Expand timeline details for ${item.year}`}
                    />

                    {/* Year Tag */}
                    <span className="mono-code text-[11px] tracking-wider text-studio-amber font-bold block mb-1">
                      {item.year}
                    </span>

                    {/* Title & Description */}
                    <h3
                      onClick={() => setActiveMilestone(isActive ? null : index)}
                      className="text-base font-bold text-studio-cream cursor-pointer hover:text-studio-amber transition-colors flex items-center gap-2"
                    >
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono text-studio-muted tracking-widest uppercase">
                        {isActive ? '[ Collapse ]' : '[ Click to Expand ]'}
                      </span>
                    </h3>

                    <p className="text-xs text-studio-muted leading-relaxed mt-2 max-w-2xl font-sans">
                      {item.description}
                    </p>

                    {/* Dynamic expanded details */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-studio-card/85 border border-studio-border rounded-lg text-xs text-studio-muted leading-relaxed font-sans max-w-2xl"
                      >
                        {index === 0 && (
                          <span>Dived headfirst into programming architectures. Learned standard internet layers, HTTP lifecycles, and spent nights debugging responsive layout panels and basic Javascript event listeners.</span>
                        )}
                        {index === 1 && (
                          <span>Joined my first developer internship at MeshCraft. Handled analytics charts, migrated legacy components to Vite, and learned context boundaries to stop UI render lag while working on live node grids.</span>
                        )}
                        {index === 2 && (
                          <span>Landed a full stack internship at CommonWealth. Designed secure AWS upload flows, optimized PostgreSQL indexes, and developed collaborative spreadsheet synchronization models using WebSockets.</span>
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Folding Valley Crease bar */}
            {isInceptionFolded && (
              <div className="w-full flex items-center justify-center my-4 relative z-20 pointer-events-none select-none">
                <div className="w-full h-[1px] bg-studio-gold/30 absolute left-0" />
                <span className="mono-code text-[7.5px] tracking-[0.25em] text-studio-gold bg-studio-black px-2 py-0.5 border border-studio-border rounded relative z-10">
                  CREASE FOLD // DEPTH 0.8
                </span>
              </div>
            )}

            {/* Bottom Plane: Bends Upwards */}
            <div
              style={{
                transform: isInceptionFolded ? 'rotateX(-26deg) translateZ(-10px)' : 'none',
                transformOrigin: 'top center',
                transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                transformStyle: 'preserve-3d',
              }}
              className="relative pl-8 border-l border-studio-border space-y-12 pt-6"
            >
              {journeyTimeline.slice(3).map((item, index) => {
                const timelineIdx = index + 3;
                const isActive = activeMilestone === timelineIdx;
                return (
                  <div key={timelineIdx} className="relative">
                    {/* Bullet point indicator */}
                    <button
                      onClick={() => setActiveMilestone(isActive ? null : timelineIdx)}
                      className={`absolute left-[-38px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-studio-amber border-studio-amber scale-125'
                          : 'bg-studio-black border-studio-border hover:border-studio-amber/60'
                      }`}
                      aria-expanded={isActive}
                      aria-label={`Expand timeline details for ${item.year}`}
                    />

                    {/* Year Tag */}
                    <span className="mono-code text-[11px] tracking-wider text-studio-amber font-bold block mb-1">
                      {item.year}
                    </span>

                    {/* Title & Description */}
                    <h3
                      onClick={() => setActiveMilestone(isActive ? null : timelineIdx)}
                      className="text-base font-bold text-studio-cream cursor-pointer hover:text-studio-amber transition-colors flex items-center gap-2"
                    >
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono text-studio-muted tracking-widest uppercase">
                        {isActive ? '[ Collapse ]' : '[ Click to Expand ]'}
                      </span>
                    </h3>

                    <p className="text-xs text-studio-muted leading-relaxed mt-2 max-w-2xl font-sans">
                      {item.description}
                    </p>

                    {/* Dynamic expanded details */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-studio-card/85 border border-studio-border rounded-lg text-xs text-studio-muted leading-relaxed font-sans max-w-2xl"
                      >
                        {timelineIdx === 3 && (
                          <span>Spearheaded a production WebRTC calling pipeline at Mehery. fine-tuned ICE candidate generation pathways to bypass NAT/firewall blocks, reducing call connection drops by 42%.</span>
                        )}
                        {timelineIdx === 4 && (
                          <span>Exploring distributed scaling parameters, WebRTC SFUs, custom shaders, and WebGL environments. Looking to join a product-focused engineering team where craftsmanship matters.</span>
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Software Engineering & Philosophy */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-studio-border pt-16">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-studio-amber" />
              <h3 className="title-serif text-xl font-bold text-studio-cream">Why Software?</h3>
            </div>
            <p className="text-xs text-studio-muted leading-relaxed font-sans">
              To me, coding is the closest thing we have to magic. You write characters in a text editor, compile them, and instantly create an interactive system used by thousands of people. It provides a unique balance of rigorous engineering parameters, database schemas, and visual UI design. Fusing this logical depth with visual creativity is what drives me to sit in front of my IDE daily.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-studio-amber" />
              <h3 className="title-serif text-xl font-bold text-studio-cream">Learning Philosophy</h3>
            </div>
            <p className="text-xs text-studio-muted leading-relaxed font-sans">
              I learn by building and breaking. Reading documentation is fine, but true engineering maturity is developed when a system crashes in production due to a race condition or a webhook timeout, and you have to trace the network logs to figure out the root cause. I value documentation rigor, clear commit histories, and writing code that another developer can easily understand.
            </p>
          </motion.div>
        </section>

        {/* Personal Interests */}
        <section className="mb-24 border-t border-studio-border pt-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-5 h-5 text-studio-amber" />
              <h2 className="title-serif text-2xl md:text-3xl font-bold text-studio-cream">Personal Focus & Interests</h2>
            </div>
            <p className="text-xs text-studio-muted font-sans">
              Humanizing the engineer. What shapes my creative lens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-studio-dark/50 border border-studio-border p-5 rounded">
              <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-wider font-semibold">Cinematography</h4>
              <p className="text-xs text-studio-muted font-sans leading-relaxed">
                Fascinated by screen layouts, editing pacing, and visual storytelling. I apply these pacing parameters to Web transitions so they feel natural rather than snappy.
              </p>
            </div>
            <div className="bg-studio-dark/50 border border-studio-border p-5 rounded">
              <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-wider font-semibold">Anime & Art</h4>
              <p className="text-xs text-studio-muted font-sans leading-relaxed">
                Appreciating visual composition, contrast lines, and minimalist sketches. It influences my preference for matte black dark modes and amber highlight accents.
              </p>
            </div>
            <div className="bg-studio-dark/50 border border-studio-border p-5 rounded">
              <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-wider font-semibold flex items-center gap-1.5">
                <StudioMic size={12} /> Music
              </h4>
              <p className="text-xs text-studio-muted font-sans leading-relaxed mb-2">
                {personalInfo.musicNote}
              </p>
              <div className="flex flex-wrap gap-1">
                {personalInfo.favoriteGenres.map((genre) => (
                  <span key={genre} className="text-[8px] font-mono bg-studio-black border border-studio-border/60 text-studio-cream/70 px-1.5 py-0.5 rounded">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-studio-dark/50 border border-studio-border p-5 rounded">
              <h4 className="mono-code text-[10px] text-studio-amber uppercase mb-2 tracking-wider font-semibold">Books & Docs</h4>
              <p className="text-xs text-studio-muted font-sans leading-relaxed">
                Reading system architecture articles, open-source documentation, and technical journals. Keeping up with modern specifications is a habit.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="border-t border-studio-border pt-16 text-center">
          <motion.div {...fadeInUp}>
            <span className="mono-code text-[10px] text-studio-amber uppercase tracking-widest font-semibold block mb-4">
              CONTINUE THE NARRATIVE
            </span>
            <h3 className="title-serif text-2xl md:text-4xl font-bold text-studio-cream mb-8">
              Explore Professional Experience
            </h3>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
            >
              <span>View Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
export default About;
