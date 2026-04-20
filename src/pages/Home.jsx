import brochureAerial from '../assets/brochure-aerial-layout.jpg';
import brochureAmenities from '../assets/brochure-amenities-collage.jpg';
import brochureClubhouse from '../assets/brochure-clubhouse.jpg';
import brochureConstruction from '../assets/brochure-construction-progress.jpg';
import brochureLounge from '../assets/brochure-lounge.jpg';
import goaBedroom from '../assets/goa-bedroom-new.png';
import goaPlots from '../assets/goa-plots-new.png';
import goaVillas from '../assets/goa-villas-new.png';
import heroVilla from '../assets/hero-villa-new.png';
import logo from '../assets/logo.jpeg';

import { useEffect, useState } from 'react';

import {
  ArrowRight,
  Bike,
  CalendarRange,
  CarFront,
  Check,
  ChevronRight,
  HeartPulse,
  House,
  Leaf,
  Mail,
  Menu,
  Moon,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Sun,
  TrendingUp,
  Waves,
  X,
} from 'lucide-react';

const brochureUrl = '/shantim-brochure.pdf';

const navLinks = [
  { label: 'Why Goa', href: '#why-goa' },
  { label: 'About', href: '#about' },
  { label: 'Masterplan', href: '#masterplan' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Villas', href: '#villas' },
  { label: 'Enquire', href: '#enquire' },
];

const heroStats = [
  { value: '100+', label: 'Acres' },
  { value: '4 Acre', label: 'Lakefront' },
  { value: '5-Star', label: 'Services' },
];

const heroHighlights = [
  'Luxury lakeside township in Doda Marg',
  'Resort-grade services with curated leisure',
  'Low-density living designed around nature',
];

const whyGoaCards = [
  {
    icon: TrendingUp,
    title: '65%+ Capital Growth',
    description:
      'Premium coastal pockets in Goa continue to attract second-home and lifestyle capital.',
  },
  {
    icon: HeartPulse,
    title: 'Clean Air & Health',
    description:
      'A greener, slower environment that offers a break from dense, polluted urban living.',
  },
  {
    icon: Plane,
    title: 'Mopa Airport',
    description:
      'Only 18 KM from the new international gateway, improving long-term regional access.',
  },
  {
    icon: House,
    title: 'Tourism & Rental Income',
    description:
      'Holiday-home demand and short-stay tourism continue to support strong rental potential.',
  },
];

const statStrip = [
  { value: '100+', label: 'Acres' },
  { value: '4 Acre', label: 'Lake' },
  { value: '500+', label: 'Flower Species' },
  { value: '2 Acre', label: 'Entertainment' },
  { value: '5★', label: 'Services' },
];

const aboutHighlights = [
  'Integrated township planning with hospitality-grade experiences.',
  'Surrounded by hills, rivers, and a signature lakeside edge.',
  '5-star luxury services designed for daily comfort.',
  'Organic farming, horse riding, and experiential recreation.',
  'Resort-style living with privacy, space, and future value.',
];

const amenities = [
  { title: 'Infinity Pool', icon: Waves },
  { title: 'Amphitheatre', icon: Sparkles },
  { title: 'Yoga & Wellness Centre', icon: HeartPulse },
  { title: 'Spa & Sauna', icon: Sparkles },
  { title: 'Horse Riding', icon: Sparkles },
  { title: 'Kids Play Zone', icon: ShieldCheck },
  { title: 'Jogging Track', icon: HeartPulse },
  { title: 'Cycle Track', icon: Bike },
  { title: 'Organic Farming', icon: Leaf },
  { title: 'Club House', icon: House },
  { title: 'Entertainment Zone', icon: Sparkles },
  { title: '5-Tier Security', icon: ShieldCheck },
];

const villaProducts = [
  {
    title: '2 BHK Villa',
    subtitle: 'Private pool, garden, and lake-oriented outdoor living.',
    image: goaVillas,
    tags: ['Pool', 'Garden Deck', 'Lake View'],
  },
  {
    title: '3 BHK Villa',
    subtitle: 'Spacious family layout with premium suite-driven planning.',
    image: goaBedroom,
    tags: ['Suite Option', 'Family Lounge', 'Resort Finish'],
  },
  {
    title: '5 BHK Villa',
    subtitle: 'Ultra-luxury residence with a dramatic double-height experience.',
    image: heroVilla,
    tags: ['Double Height', 'Ultra Luxury', 'Signature Address'],
  },
];

const services = [
  { title: 'Private Chef', icon: Sparkles },
  { title: 'In-Room Dining', icon: Sparkles },
  { title: 'Valet Parking', icon: CarFront },
  { title: 'Laundry Services', icon: Sparkles },
  { title: 'Medical on Call', icon: HeartPulse },
  { title: 'Transportation on Call', icon: CarFront },
  { title: 'Housekeeping', icon: Sparkles },
];

const connectivity = [
  { metric: '18 KM', label: 'Mopa International Airport', icon: Plane },
  { metric: '40 min', label: 'North Goa Beaches', icon: Waves },
  { metric: '20 min', label: 'International Cricket Stadium', icon: ShieldCheck },
  { metric: '25 min', label: 'Upcoming Onshore Casino', icon: Sparkles },
  { metric: '22 min', label: 'Film City', icon: House },
  { metric: '15 min', label: 'Industrial Developments', icon: TrendingUp },
];

const investmentCards = [
  {
    title: 'High Rental Yields',
    description: 'Tourism-led occupancy creates strong short-stay and managed-home potential.',
    icon: TrendingUp,
  },
  {
    title: 'Capital Appreciation',
    description: 'Scarcity in premium lifestyle inventory supports long-term price growth.',
    icon: CalendarRange,
  },
  {
    title: 'Secure Asset',
    description: 'Structured as a clear-title opportunity with a registered developer platform.',
    icon: ShieldCheck,
  },
];

const timeline = [
  { title: 'Groundbreaking', icon: Sparkles },
  { title: 'Construction', icon: CalendarRange },
  { title: 'Completion (24-36 months)', icon: ShieldCheck },
];

const budgetOptions = [
  'Below INR 1.5 Cr',
  'INR 1.5 Cr - INR 3 Cr',
  'INR 3 Cr - INR 5 Cr',
  'Above INR 5 Cr',
];

const testimonials = [
  {
    name: 'Vikram S.',
    location: 'Mumbai, India',
    quote:
      'An absolute masterpiece of design. The integration with nature makes this township a completely unique asset class in Goa.',
    rating: 5,
  },
  {
    name: 'Anjali D.',
    location: 'Delhi, India',
    quote:
      'The level of hospitality and the amenities provided are world-class. It truly feels like owning your private resort.',
    rating: 5,
  },
  {
    name: 'Rahul K.',
    location: 'Dubai, UAE',
    quote:
      'We were looking for a long-term investment that offers a lifestyle upgrade. Shantim perfectly aligns with our vision.',
    rating: 5,
  },
];

const shellClass = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12';
const sectionClass = 'py-10 sm:py-12 lg:py-16';
const cardClass =
  'hover-lift border border-white/5 border-t-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-2xl backdrop-blur-md relative overflow-hidden group';
const buttonBaseClass =
  'sheen-button inline-flex flex-shrink-0 items-center justify-center gap-2 border border-[#C9A84C] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6 sm:text-xs sm:tracking-[0.24em]';

const revealStyle = (delay) => ({ animationDelay: delay });

const SectionHeading = ({ label, title, description, align = 'left' }) => {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-theme-gold text-[10px] tracking-[0.24em] uppercase sm:text-xs sm:tracking-[0.3em]">
        {label}
      </p>
      <h2 className="font-heading text-theme-text mt-3 text-[2rem] leading-[0.95] font-light sm:text-[2.65rem] lg:text-[3.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9A978C] sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
};

const FormField = ({ id, label, type = 'text', placeholder, options, forceLight = false }) => {
  const inputClass = `w-full border border-theme-border px-4 py-3 text-sm outline-none transition px-4 py-3 ${
    forceLight
      ? 'bg-white/10 text-white placeholder:text-white/50 focus:border-white/40'
      : 'bg-theme-surface text-theme-text placeholder:text-theme-muted/50 focus:border-theme-gold'
  }`;

  return (
    <label className="space-y-2" htmlFor={id}>
      <span
        className={`text-[10px] tracking-[0.2em] uppercase sm:text-xs sm:tracking-[0.24em] ${forceLight ? 'text-white/70' : 'text-theme-muted'}`}
      >
        {label}
      </span>
      {type === 'select' ? (
        <select id={id} name={id} defaultValue="" className={inputClass} required>
          <option value="" disabled className={forceLight ? 'bg-zinc-900' : 'bg-theme-surface'}>
            Select {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className={forceLight ? 'bg-zinc-900' : 'bg-theme-surface'}
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          required
          onInput={
            type === 'tel'
              ? (e) => {
                  e.target.value = e.target.value.replace(/[^0-9+]/g, '');
                }
              : undefined
          }
          maxLength={type === 'tel' ? 15 : undefined}
        />
      )}
    </label>
  );
};

const LeadForm = ({
  formId,
  title,
  description,
  buttonLabel = 'Get a Callback',
  customClass,
  forceLight = false,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div
      className={`${customClass || cardClass} reveal-up relative overflow-hidden p-4 sm:p-5 lg:p-6`}
      style={revealStyle('0.18s')}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-theme-gold),transparent)]" />
      <p
        className={`text-[10px] tracking-[0.22em] uppercase sm:text-xs sm:tracking-[0.26em] ${forceLight ? 'text-white/60' : 'text-theme-gold'}`}
      >
        Reserve Your Slot
      </p>
      <h3
        className={`font-heading mt-2 text-[1.5rem] leading-none font-light sm:text-[1.8rem] ${forceLight ? 'text-white' : 'text-theme-text'}`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-xs leading-relaxed sm:text-sm ${forceLight ? 'text-white/80' : 'text-theme-muted'}`}
      >
        {description}
      </p>

      <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
        <FormField
          id={`${formId}-name`}
          label="Name"
          placeholder="Your full name"
          forceLight={forceLight}
        />
        <FormField
          id={`${formId}-phone`}
          label="Phone"
          type="tel"
          placeholder="+91"
          forceLight={forceLight}
        />
        <FormField
          id={`${formId}-city`}
          label="City"
          placeholder="Your city"
          forceLight={forceLight}
        />
        <FormField
          id={`${formId}-budget`}
          label="Budget"
          type="select"
          options={budgetOptions}
          forceLight={forceLight}
        />

        <button type="submit" className={`${buttonBaseClass} bg-theme-gold mt-1 text-black`}>
          {buttonLabel}
        </button>
      </form>

      <p className={`mt-4 text-xs leading-6 ${forceLight ? 'text-white/50' : 'text-theme-muted'}`}>
        By submitting, you agree to receive project details and callback assistance from Shantim.
      </p>

      {submitted ? (
        <p
          className={`border-theme-border mt-4 border px-4 py-3 text-sm ${forceLight ? 'bg-white/10 text-white' : 'bg-theme-surface text-theme-text'}`}
        >
          Thank you. Our team will contact you shortly with brochure and site-visit details.
        </p>
      ) : null}
    </div>
  );
};

const Home = () => {
  const isDark = true;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSliderImages = [heroVilla, goaVillas, goaBedroom, brochureLounge];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSliderImages.length]);

  return (
    <div className="bg-theme-bg text-theme-text relative overflow-x-hidden transition-colors duration-400">
      <div className="ambient-orb bg-theme-gold top-[6rem] left-[-10%] h-[16rem] w-[16rem] opacity-[0.06] mix-blend-multiply dark:opacity-10 dark:mix-blend-normal" />
      <div className="ambient-orb ambient-orb-delay bg-theme-gold top-[32rem] right-[-8%] h-[18rem] w-[18rem] opacity-[0.06] mix-blend-multiply dark:opacity-10 dark:mix-blend-normal" />
      <div className="ambient-orb bg-theme-gold bottom-[10%] left-[18%] h-[14rem] w-[14rem] opacity-[0.06] mix-blend-multiply dark:opacity-10 dark:mix-blend-normal" />

      <header className="border-theme-border bg-theme-surface/70 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
        <div className={`${shellClass} flex items-center justify-between py-3.5 sm:py-4`}>
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="SHANTIM"
              className="h-8 w-auto object-contain transition-[filter,mix-blend-mode] duration-500 sm:h-10"
              style={{
                filter: isDark
                  ? 'brightness(1.1) contrast(1.25)'
                  : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.5)',
                mixBlendMode: isDark ? 'normal' : 'multiply',
              }}
            />
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-theme-muted hover:text-theme-text text-xs tracking-[0.18em] uppercase transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <a
              href="tel:9536202202"
              className="text-theme-muted hover:text-theme-text text-xs tracking-[0.18em] uppercase transition"
            >
              9536-202-202
            </a>
            <a href="#enquire" className={`${buttonBaseClass} bg-[#C9A84C] text-[#0A0A0A]`}>
              Enquire Now
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              aria-label="Toggle navigation"
              className="border-theme-border text-theme-text border p-2.5 xl:hidden"
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-theme-border border-t xl:hidden">
            <div className={`${shellClass} grid gap-3 py-4`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-theme-text text-sm tracking-[0.16em] uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:9536202202" className="text-theme-muted pt-2 text-sm">
                9536-202-202
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top" className="relative pb-24 md:pb-0">
        <section
          className={`relative flex min-h-[100svh] items-center overflow-hidden px-0 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14`}
        >
          {/* Continuous Image Slider Background */}
          <div className="bg-theme-bg absolute inset-0 z-0">
            {heroSliderImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Shantim Luxury Goa Slide ${index + 1}`}
                  className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-linear ${
                    index === currentSlide ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            ))}
            {/* Premium Theme-Aware Overlay */}
            <div
              className={`absolute inset-0 z-20 transition-all duration-700 ${isDark ? 'bg-gradient-to-t from-[#0A0A0A] via-[rgba(10,10,10,0.5)] to-[rgba(10,10,10,0.2)] lg:bg-gradient-to-r lg:from-[#0A0A0A] lg:via-[rgba(10,10,10,0.4)] lg:to-transparent' : 'bg-black/45 lg:bg-gradient-to-r lg:from-black/60 lg:via-black/20 lg:to-transparent'}`}
            />
            <div
              className={`absolute inset-0 z-20 transition-all duration-700 ${isDark ? 'bg-black/10' : 'bg-black/10'}`}
            />

            {/* Bottom blend layer */}
            <div
              className={`absolute inset-x-0 bottom-0 z-20 h-40 transition-colors duration-700 ${isDark ? 'bg-[linear-gradient(180deg,transparent,rgba(10,10,10,1))]' : 'bg-[linear-gradient(180deg,transparent,var(--color-theme-bg))] opacity-80'}`}
            />
          </div>

          <div
            className={`${shellClass} relative z-30 grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,380px)] lg:gap-10`}
          >
            <div className="order-1">
              <div
                className="reveal-up border-theme-gold/30 text-theme-gold inline-flex border px-3 py-2 text-[10px] tracking-[0.2em] uppercase sm:px-4 sm:text-xs sm:tracking-[0.28em]"
                style={revealStyle('0s')}
              >
                Doda Marg, Goa - Luxury Lakeside Township
              </div>

              <h1
                className="font-heading reveal-up mt-4 max-w-4xl text-[2rem] leading-[1] font-light text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:mt-5 sm:text-[2.8rem] lg:text-[4.5rem]"
                style={revealStyle('0.08s')}
              >
                Experience Lakeside Living Like Never Before
              </h1>

              <p
                className="reveal-up text-theme-gold mt-3 text-base italic sm:mt-4 sm:text-lg lg:text-xl"
                style={revealStyle('0.12s')}
              >
                100 Acres of Tranquil Paradise, Goa
              </p>

              <p
                className="reveal-up mt-3 max-w-2xl text-xs leading-relaxed text-white/90 drop-shadow sm:mt-4 sm:text-sm lg:text-base lg:leading-8"
                style={revealStyle('0.16s')}
              >
                Shantim is a luxury lakeside township shaped around a 4 acre lake, signature
                landscapes, low-density villa living, and 5-star services for buyers who want a
                calmer, more elevated side of Goa.
              </p>

              <div className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3">
                {heroHighlights.map((item, index) => (
                  <div
                    key={item}
                    className={`reveal-up border-theme-gold/30 flex items-start gap-2 border px-2.5 py-2.5 backdrop-blur-md transition-colors sm:px-3 sm:py-3 ${isDark ? 'bg-black/40' : 'bg-black/20 shadow-md'}`}
                    style={revealStyle(`${0.18 + index * 0.04}s`)}
                  >
                    <span className="border-theme-border text-theme-gold mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center border">
                      <Check size={12} />
                    </span>
                    <span className="text-[10px] leading-relaxed text-white sm:text-xs">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`reveal-up border-theme-border bg-theme-surface/25 border p-3 text-center shadow-lg backdrop-blur-md sm:p-4`}
                    style={revealStyle(`${0.24 + index * 0.05}s`)}
                  >
                    <p className="font-heading text-[1.4rem] font-light text-white sm:text-[1.8rem]">
                      {stat.value}
                    </p>
                    <p className="text-theme-gold mt-1 text-[9px] tracking-[0.18em] uppercase sm:text-[10px] sm:tracking-[0.24em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="reveal-up mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:gap-3"
                style={revealStyle('0.34s')}
              >
                <a
                  href={brochureUrl}
                  download
                  className={`${buttonBaseClass} bg-[#C9A84C] py-2.5 text-[#0A0A0A] sm:py-3`}
                >
                  Download Brochure
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#enquire"
                  className={`${buttonBaseClass} bg-theme-surface/50 text-theme-text py-2.5 backdrop-blur-md hover:bg-[rgba(201,168,76,0.1)] sm:py-3`}
                >
                  Book Site Visit
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="order-2 w-full lg:ml-auto lg:max-w-md">
              <div className="transform transition-transform duration-500 hover:-translate-y-1">
                <LeadForm
                  formId="hero"
                  forceLight={true}
                  title="Request Pricing & Availability"
                  description="Share your details for a callback, brochure access, and villa guidance from the Shantim team."
                  customClass="hover-lift border border-[rgba(255,255,255,0.1)] bg-[rgba(10,10,10,0.35)] backdrop-blur-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="why-goa" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div
            className={`${shellClass} grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start`}
          >
            <SectionHeading
              label="Why Goa?"
              title="Why Smart Investors Choose Goa"
              description="The market combines lifestyle demand, infrastructure upgrades, and scarcity-driven value for premium second homes."
            />

            <div
              className={`${cardClass} media-panel reveal-up overflow-hidden p-3 sm:p-4`}
              style={revealStyle('0.08s')}
            >
              <img
                src={goaPlots}
                alt="Premium Goa plots and land development"
                className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[320px]"
              />
            </div>
          </div>

          <div className={`${shellClass} mt-6 grid gap-4 sm:mt-8 md:grid-cols-2 xl:grid-cols-4`}>
            {whyGoaCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className={`${cardClass} reveal-up p-4 sm:p-5`}
                  style={revealStyle(`${0.06 + index * 0.05}s`)}
                >
                  <span className="border-theme-gold/30 text-theme-gold inline-flex h-11 w-11 items-center justify-center border bg-black/40 shadow-inner backdrop-blur-md">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-heading text-theme-text mt-4 text-[1.6rem] leading-tight font-light sm:text-[1.8rem]">
                    {card.title}
                  </h3>
                  <p className="text-theme-muted mt-3 text-sm leading-7">{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="border-theme-border relative border-y bg-[linear-gradient(90deg,#0A0A0A,rgba(20,20,20,0.9),#0A0A0A)] py-6 backdrop-blur-md sm:py-8">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(201,168,76,0.05),transparent)]" />
          <div
            className={`${shellClass} relative grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-5`}
          >
            {statStrip.map((stat, index) => (
              <div
                key={stat.label}
                className={`${index === statStrip.length - 1 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''} reveal-up`}
                style={revealStyle(`${index * 0.1}s`)}
              >
                <p className="font-heading bg-gradient-to-r from-[#F5F0E8] to-[#C9A84C] bg-clip-text text-[2rem] font-light text-transparent drop-shadow-[0_0_15px_rgba(201,168,76,0.3)] sm:text-[2.6rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] tracking-[0.2em] text-[#8D887E] uppercase sm:text-xs sm:tracking-[0.28em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div
            className={`${shellClass} grid gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-stretch`}
          >
            <div className="flex flex-col gap-6">
              <SectionHeading
                label="About The Project"
                title="A resort-led township shaped around water, nature, and privacy."
                description="Shantim combines a large land parcel, a signature lake, recreation-led planning, and hospitality-grade services to create a future-facing address for both living and investment."
              />
              <div
                className={`${cardClass} reveal-up hidden flex-1 p-5 sm:p-6 lg:flex lg:flex-col`}
                style={revealStyle('0.14s')}
              >
                <div className="flex h-full flex-col justify-between gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="border-theme-border border-r pr-5">
                      <p className="font-heading text-theme-text text-[2.4rem] leading-none font-light">
                        100+
                      </p>
                      <p className="text-theme-muted mt-2 text-[10px] tracking-[0.18em] uppercase sm:text-xs">
                        Acres of Land
                      </p>
                    </div>
                    <div>
                      <p className="font-heading text-theme-text text-[2.4rem] leading-none font-light">
                        4 Acre
                      </p>
                      <p className="text-theme-muted mt-2 text-[10px] tracking-[0.18em] uppercase sm:text-xs">
                        Signature Lake
                      </p>
                    </div>
                  </div>
                  <div className="border-theme-border grid grid-cols-2 gap-5 border-t pt-5">
                    <div className="border-theme-border border-r pr-5">
                      <p className="font-heading text-theme-text text-[2.4rem] leading-none font-light">
                        5-Star
                      </p>
                      <p className="text-theme-muted mt-2 text-[10px] tracking-[0.18em] uppercase sm:text-xs">
                        Resort Services
                      </p>
                    </div>
                    <div>
                      <p className="font-heading text-theme-text text-[2.4rem] leading-none font-light">
                        Low
                      </p>
                      <p className="text-theme-muted mt-2 text-[10px] tracking-[0.18em] uppercase sm:text-xs">
                        Density Living
                      </p>
                    </div>
                  </div>
                  <div className="border-theme-border border-t pt-5">
                    <p className="text-sm leading-7 text-[#8D887E]">
                      A self-sustained resort township in the heart of North Goa — designed for
                      privacy, nature, and long-term value.
                    </p>
                  </div>
                  <div className="border-theme-border border-t pt-4">
                    <p className="text-theme-gold text-[10px] tracking-[0.22em] uppercase sm:text-xs">
                      Doda Marg, North Goa · Phase 1 Underway
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              <div
                className={`${cardClass} media-panel reveal-up overflow-hidden p-3 sm:p-4`}
                style={revealStyle('0.05s')}
              >
                <img
                  src={brochureClubhouse}
                  alt="Original brochure image of a premium clubhouse-style exterior"
                  className="h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                />
              </div>

              <div className={`${cardClass} reveal-up p-5 sm:p-6`} style={revealStyle('0.1s')}>
                <ul className="grid gap-4">
                  {aboutHighlights.map((item, index) => (
                    <li
                      key={item}
                      className={`flex items-start gap-4 transition hover:translate-x-1 ${index < aboutHighlights.length - 1 ? 'border-b border-white/5 pb-4' : ''}`}
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A84C] to-[#997B2E] text-[#0A0A0A] shadow-[0_0_10px_rgba(201,168,76,0.4)]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-theme-text text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquire"
                  className={`${buttonBaseClass} text-theme-gold mt-6 w-full max-w-[220px] border-none bg-[rgba(201,168,76,0.15)] backdrop-blur transition hover:bg-[#C9A84C] hover:text-black`}
                >
                  Download Details
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="masterplan" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div className={shellClass}>
            <SectionHeading
              label="Masterplan"
              title="Phase 1 is now underway."
              description="The section below now uses brochure-based aerial reference imagery, while still remaining ready for a final approved masterplan render later."
            />

            <div
              className={`${cardClass} media-panel group reveal-up relative mt-6 overflow-hidden p-2 sm:mt-8 sm:p-3`}
              style={revealStyle('0.06s')}
            >
              <div className="overflow-hidden">
                <img
                  src={brochureAerial}
                  alt="Original brochure aerial layout image showing villa clusters"
                  className="h-[260px] w-full object-cover transition-transform duration-[10000ms] group-hover:scale-110 sm:h-[360px] lg:h-[500px]"
                />
              </div>
              <div className="text-theme-text absolute top-4 left-4 border border-white/20 bg-black/60 px-3 py-2 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md sm:top-6 sm:left-6">
                Aerial Planning Reference
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 z-10 grid gap-3 rounded-xl border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-lg sm:right-6 sm:bottom-6 sm:left-6 sm:p-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <p className="text-theme-gold text-[10px] tracking-[0.2em] uppercase drop-shadow">
                    Current Status
                  </p>
                  <p className="font-heading mt-2 text-[1.8rem] leading-none font-light text-white drop-shadow-lg sm:text-[2.4rem]">
                    24 to 36 months completion horizon
                  </p>
                </div>
                <a
                  href="#enquire"
                  className={`${buttonBaseClass} border-none bg-gradient-to-r from-[#C9A84C] to-[#E3C878] text-[#0A0A0A] shadow-[0_0_20px_rgba(201,168,76,0.3)] transition hover:scale-105`}
                >
                  Request Masterplan
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="amenities" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div className={shellClass}>
            <SectionHeading
              label="Amenities"
              title="World-Class Amenities"
              description="Each zone supports a complete resort rhythm, from wellness and family recreation to private leisure and daily convenience."
              align="center"
            />

            <div
              className={`${cardClass} media-panel reveal-up mt-6 overflow-hidden bg-white/5 p-1 backdrop-blur-3xl sm:mt-8`}
              style={revealStyle('0.05s')}
            >
              <div className="border-theme-gold/30 rounded-sm border bg-white p-2 shadow-inner sm:p-4">
                <img
                  src={brochureAmenities}
                  alt="Original brochure collage showing amenities and recreation offerings"
                  className="h-[280px] w-full object-contain sm:h-[400px] lg:h-[500px]"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;

                return (
                  <article
                    key={amenity.title}
                    className={`${cardClass} reveal-up group flex items-center gap-4 p-4 sm:p-5`}
                    style={revealStyle(`${0.04 + index * 0.03}s`)}
                  >
                    <span className="text-theme-gold inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/5 bg-gradient-to-br from-[rgba(201,168,76,0.2)] to-transparent shadow-inner backdrop-blur-md transition group-hover:scale-110 group-hover:text-white">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-heading text-theme-text text-[1.35rem] leading-tight font-light sm:text-[1.55rem]">
                      {amenity.title}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="villas" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div className={shellClass}>
            <SectionHeading
              label="Villa Products"
              title="Your Dream Villa Awaits"
              description="Each residence category is presented with a more visual product card so the collection feels premium on every screen size."
            />

            <div className="mt-6 grid gap-4 sm:mt-8 xl:grid-cols-3">
              {villaProducts.map((villa, index) => (
                <article
                  key={villa.title}
                  className={`${cardClass} reveal-up overflow-hidden`}
                  style={revealStyle(`${0.04 + index * 0.06}s`)}
                >
                  <div className="media-panel relative overflow-hidden">
                    <img
                      src={villa.image}
                      alt={`Original brochure image for ${villa.title} at Shantim`}
                      className="h-[220px] w-full object-cover sm:h-[250px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.8))] px-4 pb-4" />
                    <div className="absolute inset-x-0 right-4 bottom-4 left-4">
                      <p className="text-theme-gold text-[10px] tracking-[0.18em] uppercase">
                        Signature Collection
                      </p>
                      <h3 className="font-heading mt-2 text-[1.95rem] leading-none font-light text-white">
                        {villa.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-theme-muted text-sm leading-7">{villa.subtitle}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {villa.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-theme-gold border border-[rgba(201,168,76,0.2)] bg-black/40 px-3 py-2 text-[10px] tracking-[0.16em] uppercase backdrop-blur-md sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#enquire"
                      className={`${buttonBaseClass} mt-5 w-full border-none bg-gradient-to-r from-[#C9A84C] to-[#E3C878] text-[#0A0A0A] shadow-[0_0_15px_rgba(201,168,76,0.4)] transition hover:scale-[1.02]`}
                    >
                      Request Pricing
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div className={shellClass}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                label="Client Reviews"
                title="What Our Buyers Say"
                description="Discover why visionary investors and lifestyle seekers are securing their piece of Shantim."
              />
              <div className="shrink-0 pb-2 sm:pb-4">
                <a
                  href="#enquire"
                  className={`${buttonBaseClass} text-theme-gold border border-white/10 bg-white/5 shadow-inner backdrop-blur-md transition hover:bg-[#C9A84C] hover:text-[#0A0A0A]`}
                >
                  Submit Your Review
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3 lg:gap-6">
              {testimonials.map((review, index) => (
                <article
                  key={review.name}
                  className={`${cardClass} reveal-up group relative flex flex-col justify-between p-5 sm:p-7`}
                  style={revealStyle(`${0.06 + index * 0.05}s`)}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <span className="font-heading text-8xl text-white">"</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-theme-gold flex origin-left gap-1.5 transition duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 max-w-[95%] text-sm leading-relaxed text-[#D5CDBE] italic">
                      "{review.quote}"
                    </p>
                  </div>
                  <div className="border-theme-border relative z-10 mt-6 border-t pt-5 transition duration-500 group-hover:border-[#C9A84C]/40">
                    <p className="font-heading text-theme-text text-[1.2rem] font-light">
                      {review.name}
                    </p>
                    <p className="text-theme-muted mt-1 text-[10px] tracking-[0.2em] uppercase">
                      {review.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div
            className={`${shellClass} grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]`}
          >
            <div className="grid gap-5">
              <SectionHeading
                label="World Class Services"
                title="5-Star Resort Services, Every Day"
                description="The service layer is designed to feel closer to a refined resort stay than a conventional township ownership model."
              />

              <div
                className={`${cardClass} media-panel reveal-up overflow-hidden p-3 sm:p-4`}
                style={revealStyle('0.06s')}
              >
                <img
                  src={brochureLounge}
                  alt="Original brochure image of a premium lounge interior"
                  className="h-[210px] w-full object-cover sm:h-[250px] lg:h-[280px]"
                />
              </div>
            </div>

            <div className={`${cardClass} reveal-up p-5 sm:p-6`} style={revealStyle('0.12s')}>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="group flex items-center gap-4 border border-[rgba(201,168,76,0.06)] bg-white/5 px-4 py-3 shadow-inner backdrop-blur-md transition hover:bg-[#C9A84C]/10 sm:px-5"
                      style={revealStyle(`${0.1 + index * 0.03}s`)}
                    >
                      <span className="text-theme-gold inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[rgba(201,168,76,0.2)] bg-gradient-to-br from-[#C9A84C]/10 to-transparent backdrop-blur transition-transform group-hover:scale-110">
                        <Icon size={17} />
                      </span>
                      <span className="text-theme-text text-xs tracking-[0.16em] uppercase sm:text-sm">
                        {service.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="location" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div
            className={`${shellClass} grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`}
          >
            <div>
              <SectionHeading
                label="Location & Connectivity"
                title="Connected to Goa's next wave of infrastructure and lifestyle demand."
                description="The location supports both retreat-oriented living and practical access to airports, beaches, sports infrastructure, and future entertainment anchors."
              />

              <div
                className={`${cardClass} reveal-up mt-6 overflow-hidden p-2 sm:mt-8 sm:p-3`}
                style={revealStyle('0.08s')}
              >
                <iframe
                  title="Shantim location map"
                  src="https://www.google.com/maps?q=Dodamarg%2C%20Goa&z=11&output=embed"
                  className="h-[260px] w-full border-0 sm:h-[320px] lg:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div
              className={`${cardClass} reveal-up self-end p-5 sm:p-6`}
              style={revealStyle('0.12s')}
            >
              <div className="grid gap-4">
                {connectivity.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group border-theme-border flex items-start gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="text-theme-gold mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[rgba(201,168,76,0.2)] bg-gradient-to-br from-[#C9A84C]/10 to-transparent shadow-inner transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(201,168,76,0.2)]">
                        <Icon size={17} />
                      </span>
                      <div>
                        <p className="font-heading text-theme-text text-[1.8rem] leading-none font-light sm:text-[2.1rem]">
                          {item.metric}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-[#8D887E]">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="investment" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div className={shellClass}>
            <SectionHeading
              label="Investment Highlights"
              title="Built for lifestyle buyers and long-horizon investors."
              description="The proposition combines experiential ownership, tourism-led economics, and a staged delivery timeline."
              align="center"
            />

            <div
              className={`${cardClass} reveal-up mt-6 grid overflow-hidden sm:mt-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)]`}
              style={revealStyle('0.06s')}
            >
              <div className="media-panel overflow-hidden">
                <img
                  src={brochureConstruction}
                  alt="Original brochure image showing on-ground construction progress"
                  className="h-[220px] w-full object-cover sm:h-[280px] lg:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
                <p className="text-theme-gold text-[10px] tracking-[0.18em] uppercase sm:text-xs sm:tracking-[0.24em]">
                  On-Ground Progress
                </p>
                <h3 className="font-heading text-theme-text mt-3 text-[1.9rem] leading-none font-light sm:text-[2.4rem]">
                  Original brochure progress visuals are now part of the page.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#8D887E]">
                  This section now reflects real site progress imagery from the Shantim brochure,
                  giving the investment story more credibility than a fully illustrative treatment.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:mt-6 lg:grid-cols-3">
              {investmentCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className={`${cardClass} reveal-up group p-5 sm:p-6`}
                    style={revealStyle(`${0.05 + index * 0.05}s`)}
                  >
                    <span className="text-theme-gold inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.2)] bg-gradient-to-br from-[#C9A84C]/10 to-transparent shadow-inner backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-heading text-theme-text mt-5 text-[1.8rem] leading-none font-light sm:text-[2rem]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#8D887E]">{card.description}</p>
                  </article>
                );
              })}
            </div>

            <div
              className={`${cardClass} reveal-up mt-6 p-5 sm:mt-8 sm:p-6 lg:p-7`}
              style={revealStyle('0.1s')}
            >
              <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
                {timeline.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative">
                      <div className="flex items-center gap-3">
                        <span className="bg-theme-surface text-theme-gold inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,168,76,0.16)]">
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="text-[10px] tracking-[0.18em] text-[#8D887E] uppercase">
                            Stage {index + 1}
                          </p>
                          <p className="font-heading text-theme-text mt-2 text-[1.7rem] leading-none font-light drop-shadow-sm">
                            {step.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="enquire" className={`scroll-mt-24 px-0 ${sectionClass}`}>
          <div
            className={`${shellClass} grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]`}
          >
            <div className="grid gap-5">
              <SectionHeading
                label="Interested? Let's Talk"
                title="Speak with our team about pricing, inventory, and your preferred villa category."
                description="Use the enquiry form for a callback, brochure request, or site-visit scheduling. You can also reach us directly below."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:9536202202"
                  className={`${cardClass} reveal-up group flex items-center gap-4 p-4 sm:p-5`}
                  style={revealStyle('0.06s')}
                >
                  <span className="text-theme-gold inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-gradient-to-br from-[#C9A84C]/10 to-transparent shadow-inner backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="group-hover:text-theme-gold text-[10px] tracking-[0.18em] text-[#8D887E] uppercase transition">
                      Call Now
                    </p>
                    <p className="text-theme-text mt-1 text-sm transition group-hover:text-white">
                      9536-202-202
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:shantimgoa@gmail.com"
                  className={`${cardClass} reveal-up group flex items-center gap-4 p-4 sm:p-5`}
                  style={revealStyle('0.12s')}
                >
                  <span className="text-theme-gold inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-gradient-to-br from-[#C9A84C]/10 to-transparent shadow-inner backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="group-hover:text-theme-gold text-[10px] tracking-[0.18em] text-[#8D887E] uppercase transition">
                      Email Us
                    </p>
                    <p className="text-theme-text mt-1 text-sm transition group-hover:text-white">
                      shantimgoa@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <LeadForm
              formId="bottom"
              title="Request a Detailed Callback"
              description="Tell us where you are based and the team will connect with the right brochure, budget fit, and visit window."
              buttonLabel="Submit Enquiry"
            />
          </div>
        </section>
      </main>

      <footer className="border-theme-border border-t px-0 py-12 sm:py-14 lg:py-16">
        <div className={`${shellClass} grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]`}>
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="SHANTIM Logo"
                className="h-10 w-auto object-contain transition-[filter,mix-blend-mode] duration-500 sm:h-12"
                style={{
                  filter: isDark
                    ? 'brightness(1.1) contrast(1.25)'
                    : 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.5)',
                  mixBlendMode: isDark ? 'normal' : 'multiply',
                }}
              />
            </div>
            <div className="mt-5 grid gap-3 text-sm text-[#8D887E]">
              <a
                href="tel:9536202202"
                className="hover:text-theme-text flex items-center gap-3 transition"
              >
                <Phone size={16} className="text-theme-gold" />
                9536-202-202
              </a>
              <a
                href="mailto:shantimgoa@gmail.com"
                className="hover:text-theme-text flex items-center gap-3 transition"
              >
                <Mail size={16} className="text-theme-gold" />
                shantimgoa@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-theme-gold text-[10px] tracking-[0.24em] uppercase sm:text-xs sm:tracking-[0.28em]">
              Addresses
            </p>
            <div className="mt-4 grid gap-4 text-sm leading-7 text-[#8D887E]">
              <p>
                <span className="text-theme-text block">Corporate</span>
                A-118, Ground and 1st floor, Diamond Tower, Sector-136, Noida-201 301(Uttar Pradesh)
              </p>
              <p>
                <span className="text-theme-text block">Goa Office</span>
                S.N 8/1, Dhargal, Goa 403512
              </p>
              <p>
                <span className="text-theme-text block">Site Office</span>
                Maneri, North Goa, Doda Marg
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.18em] text-[#7D786F] uppercase sm:text-xs sm:tracking-[0.22em]">
              © {new Date().getFullYear()} Shantim. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <div className="border-theme-border bg-theme-surface/90 fixed inset-x-0 bottom-0 z-50 border-t p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href="tel:9536202202"
            className={`${buttonBaseClass} bg-[#C9A84C] px-3 py-3 text-center text-[#0A0A0A]`}
          >
            Call Now
          </a>
          <a
            href="#enquire"
            className={`${buttonBaseClass} text-theme-text bg-transparent px-3 py-3 text-center`}
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
