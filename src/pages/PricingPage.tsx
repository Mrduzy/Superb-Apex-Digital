import React, { useState } from 'react';
import { allPricingPlans, availableAddOns } from '../data/pricingData';
import { AppRoute } from '../utils/router';
import { Check, ArrowRight, Shield } from 'lucide-react';

interface PricingPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ navigate }) => {
  const [billingFilter, setBillingFilter] = useState<'all' | 'one-time' | 'monthly'>('all');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const filteredPlans = allPricingPlans.filter((plan) => {
    if (billingFilter === 'all') return true;
    return plan.category === billingFilter;
  });

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedAddOnTotal = selectedAddOns.reduce((sum, id) => {
    const item = availableAddOns.find((a) => a.id === id);
    return sum + (item ? item.cost : 0);
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Transparent Pricing Architecture
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Fixed-Price Projects & Monthly Retainers
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          No hidden fees, no opaque hourly rates. Choose between turnkey one-off setups or dedicated recurring monthly partnerships with guaranteed delivery windows.
        </p>
      </div>

      {/* Segmented Filter Control */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] shadow-sm">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
          <button
            onClick={() => setBillingFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              billingFilter === 'all'
                ? 'bg-blue-600 dark:bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Packages ({allPricingPlans.length})
          </button>
          <button
            onClick={() => setBillingFilter('one-time')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              billingFilter === 'one-time'
                ? 'bg-blue-600 dark:bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            One-Time Setups
          </button>
          <button
            onClick={() => setBillingFilter('monthly')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              billingFilter === 'monthly'
                ? 'bg-blue-600 dark:bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Monthly Retainers
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Includes Commercial Licensing & 100% Asset Ownership</span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between space-y-6 shadow-sm ${
              plan.popular
                ? 'border-blue-500/80 dark:border-indigo-500/80 bg-blue-50/20 dark:bg-gradient-to-b dark:from-[#0e1628] dark:to-[#0a0e1c] shadow-lg shadow-blue-500/5 dark:shadow-indigo-950/30'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-blue-600 dark:text-indigo-400 font-semibold">{plan.serviceType}</span>
                <span className="text-slate-500 dark:text-slate-400 capitalize">{plan.category}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{plan.periodLabel}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{plan.summary}</p>

              {/* Turnaround & Revisions Info */}
              <div className="py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Turnaround: </span>
                  <span className="font-medium text-slate-900 dark:text-white">{plan.turnaround}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Revisions: </span>
                  <span className="font-medium text-slate-900 dark:text-white">{plan.revisions}</span>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Deliverables Included:
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {plan.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
              <button
                onClick={() => navigate('quote')}
                className={`w-full py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                  plan.popular
                    ? 'bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                Request Proposal for This Scope
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add-On Services Calculator */}
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d121f] space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold mb-1">Optional Scope Add-Ons</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Customize with Specialized Add-On Deliverables
          </h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Select additional assets or services to calculate an estimated addition to your project scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableAddOns.map((addon) => {
            const isSelected = selectedAddOns.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddOn(addon.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 dark:border-indigo-500 bg-blue-50/50 dark:bg-indigo-950/20 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{addon.name}</h4>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-indigo-300">
                      {addon.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-blue-600 dark:text-indigo-400 font-semibold' : 'text-slate-400'}>
                    {isSelected ? 'Selected' : 'Click to add'}
                  </span>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isSelected
                        ? 'bg-blue-600 dark:bg-indigo-600 border-blue-600 dark:border-indigo-500 text-white'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                    }`}
                  >
                    {isSelected && <Check className="w-3 hand 3" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedAddOns.length > 0 && (
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-indigo-950/30 border border-blue-200 dark:border-indigo-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 dark:text-slate-300">
              Selected <strong>{selectedAddOns.length}</strong> add-on(s). Estimated total addition:{' '}
              <span className="text-base font-bold text-slate-900 dark:text-white font-mono ml-1">
                +${calculatedAddOnTotal}
              </span>
            </div>
            <button
              onClick={() => navigate('quote')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Transfer to Custom Quote Form →
            </button>
          </div>
        )}
      </div>

      {/* Scope Clarity & Guarantee */}
      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300 shadow-sm">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Fixed-Price Protection</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Once a scope of work is signed, the project price is locked. You never pay unexpected overages.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">Structured Revisions</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Every deliverable includes defined revision rounds to align exactly with your creative feedback.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">No Long-Term Lock-In</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Monthly retainers operate on a 30-day rolling cycle. Pause or cancel anytime with 14 days notice.
          </p>
        </div>
      </div>
    </div>
  );
};
