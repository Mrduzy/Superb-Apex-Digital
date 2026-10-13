import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('superb_apex_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 2500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    try {
      localStorage.setItem('superb_apex_cookie_consent', accepted ? 'all' : 'essential');
    } catch {
      // Storage unavailable
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-2xl text-xs text-slate-700 dark:text-slate-300 backdrop-blur-md animate-fade-in transition-colors">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <div className="flex-1 space-y-1.5">
          <p className="font-semibold text-slate-900 dark:text-white">Privacy & Client Experience</p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We use essential local storage to store your quote preferences and dark/light mode preference. We never sell personal data or track passwords.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => handleChoice(true)}
              className="px-3 py-1.5 font-medium text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Accept Essential
            </button>
            <button
              onClick={() => handleChoice(false)}
              className="px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1"
          aria-label="Close notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
