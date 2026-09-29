import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Digital Chautari transformed our online presence. Their creative approach and technical expertise exceeded all our expectations.",
    name: "Aarav Sharma",
    title: "CEO, Himalayan Ventures",
    rating: 5,
  },
  {
    quote:
      "Working with the DC team was a game-changer for our brand. They truly understand the Nepali market and deliver world-class quality.",
    name: "Sita Poudel",
    title: "Marketing Director, GreenLeaf Co.",
    rating: 5,
  },
  {
    quote:
      "The Physio@Home platform they built revolutionized how we connect with patients. Incredible attention to detail and user experience.",
    name: "Dr. Rajesh Thapa",
    title: "Founder, PhysioCare Nepal",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16" id="testimonials">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <SectionHeader eyebrow="Testimonials" title="What our clients say" />
        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <div
                className="flex gap-1 mb-4"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-accent-gold fill-accent-gold"
                  />
                ))}
              </div>
              <blockquote className="text-base text-ink leading-[1.7] mb-6 not-italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading font-semibold text-[13px] text-ink">
                  {t.name}
                </span>
                <span className="text-[13px] text-muted">{t.title}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
