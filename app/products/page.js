"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { Check } from "lucide-react";

const products = [
  {
    id: "eco",
    tab: "Eco Creative Marketing Agency",
    category: "Marketing Agency",
    title: "Eco Creative Marketing Agency",
    description:
      "A full-service digital marketing agency focused on sustainable brands and eco-conscious businesses.",
    stats: ["10+ Brands Served", "Social Media Experts", "SEO Specialists"],
    tags: ["Digital Marketing", "Brand Strategy", "Social Media", "SEO"],
    cta: "Visit Eco Creative",
    color: "bg-pastel-mint",
  },
  {
    id: "one",
    tab: "One Content Creation Studio",
    category: "Content Studio",
    title: "One Content Creation Studio",
    description:
      "A creative content studio specializing in video production, photography, and multimedia storytelling.",
    stats: ["50+ Videos Produced", "4K Production", "Full Post-Production"],
    tags: ["Video Production", "Photography", "Animation", "Storytelling"],
    cta: "Visit One Content",
    color: "bg-pastel-teal",
  },
  {
    id: "physio",
    tab: "Physio@Home",
    category: "Health-Tech",
    title: "Physio@Home",
    description:
      "A health-tech platform connecting physiotherapy patients with certified practitioners for home visits.",
    stats: ["Patient-Centered", "Certified Practitioners", "Home Visits"],
    tags: ["Health-Tech", "Physiotherapy", "Mobile App", "Booking System"],
    cta: "Learn More",
    color: "bg-pastel-gold",
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const p = products[activeTab];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-pastel-mint to-paper pt-[84px] pb-12 text-center">
        <div className="mx-auto max-w-[720px] px-10 max-[760px]:px-[22px]">
          <span className="inline-block px-5 py-2 mb-6 bg-white border border-line rounded-pill text-xs font-semibold text-muted tracking-[0.02em]">
            Our Products
          </span>
          <h1>
            Three ventures, <span className="gradient-text">one vision</span>
          </h1>
          <p className="text-[17px] text-muted mt-4">
            We&apos;re not just a service company — we build our own products.
          </p>
        </div>
      </section>

      {/* Tabbed Switcher */}
      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          {/* Pill tabs */}
          <div
            className="flex justify-center gap-2 mb-10 flex-wrap"
            role="tablist"
          >
            {products.map((prod, i) => (
              <button
                key={prod.id}
                role="tab"
                aria-selected={activeTab === i}
                className={`px-6 py-2.5 rounded-pill text-[13px] font-medium border cursor-pointer transition-all duration-150
                  ${activeTab === i ? "bg-primary border-primary text-white" : "bg-white border-line text-muted hover:border-primary hover:text-primary"}`}
                onClick={() => setActiveTab(i)}
              >
                {prod.tab}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            className="grid grid-cols-2 gap-10 items-center max-[760px]:grid-cols-1"
            key={p.id}
          >
            <div>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.02em] mb-2">
                {p.category}
              </span>
              <h2 className="mb-4">{p.title}</h2>
              <p className="text-muted mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {p.stats.map((s, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-[13px] font-medium text-primary"
                  >
                    <Check size={14} /> {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-pastel-teal rounded-pill text-xs font-medium text-primary-dark"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button href="#">{p.cta} →</Button>
            </div>
            {/* Mock UI preview */}
            <div
              className={`${p.color} rounded-card p-8 min-h-[350px] flex items-center justify-center`}
            >
              <div className="bg-white rounded-button p-4 w-[280px] shadow-lg">
                <div className="flex gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-2.5 bg-line rounded" />
                  <div className="h-2.5 bg-line rounded w-[70%]" />
                  <div className="w-20 h-7 bg-primary rounded-button mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark spotlight */}
      <section className="bg-navy py-16 text-center">
        <div className="mx-auto max-w-[660px] px-10">
          <span className="text-accent-gold text-xs font-semibold uppercase tracking-[0.02em]">
            Spotlight
          </span>
          <h2 className="text-white mt-2">
            Physio@Home — healthcare reimagined
          </h2>
          <p className="text-white/60 mt-4 leading-[1.7]">
            Our flagship health-tech product is transforming physiotherapy
            delivery across Nepal.
          </p>
        </div>
      </section>

      <ClosingCTA
        title="Interested in our products?"
        primaryText="Get in Touch →"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </main>
  );
}
