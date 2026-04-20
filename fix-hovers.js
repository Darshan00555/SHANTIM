import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

// 1. Fix Group-hover text-white inside cards that could be light
content = content.replace(
  /group-hover:text-white/g,
  'group-hover:text-theme-gold dark:group-hover:text-white'
);

// 2. Fix the Amenities icon background border
content = content.replace(/border-white\/5/g, 'border-theme-border');

// 3. Ensure all section headings labels use theme-gold
content = content.replace(/text-\[#C9A84C\]/g, 'text-theme-gold');

// 4. Fix footer phone/email specific white hover
content = content.replace(
  'p className="mt-1 text-sm text-theme-text group-hover:text-theme-gold dark:group-hover:text-white transition"',
  'p className="mt-1 text-sm text-theme-text group-hover:text-theme-gold dark:group-hover:text-white transition"'
);

// 5. Fix absolute overlays with hardcoded dark backgrounds but text-theme-text
// Villa product cards bottom overlay
content = content.replace(
  /className="font-heading mt-1 text-\[1.6rem\] leading-tight font-light text-theme-text sm:text-\[1.9rem\]"/g,
  'className="font-heading mt-1 text-[1.6rem] leading-tight font-light text-[#F5F0E8] sm:text-[1.9rem]"'
);

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Fixed final theme hover and visibility issues!');
