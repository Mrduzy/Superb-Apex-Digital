import React from 'react';
import { useBrand } from '../context/BrandContext';
import { AppRoute } from '../utils/router';
import { Shield, Users, Target, ArrowRight, Award, Sparkles } from 'lucide-react';

interface AboutPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const { brand } = useBrand();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide">
          About {brand.name}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          A Dedicated Digital Production & Community Partner
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Superb Apex Digital was founded to provide creators, streamers, gaming collectives, and brands with dependable, broadcast-grade digital infrastructure without the friction of unreliable freelancers or the bureaucracy of traditional agencies.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-indigo-500/10 text-blue-600 dark:text-indigo-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Execution Over Hype</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            We do not sell vague growth secrets or vanity follower metrics. We build tangible digital infrastructure: clean server permissions, crisp animated broadcast scenes, and retention-tested video cuts.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Account Safety & Zero Passwords</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Your community and channel access is protected at all times. We utilize official delegated roles, sandboxed staging environments, and revoke all access upon project completion.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Structured Team Accountability</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Every engagement has a dedicated Project Manager and specialized discipline leads. You never have to chase individual freelancers or worry about missed deadlines.
          </p>
        </div>
      </div>

      {/* Agency Standards Section */}
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c101c] space-y-6">
        <div>
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1">Our Agency Standards</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">What Sets Superb Apex Digital Apart</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 dark:text-slate-300">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Full Asset Ownership</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Every master Photoshop file, Premiere project, OBS JSON profile, vector logo, and 4K export belongs 100% to your brand upon final delivery. No proprietary locks or licensing traps.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Turnkey Production Pipelines</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We handle the entire production pipeline: from raw footage assembly and retention sound design to thumbnail A/B testing and short-form repurposing.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] shadow-sm">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Ready to partner with Superb Apex Digital?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Browse our packages or request a customized proposal for your community or channel.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('services')}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
          >
            Explore Services
          </button>
          <button
            onClick={() => navigate('quote')}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5"
          >
            Request a Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
