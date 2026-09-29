import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const COLORS = ["bg-pastel-mint", "bg-pastel-teal", "bg-pastel-gold"];

const articles = [
  {
    category: "Digital Marketing",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    title: "How to Build a Strong Social Media Strategy in Nepal",
    excerpt:
      "Discover the key principles behind successful social media campaigns tailored for the Nepali market.",
  },
  {
    category: "Tech",
    date: "Sep 10, 2026",
    readTime: "7 min read",
    title: "The Rise of Health-Tech in South Asia",
    excerpt:
      "Exploring how technology is transforming healthcare delivery across Nepal and the broader South Asian region.",
  },
  {
    category: "Branding",
    date: "Sep 5, 2026",
    readTime: "4 min read",
    title: "5 Branding Mistakes Startups Should Avoid",
    excerpt:
      "Common pitfalls that new businesses face when establishing their brand identity — and how to avoid them.",
  },
];

export default function BlogTeaser() {
  return (
    <section className="py-16" id="blog-teaser">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <SectionHeader eyebrow="Blog" title="Latest from our blog" />
        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {articles.map((a, i) => (
            <Card key={i} className="p-0 overflow-hidden">
              <div className={`w-full h-[180px] ${COLORS[i]}`} />
              <div className="p-6">
                <span className="inline-block px-2.5 py-1 bg-pastel-teal rounded-pill text-xs font-semibold text-primary uppercase tracking-[0.02em]">
                  {a.category}
                </span>
                <div className="flex items-center gap-2 text-[13px] text-muted mt-2 mb-2">
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="mb-2 leading-snug">{a.title}</h3>
                <p className="text-muted text-[13px] leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <a
                  href="#"
                  className="text-[13px] font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Read more →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
