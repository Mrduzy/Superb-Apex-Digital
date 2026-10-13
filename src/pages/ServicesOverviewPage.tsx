import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { AppRoute } from '../utils/router';
import { ArrowRight, Check, Search, ShieldCheck } from 'lucide-react';

interface ServicesOverviewProps {
  navigate: (route: AppRoute | string) => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewProps> = ({ navigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Service Capabilities
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Specialized Digital Solutions for Creators & Communities
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore our complete roster of services. Whether you require a one-time server build, turnkey live broadcast branding, high-retention video editing, or ongoing monthly moderation.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search services, deliverables, or keywords..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>All packages include master source files & commercial rights</span>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[260px] bg-slate-100 dark:bg-slate-900">
              <img
                src={service.imageSrc}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-blue-600 dark:text-indigo-400 font-semibold">Pillar 0{idx + 1}</span>
                  <span className="text-slate-500 dark:text-slate-400">Available as One-Time & Monthly</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Categories sample */}
                <div className="pt-2">
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Key Offerings:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {service.categories[0]?.items.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action & Packages Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span>Packages from </span>
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    {service.packages[0]?.price}
                  </strong>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate('quote')}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
                  >
                    Get Estimate
                  </button>
                  <button
                    onClick={() => navigate(service.slug)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    Explore Service Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
