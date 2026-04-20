import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

const replacements = [
  // Typography
  { regex: /text-\[#F5F0E8\]/g, replacement: 'text-theme-text' },
  { regex: /text-\[#8E897F\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#8F8A80\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#89847A\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#C9A84C\]/g, replacement: 'text-theme-gold' },

  // Backgrounds
  { regex: /bg-\[#0A0A0A\]/g, replacement: 'bg-theme-bg' },
  { regex: /bg-\[rgba\(10,10,10,0\.78\)\]/g, replacement: 'bg-theme-surface/70' },
  { regex: /bg-\[rgba\(10,10,10,0\.4\)\]/g, replacement: 'bg-theme-surface/40' },
  { regex: /bg-\[rgba\(10,10,10,0\.3\)\]/g, replacement: 'bg-theme-surface/30' },
  { regex: /bg-\[rgba\(10,10,10,0\.25\)\]/g, replacement: 'bg-theme-surface/25' },
  { regex: /bg-\[rgba\(10,10,10,0\.5\)\]/g, replacement: 'bg-theme-surface/50' },

  // Borders
  { regex: /border-\[rgba\(201,168,76,0\.14\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.18\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.12\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.3\)\]/g, replacement: 'border-theme-gold/30' },
  { regex: /border-\[rgba\(255,255,255,0\.08\)\]/g, replacement: 'border-theme-border' },

  // Special containers
  { regex: /hover:text-\[#F5F0E8\]/g, replacement: 'hover:text-theme-text' },
];

replacements.forEach(({ regex, replacement }) => {
  content = content.replace(regex, replacement);
});

// Update the Ambient Orbs to be dynamic too
content = content.replace(
  /bg-\[rgba\(201,168,76,0\.12\)\]/g,
  'bg-theme-gold mix-blend-color-dodge dark:mix-blend-normal opacity-10 dark:opacity-10'
);

// One-off fix for the main shell/bg
content = content.replace(
  'div className="relative overflow-x-hidden bg-[#0A0A0A] text-[#F5F0E8]"',
  'div className="relative overflow-x-hidden bg-theme-bg text-theme-text transition-colors duration-400"'
);

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Restored Theme Utility Classes.');
