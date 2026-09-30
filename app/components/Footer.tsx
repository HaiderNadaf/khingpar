const LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "Bar" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between lg:px-10">
        <div>
          <img
            src="/logo-cropped.png"
            alt="Khingpar Restaurant & Bar"
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Pan Asian Kitchen &amp; Bar, No.45/1, Andapura, off Huskur Road,
            Electronic City, Bangalore.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-line px-6 pt-6 text-xs text-muted lg:px-10">
        © {new Date().getFullYear()} Khingpar Restaurant &amp; Bar. All rights reserved.
      </div>
    </footer>
  );
}
