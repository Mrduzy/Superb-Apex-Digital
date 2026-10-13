import React from 'react';
import { useBrand } from '../context/BrandContext';
import { AppRoute } from '../utils/router';
import { servicesData } from '../data/servicesData';
import { teamDirectory } from '../data/teamData';
import { conceptCaseStudies } from '../data/caseStudiesData';
import { agencyProcessStages } from '../data/processData';
import { securityProtocols } from '../data/securityData';
import { comprehensiveFAQ } from '../data/faqData';
import heroImg from '../assets/images/hero_digital_studio_1791912757575.jpg';
import {
  Shield,
  ArrowRight,
  Clock,
  CheckCircle2,
  Lock,
  Users,
  FileCheck,
} from 'lucide-react';

interface HomePageProps {
  navigate: (route: AppRoute | string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { brand } = useBrand();

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-10 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                <span>{brand.name}</span>
                <span aria-hidden="true">·</span>
                <span>Creator & Community Agency</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {brand.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {brand.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate('services')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-lg shadow-blue-600/20 dark:shadow-indigo-600/20 transition-all flex items-center gap-2"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('team')}
                  className="px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors shadow-sm"
                >
                  Meet the Superb Apex Team
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-400">
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm">48–72h</p>
                  <p className="mt-0.5">Initial Draft Delivery</p>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm">100%</p>
                  <p className="mt-0.5">Client Asset Ownership</p>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm">Zero Passwords</p>
                  <p className="mt-0.5">Delegated Access Only</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (Professional Studio Photography) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl group aspect-[16/9]">
                <img
                  src={heroImg}
                  alt="Superb Apex Digital central operations studio with multi-monitor video editing and community management floor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 flex items-center justify-between">
                  <span className="font-medium text-white">{brand.name} Operations Studio</span>
                  <span className="text-slate-300">Central Production Floor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust & Operational Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d121f] p-8 md:p-10 transition-colors">
          <div className="max-w-2xl mb-8">
            <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-2">Our Operating Standards</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Built on Transparency, Security, and Predictable Delivery
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              We replace unreliable freelancer communication with structured scopes, clear handovers, and dedicated project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 space-y-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-indigo-500/10 flex items-center justify-center text-blue-600 dark:text-indigo-400">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Itemized Scopes of Work</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every project begins with a binding deliverables checklist. You know the exact file formats, channel counts, and revision allowances upfront.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 space-y-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Zero Password Sharing Standard</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We never ask for account passwords, session cookies, or 2FA codes. All work uses official delegated platform roles and permissions.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 space-y-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Full Commercial Rights</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You receive 100% intellectual property ownership upon final delivery. All master files (.PSD, .AI, .WebM, .ProRes, .JSON) are yours forever.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 space-y-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Predictable Sprint Cadence</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Regular progress updates every 48 hours. No ghosting, no stalled deadlines, and prompt responses within our business hours.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 space-y-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Cross-Platform Synchronization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Keep your Twitch alerts, Discord server channels, YouTube thumbnails, and social carousels unified under one cohesive brand identity.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 space-y-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Structured Handover & Warranty</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Every setup includes an administrator handbook and 7 to 14 days of post-handover warranty support to resolve any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid with High-Fidelity Custom Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-2">Service Capabilities</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Specialized Solutions for the Modern Creator Economy
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              From technical Discord server architecture to broadcast streaming graphics and YouTube post-production.
            </p>
          </div>
          <button
            onClick={() => navigate('services')}
            className="text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
          >
            View All Services Breakdown
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c111d] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-medium text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                  {service.title.split(' ')[0]} Engineering
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">
                    From {service.packages[0]?.price || 'Custom'}
                  </span>
                  <button
                    onClick={() => navigate(service.slug)}
                    className="font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How We Work (5-Stage Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c111d] p-8 md:p-12 transition-colors">
          <div className="max-w-2xl mb-12">
            <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-2">Our 5-Stage Methodology</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              How Projects Move from Initial Brief to Final Handover
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Clear accountability at every stage ensures smooth execution without surprises or missed deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {agencyProcessStages.map((stg) => (
              <div
                key={stg.step}
                className="relative p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-2xl font-black text-blue-600/50 dark:text-indigo-500/40 mb-3 font-mono">
                    {stg.step}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">{stg.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{stg.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Timeline: </span>
                  <span className="text-slate-800 dark:text-slate-300">{stg.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate('process')}
              className="px-5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Explore Full Process & Deliverables Roadmap
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Team Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-2">Superb Apex Digital Specialists</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Organized Department Structure
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Specialized disciplines across Discord engineering, broadcast streaming, video production, social strategy, and QA.
            </p>
          </div>
          <button
            onClick={() => navigate('team')}
            className="text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
          >
            View Full Team Directory ({teamDirectory.length} Roles)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Highlight Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamDirectory.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-indigo-600/20 border border-blue-200 dark:border-indigo-500/30 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-indigo-300 font-mono">
                    {member.initials}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{member.roleId}</span>
                </div>

                <div className="text-xs text-blue-600 dark:text-indigo-400 font-medium">{member.department}</div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{member.name}</h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">{member.jobTitle}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>{member.timezone}</span>
                <span className="text-blue-600 dark:text-indigo-300 font-medium">{member.availability.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Work (Concept Projects) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-2">Featured Work & Proof</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Concept Case Studies & Realized Outcomes
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Concrete breakdowns of client challenges, engineering solutions, and verified deliverable outcomes.
            </p>
          </div>
          <button
            onClick={() => navigate('case-studies')}
            className="text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
          >
            All Case Studies ({conceptCaseStudies.length})
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conceptCaseStudies.slice(0, 2).map((study) => (
            <div
              key={study.id}
              className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c111d] flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-blue-600 dark:text-indigo-400 font-semibold">{study.platform} Focus</span>
                  <span>{study.timeline}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{study.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{study.summary}</p>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800">
                  {study.concreteOutcomes.map((o) => (
                    <div key={o.label}>
                      <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{o.metric}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{o.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Concept Project Archive</span>
                <button
                  onClick={() => navigate('case-studies')}
                  className="text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 flex items-center gap-1"
                >
                  Read Full Breakdown
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Client Security & Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gradient-to-b dark:from-[#0e1424] dark:to-[#0a0e1a] p-8 md:p-12 transition-colors">
          <div className="max-w-2xl mb-8">
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-2">Client Trust & Account Protection</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Your Accounts and Credentials Remain Strictly Yours
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              We never ask for passwords or session tokens. We guide you through official delegated permissions and remove access immediately upon handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityProtocols.slice(0, 3).map((sec) => (
              <div key={sec.id} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 space-y-2 shadow-sm">
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{sec.title}</div>
                <p className="text-xs text-slate-800 dark:text-slate-300 font-medium">{sec.shortRule}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{sec.clientGuarantee}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate('security')}
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              Read Full Security Charter & Delegated Roles Guide
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Categorized FAQ Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-2">Got Questions?</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Transparent answers regarding our workflow, turnarounds, revisions, and contracts.
            </p>
          </div>
          <button
            onClick={() => navigate('faq')}
            className="text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
          >
            Browse All Questions
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comprehensiveFAQ[0].items.slice(0, 4).map((faqItem, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] space-y-2 shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{faqItem.question}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{faqItem.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-900/10 dark:from-indigo-950/40 via-white dark:via-slate-900 to-slate-50 dark:to-slate-900 p-8 md:p-14 text-center overflow-hidden shadow-lg">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Build Something Worth Coming Back To.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Tell us about your community, channel, brand, or project. Superb Apex Digital will help you identify the right services and plan your next steps.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => navigate('quote')}
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-lg shadow-blue-600/25 dark:shadow-indigo-600/25 transition-all flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('contact')}
                className="px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors shadow-sm"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
