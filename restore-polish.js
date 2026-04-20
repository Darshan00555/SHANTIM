import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

// 1. Restore Logo Filters (Header & Footer)
const logoRegex =
  /className="h-8 w-auto object-contain brightness-110 contrast-125 sm:h-10"\s*\/>/g;
content = content.replace(
  logoRegex,
  `className="h-8 w-auto object-contain sm:h-10 transition-[filter,mix-blend-mode] duration-500" style={{ filter: isDark ? 'brightness(1.1) contrast(1.25)' : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.5)', mixBlendMode: isDark ? 'normal' : 'multiply' }} />`
);

// Footer logo might be different size
const footerLogoRegex = /className="h-10 w-auto object-contain brightness-110 sm:h-12"\s*\/>/g;
content = content.replace(
  footerLogoRegex,
  `className="h-10 w-auto object-contain sm:h-12 transition-[filter,mix-blend-mode] duration-500" style={{ filter: isDark ? 'brightness(1.1) contrast(1.25)' : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.5)', mixBlendMode: isDark ? 'normal' : 'multiply' }} />`
);

// 2. Restore Hero Section Visibility logic
// (We want light mode hero to be bright, but text to be readable)
content = content.replace(
  /className={`absolute inset-0 z-20 transition-colors duration-700 \${isDark \? 'bg-gradient-to-t from-\[#0A0A0A\] via-\[rgba\(10,10,10,0\.5\)\] to-\[rgba\(10,10,10,0\.2\)\] lg:bg-gradient-to-r lg:from-\[#0A0A0A\] lg:via-\[rgba\(10,10,10,0\.4\)\] lg:to-transparent' : 'bg-gradient-to-t from-white\/60 via-white\/20 to-transparent lg:bg-gradient-to-r lg:from-white\/40 lg:via-white\/5 lg:to-transparent'}`}/g,
  "className={`absolute inset-0 z-20 transition-all duration-700 ${isDark ? 'bg-gradient-to-t from-[#0A0A0A] via-[rgba(10,10,10,0.5)] to-[rgba(10,10,10,0.2)] lg:bg-gradient-to-r lg:from-[#0A0A0A] lg:via-[rgba(10,10,10,0.4)] lg:to-transparent' : 'bg-white/60 dark:bg-transparent lg:bg-gradient-to-r lg:from-white/80 lg:via-white/40 lg:to-white/10'}`}"
);

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Restored Polish & Visibility.');
