import React from 'react';
import { agencyProcessStages } from '../data/processData';
import { AppRoute } from '../utils/router';
import { Check } from 'lucide-react';

interface ProcessPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ navigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Structured Delivery Framework
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          How We Work: Our 5-Stage Project Lifecycle
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Predictable milestones, dedicated sprint check-ins, and zero-defect QA. Here is exactly what happens from the moment you submit an inquiry to Superb Apex Digital through to final handover.
        </p>
      </div>

      {/* 5-Stage Deep Dive Cards */}
      <div className="space-y-8">
        {agencyProcessStages.map((stage) => (
          <div
            key={stage.step}
            className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black font-mono text-blue-600 dark:text-indigo-400">
                  {stage.step}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{stage.title}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stage.summary}</p>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
                Estimated Duration: <strong className="text-slate-900 dark:text-white">{stage.duration}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Client Actions */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  What You Do in This Stage:
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {stage.clientActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agency Deliverables */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  What Superb Apex Digital Delivers:
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {stage.agencyDeliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Strip */}
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ready to begin Stage 01?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Submit your channel or community brief. Superb Apex Digital responds with a full Scope of Work within 24 hours.
          </p>
        </div>
        <button
          onClick={() => navigate('quote')}
          className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
        >
          Initiate Discovery Brief →
        </button>
      </div>
    </div>
  );
};
