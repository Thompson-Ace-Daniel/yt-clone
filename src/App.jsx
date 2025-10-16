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
        <main className="flex-1">
          <div className="sticky top-16 z-10 bg-white/80 px-4 py-3 dark:bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-900/60">
            <div className="container mx-auto">
              <ChipRow />
            </div>
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <VideoGrid />
          </div>
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
    <div className="flex gap-2 overflow-x-auto py-1">
      {chips.map((c, idx) => (
        <button
          key={c}
          className={"shrink-0 rounded-full px-4 py-1.5 text-sm border transition-colors " + (idx === 0 ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white" : "border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800")}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
