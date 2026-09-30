"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "Bar" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center">
          <img
            src="/logo-cropped.png"
            alt="Khingpar Restaurant & Bar"
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+918047289171"
            className="text-sm text-muted transition-colors hover:text-gold-light"
          >
            080-472-89171
          </a>
          <a
            href="tel:+918047289171"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold-light transition-colors hover:bg-gold hover:text-background"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-background/95 px-6 pb-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-foreground/90 hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918047289171"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-medium text-background"
            >
              Reserve a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
