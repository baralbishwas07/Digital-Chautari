const PASTEL_BG = [
  "bg-pastel-mint",
  "bg-pastel-teal",
  "bg-pastel-gold",
  "bg-pastel-lilac",
  "bg-pastel-pink",
];
export default function IconChip({ icon: Icon, index = 0, className = "" }) {
  const bg = PASTEL_BG[index % PASTEL_BG.length];
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-icon transition-transform duration-150 hover:scale-[1.08] ${bg} ${className}`}
      aria-hidden="true"
    >
      <Icon size={22} strokeWidth={2} className="text-primary shrink-0" />
    </div>
  );
}
