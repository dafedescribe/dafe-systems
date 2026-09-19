/**
 * DafeDeScribe — High-Conversion Systems & Web Design
 * Main application component
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Zap,
  ChevronDown,
  Menu,
  X,
  Globe,
  Video,
  User,
  Mail,
  Send,
  Sparkles,
  Wrench,
  LayoutDashboard
} from 'lucide-react';

const WHATSAPP_NUMBER = "+2348148794458";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;
const CURRENT_MONTH = new Date().toLocaleString('default', { month: 'long' });

const getWhatsAppLink = (text: string) => `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;

// ─── Navbar ──────────────────────────────────────────────
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#offers' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo-128.jpeg" alt="DafeDeScribe" className="w-9 h-9 rounded-full object-cover border border-gray-200 shadow-sm" width={36} height={36} />
            <span className="text-xl font-bold tracking-tighter text-black" style={{ fontFamily: 'Inter, sans-serif' }}>DafeDeScribe</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={getWhatsAppLink("Hi Dafe, I want a Friction Audit")}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Your Free Audit
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left py-3 px-4 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={getWhatsAppLink("Hi Dafe, I want a Friction Audit")}
                className="block w-full bg-black text-white px-4 py-3 rounded-xl text-center font-medium mt-2"
              >
                Get Your Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Hero ────────────────────────────────────────────────
const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Every week your business runs on manual processes, <span className="text-red-600">you're losing money</span> you'll never get back.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          I find the exact bottleneck costing you the most time, and hand you a free blueprint to fix it — in under 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={getWhatsAppLink("Hi Dafe, I want a Friction Audit")}
            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            Get Your Free Friction Audit <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See How It Works
          </button>
        </div>
      </motion.div>
    </section>
  );
};

// ─── Persona Section ─────────────────────────────────────
const PersonaSection = () => {
  const personas = [
    {
      emoji: "😤",
      title: "The Overwhelmed Operator",
      description: "You're doing everything manually — invoicing, follow-ups, tracking — and it's eating your weekends.",
      cta: "That's me → Get my free audit"
    },
    {
      emoji: "🤷",
      title: "The Invisible Business",
      description: "You have a great product but no website, no Google presence, and customers can't find you online.",
      cta: "That's me → Get my free audit"
    },
    {
      emoji: "📈",
      title: "The Scaling Founder",
      description: "You're growing, but your systems are breaking. WhatsApp groups and spreadsheets won't survive the next 10 customers.",
      cta: "That's me → Get my free audit"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>Is This You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
            >
              <div className="text-4xl mb-4">{persona.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{persona.description}</p>
              <a
                href={getWhatsAppLink(`Hi Dafe, I'm the ${persona.title}. I want a free audit.`)}
                className="text-black font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                {persona.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── How It Works ────────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Send a 2-min video",
      description: "Record your most annoying manual process on Loom or WhatsApp voice note. That's it."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "I diagnose the friction",
      description: "Within 48 hours, I'll send you a 1-page blueprint showing exactly what to fix and how."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "We fix it together (or you DIY)",
      description: "No pressure. Use the blueprint yourself, or hire me to build the solution."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative text-center">
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full border-t-2 border-dashed border-gray-200 -z-10" />
            )}
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <a
          href={getWhatsAppLink("Hi Dafe, I'm ready to send my video for a Friction Audit.")}
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
        >
          Send Your Video Now <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

// ─── Social Proof ────────────────────────────────────────
const SocialProof = () => {
  return (
    <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 opacity-70 text-sm font-medium uppercase tracking-widest">
          <span>3 businesses automated this month</span>
          <span>12+ clients served</span>
          <span>₦0 paid for the first audit</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>What Clients Are Saying</h2>
            <p className="text-zinc-400 text-lg">
              Real conversations, not stock testimonials. Here's what happened after setting up a Google Business Profile for a client:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-green-400">17</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Views in 1 Day</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-green-400">₦0</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Ad Spend</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-green-400">&gt;5x</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">VS Jiji Profile</div>
              </div>
            </div>
          </div>

          {/* Real WhatsApp screenshot mockup */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <div className="p-4 bg-zinc-800 flex items-center gap-3 border-b border-zinc-700">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">A</div>
                <div>
                  <div className="text-sm font-bold">Adtech Global Technical Solutions Ltd.</div>
                  <div className="text-[10px] text-zinc-400">last seen today at 3:25 PM</div>
                </div>
              </div>
              <div className="p-4 space-y-4 bg-[#0b141a] min-h-[400px]">
                <div className="flex flex-col gap-2">
                  <div className="bg-[#202c33] text-[#e9edef] p-3 rounded-lg rounded-tl-none max-w-[85%] text-xs shadow-sm self-start">
                    Good Morning Sir
                  </div>
                  <div className="bg-[#202c33] text-[#e9edef] p-3 rounded-lg rounded-tl-none max-w-[85%] text-xs shadow-sm self-start">
                    How are you doing sir?
                  </div>
                  <div className="bg-[#202c33] text-[#e9edef] p-3 rounded-lg rounded-tl-none max-w-[85%] text-xs shadow-sm self-start">
                    I see the Business Profile is performing well
                  </div>
                  <div className="bg-[#202c33] text-[#e9edef] p-3 rounded-lg rounded-tl-none max-w-[85%] text-xs shadow-sm self-start">
                    17 views just yesterday
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <div className="bg-[#005c4b] text-[#e9edef] p-3 rounded-lg rounded-tr-none max-w-[85%] text-xs shadow-sm">
                    Ok sir. Thanks for everything sir. I haven't even checked the profile for two days now. I'll check it soon.
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <div className="bg-[#005c4b] text-[#e9edef] p-3 rounded-lg rounded-tr-none max-w-[85%] text-xs shadow-sm">
                    WOW! Then I think it has more potential to get clients, when compared to my jiji profile, cos, this number of views might be a weekly thing on my jiji profile. Some week, I may not even have up to 5 views
                  </div>
                </div>
              </div>
              <div className="p-4 bg-zinc-900 text-zinc-500 text-[10px] text-center italic border-t border-zinc-800">
                Real feedback from a Google Business Profile setup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── About Section ───────────────────────────────────────
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                <User className="w-3 h-3" /> About
              </div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hi, I'm Dafe.
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                I'm a systems builder and fractional CTO who helps businesses stop losing money to broken processes. I build websites that actually convert, automate the work that eats your weekends, and design systems that scale with you.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                No agency overhead. No account managers. You talk directly to the person who builds your systems — and you own everything I create.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">12+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">5 Days</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Avg. Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">You Own It</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-black">
                <img src="/logo-256.jpeg" alt="DafeDeScribe" className="w-full h-full object-cover" width={320} height={320} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Offers ──────────────────────────────────────────────
const Offers = () => {
  const auditOffer = {
    title: "The Friction Audit",
    price: "Free",
    badge: "FREE — No catch",
    description: "Send me a 2-min video of your worst manual process. I send you a free fix-it blueprint in 48 hours.",
    cta: "Hi Dafe, I want a Friction Audit",
    tiers: []
  };

  const paidOffers = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "The Digital Front Door",
      price: "₦250,000 (~$160 USD)",
      badge: "FIXED PRICE — You own everything",
      description: "I build you a professional website + Google Business listing so customers actually find and trust you. Live in 5 business days.",
      cta: "Hi Dafe, I need a website",
      tiers: [
        "Single-page site + Google Business: ₦250,000 (~$160)",
        "Multi-page site (3–5 pages) + SEO: ₦350,000 (~$225)",
        "Custom features (booking, catalog): ₦400,000+ (~$260+)"
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Automation & AI",
      price: "from ₦150,000 (~$100 USD)",
      badge: "NEW — Scale with AI",
      description: "I build custom workflows, AI chatbots, and intelligent agents that handle your repetitive tasks 24/7.",
      cta: "Hi Dafe, I need Automation & AI help",
      tiers: [
        "Custom AI Chatbot (WhatsApp/Web): ₦150,000 (~$100)",
        "Workflow Automation (Zapier/Make): ₦200,000+ (~$130+)",
        "AI Agent for Lead Gen: ₦300,000+ (~$195+)"
      ]
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Systems Architecture",
      price: "₦200k + ₦120k/mo",
      badge: "RETAINER — Cancel anytime",
      description: "I move your operations off spreadsheets and WhatsApp groups into a real system — database, automations, dashboards. You own it all.",
      cta: "Hi Dafe, I need systems help",
      priceDisplay: "₦200,000 (~$130 USD) setup + from ₦120,000/mo (~$77/mo USD)",
      tiers: [
        "Full Operations Overhaul: ₦200,000 ($130) setup",
        "Ongoing Systems Management: from ₦120,000/mo ($77/mo)",
        "Dashboard & Reporting: Included"
      ]
    }
  ];

  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>Core Offers</h2>

      <div className="space-y-8">
        {/* Full-width Lead Magnet */}
        <div className="p-8 md:p-12 rounded-[2.5rem] border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-grow">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
              <Wrench className="w-3 h-3" /> {auditOffer.badge}
            </div>
            <h3 className="text-3xl font-bold mb-4">{auditOffer.title}</h3>
            <p className="text-xl text-gray-600 max-w-2xl">{auditOffer.description}</p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href={getWhatsAppLink(auditOffer.cta)}
              className="block w-full md:w-auto bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl text-center hover:scale-105 transition-transform"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>

        {/* Grid for paid offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paidOffers.map((offer, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border border-gray-200 flex flex-col h-full hover:border-black transition-colors ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  {offer.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {offer.badge}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <div className="text-xl font-bold mb-6 text-gray-900">
                {'priceDisplay' in offer ? offer.priceDisplay : offer.price}
              </div>
              <p className="text-gray-600 mb-8">{offer.description}</p>

              {offer.tiers && offer.tiers.length > 0 && (
                <div className="mb-8 space-y-3">
                  <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">Tiers</div>
                  {offer.tiers.map((tier, tIdx) => (
                    <div key={tIdx} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {tier}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-auto">
                <a
                  href={getWhatsAppLink(offer.cta)}
                  className="w-full py-4 rounded-xl font-bold text-center block bg-white text-black border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "I'm not technical — will I understand what you build?",
      a: "Yes. I explain everything in plain language and you own all the assets. No complex jargon, just results."
    },
    {
      q: "How long does a website take?",
      a: "5 business days from kickoff to live. I work fast because I know your business can't wait."
    },
    {
      q: "What if I don't like the blueprint?",
      a: "It's free. No commitment, no follow-up spam. If it's not for you, we part ways as friends."
    },
    {
      q: "Do I need a big budget?",
      a: "The audit is free. Websites start at ₦250k (~$160). Everything is flat-rate, no surprises or hidden fees."
    },
    {
      q: "What makes you different from an agency?",
      a: "I'm one person. No account managers, no handoffs. You talk directly to the person who builds your systems."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center font-bold"
                aria-expanded={openIndex === idx}
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Urgency ─────────────────────────────────────────────
const Urgency = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div className="bg-red-50 border border-red-100 p-12 rounded-[2rem]">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>I only take on 3 new clients per month.</h2>
        <p className="text-xl text-gray-700 mb-8">
          To maintain quality, I limit my capacity. Currently <span className="font-bold text-red-600">2 spots remaining</span> for {CURRENT_MONTH}.
        </p>
        <a
          href={getWhatsAppLink("Hi Dafe, I want to claim one of the remaining spots for a Friction Audit.")}
          className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
        >
          Claim Your Free Audit Before Spots Fill <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

// ─── Email Capture ───────────────────────────────────────
const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual endpoint (Supabase, Formspree, etc.)
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-black text-white p-8 md:p-12 rounded-[2.5rem]">
          <Mail className="w-10 h-10 mx-auto mb-6 opacity-60" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get the Free Systems Checklist
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            7 things every business should automate before they hire their next employee. Delivered to your inbox in 2 minutes.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-400 font-bold text-lg flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" /> Check your inbox!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
              >
                {loading ? 'Sending...' : (
                  <>Send Me the Checklist <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          )}
          <p className="text-zinc-600 text-xs mt-6">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ──────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Let's fix the thing that's costing you the most.</h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5" /> {WHATSAPP_NUMBER}
              </p>
              <p className="flex items-center gap-3">
                <Globe className="w-5 h-5" /> dafe.name.ng
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <a
              href={getWhatsAppLink("Hi Dafe, let's talk.")}
              className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-50 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} DafeDeScribe. All rights reserved.</p>
          <p>Built for speed and conversion.</p>
        </div>
      </div>
    </footer>
  );
};

// ─── App ─────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <PersonaSection />
        <HowItWorks />
        <SocialProof />
        <AboutSection />
        <Offers />
        <FAQ />
        <Urgency />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
}
