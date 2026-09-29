import Button from '@/components/ui/Button';
import StatBar from '@/components/ui/StatBar';
import { Package, Users, CircleCheck } from 'lucide-react';

const heroStats = [
  { icon: Package, value: '3', label: 'Products' },
  { icon: Users, value: '6+', label: 'Team Members' },
  { icon: CircleCheck, value: '100%', label: 'Commitment' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pastel-mint to-paper pt-[84px] pb-12" id="hero">
      {/* Radial glow — spec: subtle teal/gold glow top-right */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] pointer-events-none max-[760px]:w-[300px] max-[760px]:h-[300px]"
        style={{
          background: 'radial-gradient(circle, rgba(15,148,136,0.15) 0%, rgba(224,169,48,0.08) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[720px] px-10 text-center max-[760px]:px-[22px] max-[760px]:pt-0">
        {/* Eyebrow pill */}
        <span className="inline-block px-5 py-2 mb-6 bg-white border border-line rounded-pill text-xs font-semibold text-muted tracking-[0.02em]">
          Welcome to Digital Chautari
        </span>

        <h1 className="mb-6">
          We build <span className="gradient-text">digital bridges</span> between ideas and impact
        </h1>

        <p className="text-[17px] text-muted leading-[1.7] max-w-[660px] mx-auto mb-8">
          Digital Chautari is a creative technology company based in Kathmandu, Nepal.
          We craft innovative digital marketing campaigns, compelling content,
          and cutting-edge health-tech software that transforms how businesses
          connect with their audiences.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 max-[760px]:flex-col">
          <Button href="/services" size="large">Explore Services →</Button>
          <Button href="/products" variant="ghost" size="large">View Products</Button>
        </div>

        <StatBar stats={heroStats} />
      </div>
    </section>
  );
}
