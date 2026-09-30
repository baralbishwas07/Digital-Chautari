export default function Card({
  children,
  variant = "light",
  hoverable = true,
  className = "",
  ...props
}) {
  const base = "p-6 rounded-card transition-all duration-300 h-full";
  const variantStyles =
    variant === "dark"
      ? "bg-navy-card border border-navy-border"
      : "bg-white border border-line";
  const hoverStyles = hoverable
    ? "hover:-translate-y-[5px] hover:shadow-card-hover"
    : "";
  return (
    <div
      className={`${base} ${variantStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
