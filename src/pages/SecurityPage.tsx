import React from 'react';
import { useBrand } from '../context/BrandContext';
import { securityProtocols, securityFAQ } from '../data/securityData';
import { AppRoute } from '../utils/router';
import { ShieldCheck, Lock, Check } from 'lucide-react';

interface SecurityPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ navigate }) => {
  const { brand } = useBrand();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide flex items-center gap-1.5 uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Client Trust & Security Charter</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Enterprise Security for Modern Creators
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Your channels, credentials, and communities are your livelihood. Here is {brand.name}'s formal code of conduct regarding account access, intellectual property ownership, and client confidentiality.
        </p>
      </div>

      {/* The Core Non-Negotiable Standard */}
      <div className="p-8 rounded-2xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-gradient-to-r dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900 space-y-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">The Zero Password Sharing Pledge</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Strict agency policy enforced across all departments</p>
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
          Superb Apex Digital never asks for passwords, session tokens, or two-factor authentication (2FA) verification codes under any circumstance. All work on Discord, YouTube, Twitch, and social channels is performed strictly using official delegated platform roles or staged workspaces.
        </p>
      </div>

      {/* Protocols Grid */}
      <div className="space-y-6">
        <div>
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1 uppercase">Our Protocols</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            How We Protect Your Digital Assets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityProtocols.map((protocol) => (
            <div
              key={protocol.id}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-3 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Check className="w-4 h-4" />
                <span>{protocol.title}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{protocol.shortRule}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{protocol.description}</p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-700 dark:text-slate-300">
                <strong className="text-blue-600 dark:text-indigo-400">Our Guarantee: </strong>
                {protocol.clientGuarantee}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Delegation Breakdown */}
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c101c] space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Official Delegated Access Guidelines by Platform
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Discord Servers</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              You assign a temporary "System Architect" role with Manage Channels and Manage Roles. Server Ownership remains strictly with your account. Revocable with one click upon handover.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">YouTube Channels</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Add our editor email via YouTube Studio → Settings → Permissions as "Editor (Limited)". This permits video upload drafts with zero access to your Google account password or analytics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Twitch & Social Media</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We deliver ready-to-import OBS scene profile archives and media files directly. For social scheduling, we connect via Meta Business Suite or Buffer manager invitations.
            </p>
          </div>
        </div>
      </div>

      {/* Security FAQ */}
      <div className="space-y-6">
        <div>
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1 uppercase">Frequently Addressed</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Security & Ownership FAQ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFAQ.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-2 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-700 dark:text-slate-300">
          Have specific NDA requirements or corporate enterprise vendor compliance requirements?
        </p>
        <button
          onClick={() => navigate('contact')}
          className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap"
        >
          Contact Legal & Operations Team →
        </button>
      </div>
    </div>
  );
};
