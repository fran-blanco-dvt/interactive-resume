import React, { useState } from 'react';
import { Award, BadgeCheck, ShieldCheck, Cpu, Terminal, Database, Network, Brain, Sparkles, X, ZoomIn } from 'lucide-react';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const getBadgeIcon = (title) => {
    if (title.includes('GDE') || title.includes('Developer Expert')) return <Award className="w-5 h-5 text-amber-500" />;
    if (title.includes('Gemini') || title.includes('AI') || title.includes('Generative')) return <Brain className="w-5 h-5 text-purple-500" />;
    if (title.includes('Ambassador')) return <Sparkles className="w-5 h-5 text-blue-500" />;
    if (title.includes('Trainer')) return <BadgeCheck className="w-5 h-5 text-emerald-500" />;
    if (title.includes('Security')) return <ShieldCheck className="w-5 h-5 text-red-500" />;
    if (title.includes('Database')) return <Database className="w-5 h-5 text-blue-500" />;
    if (title.includes('Network')) return <Network className="w-5 h-5 text-cyan-500" />;
    if (title.includes('DevOps')) return <Terminal className="w-5 h-5 text-indigo-500" />;
    return <Cpu className="w-5 h-5 text-blue-500" />;
  };

  return (
    <section id="certifications" className="py-16 md:py-24 bg-white/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Google Cloud Certifications & Honors
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Authorized Trainer, Google Developer Expert, Cloud Ambassador, and multi-domain professional cloud & AI credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => cert.image && setSelectedBadge(cert)}
              className={`relative rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between border ${
                cert.image ? 'cursor-pointer group' : ''
              } ${
                cert.highlight
                  ? 'bg-gradient-to-br from-blue-500/5 via-white to-sky-500/5 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/30 border-blue-300/80 dark:border-blue-800/80 shadow-md shadow-blue-500/5 hover:-translate-y-1'
                  : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1'
              }`}
            >
              {cert.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  {cert.image && (
                    <span className="p-1 rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" title="Click to enlarge badge">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
                    Featured
                  </span>
                </div>
              )}

              <div>
                {cert.image ? (
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 p-1.5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                    {getBadgeIcon(cert.title)}
                  </div>
                )}

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                  {cert.specialization}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {cert.issuer}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px]">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Badge Lightbox Modal */}
      {selectedBadge && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedBadge(null)}
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBadge(null)}
              aria-label="Close badge preview"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-inner">
              <img
                src={selectedBadge.image}
                alt={selectedBadge.title}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <span className="inline-block px-2.5 py-0.5 text-[11px] uppercase font-bold tracking-wider rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 mb-2">
              {selectedBadge.issuer} • {selectedBadge.year}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {selectedBadge.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {selectedBadge.specialization}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
