import React from 'react';
import { X, Printer, Download, ExternalLink, CheckCircle2, Building2, Calendar, MapPin, Mail, Award } from 'lucide-react';
import { personalInfo, experiences, certifications, education } from '../data/resumeData';

export default function ResumePdfModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 no-print">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 shrink-0">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-slate-900 dark:text-white text-base">
              Executive Resume Preview & PDF Export
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href="/resume.pdf"
              download="Francisco_Blanco_Resume.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Direct Download</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet Preview */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-slate-900 font-sans print-page">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-bold text-blue-700 mt-1">
                {personalInfo.role} • {personalInfo.badge}
              </p>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                {personalInfo.badgeDomain} • Google Cloud Trusted Advisor & Authorized Trainer
              </p>
            </div>

            <div className="text-xs text-slate-700 space-y-1 sm:text-right font-medium">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="text-blue-700">
                linkedin.com/in/fran-blanco-63640053
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">
              Executive Profile
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {personalInfo.about}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">
              Professional Experience
            </h2>
            
            {experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-blue-600 pl-4 py-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-bold text-slate-900">
                    {exp.role} <span className="font-semibold text-blue-700">| {exp.company}</span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  {exp.summary}
                </p>
                <ul className="mt-2 space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Badges */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">
              Certifications & Honors
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">{cert.title}</div>
                  <div className="text-[11px] text-slate-500">{cert.specialization}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="pt-2 border-t border-slate-200">
            <h2 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">
              Education
            </h2>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">
                {education[0].degree}
              </span>
              <span className="font-semibold text-slate-500">{education[0].year}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            type="button"
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
          >
            Print / Save as PDF
          </button>
        </div>

      </div>
    </div>
  );
}
