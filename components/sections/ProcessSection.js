import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, audience, and competitive landscape.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our creative team crafts user-centered designs that align with your brand identity.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Engineers bring designs to life with clean, scalable, and performant code.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We launch, monitor, and iterate — ensuring sustained growth and performance.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-navy py-16" id="process">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <SectionHeader eyebrow="How We Work" title="Our 4-step process" dark />
        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {steps.map((s, i) => (
            <Card key={i} variant="dark">
              <span className="inline-block font-heading text-[28px] font-extrabold text-primary mb-2">
                {s.number}
              </span>
              <h3 className="text-white mb-2">{s.title}</h3>
              <p className="text-white/60 text-[13px] leading-relaxed">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
