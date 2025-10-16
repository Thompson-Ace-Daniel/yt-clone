import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-neutral-200 bg-white/90 px-4 py-2 dark:border-neutral-800 dark:bg-neutral-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-900/60">
      <div className="flex items-center gap-3">
        <button aria-label="Menu" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
          <HamburgerIcon />
        </button>
        <a href="#" className="flex items-center gap-2">
          <svg width="30" height="22" viewBox="0 0 30 22" aria-hidden>
            <rect width="30" height="22" rx="5" fill="#FF0000" />
            <polygon points="12,6 12,16 20,11" fill="white" />
          </svg>
          <span className="font-semibold tracking-tight text-lg">YouTube</span>
        </a>
      </div>

      <div className="flex items-center gap-2 flex-1 max-w-2xl">
        <div className="flex flex-1 items-center rounded-full border border-neutral-300 dark:border-neutral-700 overflow-hidden">
          <input
            className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
            placeholder="Search"
          />
          <button className="px-4 py-2 border-l border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
            <SearchIcon />
          </button>
        </div>
        <button className="hidden sm:inline-flex p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
          <MicIcon />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Create">
          <CreateIcon />
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Notifications">
          <BellIcon />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500" aria-label="Profile" />
      </div>
    </header>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 14a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v3a4 4 0 0 0 4 4z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v4" />
    </svg>
  );
}

function CreateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
