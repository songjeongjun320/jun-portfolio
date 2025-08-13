'use client';

import { useMemo, useState } from 'react';
import { devProjects, DevProject, DevLogEntry } from '@/data/devlogs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  onBack: () => void;
};

export default function DevelopmentLogSection({ onBack }: Props) {
  const [activeProjectId, setActiveProjectId] = useState<string>(devProjects[0]?.id ?? '');
  const activeProject: DevProject | undefined = useMemo(
    () => devProjects.find((p) => p.id === activeProjectId),
    [activeProjectId]
  );

  const projects = devProjects;

  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-950 via-violet-950 via-indigo-950 to-blue-950 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="bg-white shadow-lg rounded-[1.5vw] px-4 py-2 hover:shadow-xl transition-shadow duration-300 border border-blue-200 text-blue-600 font-semibold"
          >
            Back
          </button>
          <h1 className="text-white text-3xl font-extrabold">Dev & Research Logs</h1>
          <div />
        </div>

        {/* Project navbar */}
        <div className="card-base card-secondary p-2 mb-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProjectId(p.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-base transition-colors duration-200 border ${
                  p.id === activeProjectId
                    ? 'bg-[#1877F2] text-white border-[#1877F2] font-extrabold'
                    : 'bg-transparent text-[#1877F2] border-[#1877F2]/40 hover:bg-[#1877F2]/10'
                }`}
                title={p.description ?? p.name}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-gray-900 font-extrabold text-xl">
                {activeProject?.name ?? 'Select a project'}
              </h2>
              {activeProject?.stack && (
                <div className="text-gray-700 text-lg font-semibold mt-1">
                  Stack: {activeProject.stack.join(', ')}
                </div>
              )}
            </div>
            {activeProject?.url && (
              <a
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                Open Project
              </a>
            )}
          </div>

          {(activeProject?.logs.length ?? 0) === 0 ? (
            <div className="text-gray-700">
              No logs yet. Add entries in <code className="font-mono">data/devlogs.ts</code> under <code className="font-mono">{activeProject?.id ?? 'project'}</code>.
              <div className="mt-3 text-sm text-gray-600">
{`{
  id: '2025-08-12',
  date: '2025-08-12',
  summary: 'One-line summary',
  details: 'Optional details',
  tags: ['Next.js', 'OpenAI'],
  links: [{ label: 'PR', href: 'https://...' }]
}`}
              </div>
            </div>
          ) : (
            <div className="divide-y-4 divide-gray-300">
              {activeProject!.logs
                .slice()
                .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
                .map((entry: DevLogEntry) => (
                <article key={entry.id} className="py-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-[#1877F2] font-extrabold text-xl">{entry.summary}</h3>
                    <span className="text-gray-500 text-base font-bold">{entry.date}</span>
                  </div>
                  {entry.details && (
                    <div className="prose max-w-none text-gray-800 mb-2 leading-relaxed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.details}</ReactMarkdown>
                    </div>
                  )}
                  {(entry.tags?.length ?? 0) > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {entry.tags!.map((t) => (
                        <span key={t} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {(entry.links?.length ?? 0) > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {entry.links!.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline hover:text-blue-800 text-base"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


