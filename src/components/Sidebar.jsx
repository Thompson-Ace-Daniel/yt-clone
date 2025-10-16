import React from 'react';

export function Sidebar() {
  const items = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Shorts', icon: ShortsIcon },
    { label: 'Subscriptions', icon: SubsIcon },
    { label: 'You', icon: YouIcon },
  ];

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] hidden md:block w-60 shrink-0 border-r border-neutral-200 dark:border-neutral-800 p-2 overflow-y-auto">
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <item.icon />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-4 border-t border-neutral-200 dark:border-neutral-800 pt-3">
        <p className="px-3 text-xs text-neutral-500">Explore</p>
        <div className="mt-1 space-y-1">
          {['Trending', 'Music', 'Live', 'Gaming', 'News', 'Sports'].map((l) => (
            <a key={l} className="block rounded-xl px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#">
              <span className="text-sm">{l}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10l9-7 9 7" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function ShortsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 2l9 4-5 2 5 2-9 4 3-4-3-4 3-4z" />
    </svg>
  );
}

function SubsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10 9v6l5-3-5-3z" />
    </svg>
  );
}

function YouIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 22c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    </svg>
  );
}
