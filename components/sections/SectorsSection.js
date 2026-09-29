import Card from "@/components/ui/Card";
import IconChip from "@/components/ui/IconChip";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  HeartPulse,
  ShoppingCart,
  Home,
  GraduationCap,
  Plane,
  Newspaper,
} from "lucide-react";

const sectors = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: Home, title: "Real Estate" },
  { icon: GraduationCap, title: "Education" },
  { icon: Plane, title: "Tourism & Hospitality" },
  { icon: Newspaper, title: "Media & Publishing" },
];

export default function SectorsSection() {
  return (
    <section className="py-16" id="sectors">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <SectionHeader
          eyebrow="Industries"
          title="Sectors we serve"
          description="We bring industry-specific expertise to every project."
        />
        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {sectors.map((s, i) => (
            <Card key={i} className="flex items-center gap-4">
              <IconChip icon={s.icon} index={i} />
              <h3 className="m-0">{s.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
