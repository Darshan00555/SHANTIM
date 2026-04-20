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

import { useState } from 'react';

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
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
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

const shellClass = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12';
const sectionClass = 'py-10 sm:py-12 lg:py-12';
const cardClass =
  'hover-lift border border-[rgba(201,168,76,0.16)] bg-[linear-gradient(180deg,rgba(27,27,27,0.92),rgba(13,13,13,0.92))] shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm';
const buttonBaseClass =
  'sheen-button inline-flex items-center justify-center gap-2 border border-[#C9A84C] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6 sm:text-xs sm:tracking-[0.24em]';

const revealStyle = (delay) => ({ animationDelay: delay });

const SectionHeading = ({ label, title, description, align = 'left' }) => {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-[10px] tracking-[0.24em] text-[#C9A84C] uppercase sm:text-xs sm:tracking-[0.3em]">
        {label}
      </p>
      <h2 className="font-heading mt-3 text-[2rem] leading-[0.95] font-light text-[#F5F0E8] sm:text-[2.65rem] lg:text-[3.6rem]">
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

const FormField = ({ id, label, type = 'text', placeholder, options }) => {
  const inputClass =
    'w-full border border-[rgba(201,168,76,0.14)] bg-[#121212] px-4 py-3 text-sm text-[#F5F0E8] outline-none transition placeholder:text-[#757169] focus:border-[#C9A84C]';

  return (
    <label className="space-y-2" htmlFor={id}>
      <span className="text-[10px] tracking-[0.2em] text-[#8E897F] uppercase sm:text-xs sm:tracking-[0.24em]">
        {label}
      </span>
      {type === 'select' ? (
        <select id={id} name={id} defaultValue="" className={inputClass} required>
          <option value="" disabled>
            Select budget
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
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
        />
      )}
    </label>
  );
};

const LeadForm = ({ formId, title, description, buttonLabel = 'Get a Callback' }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div
      className={`${cardClass} reveal-up relative overflow-hidden p-5 sm:p-6 lg:p-7`}
      style={revealStyle('0.18s')}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#C9A84C,transparent)]" />
      <p className="text-[10px] tracking-[0.24em] text-[#C9A84C] uppercase sm:text-xs sm:tracking-[0.28em]">
        Reserve Your Slot
      </p>
      <h3 className="font-heading mt-3 text-[1.9rem] leading-none font-light text-[#F5F0E8] sm:text-[2.3rem]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#8E897F]">{description}</p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <FormField id={`${formId}-name`} label="Name" placeholder="Your full name" />
        <FormField id={`${formId}-phone`} label="Phone" type="tel" placeholder="+91" />
        <FormField id={`${formId}-city`} label="City" placeholder="Your city" />
        <FormField id={`${formId}-budget`} label="Budget" type="select" options={budgetOptions} />

        <button type="submit" className={`${buttonBaseClass} mt-1 bg-[#C9A84C] text-[#0A0A0A]`}>
          {buttonLabel}
        </button>
      </form>

      <p className="mt-4 text-xs leading-6 text-[#7B766D]">
        By submitting, you agree to receive project details and callback assistance from Shantim.
      </p>

      {submitted ? (
        <p className="mt-4 border border-[rgba(201,168,76,0.14)] bg-[#111111] px-4 py-3 text-sm text-[#F5F0E8]">
          Thank you. Our team will contact you shortly with brochure and site-visit details.
        </p>
      ) : null}
    </div>
  );
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden bg-[#0A0A0A] text-[#F5F0E8]">
      <div className="ambient-orb top-[6rem] left-[-10%] h-[16rem] w-[16rem] bg-[rgba(201,168,76,0.16)]" />
      <div className="ambient-orb ambient-orb-delay top-[32rem] right-[-8%] h-[18rem] w-[18rem] bg-[rgba(245,240,232,0.08)]" />
      <div className="ambient-orb bottom-[10%] left-[18%] h-[14rem] w-[14rem] bg-[rgba(201,168,76,0.12)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(201,168,76,0.14)] bg-[rgba(10,10,10,0.78)] backdrop-blur-md">
        <div className={`${shellClass} flex items-center justify-between py-3.5 sm:py-4`}>
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="SHANTIM"
              className="h-8 w-auto object-contain brightness-110 contrast-125 sm:h-10"
            />
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.18em] text-[#8E897F] uppercase transition hover:text-[#F5F0E8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:9536202202"
              className="text-xs tracking-[0.18em] text-[#8E897F] uppercase transition hover:text-[#F5F0E8]"
            >
              9536-202-202
            </a>
            <a href="#enquire" className={`${buttonBaseClass} bg-[#C9A84C] text-[#0A0A0A]`}>
              Enquire Now
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="border border-[rgba(201,168,76,0.18)] p-2.5 text-[#F5F0E8] xl:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[rgba(201,168,76,0.12)] xl:hidden">
            <div className={`${shellClass} grid gap-3 py-4`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.16em] text-[#F5F0E8] uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:9536202202" className="pt-2 text-sm text-[#8E897F]">
                9536-202-202
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top" className="relative pb-24 md:pb-0">
        <section className={`px-0 pt-24 sm:pt-28 lg:pt-36 ${sectionClass}`}>
          <div
            className={`${shellClass} grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-8`}
          >
            <div className="order-1">
              <div
                className="reveal-up inline-flex border border-[rgba(201,168,76,0.22)] bg-[rgba(20,20,20,0.7)] px-3 py-2 text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase sm:px-4 sm:text-xs sm:tracking-[0.28em]"
                style={revealStyle('0s')}
              >
                Doda Marg, Goa - Luxury Lakeside Township
              </div>

              <h1
                className="font-heading reveal-up mt-5 max-w-4xl text-[2.35rem] leading-[0.92] font-light text-[#F5F0E8] sm:mt-6 sm:text-[3.4rem] lg:text-[5.7rem]"
                style={revealStyle('0.08s')}
              >
                Experience Lakeside Living Like Never Before
              </h1>

              <p
                className="reveal-up mt-4 text-base text-[#C9A84C] italic sm:text-xl lg:text-2xl"
                style={revealStyle('0.12s')}
              >
                100 Acres of Tranquil Paradise, Goa
              </p>

              <p
                className="reveal-up mt-5 max-w-2xl text-sm leading-7 text-[#9A978C] sm:text-base sm:leading-8"
                style={revealStyle('0.16s')}
              >
                Shantim is a luxury lakeside township shaped around a 6 acre lake, signature
                landscapes, low-density villa living, and 5-star services for buyers who want a
                calmer, more elevated side of Goa.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item, index) => (
                  <div
                    key={item}
                    className="reveal-up flex items-start gap-3 border border-[rgba(201,168,76,0.12)] bg-[rgba(17,17,17,0.68)] px-3 py-3"
                    style={revealStyle(`${0.18 + index * 0.04}s`)}
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center border border-[rgba(201,168,76,0.2)] text-[#C9A84C]">
                      <Check size={14} />
                    </span>
                    <span className="text-xs leading-6 text-[#D8D1C2] sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 sm:mt-6">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`${cardClass} reveal-up p-3 text-center sm:p-4`}
                    style={revealStyle(`${0.24 + index * 0.05}s`)}
                  >
                    <p className="font-heading text-[1.65rem] font-light text-[#F5F0E8] sm:text-[2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.18em] text-[#89847A] uppercase sm:text-xs sm:tracking-[0.24em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="reveal-up mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row"
                style={revealStyle('0.34s')}
              >
                <a
                  href={brochureUrl}
                  download
                  className={`${buttonBaseClass} bg-[#C9A84C] text-[#0A0A0A]`}
                >
                  Download Brochure
                  <ArrowRight size={16} />
                </a>
                <a href="#enquire" className={`${buttonBaseClass} bg-transparent text-[#F5F0E8]`}>
                  Book Site Visit
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="order-2 grid gap-4 sm:gap-5">
              <div
                className={`${cardClass} media-panel reveal-up relative overflow-hidden p-3 sm:p-4`}
                style={revealStyle('0.18s')}
              >
                <div className="absolute top-4 left-4 z-10 border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.74)] px-3 py-2 text-[10px] tracking-[0.18em] text-[#F5F0E8] uppercase sm:top-5 sm:left-5">
                  Lakeside Villa Experience
                </div>
                <img
                  src={heroVilla}
                  alt="Luxury lakeside villa at Shantim Goa"
                  className="h-[230px] w-full object-cover sm:h-[320px] lg:h-[390px]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.95))]" />
                <div className="absolute right-4 bottom-4 left-4 z-10 grid gap-3 sm:right-5 sm:bottom-5 sm:left-5 sm:grid-cols-2">
                  <div className="float-slow border border-[rgba(201,168,76,0.18)] bg-[rgba(12,12,12,0.76)] px-3 py-3">
                    <p className="text-[10px] tracking-[0.18em] text-[#C9A84C] uppercase">
                      Signature Edge
                    </p>
                    <p className="mt-1 text-sm text-[#F5F0E8]">Lake-facing township planning</p>
                  </div>
                  <div className="float-slower border border-[rgba(245,240,232,0.14)] bg-[rgba(12,12,12,0.76)] px-3 py-3">
                    <p className="text-[10px] tracking-[0.18em] text-[#C9A84C] uppercase">
                      Phase 1
                    </p>
                    <p className="mt-1 text-sm text-[#F5F0E8]">24 to 36 months completion</p>
                  </div>
                </div>
              </div>

              <LeadForm
                formId="hero"
                title="Request Pricing & Availability"
                description="Share your details for a callback, brochure access, and villa guidance from the Shantim team."
              />
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
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-heading mt-4 text-[1.7rem] leading-none font-light text-[#F5F0E8] sm:text-[2rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#8F8A80]">{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="border-y border-[rgba(201,168,76,0.14)] bg-[#C9A84C] py-5 text-[#0A0A0A] sm:py-6">
          <div
            className={`${shellClass} grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-5`}
          >
            {statStrip.map((stat, index) => (
              <div
                key={stat.label}
                className={`${index === statStrip.length - 1 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''}`}
              >
                <p className="font-heading text-[1.8rem] font-light sm:text-[2.2rem]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.18em] uppercase sm:text-xs sm:tracking-[0.24em]">
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
                    <div className="border-r border-[rgba(201,168,76,0.12)] pr-5">
                      <p className="font-heading text-[2.4rem] leading-none font-light text-[#F5F0E8]">
                        100+
                      </p>
                      <p className="mt-2 text-[10px] tracking-[0.18em] text-[#89847A] uppercase sm:text-xs">
                        Acres of Land
                      </p>
                    </div>
                    <div>
                      <p className="font-heading text-[2.4rem] leading-none font-light text-[#F5F0E8]">
                        4 Acre
                      </p>
                      <p className="mt-2 text-[10px] tracking-[0.18em] text-[#89847A] uppercase sm:text-xs">
                        Signature Lake
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 border-t border-[rgba(201,168,76,0.12)] pt-5">
                    <div className="border-r border-[rgba(201,168,76,0.12)] pr-5">
                      <p className="font-heading text-[2.4rem] leading-none font-light text-[#F5F0E8]">
                        5-Star
                      </p>
                      <p className="mt-2 text-[10px] tracking-[0.18em] text-[#89847A] uppercase sm:text-xs">
                        Resort Services
                      </p>
                    </div>
                    <div>
                      <p className="font-heading text-[2.4rem] leading-none font-light text-[#F5F0E8]">
                        Low
                      </p>
                      <p className="mt-2 text-[10px] tracking-[0.18em] text-[#89847A] uppercase sm:text-xs">
                        Density Living
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-[rgba(201,168,76,0.12)] pt-5">
                    <p className="text-sm leading-7 text-[#8D887E]">
                      A self-sustained resort township in the heart of North Goa — designed for
                      privacy, nature, and long-term value.
                    </p>
                  </div>
                  <div className="border-t border-[rgba(201,168,76,0.12)] pt-4">
                    <p className="text-[10px] tracking-[0.22em] text-[#C9A84C] uppercase sm:text-xs">
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
                      className={`flex gap-3 ${index < aboutHighlights.length - 1 ? 'border-b border-[rgba(201,168,76,0.12)] pb-4' : ''}`}
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-[rgba(201,168,76,0.18)] bg-[#111111] text-[#C9A84C]">
                        <Check size={14} />
                      </span>
                      <span className="text-sm leading-7 text-[#E2DACA]">{item}</span>
                    </li>
                  ))}
                </ul>
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
              className={`${cardClass} media-panel reveal-up relative mt-6 overflow-hidden p-3 sm:mt-8 sm:p-4`}
              style={revealStyle('0.06s')}
            >
              <img
                src={brochureAerial}
                alt="Original brochure aerial layout image showing villa clusters"
                className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[500px]"
              />
              <div className="absolute top-4 left-4 border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.78)] px-3 py-2 text-[10px] tracking-[0.18em] text-[#F5F0E8] uppercase sm:top-6 sm:left-6">
                Aerial Planning Reference
              </div>
              <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.96))]" />
              <div className="absolute right-4 bottom-4 left-4 z-10 grid gap-3 sm:right-6 sm:bottom-6 sm:left-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <p className="text-[10px] tracking-[0.18em] text-[#C9A84C] uppercase">
                    Current Status
                  </p>
                  <p className="font-heading mt-2 text-[1.8rem] leading-none font-light text-[#F5F0E8] sm:text-[2.4rem]">
                    24 to 36 months completion horizon
                  </p>
                </div>
                <a href="#enquire" className={`${buttonBaseClass} bg-[#C9A84C] text-[#0A0A0A]`}>
                  Enquire Now
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
              className={`${cardClass} media-panel reveal-up mt-6 overflow-hidden bg-[#F5F0E8] p-2 sm:mt-8 sm:p-3`}
              style={revealStyle('0.05s')}
            >
              <img
                src={brochureAmenities}
                alt="Original brochure collage showing amenities and recreation offerings"
                className="h-[220px] w-full object-contain sm:h-[300px] lg:h-[340px]"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;

                return (
                  <article
                    key={amenity.title}
                    className={`${cardClass} reveal-up flex items-center gap-3 p-4 sm:p-5`}
                    style={revealStyle(`${0.04 + index * 0.03}s`)}
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-heading text-[1.35rem] leading-tight font-light text-[#F5F0E8] sm:text-[1.55rem]">
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
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.92))]" />
                    <div className="absolute right-4 bottom-4 left-4">
                      <p className="text-[10px] tracking-[0.18em] text-[#C9A84C] uppercase">
                        Signature Collection
                      </p>
                      <h3 className="font-heading mt-2 text-[1.95rem] leading-none font-light text-[#F5F0E8]">
                        {villa.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-sm leading-7 text-[#D5CDBE]">{villa.subtitle}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {villa.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[rgba(201,168,76,0.14)] bg-[#111111] px-3 py-2 text-[10px] tracking-[0.16em] text-[#8E897F] uppercase sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#enquire"
                      className={`${buttonBaseClass} mt-5 w-full bg-[#C9A84C] text-[#0A0A0A]`}
                    >
                      Enquire Now
                    </a>
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
                      className="flex items-center gap-3 border border-[rgba(201,168,76,0.12)] bg-[#111111] px-3 py-3 sm:px-4"
                      style={revealStyle(`${0.1 + index * 0.03}s`)}
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(201,168,76,0.16)] text-[#C9A84C]">
                        <Icon size={17} />
                      </span>
                      <span className="text-xs tracking-[0.16em] text-[#F5F0E8] uppercase sm:text-sm">
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
                      className="flex items-start gap-3 border-b border-[rgba(201,168,76,0.12)] pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                        <Icon size={17} />
                      </span>
                      <div>
                        <p className="font-heading text-[1.8rem] leading-none font-light text-[#F5F0E8] sm:text-[2.1rem]">
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
                <p className="text-[10px] tracking-[0.18em] text-[#C9A84C] uppercase sm:text-xs sm:tracking-[0.24em]">
                  On-Ground Progress
                </p>
                <h3 className="font-heading mt-3 text-[1.9rem] leading-none font-light text-[#F5F0E8] sm:text-[2.4rem]">
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
                    className={`${cardClass} reveal-up p-5 sm:p-6`}
                    style={revealStyle(`${0.05 + index * 0.05}s`)}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-heading mt-4 text-[1.8rem] leading-none font-light text-[#F5F0E8] sm:text-[2rem]">
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
                        <span className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="text-[10px] tracking-[0.18em] text-[#8D887E] uppercase">
                            Stage {index + 1}
                          </p>
                          <p className="font-heading mt-2 text-[1.7rem] leading-none font-light text-[#F5F0E8]">
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
                  className={`${cardClass} reveal-up flex items-center gap-3 p-4 sm:p-5`}
                  style={revealStyle('0.06s')}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.18em] text-[#8D887E] uppercase">Call</p>
                    <p className="mt-1 text-sm text-[#F5F0E8]">9536-202-202</p>
                  </div>
                </a>

                <a
                  href="mailto:shantimgoa@gmail.com"
                  className={`${cardClass} reveal-up flex items-center gap-3 p-4 sm:p-5`}
                  style={revealStyle('0.12s')}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,168,76,0.16)] bg-[#111111] text-[#C9A84C]">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.18em] text-[#8D887E] uppercase">Email</p>
                    <p className="mt-1 text-sm text-[#F5F0E8]">shantimgoa@gmail.com</p>
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

      <footer className="border-t border-[rgba(201,168,76,0.12)] px-0 py-12 sm:py-14 lg:py-16">
        <div className={`${shellClass} grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]`}>
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="SHANTIM Logo"
                className="h-10 w-auto object-contain brightness-110 sm:h-12"
              />
            </div>
            <div className="mt-5 grid gap-3 text-sm text-[#8D887E]">
              <a
                href="tel:9536202202"
                className="flex items-center gap-3 transition hover:text-[#F5F0E8]"
              >
                <Phone size={16} className="text-[#C9A84C]" />
                9536-202-202
              </a>
              <a
                href="mailto:shantimgoa@gmail.com"
                className="flex items-center gap-3 transition hover:text-[#F5F0E8]"
              >
                <Mail size={16} className="text-[#C9A84C]" />
                shantimgoa@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.24em] text-[#C9A84C] uppercase sm:text-xs sm:tracking-[0.28em]">
              Addresses
            </p>
            <div className="mt-4 grid gap-4 text-sm leading-7 text-[#8D887E]">
              <p>
                <span className="block text-[#F5F0E8]">Corporate</span>
                A-118, Ground and 1st floor, Diamond Tower, Sector-136, Noida-201 301(Uttar Pradesh)
              </p>
              <p>
                <span className="block text-[#F5F0E8]">Goa Office</span>
                S.N 8/1, Dhargal, Goa 403512
              </p>
              <p>
                <span className="block text-[#F5F0E8]">Site Office</span>
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.96)] p-2.5 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href="tel:9536202202"
            className={`${buttonBaseClass} bg-[#C9A84C] px-3 py-3 text-center text-[#0A0A0A]`}
          >
            Call Now
          </a>
          <a
            href="#enquire"
            className={`${buttonBaseClass} bg-transparent px-3 py-3 text-center text-[#F5F0E8]`}
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
