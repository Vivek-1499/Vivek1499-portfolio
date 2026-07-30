import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Radio, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { SEO } from '../components/SEO';
import { RetroTV } from '../components/RetroTV';

export function Achievements() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  };

  const participations = achievements.filter((a) => a.category === 'Participation' || a.category === 'Hackathon');
  const certifications = achievements.filter((a) => a.category === 'Certification');
  const education = achievements.filter((a) => a.category === 'Education');

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title="Participations & Milestones"
        description="Hackathon participations, certifications, and education milestones for Vivek Pandit — Smart India Hackathon 2023, Coursera certs, B.Tech IT at KJ Somaiya."
      />

      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="mono-code text-[11px] tracking-[0.25em] text-studio-amber uppercase block mb-2">
            CHAPTER 05 // MILESTONES
          </span>
          <h1 className="title-serif text-4xl md:text-6xl font-bold text-studio-cream">
            Participations & Milestones
          </h1>
          <div className="w-20 h-[2px] bg-studio-amber mt-4" />
        </motion.div>

        <motion.section {...fadeInUp} className="mb-12">
          <p className="text-sm text-studio-muted leading-relaxed font-sans max-w-2xl">
            A log of hackathon participations, certifications, and education milestones — honest progress, not inflated wins.
          </p>
        </motion.section>

        {/* Retro TV — click entire unit to change channel */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <RetroTV />
        </motion.section>

        {/* Participations */}
        {participations.length > 0 && (
          <motion.section {...fadeInUp} className="mb-20 border-t border-studio-border pt-16">
            <div className="flex items-center gap-3 mb-6">
              <Radio className="w-5 h-5 text-studio-amber" />
              <h2 className="title-serif text-2xl font-bold text-studio-cream">Participations</h2>
            </div>

            <div className="space-y-4">
              {participations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-studio-card border border-studio-border p-6 rounded-lg hover:border-studio-amber/30 transition-colors"
                >
                  <span className="mono-code text-[9px] text-studio-amber uppercase">
                    {item.category} // {item.date}
                  </span>
                  <h3 className="text-sm font-bold text-studio-cream mt-1">{item.title}</h3>
                  <span className="text-[10px] text-studio-muted font-mono block mt-0.5">{item.organization}</span>
                  <p className="text-xs text-studio-muted leading-relaxed font-sans mt-2">{item.description}</p>
                  {item.details && (
                    <ul className="mt-3 space-y-1">
                      {item.details.map((d, i) => (
                        <li key={i} className="text-[10px] text-studio-muted font-sans flex items-start gap-2">
                          <span className="text-studio-amber mt-0.5">▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Education */}
        <motion.section {...fadeInUp} className="mb-20 border-t border-studio-border pt-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-studio-amber" />
            <h2 className="title-serif text-2xl font-bold text-studio-cream">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-studio-card border border-studio-border p-6 rounded-lg space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="mono-code text-[10px] text-studio-amber uppercase block mb-1">{edu.date}</span>
                    <h3 className="text-base font-bold text-studio-cream">{edu.title}</h3>
                    <p className="text-xs text-studio-muted font-mono mt-0.5">{edu.organization}</p>
                  </div>
                  <span className="self-start sm:self-center px-2 py-0.5 bg-studio-black border border-studio-border text-[9px] font-mono text-studio-cream rounded">
                    {edu.details?.[0] || 'GPA'}
                  </span>
                </div>
                <p className="text-xs text-studio-muted leading-relaxed font-sans">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications as VHS tape labels */}
        <motion.section {...fadeInUp} className="mb-24 border-t border-studio-border pt-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-studio-amber" />
            <h2 className="title-serif text-2xl font-bold text-studio-cream">Certifications</h2>
            <span className="text-[9px] font-mono text-studio-muted uppercase tracking-widest ml-auto hidden sm:inline">
              VHS Archive
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative bg-[#1a1528] border border-studio-border rounded overflow-hidden hover:border-studio-amber/40 transition-colors"
              >
                {/* VHS spine label */}
                <div className="h-3 bg-gradient-to-r from-[#2a2040] via-[#3d2f5c] to-[#2a2040] border-b border-studio-border/50 flex items-center px-2 gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-700/80" />
                  <span className="text-[6px] font-mono text-studio-muted uppercase tracking-[0.25em]">VHS · CERT</span>
                </div>

                <div className="p-4 flex gap-3">
                  {/* Tape reel circles */}
                  <div className="hidden sm:flex flex-col justify-center gap-1 shrink-0 opacity-40 group-hover:opacity-70 transition-opacity">
                    <div className="w-6 h-6 rounded-full border-2 border-studio-border/60 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-studio-border/80" />
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-studio-border/60 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-studio-border/80" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <span className="mono-code text-[8px] text-studio-amber uppercase">{cert.date}</span>
                    <h3 className="text-xs font-bold text-studio-cream mt-0.5 leading-snug">{cert.title}</h3>
                    <span className="text-[9px] text-studio-muted font-mono block mt-1 truncate">{cert.organization}</span>
                    <p className="text-[10px] text-studio-muted leading-relaxed font-sans mt-2 line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="border-t border-studio-border pt-16 text-center">
          <span className="mono-code text-[10px] text-studio-amber uppercase tracking-widest font-semibold block mb-4">
            CHAPTER 06 // CONNECT
          </span>
          <h3 className="title-serif text-2xl md:text-4xl font-bold text-studio-cream mb-8">
            Initiate Professional Contact
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
          >
            <span>Connect Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
export default Achievements;
