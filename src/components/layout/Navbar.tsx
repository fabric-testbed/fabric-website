"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeDropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled]       = useState(false);
  const pathname                       = usePathname();
  const dropdownRef                    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-fabric-gray-200"
          : "bg-white border-b border-fabric-gray-200"
      )}
    >
      <div className="page-container">
        <nav className="flex items-center justify-between h-14" ref={dropdownRef}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* SVG logo placeholder — replace with actual FABRIC SVG */}
            <div className="flex items-center gap-1.5">
              <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L28 8V16L14 24L0 16V8L14 0Z" fill="#2196C9" opacity="0.2"/>
                <path d="M14 3L25 9.5V16.5L14 21L3 16.5V9.5L14 3Z" fill="#2196C9" opacity="0.5"/>
                <path d="M14 6L22 11V16L14 19L6 16V11L14 6Z" fill="#2196C9"/>
              </svg>
              <span className="font-bold text-fabric-navy text-lg tracking-tight">FABRIC</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive   = pathname.startsWith(item.href);
              const isOpen     = activeDropdown === item.label;

              return (
                <div key={item.label} className="relative">
                  <button
                    onMouseEnter={() => setDropdown(item.label)}
                    onFocus={() => setDropdown(item.label)}
                    onClick={() => setDropdown(isOpen ? null : item.label)}
                    className={cn(
                      "nav-link flex items-center gap-0.5 rounded-md px-2.5 py-1.5 whitespace-nowrap",
                      isActive && "text-fabric-blue"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-150", isOpen && "rotate-180")}
                      />
                    )}
                  </button>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-fabric-yellow rounded-full" />
                  )}

                  {/* Dropdown */}
                  {item.children && isOpen && (
                    <div
                      onMouseLeave={() => setDropdown(null)}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-fabric-gray-200 py-1.5 z-50 animate-fade-in"
                    >
                      {item.children.map((child) => {
                        const isExternal = child.href.startsWith("http");
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            onClick={() => setDropdown(null)}
                            className="flex items-start gap-2 px-4 py-2.5 hover:bg-fabric-light transition-colors group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-fabric-gray-800 group-hover:text-fabric-blue">
                                  {child.label}
                                </span>
                                {isExternal && <ExternalLink className="h-3 w-3 text-fabric-gray-400 shrink-0" />}
                              </div>
                              {child.desc && (
                                <p className="text-xs text-fabric-gray-400 mt-0.5 leading-snug">{child.desc}</p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="https://portal.fabric-testbed.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex btn-blue text-sm px-4 py-2"
            >
              Portal
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-fabric-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-fabric-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="page-container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    pathname.startsWith(item.href)
                      ? "bg-fabric-light text-fabric-blue"
                      : "text-fabric-gray-600 hover:bg-fabric-gray-100 hover:text-fabric-navy"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-0.5 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm text-fabric-gray-500 hover:text-fabric-blue hover:bg-fabric-light transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-fabric-gray-200">
              <Link
                href="https://portal.fabric-testbed.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-blue w-full"
                onClick={() => setMobileOpen(false)}
              >
                Enter Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
