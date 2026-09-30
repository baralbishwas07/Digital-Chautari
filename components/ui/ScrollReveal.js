"use client";

import useScrollReveal from "@/lib/useScrollReveal";

export default function ScrollReveal({
  children,
  delay = 0, // Stagger delay in ms (e.g., index * 70)
  className = "",
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
