import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

// 1. Fix Hero Section Texts
content = content.replace(
  'h1\n                className="font-heading reveal-up mt-4 max-w-4xl text-[2rem] leading-[1] font-light text-theme-text sm:mt-5 sm:text-[2.8rem] lg:text-[4.5rem]"',
  'h1\n                className="font-heading reveal-up mt-4 max-w-4xl text-[2rem] leading-[1] font-light text-[#F5F0E8] sm:mt-5 sm:text-[2.8rem] lg:text-[4.5rem]"'
);

content = content.replace(
  'p\n                className="reveal-up mt-3 max-w-2xl text-xs leading-relaxed text-theme-muted sm:mt-4 sm:text-sm lg:text-base lg:leading-8"',
  'p\n                className="reveal-up mt-3 max-w-2xl text-xs leading-relaxed text-[#9A978C] sm:mt-4 sm:text-sm lg:text-base lg:leading-8"'
);

content = content.replace(
  '<span className="text-[10px] leading-relaxed text-theme-text sm:text-xs">',
  '<span className="text-[10px] leading-relaxed text-[#F5F0E8] sm:text-xs">'
);

content = content.replace(
  'p className="font-heading text-[1.4rem] font-light text-theme-text sm:text-[1.8rem]"',
  'p className="font-heading text-[1.4rem] font-light text-[#F5F0E8] sm:text-[1.8rem]"'
);

content = content.replace(
  'a\n                  href="#enquire"\n                  className={`${buttonBaseClass} bg-[rgba(10,10,10,0.5)] py-2.5 text-theme-text backdrop-blur-md hover:bg-[rgba(201,168,76,0.1)] sm:py-3`}',
  'a\n                  href="#enquire"\n                  className={`${buttonBaseClass} bg-[rgba(10,10,10,0.5)] py-2.5 text-[#F5F0E8] backdrop-blur-md hover:bg-[rgba(201,168,76,0.1)] sm:py-3`}'
);

// 2. Fix the Logo Filter dynamically for both instances
content = content.replace(
  /className="h-8 w-auto object-contain brightness-110 contrast-125 sm:h-10"\s*\/>/g,
  `className="h-8 w-auto object-contain sm:h-10 transition-[filter,mix-blend-mode] duration-500" style={{ filter: isDark ? 'brightness(1.1) contrast(1.25)' : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.5)', mixBlendMode: isDark ? 'normal' : 'multiply' }} />`
);

content = content.replace(
  /className="h-14 w-auto object-contain brightness-125 contrast-125 sm:h-16 lg:h-20"\s*\/>/g,
  `className="h-14 w-auto object-contain sm:h-16 lg:h-20 transition-[filter,mix-blend-mode] duration-500" style={{ filter: isDark ? 'brightness(1.25) contrast(1.25)' : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.5)', mixBlendMode: isDark ? 'normal' : 'multiply' }} />`
);

// 3. Fix the Aerial Planning Reference overlay text color over the dark image
content = content.replace(
  'className="absolute top-4 left-4 border border-white/20 bg-black/60 px-3 py-2 text-[10px] tracking-[0.2em] text-theme-text uppercase backdrop-blur-md sm:top-6 sm:left-6"',
  'className="absolute top-4 left-4 border border-theme-border bg-theme-surface/70 px-3 py-2 text-[10px] tracking-[0.2em] text-theme-text uppercase backdrop-blur-lg sm:top-6 sm:left-6 shadow-md"'
);

// 4. Fix stat strip button visibility
content = content.replace(
  'className={`${buttonBaseClass} border border-white/10 bg-white/5 dark:bg-white/5 text-theme-gold backdrop-blur-md transition hover:bg-theme-gold hover:text-black dark:hover:text-[#0A0A0A]`}',
  'className={`${buttonBaseClass} border border-theme-border bg-theme-surface/50 text-theme-gold backdrop-blur-md transition hover:bg-theme-gold hover:text-[#0A0A0A]`}'
);

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Fixed theme issues!');
