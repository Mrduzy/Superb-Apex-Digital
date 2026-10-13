import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { AppRoute } from '../utils/router';
import {
  Check,
  Send,
  Download,
  ShieldCheck,
  Copy,
  CheckCheck,
} from 'lucide-react';

interface QuotePageProps {
  navigate: (route: AppRoute | string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ navigate }) => {
  const { brand } = useBrand();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discordUser: '',
    brandName: '',
    channelUrl: '',
    primaryService: 'Discord Server Architecture',
    additionalServices: [] as string[],
    projectType: 'one-time' as 'one-time' | 'monthly' | 'both',
    projectDescription: '',
    budgetRange: '$500 – $1,000',
    targetDeadline: 'Within 2 Weeks',
    preferredContact: 'Email',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<any | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  const availableServicesList = [
    'Discord Server Architecture',
    'Twitch Broadcast Suite & OBS Setup',
    'YouTube Post-Production & Editing',
    'High-CTR YouTube Thumbnails',
    'Social Media Management & Strategy',
    'Active Community Moderation Retainer',
    'Creator Branding & Identity Kit',
    'Security Audit & Permissions Overhaul',
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const exists = prev.additionalServices.includes(service);
      return {
        ...prev,
        additionalServices: exists
          ? prev.additionalServices.filter((s) => s !== service)
          : [...prev.additionalServices, service],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.brandName.trim()) {
      errs.brandName = 'Brand, channel, or community name is required.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
      errs.projectDescription =
        'Please describe your project or channel goals (minimum 15 characters).';
    }
    if (!formData.privacyAccepted) {
      errs.privacyAccepted = 'Please acknowledge our zero-password security standard.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    setTimeout(() => {
      const receipt = {
        referenceId: `SAD-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toISOString(),
        ...formData,
      };

      try {
        const history = JSON.parse(localStorage.getItem('superb_apex_quotes') || '[]');
        history.push(receipt);
        localStorage.setItem('superb_apex_quotes', JSON.stringify(history));
      } catch {
        // Storage fallback
      }

      setSubmittedReceipt(receipt);
      setSubmitting(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 600);
  };

  const handleCopyReceipt = () => {
    if (!submittedReceipt) return;
    const text = `SUPERB APEX DIGITAL INQUIRY #${submittedReceipt.referenceId}\nClient: ${submittedReceipt.name} (${submittedReceipt.brandName})\nEmail: ${submittedReceipt.email}\nPrimary Service: ${submittedReceipt.primaryService}\nBudget Tier: ${submittedReceipt.budgetRange}\nDescription: ${submittedReceipt.projectDescription}`;
    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  const handleDownloadJSON = () => {
    if (!submittedReceipt) return;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(submittedReceipt, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `superb-apex-quote-${submittedReceipt.referenceId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide">
          Direct Project Consultation
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Request an Itemized Quote & Scope Proposal
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Tell us about your community, stream, channel, or upcoming launch. Superb Apex Digital reviews every inquiry within 24 hours with an itemized deliverables breakdown.
        </p>
      </div>

      {/* Confirmation State if Submitted */}
      {submittedReceipt ? (
        <div className="p-8 rounded-2xl border border-emerald-500/50 bg-emerald-50/30 dark:bg-[#0c1624] space-y-6 animate-fade-in shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received Successfully</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Reference ID: <strong className="text-emerald-600 dark:text-emerald-300">{submittedReceipt.referenceId}</strong>
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            Thank you, <strong className="text-slate-900 dark:text-white">{submittedReceipt.name}</strong>. Your project brief for{' '}
            <strong className="text-slate-900 dark:text-white">{submittedReceipt.brandName}</strong> has been received by Superb Apex Digital. Our Senior Project Lead will review your scope and follow up via{' '}
            <span className="text-blue-600 dark:text-indigo-300 font-medium">{submittedReceipt.preferredContact}</span> ({submittedReceipt.email}) within 24 business hours.
          </p>

          {/* Submission Summary Card */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2 shadow-sm">
            <div className="grid grid-cols-2 gap-2 text-slate-500 dark:text-slate-400">
              <div>
                <span>Primary Service:</span>
                <p className="text-slate-900 dark:text-white font-medium">{submittedReceipt.primaryService}</p>
              </div>
              <div>
                <span>Project Cadence:</span>
                <p className="text-slate-900 dark:text-white font-medium capitalize">{submittedReceipt.projectType}</p>
              </div>
              <div>
                <span>Budget Tier:</span>
                <p className="text-slate-900 dark:text-white font-medium">{submittedReceipt.budgetRange}</p>
              </div>
              <div>
                <span>Target Deadline:</span>
                <p className="text-slate-900 dark:text-white font-medium">{submittedReceipt.targetDeadline}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleCopyReceipt}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copiedReceipt ? (
                <>
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Inquiry Summary
                </>
              )}
            </button>

            <button
              onClick={handleDownloadJSON}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download JSON Record
            </button>

            <button
              onClick={() => setSubmittedReceipt(null)}
              className="px-4 py-2 text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:underline transition-colors ml-auto"
            >
              Submit Another Inquiry →
            </button>
          </div>
        </div>
      ) : (
        /* The Form */
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121f] space-y-8 shadow-sm">
          {/* Section 1: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-blue-600 dark:text-indigo-400">
              1. Client & Channel Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Rivera"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                />
                {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@creatorstudio.com"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                />
                {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Brand, Channel, or Community Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  placeholder="e.g. Echo Esports / Horizon Gaming"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                />
                {errors.brandName && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.brandName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Discord Username <span className="text-slate-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.discordUser}
                  onChange={(e) => setFormData({ ...formData, discordUser: e.target.value })}
                  placeholder="e.g. alex_rivera or @alex"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Existing Channel or Website URL <span className="text-slate-400">(Optional)</span>
              </label>
              <input
                type="url"
                value={formData.channelUrl}
                onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                placeholder="e.g. https://twitch.tv/channel or https://youtube.com/@channel"
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Section 2: Scope & Requirements */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-blue-600 dark:text-indigo-400">
              2. Scope & Services Needed
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Primary Required Service
                </label>
                <select
                  value={formData.primaryService}
                  onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                >
                  {availableServicesList.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Engagement Structure
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['one-time', 'monthly', 'both'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: t })}
                      className={`py-2 text-xs font-medium rounded-lg capitalize border transition-colors ${
                        formData.projectType === t
                          ? 'bg-blue-50 dark:bg-indigo-600/30 border-blue-600 dark:border-indigo-500 text-blue-700 dark:text-indigo-200'
                          : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Services Multi-Select */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                Additional Services to Include in Proposal (Optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableServicesList.map((srv) => {
                  const selected = formData.additionalServices.includes(srv);
                  return (
                    <div
                      key={srv}
                      onClick={() => handleCheckboxChange(srv)}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                        selected
                          ? 'border-blue-600 dark:border-indigo-500 bg-blue-50/60 dark:bg-indigo-950/20 text-slate-900 dark:text-white font-medium'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      <span>{srv}</span>
                      <div
                        className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                          selected
                            ? 'bg-blue-600 dark:bg-indigo-600 border-blue-600 dark:border-indigo-500 text-white'
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                        }`}
                      >
                        {selected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Project Overview & Specific Goals <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Describe your current community size, channel goals, preferred aesthetic style, or specific deliverable requirements..."
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
              />
              {errors.projectDescription && (
                <p className="text-[11px] text-rose-500 mt-1">{errors.projectDescription}</p>
              )}
            </div>
          </div>

          {/* Section 3: Budget, Timeline & Contact Method */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-blue-600 dark:text-indigo-400">
              3. Budget & Timeline
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Estimated Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                >
                  <option value="Under $500">Under $500</option>
                  <option value="$500 – $1,000">$500 – $1,000</option>
                  <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                  <option value="$2,500 – $5,000+">$2,500 – $5,000+</option>
                  <option value="Custom Enterprise">Custom / Monthly Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Target Launch Deadline
                </label>
                <select
                  value={formData.targetDeadline}
                  onChange={(e) => setFormData({ ...formData, targetDeadline: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                >
                  <option value="Urgent (Under 7 Days)">Urgent (Under 7 Days)</option>
                  <option value="Within 2 Weeks">Within 2 Weeks</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="Flexible Timeline">Flexible Timeline</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Preferred Contact
                </label>
                <select
                  value={formData.preferredContact}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500"
                >
                  <option value="Email">Email</option>
                  <option value="Discord Direct Message">Discord Direct Message</option>
                  <option value="Video Scoping Call">Video Scoping Call</option>
                </select>
              </div>
            </div>

            {/* Privacy Standard Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyAccepted}
                  onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                  className="mt-0.5 rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-blue-600 dark:text-indigo-600 focus:ring-0"
                />
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  I understand that <strong className="text-slate-900 dark:text-slate-200">{brand.name}</strong> operates strictly on delegated permissions and will never ask for account passwords or 2FA codes.
                </span>
              </label>
              {errors.privacyAccepted && (
                <p className="text-[11px] text-rose-500 mt-1">{errors.privacyAccepted}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Inquiries encrypted and handled with strict confidentiality
            </span>

            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 disabled:opacity-50 rounded-lg shadow-sm transition-all flex items-center gap-2"
            >
              {submitting ? (
                'Processing...'
              ) : (
                <>
                  Submit Inquiry
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
