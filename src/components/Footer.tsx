import React from 'react';
import { useBrand } from '../context/BrandContext';
import { AppRoute } from '../utils/router';
import { Shield } from 'lucide-react';

interface FooterProps {
  navigate: (route: AppRoute | string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { brand } = useBrand();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#060910] text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigate('home')}
              className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition-colors text-left"
            >
              {brand.name}
            </button>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Dedicated digital agency partner for creators, communities, streamers, and online brands. Specialized in Discord infrastructure, Twitch broadcast engineering, YouTube packaging, and strategic community moderation.
            </p>
            <div className="pt-2 text-xs space-y-1 text-slate-500">
              <p>Operating Hours: {brand.businessHours}</p>
              <p>
                Inquiries:{' '}
                <a
                  href={`mailto:${brand.contactEmail}`}
                  className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {brand.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('discord')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Discord Server Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('twitch')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Twitch Broadcast Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('youtube')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  YouTube Post-Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('social-media')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Social Media Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('community-management')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Community Moderation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('branding-design')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Creator Branding & Design
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Agency & Methodology */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('team')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Our Team Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  About Superb Apex
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('process')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  5-Stage Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('case-studies')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Concept Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('pricing')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Pricing & Retainers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('security')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Trust & Security Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Client & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-3">
              Client & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('quote')}
                  className="text-blue-600 dark:text-indigo-400 hover:underline font-medium transition-colors text-left"
                >
                  Request a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('contact')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Contact Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('faq')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('privacy')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('terms')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('refunds')}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                >
                  Refund & Cancellation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400" />
              Zero Password Sharing Standard
            </span>
            <span>·</span>
            <span>100% Client Asset Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
