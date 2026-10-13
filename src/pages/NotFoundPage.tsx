import React from 'react';
import { AppRoute } from '../utils/router';
import { Compass, ArrowRight, Home } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/20">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-indigo-400">Error 404</span>
        <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The requested page route could not be found or has moved. Use the buttons below to navigate back to the agency hub.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          onClick={() => navigate('home')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Homepage
        </button>
        <button
          onClick={() => navigate('services')}
          className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
        >
          View Services
        </button>
      </div>
    </div>
  );
};
