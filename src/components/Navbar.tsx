"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/innovations", label: "Innovations" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-granite-charcoal">
            Stone Circle
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-gray hover:text-forest-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="bg-forest-green text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-forest-green-dark transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-granite-charcoal transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-granite-charcoal transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-granite-charcoal transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-slate-gray hover:text-forest-green font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="block mt-4 bg-forest-green text-white text-center py-3 rounded-lg font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
