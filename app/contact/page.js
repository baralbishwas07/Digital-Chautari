"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import IconChip from "@/components/ui/IconChip";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Megaphone,
  Clapperboard,
  Code,
  Briefcase,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Kathmandu, Nepal",
    sub: "Bagmati Province",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@digitalchautari.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+977 98XXXXXXXX",
    sub: "Mon – Fri, 10am – 6pm",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Sun – Fri, 10am – 6pm",
    sub: "Nepal Standard Time (NPT)",
  },
];

const departments = [
  {
    icon: Megaphone,
    title: "Marketing",
    email: "marketing@digitalchautari.com",
  },
  {
    icon: Clapperboard,
    title: "Content Studio",
    email: "content@digitalchautari.com",
  },
  { icon: Code, title: "Software Dev", email: "dev@digitalchautari.com" },
  { icon: Briefcase, title: "Business Dev", email: "biz@digitalchautari.com" },
];

const projectTypes = [
  "Digital Marketing",
  "Content Production",
  "Web Development",
  "Mobile App",
  "Health-Tech",
  "Branding",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      subject: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-pastel-mint to-paper pt-[84px] pb-12 text-center">
        <div className="mx-auto max-w-[720px] px-10 max-[760px]:px-[22px]">
          <span className="inline-block px-5 py-2 mb-6 bg-white border border-line rounded-pill text-xs font-semibold text-muted tracking-[0.02em]">
            Contact Us
          </span>
          <h1>
            Let&apos;s{" "}
            <span className="gradient-text">start a conversation</span>
          </h1>
          <p className="text-[17px] text-muted mt-4 max-w-[600px] mx-auto">
            Whether you have a project in mind or just want to say hello,
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
            {contactInfo.map((info, i) => (
              <Card key={i} className="text-center flex flex-col items-center">
                <IconChip icon={info.icon} index={i} />
                <h3 className="mt-4 mb-1">{info.title}</h3>
                <p className="font-medium text-ink text-[15px]">
                  {info.detail}
                </p>
                <p className="text-muted text-[13px]">{info.sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Department Cards */}
      <section className="py-12" id="departments">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <SectionHeader
            eyebrow="Departments"
            title="Reach the right team"
            description="Send a direct email to the department you need."
          />
          <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
            {departments.map((dept, i) => (
              <Card key={i} className="flex items-center gap-4">
                <IconChip icon={dept.icon} index={i} />
                <div>
                  <h3 className="text-[15px]">{dept.title}</h3>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-[13px] text-primary hover:text-primary-dark transition-colors"
                  >
                    {dept.email}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Two-Column: Form (left) + Info Panels (right) */}
      <section className="py-16" id="contact-form">
        <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
          <div className="grid grid-cols-[1.2fr_1fr] gap-10 items-start max-[760px]:grid-cols-1">
            {/* Left — Contact Form */}
            <Card hoverable={false}>
              <h2 className="mb-6">Send us a message</h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-pastel-mint rounded-button text-primary font-semibold text-[13px]">
                  ✓ Message sent successfully! We&apos;ll get back to you within
                  24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[13px] font-semibold text-ink mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-line rounded-button text-[15px] text-ink bg-paper placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-semibold text-ink mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-line rounded-button text-[15px] text-ink bg-paper placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[13px] font-semibold text-ink mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border border-line rounded-button text-[15px] text-ink bg-paper placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Project Type — clickable pills */}
                <div>
                  <span className="block text-[13px] font-semibold text-ink mb-2">
                    Project Type
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, projectType: type })
                        }
                        className={`
                          px-4 py-2 rounded-pill text-[13px] font-medium border cursor-pointer transition-all duration-150
                          ${
                            formData.projectType === type
                              ? "bg-primary border-primary text-white"
                              : "bg-white border-line text-muted hover:border-primary hover:text-primary"
                          }
                        `}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-semibold text-ink mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-line rounded-button text-[15px] text-ink bg-paper placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-y"
                  />
                </div>

                {/* Submit */}
                <Button type="submit" className="self-start gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Right — Info Panels */}
            <div className="flex flex-col gap-5">
              {/* Map placeholder */}
              <div className="w-full h-[220px] bg-pastel-teal rounded-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="font-heading font-semibold text-ink">
                    Kathmandu, Nepal
                  </p>
                  <p className="text-[13px] text-muted">Bagmati Province</p>
                </div>
              </div>

              {/* Quick Answers CTA (dark) */}
              <Card variant="dark" hoverable={false}>
                <h3 className="text-white mb-2">Need quick answers?</h3>
                <p className="text-white/60 text-[13px] leading-relaxed mb-4">
                  Check out our FAQ section for answers to the most common
                  questions.
                </p>
                <a
                  href="/faq"
                  className="text-[13px] font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Visit FAQ page →
                </a>
              </Card>

              {/* Response Times */}
              <Card hoverable={false}>
                <h3 className="mb-4">Response Times</h3>
                <div className="flex flex-col gap-3">
                  {[
                    ["Email", "24 hours"],
                    ["Proposals", "2-3 days"],
                    ["Urgent", "Same day"],
                  ].map(([label, time], i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-line last:border-b-0"
                    >
                      <span className="text-[13px] text-muted">{label}</span>
                      <span className="text-[13px] font-semibold text-primary">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
