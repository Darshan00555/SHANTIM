import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');

// 1. Re-add forceLight prop to FormField
content = content.replace(
  'const FormField = ({ id, label, type = "text", placeholder, options = [] }) => {',
  'const FormField = ({ id, label, type = "text", placeholder, options = [], forceLight = false }) => {'
);
content = content.replace(
  'className="mt-1 block w-full border border-theme-border bg-theme-surface px-3 py-2 text-theme-text transition focus:border-theme-gold focus:ring-1 focus:ring-theme-gold outline-none sm:px-4 sm:py-2.5"',
  'className={`mt-1 block w-full border border-theme-border px-3 py-2 transition focus:border-theme-gold focus:ring-1 focus:ring-theme-gold outline-none sm:px-4 sm:py-2.5 ${forceLight ? "bg-white/10 text-white placeholder:text-white/50" : "bg-theme-surface text-theme-text"}`}'
);
content = content.replace(
  'className="text-[10px] tracking-wider text-theme-muted uppercase"',
  'className={`text-[10px] tracking-wider uppercase ${forceLight ? "text-white/70" : "text-theme-muted"}`}'
);

// 2. Re-add forceLight prop to LeadForm
content = content.replace(
  "const LeadForm = ({ formId, title, description, buttonLabel = 'Get a Callback', customClass }) => {",
  "const LeadForm = ({ formId, title, description, buttonLabel = 'Get a Callback', customClass, forceLight = false }) => {"
);
content = content.replace(
  'className="font-heading mt-2 text-[1.5rem] leading-none font-light text-theme-text sm:text-[1.8rem]"',
  'className={`font-heading mt-2 text-[1.5rem] leading-none font-light sm:text-[1.8rem] ${forceLight ? "text-white" : "text-theme-text"}`}'
);
content = content.replace(
  'className="mt-2 text-xs leading-relaxed text-theme-muted sm:text-sm"',
  'className={`mt-2 text-xs leading-relaxed sm:text-sm ${forceLight ? "text-white/80" : "text-theme-muted"}`}'
);
// Pass forceLight to FormFields inside LeadForm
content = content.replace(
  '<FormField id={`${formId}-name`} label="Name" placeholder="Your full name" />',
  '<FormField id={`${formId}-name`} label="Name" placeholder="Your full name" forceLight={forceLight} />'
);
content = content.replace(
  '<FormField id={`${formId}-phone`} label="Phone" type="tel" placeholder="+91" />',
  '<FormField id={`${formId}-phone`} label="Phone" type="tel" placeholder="+91" forceLight={forceLight} />'
);
content = content.replace(
  '<FormField id={`${formId}-city`} label="City" placeholder="Your city" />',
  '<FormField id={`${formId}-city`} label="City" placeholder="Your city" forceLight={forceLight} />'
);
content = content.replace(
  '<FormField id={`${formId}-budget`} label="Budget" type="select" options={budgetOptions} />',
  '<FormField id={`${formId}-budget`} label="Budget" type="select" options={budgetOptions} forceLight={forceLight} />'
);

// 3. Apply forceLight to Hero LeadForm
content = content.replace('formId="hero"', 'formId="hero" forceLight={true}');

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Restored ForceLight Safeguards.');
