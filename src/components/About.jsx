import React from 'react';
import { UserCheck, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo, education } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Two decades of architectural leadership, customer enablement, and cutting-edge cloud engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Executive Summary</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalInfo.about}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Authorized Google Cloud Trainer
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  GDE 2026 Modern & Enterprise Infra
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Generative AI Leader
                </span>
              </div>
            </div>

            {/* Education Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Education</span>
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {edu.details}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Matrix */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Specialized domains of technical authority and executive advisory:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.coreCompetencies.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
