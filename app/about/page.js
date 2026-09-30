import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import IconChip from "@/components/ui/IconChip";
import ClosingCTA from "@/components/sections/ClosingCTA";
import {
  Heart,
  Lightbulb,
  Trophy,
  Handshake,
  ClipboardCheck,
  Lock,
  Globe,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Learn about Digital Chautari — our story, mission, values, and the team behind the brand.",
};

const storyStats = [
  { value: "2025", label: "Founded", bg: "bg-primary", text: "text-white" },
  { value: "3", label: "Products", bg: "bg-navy", text: "text-white" },
  {
    value: "KTM",
    label: "Headquarters",
    bg: "bg-white border border-line",
    text: "text-ink",
  },
  {
    value: "7+",
    label: "Team Members",
    bg: "bg-accent-gold",
    text: "text-ink",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    desc: "We love what we do and it shows in every pixel, every line of code, and every strategy we craft.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    desc: "We push boundaries and think beyond conventional solutions to deliver truly unique results.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards — good enough is never enough for us.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "We believe the best work comes from working together — with our team and our clients.",
  },
];

const trustItems = [
  {
    icon: ClipboardCheck,
    title: "ISO 9001 Ready",
    desc: "Quality management systems aligned with international standards.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    desc: "Your data is secure with industry-standard security protocols.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    desc: "Remote-first culture enabling delivery across time zones.",
  },
  {
    icon: MapPin,
    title: "Pan-Nepal Network",
    desc: "Connected across Nepal with partners in major cities.",
  },
];

const team = [
  {
    role: "Founder & CEO",
    desc: "Visionary leader driving innovation and strategy.",
  },
  {
    role: "Co-Founder & COO",
    desc: "Operations expert ensuring seamless delivery.",
  },
  {
    role: "Front-End Developer",
    desc: "Crafting beautiful, responsive user interfaces.",
  },
  {
    role: "Back-End Developer",
    desc: "Building scalable server-side solutions.",
  },
  { role: "Marketing Lead", desc: "Strategizing campaigns that drive growth." },
  {
    role: "Sales Executive",
    desc: "Connecting with clients and growing partnerships.",
  },
  {
    role: "Business Dev Officer",
    desc: "Expanding our reach and exploring new markets.",
  },
];

const roadmap = [
  {
    year: "2025",
    title: "The Idea",
    desc: "Digital Chautari was born — a vision to bridge creative marketing, content, and technology under one roof.",
    side: "left",
  },
  {
    year: "2025",
    title: "First Products",
    desc: "Launched Eco Creative Marketing Agency and One Content Creation Studio. First clients onboarded.",
    side: "right",
  },
  {
    year: "2026",
    title: "Health-Tech Entry",
    desc: "Physio@Home development begins — our first health-tech product connecting patients with practitioners.",
    side: "left",
  },
  {
    year: "2026",
    title: "Company Registration",
    desc: "Digital Chautari officially registered. Team grows to 7+ members. Pan-Nepal operations begin.",
    side: "right",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-pastel-mint to-paper pt-[84px] pb-12 text-center">
        <div className="mx-auto max-w-[720px] px-10 max-[760px]:px-[22px]">
          <span className="inline-block px-5 py-2 mb-6 bg-white border border-line rounded-pill text-xs font-semibold text-muted tracking-[0.02em]">
            About Us
          </span>
          <h1>
            The people behind{" "}
            <span className="gradient-text">Digital Chautari</span>
          </h1>
          <p className="text-[17px] text-muted mt-4 max-w-[600px] mx-auto">
            A creative technology company born in the heart of Kathmandu,
            building digital bridges between ideas and impact.
          </p>
        </div>
      </section>

      {/* 2. Story Block — left narrative, right 2×2 stat tiles */}
      <section className="py-16" id="story">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <div className="grid grid-cols-2 gap-12 items-start max-[760px]:grid-cols-1">
            {/* Left */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.02em] text-accent-gold">
                Our Story
              </span>
              <h2 className="mt-2 mb-4">
                From a chautari to a digital powerhouse
              </h2>
              <p className="text-muted leading-[1.7] mb-4">
                In Nepal, a <em>chautari</em> is a resting place under a tree
                where travelers gather to share stories, exchange ideas, and
                find direction for their journey ahead.
              </p>
              <p className="text-muted leading-[1.7] mb-4">
                Digital Chautari was founded with the same spirit — a place
                where creative minds come together to build something
                meaningful. We started with a small team and a big vision: to
                become Nepal&apos;s most impactful creative technology company.
              </p>
              <p className="text-muted leading-[1.7]">
                Today, we operate three ventures spanning digital marketing,
                content production, and health-tech software — each born from
                real problems we saw in our community.
              </p>
            </div>

            {/* Right — 2×2 stat tiles */}
            <div className="grid grid-cols-2 gap-4">
              {storyStats.map((stat, i) => (
                <div
                  key={i}
                  className={`${stat.bg} ${stat.text} rounded-card p-6 flex flex-col items-center justify-center text-center`}
                >
                  <span className="font-heading text-[28px] font-extrabold leading-tight">
                    {stat.value}
                  </span>
                  <span
                    className={`text-[13px] mt-1 ${stat.text === "text-white" ? "opacity-70" : "text-muted"}`}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision — two side-by-side cards */}
      <section className="py-12">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
            <Card hoverable={false} className="border-l-4 border-l-primary">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.02em] text-primary mb-2">
                Mission
              </span>
              <h3 className="mb-2">Empowering ideas through technology</h3>
              <p className="text-muted text-[13px] leading-relaxed">
                To provide world-class digital marketing, content creation, and
                software development services that help businesses in Nepal and
                beyond achieve their full potential in the digital landscape.
              </p>
            </Card>
            <Card hoverable={false} className="border-l-4 border-l-accent-gold">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.02em] text-accent-gold mb-2">
                Vision
              </span>
              <h3 className="mb-2">Nepal&apos;s most impactful tech company</h3>
              <p className="text-muted text-[13px] leading-relaxed">
                To be recognized as the leading creative technology company in
                Nepal — known for innovation, quality, and our commitment to
                solving real-world problems through digital solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Values — 4 cards */}
      <section className="py-16" id="values">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Our Values"
            title="What drives us every day"
          />
          <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
            {values.map((v, i) => (
              <Card key={i}>
                <IconChip icon={v.icon} index={i} />
                <h3 className="mt-4 mb-2">{v.title}</h3>
                <p className="text-muted text-[13px] leading-relaxed">
                  {v.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality & Trust (dark section) */}
      <section className="bg-navy py-16" id="trust">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Quality & Trust"
            title="Built on trust, delivered with quality"
            dark
          />
          <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
            {trustItems.map((t, i) => (
              <Card key={i} variant="dark">
                <IconChip icon={t.icon} index={i} />
                <h3 className="text-white mt-4 mb-2">{t.title}</h3>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  {t.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team */}
      <section className="py-16" id="team">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet the people behind DC"
            description="A small but mighty team united by a shared vision."
          />
          <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-3 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
            {team.map((member, i) => (
              <Card key={i} className="text-center flex flex-col items-center">
                {/* Avatar — shows role initials */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-lg mb-4">
                  {member.role
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="text-[15px]">{member.role}</h3>
                <p className="text-muted text-[13px] mt-1 leading-relaxed">
                  {member.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Roadmap / Timeline (dark section) */}
      <section className="bg-navy py-16" id="roadmap">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Roadmap"
            title="Our journey so far — and where we're headed"
            dark
          />

          {/* Timeline */}
          <div className="relative max-w-[700px] mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy-border -translate-x-1/2 max-[760px]:left-4" />

            {roadmap.map((item, i) => (
              <div
                key={i}
                className={`
                  relative flex items-start mb-12 last:mb-0
                  max-[760px]:flex-row max-[760px]:pl-12
                  ${
                    item.side === "left"
                      ? "flex-row-reverse text-right max-[760px]:text-left"
                      : "flex-row text-left"
                  }
                `}
              >
                {/* Dot on the center line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-navy z-10 max-[760px]:left-4" />

                {/* Content — sits on one side */}
                <div
                  className={`w-[calc(50%-30px)] max-[760px]:w-full ${item.side === "left" ? "pr-0 pl-0" : ""}`}
                >
                  <span className="inline-block px-3 py-1 rounded-pill bg-accent-gold text-ink text-xs font-semibold mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-[calc(50%-30px)] max-[760px]:hidden" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <ClosingCTA
        title="Want to join our journey?"
        primaryText="Get in Touch →"
        primaryHref="/contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </main>
  );
}
