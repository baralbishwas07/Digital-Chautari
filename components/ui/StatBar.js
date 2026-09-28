import IconChip from "./IconChip";
export default function StatBar({ stats }) {
  return (
    <div className="flex items-center border border-line rounded-card bg-white overflow-hidden max-[760px]:flex-col">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            flex-1 flex items-center gap-2 px-6 py-4
            max-[760px]:w-full max-[760px]:justify-center
            ${index > 0 ? "border-l border-line max-[760px]:border-l-0 max-[760px]:border-t" : ""}
          `}
        >
          <IconChip icon={stat.icon} index={index} />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-ink leading-tight">
              {stat.value}
            </span>
            <span className="text-[13px] text-muted">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
