import Card from "@/components/ui/Card";
import IconChip from "@/components/ui/IconChip";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TrendingUp, Palette, Zap, Handshake } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Growth-Driven",
    description:
      "Strategies designed to accelerate your digital presence and drive measurable results.",
  },
  {
    icon: Palette,
    title: "Creative-First",
    description:
      "We blend artistry with technology to craft experiences that captivate your audience.",
  },
  {
    icon: Zap,
    title: "Tech-Powered",
    description:
      "Built on modern technology stacks for performance, scalability, and reliability.",
  },
  {
    icon: Handshake,
    title: "Client-Centric",
    description:
      "Your vision drives our process — we listen, collaborate, and deliver beyond expectations.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="py-12" id="features">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 70}>
              <Card>
                <IconChip icon={f.icon} index={i} />
                <h3 className="mt-4 mb-2">{f.title}</h3>
                <p className="text-muted text-[13px] leading-relaxed">
                  {f.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
