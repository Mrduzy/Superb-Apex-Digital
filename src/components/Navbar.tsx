import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { useTheme } from '../context/ThemeContext';
import { AppRoute } from '../utils/router';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentRoute: AppRoute;
  navigate: (route: AppRoute | string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, navigate }) => {
  const { brand } = useBrand();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (target: AppRoute | string) => {
    navigate(target);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceLinks = [
    { label: 'Discord Server Architecture', route: 'discord' },
    { label: 'Twitch Broadcast Setup', route: 'twitch' },
    { label: 'YouTube Post-Production', route: 'youtube' },
    { label: 'Social Media Strategy', route: 'social-media' },
    { label: 'Community Moderation', route: 'community-management' },
    { label: 'Creator Branding & Design', route: 'branding-design' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#080c15]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleNav('home')}
          className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 text-left focus:outline-none"
        >
          {brand.name}
        </button>

        {/* Zone 2: 4–5 single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className={`flex items-center gap-1.5 py-1 whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none ${
                ['services', 'discord', 'twitch', 'youtube', 'social-media', 'community-management', 'branding-design'].includes(currentRoute)
                  ? 'text-blue-600 dark:text-indigo-400 font-semibold'
                  : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {servicesDropdownOpen && (
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e1422] p-2 shadow-2xl backdrop-blur-lg animate-fade-in"
              >
                <button
                  onClick={() => handleNav('services')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/70 rounded-lg transition-colors"
                >
                  All Services Overview →
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                {serviceLinks.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => handleNav(item.route)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('team')}
            className={`py-1 whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white transition-colors ${
              currentRoute === 'team' ? 'text-blue-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Our Team
          </button>

          <button
            onClick={() => handleNav('process')}
            className={`py-1 whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white transition-colors ${
              currentRoute === 'process' ? 'text-blue-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Process
          </button>

          <button
            onClick={() => handleNav('case-studies')}
            className={`py-1 whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white transition-colors ${
              currentRoute === 'case-studies' ? 'text-blue-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Case Studies
          </button>

          <button
            onClick={() => handleNav('pricing')}
            className={`py-1 whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white transition-colors ${
              currentRoute === 'pricing' ? 'text-blue-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Pricing
          </button>

          <button
            onClick={() => handleNav('security')}
            className={`py-1 whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white transition-colors ${
              currentRoute === 'security' ? 'text-blue-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Trust & Security
          </button>
        </nav>

        {/* Zone 3: Theme Toggle & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => handleNav('quote')}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Get a Quote
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <div className="space-y-1">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('services')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Services Overview
            </button>
            <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-800 my-1">
              {serviceLinks.map((s) => (
                <button
                  key={s.route}
                  onClick={() => handleNav(s.route)}
                  className="w-full text-left py-1 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded"
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNav('team')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNav('process')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Our Process
            </button>
            <button
              onClick={() => handleNav('case-studies')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNav('pricing')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Pricing & Retainers
            </button>
            <button
              onClick={() => handleNav('security')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Trust & Security
            </button>
            <button
              onClick={() => handleNav('faq')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleNav('quote')}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 rounded-lg"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
