import Button from "@/components/ui/Button";

export default function ClosingCTA({
  title = "Ready to build something extraordinary together?",
  primaryText = "Start a Project →",
  primaryHref = "/contact",
  secondaryText = "View Services",
  secondaryHref = "/services",
}) {
  return (
    <section className="py-16" id="closing-cta">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-card px-10 py-16 text-center max-[760px]:px-6 max-[760px]:py-10">
          <h2 className="text-white max-w-[500px] mx-auto mb-8">{title}</h2>
          <div className="flex items-center justify-center gap-4 max-[760px]:flex-col">
            <Button
              href={primaryHref}
              size="large"
              className="!bg-white !text-primary !border-white hover:!bg-white/90"
            >
              {primaryText}
            </Button>
            <Button
              href={secondaryHref}
              variant="ghost"
              size="large"
              className="!bg-transparent !text-white !border-white/30 hover:!border-white"
            >
              {secondaryText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
