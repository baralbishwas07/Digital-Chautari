const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "1M+", label: "Content Views" },
  { value: "98%", label: "Client Retention" },
];

export default function DarkStatsBanner() {
  return (
    <section className="bg-navy py-12" id="stats">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <div className="grid grid-cols-4 gap-5 text-center max-[760px]:grid-cols-2 max-[760px]:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-heading text-4xl font-extrabold text-white">
                {s.value}
              </span>
              <span className="text-[13px] text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
