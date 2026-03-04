import Link from "next/link";
import { Linkedin, Github, Youtube, Mail } from "lucide-react";

const footerLinks = {
  "Branding Resources": "/about/branding",
  "Support":            "/documentation/support",
  "Portal":             "https://portal.fabric-testbed.net",
  "Knowledge Base":     "https://learn.fabric-testbed.net",
  "Newsletter":         "/community/newsletter",
};

const socials = [
  { href: "https://www.linkedin.com/company/fabric-testbed", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/fabric-testbed",               icon: Github,   label: "GitHub" },
  { href: "https://www.youtube.com/@FABRICtestbed",           icon: Youtube,  label: "YouTube" },
  { href: "mailto:info@fabric-testbed.net",                  icon: Mail,     label: "Email" },
];

const nsfGrants =
  "FABRIC is funded by NSF grants CNS-1935966, CNS-2029176, CNS-2029200, CNS-2029235, CNS-2029260, CNS-2029261, and CNS-2330891.";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fabric-navy text-white">
      <div className="page-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Logo + copyright */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L28 8V16L14 24L0 16V8L14 0Z" fill="white" opacity="0.15"/>
                <path d="M14 3L25 9.5V16.5L14 21L3 16.5V9.5L14 3Z" fill="white" opacity="0.35"/>
                <path d="M14 6L22 11V16L14 19L6 16V11L14 6Z" fill="white"/>
              </svg>
              <span className="font-bold text-white text-lg tracking-tight">FABRIC</span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed">
              &copy; FABRIC {currentYear}
            </p>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2">
              {Object.entries(footerLinks).map(([label, href]) => {
                const isExternal = href.startsWith("http");
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social + NSF notice */}
          <div>
            <p className="text-xs text-white/50 font-semibold uppercase tracking-wider mb-3">Social</p>
            <div className="flex items-center gap-3 mb-6">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* NSF funding notice */}
            <div className="flex items-start gap-2">
              {/* NSF logo placeholder */}
              <div className="h-8 w-8 rounded-full bg-fabric-blue/40 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-[9px] font-bold">NSF</span>
              </div>
              <p className="text-white/40 text-[10px] leading-relaxed">{nsfGrants}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
