import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import IconChip from "@/components/ui/IconChip";
import ClosingCTA from "@/components/sections/ClosingCTA";
import {
  Megaphone,
  Clapperboard,
  Code,
  HeartPulse,
  ShoppingCart,
  Home as HomeIcon,
  GraduationCap,
  Plane,
  Monitor,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Digital marketing, content creation, and software development services by Digital Chautari.",
};

const serviceCategories = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven strategies that amplify your brand's online presence and drive measurable growth.",
    subs: [
      { title: "SEO & SEM", desc: "Rank higher and drive targeted traffic." },
      {
        title: "Social Media Marketing",
        desc: "Build engaged communities across platforms.",
      },
      {
        title: "Paid Advertising",
        desc: "Maximize ROI with precision-targeted ads.",
      },
      { title: "Analytics & Reporting", desc: "Track, measure, and optimize." },
    ],
  },
  {
    icon: Clapperboard,
    title: "Content Creation",
    description:
      "Compelling stories told through video, photography, and multimedia.",
    subs: [
      {
        title: "Video Production",
        desc: "Professional video from concept to delivery.",
      },
      {
        title: "Photography",
        desc: "High-quality visual assets for your brand.",
      },
      { title: "Copywriting", desc: "Persuasive copy that converts." },
      { title: "Graphic Design", desc: "Eye-catching visuals for all media." },
    ],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software built with modern technologies for performance and scale.",
    subs: [
      {
        title: "Web Applications",
        desc: "Full-stack web apps with React, Next.js, Node.",
      },
      {
        title: "Mobile Apps",
        desc: "Cross-platform apps for iOS and Android.",
      },
      {
        title: "Health-Tech Solutions",
        desc: "Specialized healthcare platforms.",
      },
      { title: "API Development", desc: "Robust, scalable APIs and backends." },
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rs 15,000",
    period: "/mo",
    features: [
      "1 Social media platform",
      "Monthly content calendar",
      "Basic analytics report",
      "Email support",
      "2 design revisions",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "Rs 45,000",
    period: "/mo",
    badge: "Most Popular",
    features: [
      "3 Social media platforms",
      "Weekly content calendar",
      "Advanced analytics dashboard",
      "Priority support",
      "Unlimited design revisions",
      "Monthly strategy call",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "All platforms",
      "Dedicated project manager",
      "Custom analytics & reporting",
      "24/7 priority support",
      "Unlimited everything",
      "Weekly strategy calls",
      "Brand audit included",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

const industries = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: HomeIcon, title: "Real Estate" },
  { icon: GraduationCap, title: "Education" },
  { icon: Plane, title: "Tourism" },
  { icon: Monitor, title: "Media" },
];

const whyUs = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post-launch support",
  "Scalable architecture",
  "Cross-platform expertise",
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-pastel-mint to-paper pt-[84px] pb-12 text-center">
        <div className="mx-auto max-w-[720px] px-10 max-[760px]:px-[22px]">
          <span className="inline-block px-5 py-2 mb-6 bg-white border border-line rounded-pill text-xs font-semibold text-muted tracking-[0.02em]">
            Our Services
          </span>
          <h1>
            Services that <span className="gradient-text">drive growth</span>
          </h1>
          <p className="text-[17px] text-muted mt-4 max-w-[600px] mx-auto">
            From strategy to execution, we offer end-to-end digital solutions
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16" id="service-categories">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          {serviceCategories.map((cat, ci) => (
            <div
              key={ci}
              className={`grid grid-cols-[1fr_1.2fr] gap-10 items-start py-12 max-[760px]:grid-cols-1 ${ci < serviceCategories.length - 1 ? "border-b border-line" : ""}`}
            >
              <div className="max-[760px]:static sticky top-[100px]">
                <IconChip icon={cat.icon} index={ci} />
                <h2 className="mt-4 mb-2">{cat.title}</h2>
                <p className="text-muted">{cat.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
                {cat.subs.map((sub, si) => (
                  <Card key={si}>
                    <h3>{sub.title}</h3>
                    <p className="text-muted text-[13px] mt-2">{sub.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing — 3 tiers */}
      <section className="py-16" id="pricing">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="Choose the plan that fits your business. No hidden fees."
          />
          <div className="grid grid-cols-3 gap-5 items-stretch max-[760px]:grid-cols-1">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative h-full rounded-card p-8 text-center ${tier.highlighted ? "bg-navy border border-navy-border text-white scale-105 max-[760px]:scale-100" : "bg-white border border-line"}`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-gold text-ink text-xs font-semibold rounded-pill uppercase tracking-[0.02em] whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}
                <h3 className={`mb-4 ${tier.highlighted ? "text-white" : ""}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="font-heading text-[32px] font-extrabold">
                    {tier.price}
                  </span>
                  <span
                    className={`text-[13px] ${tier.highlighted ? "text-white/60" : "text-muted"}`}
                  >
                    {tier.period}
                  </span>
                </div>
                <ul className="text-left mb-8">
                  {tier.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={`flex items-center gap-2 py-2 text-[13px] border-b ${tier.highlighted ? "border-navy-border" : "border-line"}`}
                    >
                      <Check size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16" id="industries">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader eyebrow="Industries" title="Who we work with" />
          <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
            {industries.map((ind, i) => (
              <Card key={i} className="flex items-center gap-4">
                <IconChip icon={ind.icon} index={i} />
                <span className="font-heading font-semibold text-[17px]">
                  {ind.title}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-navy py-16" id="why-us">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why work with us"
            dark
          />
          <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-4 bg-navy-card border border-navy-border rounded-card text-[13px] text-white/85"
              >
                <Check size={16} className="text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Let's find the right service for you"
        primaryText="Book a Consultation →"
        secondaryText="View Products"
        secondaryHref="/products"
      />
    </main>
  );
}
