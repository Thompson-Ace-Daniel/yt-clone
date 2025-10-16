import React from 'react';

const videos = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Amazing Video Title ${i + 1}`,
  channel: `Channel ${((i % 7) + 1)}`,
  views: `${(Math.floor(Math.random() * 900) + 100).toLocaleString()}K views`,
}));

export function VideoGrid() {
  return (
    <section className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((v) => (
        <article key={v.id} className="group cursor-pointer">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700" />
            <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">{`${Math.floor(Math.random()*9)+1}:${String(Math.floor(Math.random()*60)).padStart(2,'0')}`}</span>
          </div>
          <div className="mt-3 flex gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div>
              <h3 className="line-clamp-2 font-medium leading-snug">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{v.channel}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{v.views} • {Math.floor(Math.random()*12)+1} months ago</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
