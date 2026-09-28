import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark",
  ghost:
    "bg-white text-ink border-line hover:border-primary hover:text-primary",
};

const sizes = {
  default: "px-6 py-[13px] text-[15px]",
  large: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2
    font-body font-semibold rounded-button border
    cursor-pointer transition-all duration-150 no-underline leading-none
    ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
