"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeDropdown, setDropdown] = useState<string | null>(null);
  const pathname                       = usePathname();
  const dropdownRef                    = useRef<HTMLDivElement>(null);

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
      className="fixed inset-x-0 top-0 z-50 bg-white"
      style={{ boxShadow: "0 3px 3px rgba(0,0,0,0.16)" }}
    >
      <div className="w-full px-4 xl:px-6">
        <nav className="flex items-center justify-between h-16" ref={dropdownRef}>

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0">
            <Image
              src="/imgs/fabric-brand.png"
              alt="FABRIC"
              width={85}
              height={25}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden xl:flex items-center">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const isOpen   = activeDropdown === item.label;

              return (
                <div key={item.label} className="relative">
                  <button
                    onMouseEnter={() => setDropdown(item.label)}
                    onFocus={() => setDropdown(item.label)}
                    onClick={() => setDropdown(isOpen ? null : item.label)}
                    className={cn(
                      "flex items-center gap-0.5 whitespace-nowrap px-2 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-fabric-blue" : "hover:text-fabric-blue"
                    )}
                    style={{ color: isActive ? undefined : "#404041" }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-150",
                          isOpen && "rotate-180"
                        )}
                      />
                    )}
                  </button>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-fabric-yellow rounded-full" />
                  )}

                  {/* Dropdown panel */}
                  {item.children && isOpen && (
                    <div
                      onMouseLeave={() => setDropdown(null)}
                      className="absolute top-full left-0 mt-1 min-w-[220px] bg-white rounded-xl overflow-hidden z-50 animate-fade-in"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
                    >
                      {item.children.map((child, ci) => {
                        const isExternal = child.href.startsWith("http");
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            onClick={() => setDropdown(null)}
                            className={`flex items-center justify-between px-4 py-3 hover:bg-fabric-light transition-colors group${ci > 0 ? " border-t border-fabric-gray-200" : ""}`}
                          >
                            <span
                              className="text-sm group-hover:text-fabric-blue transition-colors leading-snug"
                              style={{ color: "#404041" }}
                            >
                              {child.label}
                            </span>
                            {isExternal && (
                              <ExternalLink className="h-3.5 w-3.5 text-fabric-gray-400 shrink-0 ml-2" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Portal button + mobile toggle ── */}
          <div className="flex items-center gap-2">
            {/* Outlined "Portal" button — exactly as in XD */}
            <Link
              href="https://portal.fabric-testbed.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold transition-colors hover:bg-gray-50"
              style={{
                color: "#404041",
                border: "1px solid #707070",
                borderRadius: "17px",
              }}
            >
              Portal
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-fabric-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen
                ? <X    className="h-5 w-5" style={{ color: "#404041" }} />
                : <Menu className="h-5 w-5" style={{ color: "#404041" }} />
              }
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="xl:hidden bg-white max-h-[80vh] overflow-y-auto"
          style={{ borderTop: "1px solid #e2e6ea" }}
        >
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
                      : "hover:bg-fabric-gray-100"
                  )}
                  style={pathname.startsWith(item.href) ? undefined : { color: "#404041" }}
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
                        className="block px-4 py-2 rounded-lg text-sm hover:text-fabric-blue hover:bg-fabric-light transition-colors"
                        style={{ color: "#5A6370" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3" style={{ borderTop: "1px solid #e2e6ea" }}>
              <Link
                href="https://portal.fabric-testbed.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
                style={{
                  color: "#404041",
                  border: "1px solid #707070",
                  borderRadius: "17px",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
