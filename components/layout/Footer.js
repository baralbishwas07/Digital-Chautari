import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-10" id="site-footer">
      <div className="mx-auto max-w-[1120px] px-10 max-[760px]:px-[22px]">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          {/* Brand */}
          <div className="max-[760px]:col-span-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-icon bg-gradient-to-br from-primary to-primary-dark text-white font-heading font-extrabold text-sm">
                DC
              </span>
              <span className="font-heading font-bold text-base">
                Digital Chautari
              </span>
            </div>
            <p className="text-white/60 text-[13px] leading-relaxed max-w-[280px]">
              A creative technology company in Kathmandu, Nepal — building
              digital bridges between ideas and impact.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-[15px] font-semibold mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "About Us:/about",
                "Our Team:/about#team",
                "Roadmap:/about#roadmap",
                "Careers:/contact",
              ].map((item) => {
                const [label, href] = item.split(":");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/60 text-[13px] hover:text-primary transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-[15px] font-semibold mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Digital Marketing:/services#digital-marketing",
                "Content Creation:/services#content-creation",
                "Software Dev:/services#software-development",
                "Products:/products",
              ].map((item) => {
                const [label, href] = item.split(":");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/60 text-[13px] hover:text-primary transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-[15px] font-semibold mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Privacy Policy:/privacy",
                "Terms of Service:/terms",
                "Contact:/contact",
              ].map((item) => {
                const [label, href] = item.split(":");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/60 text-[13px] hover:text-primary transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 pt-6 border-t border-navy-border text-center">
          <p className="text-white/40 text-[13px]">
            &copy; {currentYear} Digital Chautari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
