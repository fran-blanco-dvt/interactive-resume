import React from 'react';
import { Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">
              FB
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {personalInfo.role} • {personalInfo.badge}
              </div>
            </div>
          </div>

          {/* Socials & LinkedIn */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Francisco Blanco LinkedIn Profile"
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-850 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll to top"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Francisco Blanco Fernández. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
