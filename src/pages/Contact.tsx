import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, CheckCircle, RotateCcw, Clapperboard, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // End Credits activation state
  const [showCredits, setShowCredits] = useState(false);
  const [showBeginText, setShowBeginText] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        // Automatically trigger cinematic credits after successful message delivery!
        setTimeout(() => {
          triggerCredits();
        }, 1500);
      } else {
        setIsSubmitting(false);
        setErrorMessage(
          result.error || result.message || 'Failed to deliver message via Resend. Please check your setup or use the direct email button below.'
        );
      }
    } catch {
      setIsSubmitting(false);
      setErrorMessage(
        'Unable to connect to email endpoint. Please reach out directly using the email button below.'
      );
    }
  };

  const handleDirectEmailFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const triggerCredits = () => {
    setShowCredits(true);
    // Sequence the text reveal at the end of scroll
    setTimeout(() => {
      setShowBeginText(true);
    }, 8500);
  };

  const resetCredits = () => {
    setShowCredits(false);
    setShowBeginText(false);
    setSubmitSuccess(false);
  };

  return (
    <div className="relative min-h-screen bg-studio-black pt-28 pb-16 px-6 page-enter-opacity">
      <SEO
        title="Contact Vivek"
        description="Get in touch with Vivek Pandit. Open to full-stack developer opportunities, SDE internships, and engineering collaborations."
      />

      <div className="max-w-4xl mx-auto">
        {/* Main Interface wrapper (hide if credits are playing) */}
        {!showCredits && (
          <div>
            {/* Header */}
            <div className="mb-16">
              <span className="mono-code text-[11px] tracking-[0.25em] text-studio-amber uppercase block mb-2">
                CHAPTER 06 // CONNECT
              </span>
              <h1 className="title-serif text-4xl md:text-6xl font-bold text-studio-cream">
                Let's Build Together
              </h1>
              <div className="w-20 h-[2px] bg-studio-amber mt-4" />
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              
              {/* Contact Info & Availability */}
              <div className="md:col-span-5 space-y-8">
                <p className="text-xs text-studio-muted leading-relaxed font-sans">
                  Whether you are a recruiter looking for SDE interns, a founder starting a product, or a developer wanting to collaborate on WebRTC platforms, my inbox is open.
                </p>

                {/* Availability block */}
                <div className="p-5 bg-studio-card/80 border border-studio-border rounded-lg">
                  <h3 className="mono-code text-xs text-studio-amber uppercase mb-3 tracking-widest font-semibold flex items-center gap-1.5">
                    <Clapperboard className="w-4 h-4" />
                    Availability
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-mono tracking-widest mb-4 font-semibold uppercase flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {personalInfo.status}
                  </p>
                  <span className="text-[10px] text-studio-muted font-mono block mb-1">Preferred Roles:</span>
                  <div className="flex flex-wrap gap-1">
                    {personalInfo.preferredRoles.map((role) => (
                      <span key={role} className="text-[9px] font-mono bg-studio-black border border-studio-border text-studio-cream px-2 py-0.5 rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Instant AI Assistant Card */}
                {personalInfo.aiAssistantUrl && (
                  <div className="p-5 bg-gradient-to-br from-studio-amber/15 via-studio-card/90 to-studio-card/60 border border-studio-amber/40 rounded-lg">
                    <h3 className="mono-code text-xs text-studio-amber uppercase mb-2 tracking-widest font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-studio-amber animate-pulse" />
                      Portfolio AI Assistant
                    </h3>
                    <p className="text-xs text-studio-muted mb-4 font-sans leading-relaxed">
                      Have questions about my projects, system design, or work experience? Query my AI assistant directly.
                    </p>
                    <a
                      href={personalInfo.aiAssistantUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-wider uppercase rounded hover:bg-studio-gold transition-colors font-mono"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Launch AI Assistant</span>
                    </a>
                  </div>
                )}

                {/* Contact list */}
                <ul className="space-y-4 font-mono text-xs">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-studio-amber shrink-0" />
                    <a href={`mailto:${personalInfo.email}`} className="text-studio-cream hover:text-studio-amber transition-colors">
                      {personalInfo.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-studio-amber shrink-0" />
                    <span className="text-studio-muted">{personalInfo.location}</span>
                  </li>
                  {(personalInfo.github || personalInfo.linkedin) && (
                    <li className="flex items-center gap-4 pt-4 border-t border-studio-border/30">
                      {personalInfo.github && (
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-studio-cream/70 hover:text-studio-amber transition-colors flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          <span>GitHub</span>
                        </a>
                      )}
                      {personalInfo.linkedin && (
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-studio-cream/70 hover:text-studio-amber transition-colors flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </li>
                  )}
                </ul>
              </div>

              {/* Form panel */}
              <div className="md:col-span-7 bg-studio-card/30 border border-studio-border p-6 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="space-y-2">
                    <label htmlFor="name" className="mono-code text-[10px] text-studio-amber uppercase tracking-wider block font-semibold">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Christopher Nolan"
                      className="w-full bg-studio-black border border-studio-border rounded p-3 text-studio-cream focus:border-studio-amber focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="mono-code text-[10px] text-studio-amber uppercase tracking-wider block font-semibold">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. chris@example.com"
                      className="w-full bg-studio-black border border-studio-border rounded p-3 text-studio-cream focus:border-studio-amber focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="mono-code text-[10px] text-studio-amber uppercase tracking-wider block font-semibold">
                      Message Script
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your project or internship proposition here..."
                      className="w-full bg-studio-black border border-studio-border rounded p-3 text-studio-cream focus:border-studio-amber focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Alert / Fallback */}
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 rounded text-red-300 space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed">{errorMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleDirectEmailFallback}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-900/50 hover:bg-red-800/60 border border-red-500/50 rounded text-[10px] font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
                      >
                        <span>Send via Email Client</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Honeypot field for bot protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-studio-amber text-studio-black rounded text-xs tracking-widest uppercase font-semibold hover:bg-studio-gold disabled:opacity-50 transition-all cursor-pointer duration-300"
                  >
                    {isSubmitting ? (
                      <span>Broadcasting to Inbox...</span>
                    ) : submitSuccess ? (
                      <span className="flex items-center gap-1.5 text-emerald-950 font-bold">
                        <CheckCircle className="w-4 h-4" /> Message Delivered to Inbox
                      </span>
                    ) : (
                      <>
                        <span>Submit Message Script</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-3 text-[10px] text-studio-muted font-mono text-center">
                  Direct dispatch to <span className="text-studio-cream">{personalInfo.email}</span>
                </p>

                {/* Explicit trigger credits button */}
                <div className="mt-6 border-t border-studio-border/30 pt-4 text-center">
                  <button
                    onClick={triggerCredits}
                    className="text-[10px] font-mono uppercase tracking-widest text-studio-muted hover:text-studio-amber transition-colors cursor-pointer"
                  >
                    [ Play Closing Credits ]
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- FULLSCREEN END CREDITS ANIMATION --- */}
        <AnimatePresence>
          {showCredits && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#020202] z-[9999] flex flex-col justify-between p-6 select-none overflow-hidden"
            >
              {/* Film Grain overlay */}
              <div className="film-grain-container" />

              {/* Scrolling wrapper */}
              <div className="flex-1 flex flex-col items-center justify-center relative w-full overflow-hidden">
                <div className="absolute top-[120%] animate-[creditsScroll_8s_linear_forwards] w-full max-w-sm text-center flex flex-col gap-12 font-mono text-[11px] tracking-wider text-studio-cream/80">
                  <style>{`
                    @keyframes creditsScroll {
                      0% { top: 110%; }
                      100% { top: -140%; }
                    }
                  `}</style>
                  
                  <div>
                    <span className="text-studio-amber uppercase text-[9px] block mb-1">DIRECTED BY</span>
                    <span className="text-sm font-bold tracking-widest text-studio-cream">{personalInfo.name}</span>
                  </div>

                  <div>
                    <span className="text-studio-amber uppercase text-[9px] block mb-1">WRITTEN BY</span>
                    <span className="text-sm font-bold tracking-widest text-studio-cream">CURIOSITY & PASSION</span>
                  </div>

                  <div>
                    <span className="text-studio-amber uppercase text-[9px] block mb-1">STORY LAYOUT & DESIGN</span>
                    <span className="text-sm font-bold tracking-widest text-studio-cream">TECHNICAL CRAFTSMANSHIP</span>
                  </div>

                  <div>
                    <span className="text-studio-amber uppercase text-[9px] block mb-1">POWERED BY</span>
                    <span className="text-xs leading-relaxed text-studio-cream">
                      REACT 19<br />
                      THREE.JS & FIBER<br />
                      TAILWIND CSS V4<br />
                      FRAMER MOTION<br />
                      COFFEE BEANS
                    </span>
                  </div>

                  <div>
                    <span className="text-sm tracking-widest text-studio-amber mt-8 font-bold">THE END.</span>
                  </div>
                </div>

                {/* Final Loop text reveal (at end of scroll) */}
                {showBeginText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-center space-y-6 max-w-xs z-10"
                  >
                    <p className="text-xs italic text-studio-muted font-mono leading-relaxed">
                      "Or perhaps...<br />this is only the beginning."
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/"
                        onClick={resetCredits}
                        className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-studio-amber text-studio-black rounded text-[10px] tracking-widest uppercase font-mono font-bold hover:bg-studio-gold transition-colors interactive-hover"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Return to Studio</span>
                      </Link>
                      <button
                        onClick={resetCredits}
                        className="text-[9px] font-mono text-studio-muted hover:text-studio-cream transition-colors uppercase cursor-pointer"
                      >
                        [ Re-open Form ]
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default Contact;
