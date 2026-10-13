import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { AppRoute } from '../utils/router';
import { Mail, Clock, MessageSquare, Send, Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const { brand } = useBrand();

  const [form, setForm] = useState({
    name: '',
    email: '',
    discordUser: '',
    topic: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide">
          Direct Inquiries & Communication
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact Superb Apex Digital
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether you want to discuss a custom scope, explore an ongoing monthly partnership, or review technical specifications, our operations team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-blue-600 dark:text-indigo-400">
              Direct Channels
            </h3>

            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Direct Inquiries:</span>
                  <p className="text-slate-900 dark:text-white font-medium mt-0.5">
                    <a href={`mailto:${brand.contactEmail}`} className="hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">
                      {brand.contactEmail}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Operating Hours:</span>
                  <p className="text-slate-900 dark:text-white font-medium mt-0.5">{brand.businessHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Official Discord Server:</span>
                  <p className="text-slate-900 dark:text-white font-medium mt-0.5">
                    <a
                      href={brand.discordInviteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {brand.discordInviteUrl}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Expected Response Time: <strong className="text-slate-900 dark:text-white">Within 24 business hours</strong>
            </div>
          </div>

          {/* Quote recommendation card */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gradient-to-br dark:from-indigo-950/30 dark:to-[#0c101c] space-y-3 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Looking for an itemized estimate?</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Use our dedicated Quote Builder to select your services, configure deliverables, and obtain an instant budget tier.
            </p>
            <button
              onClick={() => navigate('quote')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Go to Quote Builder
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* General Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Dispatched</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {form.name}. Superb Apex Digital operations desk has received your note and will reply to {form.email} promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs text-blue-600 dark:text-indigo-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Direct Inquiry Form</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Jordan Hayes"
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. jordan@example.com"
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Discord Handle <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.discordUser}
                      onChange={(e) => setForm({ ...form, discordUser: e.target.value })}
                      placeholder="e.g. jordan#1337"
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Topic</label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Discord Architecture">Discord Architecture</option>
                      <option value="Twitch Broadcast Setup">Twitch Broadcast Setup</option>
                      <option value="YouTube Production">YouTube Production</option>
                      <option value="Monthly Retainer Partnership">Monthly Retainer Partnership</option>
                      <option value="Legal & Enterprise Contracting">Legal & Enterprise Contracting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need or how Superb Apex Digital can assist..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Zero Spam Guarantee
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    Send Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
