import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

// Use proper dynamic borders instead of invisible white/5
content = content.replace(
  /'border-b border-white\/5 pb-4'/g,
  "'border-b border-theme-border pb-4'"
);

content = content.replace(
  /className="group flex items-center gap-4 border border-theme-border bg-white\/5 dark:bg-white\/5 px-4 py-3 sm:px-5 backdrop-blur-md shadow-inner transition hover:bg-theme-surface"/g,
  'className="group flex items-center gap-4 border border-theme-border bg-black/5 dark:bg-white/5 px-4 py-3 sm:px-5 backdrop-blur-md shadow-inner transition hover:bg-theme-surface"'
);

content = content.replace(
  /className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white\/5 bg-gradient-to-br from-theme-gold\/10 to-transparent text-theme-gold"/g,
  'className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-theme-border bg-gradient-to-br from-theme-gold/10 to-transparent text-theme-gold"'
);

content = content.replace(
  /className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-gradient-to-br from-\[rgba\(201,168,76,0\.2\)\] to-transparent border border-white\/5 text-theme-gold shadow-\[0_4px_15px_rgba\(201,168,76,0\.15\)\] sm:h-12 sm:w-12 sm:rounded-xl"/g,
  'className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-gradient-to-br from-theme-gold/20 to-transparent border border-theme-border text-theme-gold shadow-[0_4px_15px_rgba(201,168,76,0.15)] sm:h-12 sm:w-12 sm:rounded-xl"'
);

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Fixed additional theme issues!');
