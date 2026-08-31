import Link from "next/link";
import Image from "next/image";
import { TwitterIcon, GithubIcon, YoutubeIcon, Mail } from "lucide-react";

const footerLinks = {
  "Acceptable Use Policy": "/about/acceptable-use-policy",
  "Branding Resources": "/about/branding",
  "Support":            "https://portal.fabric-testbed.net/help",
  "Portal":             "https://portal.fabric-testbed.net",
  "Knowledge Base":     "https://learn.fabric-testbed.net",
};

const socials = [
  { href: "https://twitter.com/FABRICtestbed",  icon: TwitterIcon, label: "Twitter" },
  { href: "https://github.com/fabric-testbed",  icon: GithubIcon,  label: "GitHub" },
  { href: "http://bit.ly/FABRICYouTube",        icon: YoutubeIcon, label: "YouTube" },
  { href: "mailto:info@fabric-testbed.net",     icon: Mail,        label: "Email" },
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
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/imgs/fabric-logo-light-horizontal.png"
                alt="FABRIC"
                width={200}
                height={29}
                className="h-8 w-auto"
              />
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
              <Image
                src="/imgs/nsf.png"
                alt="NSF"
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 mt-0.5"
              />
              <p className="text-white/40 text-[10px] leading-relaxed">{nsfGrants}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
