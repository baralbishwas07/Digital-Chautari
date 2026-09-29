import Card from "@/components/ui/Card";
import IconChip from "@/components/ui/IconChip";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { Leaf, Clapperboard, HeartPulse } from "lucide-react";

const products = [
  {
    icon: Leaf,
    category: "Marketing Agency",
    title: "Eco Creative Marketing Agency",
    description:
      "A full-service digital marketing agency focused on sustainable brands and eco-conscious businesses.",
  },
  {
    icon: Clapperboard,
    category: "Content Studio",
    title: "One Content Creation Studio",
    description:
      "A creative content studio specializing in video production, photography, and multimedia storytelling.",
  },
  {
    icon: HeartPulse,
    category: "Health-Tech",
    title: "Physio@Home",
    description:
      "A health-tech platform connecting physiotherapy patients with certified practitioners for home visits.",
  },
];

export default function ProductsTeaser() {
  return (
    <section className="py-16" id="products-teaser">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <SectionHeader
          eyebrow="Our Ventures"
          title="Three ventures, one vision"
          description="We're building products that solve real problems across marketing, content, and healthcare."
        />
        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {products.map((p, i) => (
            <Card key={i}>
              <IconChip icon={p.icon} index={i} />
              <span className="inline-block mt-4 text-xs font-semibold text-primary uppercase tracking-[0.02em]">
                {p.category}
              </span>
              <h3 className="mt-1 mb-2">{p.title}</h3>
              <p className="text-muted text-[13px] leading-relaxed mb-4">
                {p.description}
              </p>
              <Link
                href="/products"
                className="text-[13px] font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
