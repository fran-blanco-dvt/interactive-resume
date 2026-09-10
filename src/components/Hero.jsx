import React from 'react';
import { Download, Mail, MapPin, Linkedin, Sparkles, ExternalLink, ArrowRight, Award } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Hero({ onDownloadPdf }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-sky-400/10 to-indigo-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Text & Intro */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* GDE Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 shadow-sm animate-pulse-slow">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{personalInfo.badge}</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-600 dark:text-slate-400 font-normal">{personalInfo.badgeDomain}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.role}
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.tagline}. Dedicated to architecting enterprise cloud scalability, modernizing infrastructure, and driving generative AI adoption.
            </p>

            {/* Contact quick metadata */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-500" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                LinkedIn
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onDownloadPdf}
                type="button"
                className="inline-flex items-center justify-center space-x-2.5 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#experience"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Work Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm text-center"
                >
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="relative group">
            {/* Google Cloud themed multi-color border glow */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC04] opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-800">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating verification badge */}
            <div className="absolute bottom-2 right-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-750 shadow-lg flex items-center space-x-1.5 text-xs font-semibold">
              <Award className="w-4 h-4 text-blue-500" />
              <span>GDE 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
