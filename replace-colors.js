import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

const replacements = [
  // Text primary
  { regex: /text-\[#F5F0E8\]/g, replacement: 'text-theme-text' },
  // Text muted
  { regex: /text-\[#8E897F\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#8D887E\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#9A978C\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#7B766D\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#7D786F\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#D5CDBE\]/g, replacement: 'text-theme-muted' },
  // Gold texts
  { regex: /text-\[#C9A84C\]/g, replacement: 'text-theme-gold' },
  // Backgrounds
  { regex: /bg-\[#0A0A0A\]/g, replacement: 'bg-theme-bg' },
  { regex: /bg-\[#111111\]/g, replacement: 'bg-theme-surface' },
  { regex: /bg-\[#121212\]/g, replacement: 'bg-theme-input' },
  { regex: /bg-\[#C9A84C\]/g, replacement: 'bg-theme-gold' },
  // Borders
  { regex: /border-\[rgba\(201,168,76,0\.06\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.12\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.14\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.16\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.18\)\]/g, replacement: 'border-theme-border' },
  { regex: /border-\[rgba\(201,168,76,0\.2\)\]/g, replacement: 'border-theme-border' },
  // Complex Backgrounds
  { regex: /bg-\[rgba\(10,10,10,0\.78\)\]/g, replacement: 'bg-theme-surface/90' },
  { regex: /bg-\[rgba\(10,10,10,0\.92\)\]/g, replacement: 'bg-theme-surface/95' },
  { regex: /bg-\[rgba\(10,10,10,0\.96\)\]/g, replacement: 'bg-theme-surface/95' },
  { regex: /from-\[rgba\(10,10,10,0\.92\)\]/g, replacement: 'from-theme-surface/90' },
  { regex: /from-\[#C9A84C\]\/10/g, replacement: 'from-theme-gold/10' },
  // Specific exceptions
  { regex: /bg-black\/40/g, replacement: 'bg-theme-surface/60' }, // Tags background
  { regex: /bg-white\/5/g, replacement: 'bg-white/5 dark:bg-white/5' }, // Actually, let's let Tailwind handle white/5
];

replacements.forEach(({ regex, replacement }) => {
  content = content.replace(regex, replacement);
});

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Replaced all hardcoded colors!');
