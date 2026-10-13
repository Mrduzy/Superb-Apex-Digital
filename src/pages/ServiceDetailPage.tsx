import React from 'react';
import { servicesData, ServiceDetail } from '../data/servicesData';
import { AppRoute } from '../utils/router';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Lock,
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceSlug: string;
  navigate: (route: AppRoute | string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceSlug, navigate }) => {
  const service: ServiceDetail | undefined =
    servicesData.find((s) => s.slug === serviceSlug) || servicesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('services')}
          className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to All Services
        </button>
      </div>

      {/* Hero Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
            <span>Specialized Service Discipline</span>
            <span aria-hidden="true">·</span>
            <span>Commercial Rights Included</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            {service.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => navigate('quote')}
              className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-lg shadow-blue-600/20 dark:shadow-indigo-600/20 transition-all flex items-center gap-2"
            >
              Request a Quote for {service.title.split(' ')[0]}
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('pricing')}
              className="px-5 py-3 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors shadow-sm"
            >
              Compare All Packages
            </button>
          </div>
        </div>

        {/* Hero Visual Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl aspect-[16/9]">
            <img
              src={service.imageSrc}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-xs text-slate-200 font-mono">
              Deliverable Production Standards
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Capabilities Matrix */}
      <div className="space-y-6">
        <div>
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1">Architecture & Scope</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Included Technical & Creative Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-3 shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-indigo-500" />
                {cat.title}
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Packages */}
      <div className="space-y-6">
        <div>
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1">Packages & Retainers</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Fixed-Price Packages
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Available as one-off projects or ongoing monthly retainers with guaranteed turnaround windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-blue-600 dark:text-indigo-400 uppercase tracking-wider text-[10px]">
                    {pkg.billingType}
                  </span>
                  <span>{pkg.turnaround}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{pkg.name}</h3>
                  <div className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                    {pkg.price}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pkg.description}</p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {pkg.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => navigate('quote')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-sm transition-colors text-center"
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Timeline */}
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d121f] space-y-6">
        <div>
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1">Production Pipeline</div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            How We Deliver Your {service.title.split(' ')[0]} Assets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {service.workflowSteps.map((wf) => (
            <div key={wf.step} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-indigo-400">Step {wf.step}</span>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{wf.title}</h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{wf.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security & Access Protection for this Service */}
      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-semibold text-slate-900 dark:text-white">Delegated Access & Zero Password Policy</p>
            <p className="text-slate-600 dark:text-slate-400 mt-0.5">
              Superb Apex Digital never asks for account credentials or passwords. Configuration is handled through temporary roles, invite permissions, or staging servers.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('security')}
          className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold whitespace-nowrap"
        >
          View Security Protocols →
        </button>
      </div>
    </div>
  );
};
