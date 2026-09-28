export default function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}) {
  return (
    <div className="text-center max-w-[660px] mx-auto mb-10">
      {eyebrow && (
        <span
          className={`
            inline-block font-body text-xs font-semibold uppercase tracking-[0.02em] mb-2
            ${dark ? "text-accent-gold" : "text-accent-gold"}
          `}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={dark ? "text-white" : ""}>{title}</h2>
      {description && (
        <p className={`mt-4 ${dark ? "text-white/60" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
