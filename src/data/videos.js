export const videos = Array.from({ length: 24 }).map((_, i) => {
  const picsumIds = [10, 11, 12, 14, 15, 16, 18, 20, 22, 24, 29, 32, 33, 35, 36, 37, 39, 42, 43, 44, 45, 46, 47, 49];
  const titleSeeds = [
    'Ultimate React UI Walkthrough',
    'Designing Beautiful Dashboards',
    'Productivity Tips for Developers',
    'Modern CSS Layouts Explained',
    'JavaScript Patterns You Should Know',
    'Deploying Frontend Apps Like a Pro',
  ];
  const channelSeeds = [
    'CodeCrafters',
    'Frontend Focus',
    'Dev Journey',
    'Design Daily',
    'JS Academy',
    'Ship It',
    'UI Tips',
  ];

  const id = i + 1;
  const title = `${titleSeeds[i % titleSeeds.length]} #${id}`;
  const channel = channelSeeds[i % channelSeeds.length];
  const views = `${(i % 9) + 1}.${(i * 3) % 10}M views`;
  const uploadedAt = `${(i % 12) + 1} months ago`;
  const duration = `${String(Math.floor(i / 2) + 8).padStart(2, '0')}:${String((i * 7) % 60).padStart(2, '0')}`;
  const thumbId = picsumIds[i % picsumIds.length];
  const thumbnail = `https://picsum.photos/id/${thumbId}/1280/720`;
  const avatar = `https://i.pravatar.cc/96?img=${(i % 70) + 1}`;

  return { id, title, channel, views, uploadedAt, duration, thumbnail, avatar };
});
