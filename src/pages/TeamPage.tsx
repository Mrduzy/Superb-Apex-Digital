import React, { useState } from 'react';
import { teamDirectory, Department, TeamMember } from '../data/teamData';
import { AppRoute } from '../utils/router';
import { Search, Info, Check, X, UserCheck } from 'lucide-react';

interface TeamPageProps {
  navigate: (route: AppRoute | string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ navigate }) => {
  const [selectedDept, setSelectedDept] = useState<Department>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);

  const departments: Department[] = [
    'All',
    'Leadership & Operations',
    'Discord & Community',
    'Streaming & Creator',
    'Video & Creative',
    'Social Media & Marketing',
    'Client Success & QA',
  ];

  const filteredMembers = teamDirectory.filter((m) => {
    const matchesDept = selectedDept === 'All' || m.department === selectedDept;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs text-blue-600 dark:text-indigo-400 font-semibold tracking-wide">
          Superb Apex Digital Specialists
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Superb Apex Team Directory
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Every client project at Superb Apex Digital is staffed by dedicated architects, editors, designers, and managers with verified competencies across modern creator platforms.
        </p>
      </div>

      {/* Directory Standards Notice */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d1322] flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
        <Info className="w-5 h-5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-slate-900 dark:text-white">Structured Team Delivery</p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            All positions below represent dedicated operational roles and workflow disciplines within Superb Apex Digital. Projects are assigned matching specialists upon kickoff to ensure zero delays and consistent quality.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="space-y-4">
        {/* Department Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedDept === dept
                  ? 'bg-blue-600 dark:bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search roles, titles, or skills (e.g. OBS, DaVinci, Bots)..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-indigo-500 shadow-sm"
          />
        </div>
      </div>

      {/* Member Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101c] hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-5 shadow-sm"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-indigo-600/20 border border-blue-200 dark:border-indigo-500/30 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-indigo-300 font-mono">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{member.name}</h3>
                    <p className="text-xs text-blue-600 dark:text-indigo-400 font-medium">{member.jobTitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                  {member.roleId}
                </span>
              </div>

              {/* Department & Timezone */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <span>{member.department}</span>
                <span aria-hidden="true">·</span>
                <span>{member.timezone}</span>
              </div>

              {/* Bio */}
              <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills tags */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Competencies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px]">{member.availability}</span>
              </span>
              <button
                onClick={() => setActiveModalMember(member)}
                className="text-xs font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 transition-colors"
              >
                Role Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="p-12 text-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30">
          <p className="text-sm text-slate-500 dark:text-slate-400">No team profiles matched your search query.</p>
          <button
            onClick={() => {
              setSelectedDept('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-blue-600 dark:text-indigo-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Role Details Modal */}
      {activeModalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0e1422] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-2xl text-slate-800 dark:text-slate-100">
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-indigo-600/30 border border-blue-200 dark:border-indigo-500/30 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-indigo-300 font-mono">
                  {activeModalMember.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{activeModalMember.name}</h3>
                  <p className="text-xs text-blue-600 dark:text-indigo-400">{activeModalMember.jobTitle}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalMember(null)}
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                  Role Objective:
                </span>
                <p className="mt-1 text-slate-700 dark:text-slate-300 leading-relaxed">{activeModalMember.bio}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                  Key Responsibilities at Superb Apex Digital:
                </span>
                <ul className="mt-2 space-y-1.5">
                  {activeModalMember.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Department</span>
                  <p className="text-slate-900 dark:text-white font-medium mt-0.5">{activeModalMember.department}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Current Status</span>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">{activeModalMember.availability}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-[11px] text-slate-500">Superb Apex Ref: {activeModalMember.roleId}</span>
              <button
                onClick={() => {
                  setActiveModalMember(null);
                  navigate('quote');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700 dark:hover:bg-indigo-500 rounded-lg"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
