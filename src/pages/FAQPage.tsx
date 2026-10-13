import React, { useState } from 'react';
import { comprehensiveFAQ } from '../data/faqData';
import { AppRoute } from '../utils/router';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    '0-0': true,
    '0-1': true,
  });

  const categories = ['All', ...comprehensiveFAQ.map((c) => c.category)];

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = comprehensiveFAQ
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Help Center & Knowledge Base
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Everything you need to know about Superb Apex Digital services, fixed-price packages, monthly retainers, revision workflows, and account security.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === c
                  ? 'bg-blue-600 dark:bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. revisions, OBS, passwords, retainers)..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
          />
        </div>
      </div>

      {/* FAQ Accordion Groups */}
      <div className="space-y-10">
        {filteredCategories.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-4">
            <h2 className="text-base font-bold text-blue-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              {group.category}
            </h2>

            <div className="space-y-3">
              {group.items.map((item, itemIdx) => {
                const key = `${groupIdx}-${itemIdx}`;
                const isOpen = openItems[key];
                return (
                  <div
                    key={itemIdx}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] overflow-hidden transition-colors shadow-sm"
                  >
                    <button
                      onClick={() => toggleItem(key)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30">
            <p className="text-sm text-slate-500 dark:text-slate-400">No questions matched your search query.</p>
          </div>
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Have a specific question not covered here?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Superb Apex Digital operations desk will gladly clarify any technical, scheduling, or contract questions.
          </p>
        </div>
        <button
          onClick={() => navigate('contact')}
          className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap"
        >
          Contact Our Team →
        </button>
      </div>
    </div>
  );
};
