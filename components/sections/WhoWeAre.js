import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import IconChip from "@/components/ui/IconChip";
import {
  Check,
  Megaphone,
  Clapperboard,
  Code,
  PaintBucket,
} from "lucide-react";

const checklist = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full-Stack Engineering",
  "Health-Tech Expertise",
];
const serviceTeaser = [
  { icon: Megaphone, title: "Digital Marketing" },
  { icon: Clapperboard, title: "Content Creation" },
  { icon: Code, title: "Software Development" },
  { icon: PaintBucket, title: "Branding & Design" },
];

export default function WhoWeAre() {
  return (
    <section className="py-16" id="who-we-are">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <div className="grid grid-cols-2 gap-12 items-start max-[760px]:grid-cols-1">
          {/* Left */}
          <div>
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.02em] text-accent-gold">
              Who We Are
            </span>
            <h2 className="mt-2 mb-4">A Chautari where ideas meet execution</h2>
            <p className="text-muted leading-[1.7] mb-4">
              Born from the spirit of a traditional Nepali chautari — a resting
              place where travelers gather, share stories, and find direction —
              Digital Chautari is where innovative ideas find their digital
              form.
            </p>
            <p className="text-muted leading-[1.7] mb-4">
              Our team of creative strategists, designers, and engineers work
              together to build solutions that make a real impact in the digital
              landscape.
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[13px] font-medium"
                >
                  <Check size={16} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about">Meet the Team →</Button>
          </div>

          {/* Right — 2×2 service grid */}
          <div className="grid grid-cols-2 gap-5">
            {serviceTeaser.map((s, i) => (
              <Card
                key={i}
                className="text-center flex flex-col items-center px-4 py-8"
              >
                <IconChip icon={s.icon} index={i} />
                <h3 className="mt-4">{s.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
