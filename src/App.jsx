import React from 'react';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { VideoGrid } from './components/VideoGrid.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">
          <ChipRow />
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

function ChipRow() {
  const chips = [
    'All',
    'Music',
    'Live',
    'Gaming',
    'News',
    'Podcasts',
    'Programming',
    'Trailers',
    'Sports',
    'Comedy',
    'AI',
    'Recently uploaded',
    'Watched',
  ];
  return (
    <div className="sticky top-16 z-10 -mx-4 md:-mx-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-900/60">
      <div className="flex gap-3 overflow-x-auto px-4 md:px-6 py-3 border-b border-neutral-200 dark:border-neutral-800">
        {chips.map((c) => (
          <button
            key={c}
            className="shrink-0 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
