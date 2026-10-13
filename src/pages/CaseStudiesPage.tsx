import React, { useState } from 'react';
import { conceptCaseStudies } from '../data/caseStudiesData';
import { AppRoute } from '../utils/router';
import { Info, Check } from 'lucide-react';

interface CaseStudiesPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ navigate }) => {
  const [activePlatform, setActivePlatform] = useState<string>('All');

  const platforms = ['All', 'Discord', 'Twitch', 'YouTube', 'Cross-Platform'];

  const filteredStudies = conceptCaseStudies.filter((study) => {
    if (activePlatform === 'All') return true;
    return study.platform === activePlatform;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Proven Methodologies & Performance
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Concept Case Studies & Architecture Breakdown
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Deep dives into real creator challenges, technical architectures, and measured performance outcomes across Discord communities, Twitch streams, and YouTube channels.
        </p>
      </div>

      {/* Ethical Portfolio Policy */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d1322] flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
        <Info className="w-5 h-5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-slate-900 dark:text-white">Ethical Portfolio Policy</p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            All case studies on this page represent Superb Apex Digital standardized production pipelines, technical checklists, and measurable impact models. We do not publish NDA-protected client data or fabricate unverified statistics.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => setActivePlatform(p)}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activePlatform === p
                ? 'bg-blue-600 dark:bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Studies List */}
      <div className="space-y-12">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-indigo-400 font-semibold">
                  <span>{study.platform} Focus</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.clientType}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{study.title}</h2>
              </div>
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
                Turnaround: <strong className="text-slate-900 dark:text-white">{study.timeline}</strong>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                  The Client Challenge:
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Our Engineering & Creative Solution:
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Outcomes & Metrics Strip */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-indigo-300">
                Measurable Project Impact:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {study.concreteOutcomes.map((o, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">{o.metric}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{o.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Delivered */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Deliverables Delivered by Superb Apex Digital:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {study.deliverablesDelivered.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>{study.testimonialNote}</span>
              <button
                onClick={() => navigate('quote')}
                className="font-semibold text-blue-600 dark:text-indigo-400 hover:underline flex items-center gap-1 transition-colors"
              >
                Inquire for Similar Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
