import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

const replacements = [
  { regex: /text-\[#8F8A80\]/g, replacement: 'text-theme-muted' },
  { regex: /text-\[#89847A\]/g, replacement: 'text-theme-muted' },
  { regex: /from-\[#F5F0E8\]/g, replacement: 'from-theme-text' },
  { regex: /to-\[#C9A84C\]/g, replacement: 'to-theme-gold' },
  { regex: /from-\[#C9A84C\]/g, replacement: 'from-theme-gold' },
  { regex: /to-\[#997B2E\]/g, replacement: 'to-amber-600' }, // Gold to amber gradient text
  { regex: /hover:text-\[#0A0A0A\]/g, replacement: 'hover:text-black dark:hover:text-[#0A0A0A]' },
  { regex: /border-\[#C9A84C\]\/40/g, replacement: 'border-theme-gold/40' },
  { regex: /#C9A84C/g, replacement: 'var(--color-theme-gold)' }, // generic inline colors inside arbitrary variants
  {
    regex: /bg-\[linear-gradient\(90deg,#0A0A0A,rgba\(20,20,20,0\.9\),#0A0A0A\)\]/g,
    replacement:
      'bg-[linear-gradient(90deg,var(--color-theme-bg),var(--color-theme-surface),var(--color-theme-bg))]',
  },
  // Masterplan gradient to bg fade.
  { regex: /from-\[#0A0A0A\] to-transparent/g, replacement: 'from-theme-bg to-transparent' },
];

replacements.forEach(({ regex, replacement }) => {
  content = content.replace(regex, replacement);
});

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Replaced residual colors.');
