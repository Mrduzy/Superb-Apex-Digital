import React from 'react';
import { useBrand } from '../context/BrandContext';
import { AppRoute } from '../utils/router';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refunds';
  navigate: (route: AppRoute | string) => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ type, navigate }) => {
  const { brand } = useBrand();

  if (type === 'privacy') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 dark:text-slate-300">
        <div className="space-y-2">
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">Legal Document</div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy & Data Handling Policy</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Last updated: October 2026</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-6 text-xs leading-relaxed shadow-sm">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">1. Core Commitment to Non-Intrusive Operations</h2>
            <p className="text-slate-600 dark:text-slate-400">
              {brand.name} operates under a strict principle of least-privilege access. We collect only the information necessary to scope, execute, and deliver agreed digital creative services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">2. The Zero Password Policy</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We never collect, store, or ask for account passwords, master login credentials, or two-factor authentication tokens. Any access to client platforms (such as Discord, YouTube Studio, or Twitch) is performed strictly via official delegated collaborator roles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">3. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400">
              When you submit a quote inquiry or contact form, we collect your name, email address, community links, and project descriptions. This data is used solely to prepare commercial scopes of work. We never sell or distribute client information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">4. Data Retention & Asset Archives</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Completed asset masters are retained in our secure cloud vaults for 30 days post-handover to facilitate revision requests. Clients may request immediate data deletion at any time by contacting{' '}
              <a href={`mailto:${brand.contactEmail}`} className="text-blue-600 dark:text-indigo-400 underline">
                {brand.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 dark:text-slate-300">
        <div className="space-y-2">
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">Legal Document</div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service & Engagement</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Last updated: October 2026</p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-6 text-xs leading-relaxed shadow-sm">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">1. Scope of Work & Deliverables</h2>
            <p className="text-slate-600 dark:text-slate-400">
              All projects are governed by an itemized Scope of Work (SOW). Any request outside the approved scope will be quoted transparently prior to commencement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">2. Intellectual Property Ownership</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Upon final settlement of invoices, 100% of all intellectual property, commercial rights, and master editable files (.AI, .PSD, .ProRes, .WebM) transfer unconditionally to the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">3. Ethical Standards & Metric Guarantees</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We do not sell artificial followers, fake server members, or guaranteed viral metrics. All deliverables are designed for organic, sustainable community growth.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">4. Client Co-Operation & Review Windows</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Timely client feedback ensures on-schedule delivery. Milestone drafts have a 7-day review window. Once approved, deliverables proceed to the next production stage.
            </p>
          </section>
        </div>
      </div>
    );
  }

  // Refunds
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 dark:text-slate-300">
      <div className="space-y-2">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">Legal Document</div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Refund & Cancellation Policy</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Last updated: October 2026</p>
      </div>

      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-6 text-xs leading-relaxed shadow-sm">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">1. One-Time Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">
            For one-time setups, if a cancellation is requested prior to work commencement, a 100% refund of the deposit is issued. If work has commenced, prorated hours will be deducted and all asset files produced to that milestone will be transferred to the client.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">2. Monthly Retainer Arrangements</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Monthly retainers operate without long-term lock-in. You may cancel or pause your retainer with 14 days written notice prior to your subsequent billing date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">3. Defect Warranty & Fixes</h2>
          <p className="text-slate-600 dark:text-slate-400">
            If any delivered technical asset contains defects or errors, {brand.name} will correct the defect at zero additional cost within the warranty window (7 to 14 days).
          </p>
        </section>
      </div>
    </div>
  );
};
