import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, Building2, CheckCircle } from 'lucide-react';
import { experiences } from '../data/resumeData';

export default function Timeline() {
  const [filter, setFilter] = useState('All');
  const [expandedIds, setExpandedIds] = useState([1]); // First/current role open by default

  const companies = ['All', 'Devoteam', 'DXC', 'Hewlett Packard'];

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'All') return true;
    return exp.tag === filter;
  });

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Interactive career timeline spanning enterprise cloud architecture, technical leadership, and virtualization.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 no-print">
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => setFilter(company)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === company
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {company === 'All' ? 'All Roles (2006 - Present)' : company}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 dark:border-slate-800 space-y-10 sm:space-y-12">
          {filteredExperiences.map((item) => {
            const isExpanded = expandedIds.includes(item.id);

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                    item.current
                      ? 'bg-blue-600 border-white dark:border-slate-950 shadow-md shadow-blue-500/50 scale-110'
                      : 'bg-slate-200 dark:bg-slate-800 border-white dark:border-slate-950 group-hover:bg-blue-500'
                  }`}
                >
                  {item.current && (
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  )}
                </div>

                {/* Experience Card */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1">
                      <span className="inline-flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Madrid, Spain
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Key Responsibilities & Highlights */}
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        type="button"
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 no-print"
                      >
                        <span>{isExpanded ? 'Hide Key Achievements' : 'Show Key Achievements & Details'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {/* Expanded Section (or always shown when printing) */}
                      <div className={`mt-3 space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800/80 ${isExpanded ? 'block' : 'hidden print:block'}`}>
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
