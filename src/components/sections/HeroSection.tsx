import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden bg-[#0a1628]">
      {/* Background image */}
      <Image
        src="/imgs/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />

      {/* Text content */}
      <div className="page-container relative z-20 py-20 md:py-28">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Explore impactful ideas
            <br />
            beyond the scope of
            <br />
            the current Internet.
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-9 max-w-md">
            An innovative infrastructure to prototype and validate novel
            network and computing solutions.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/use-fabric/get-started" className="btn-yellow-outline">
              Get Started
            </Link>
            <Link
              href="https://portal.fabric-testbed.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow-outline"
            >
              Enter Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
