import React from 'react';
import { videos } from '../data/videos.js';

export function VideoGrid() {
  return (
    <section className="mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((v) => (
        <article key={v.id} className="group">
          <a href="#" className="block">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
              <img
                src={v.thumbnail}
                alt={v.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                {v.duration}
              </span>
            </div>
          </a>
          <div className="mt-3 flex gap-3">
            <img
              src={v.avatar}
              alt={`${v.channel} avatar`}
              loading="lazy"
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="line-clamp-2 font-medium leading-snug">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{v.channel}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{v.views} • {v.uploadedAt}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
