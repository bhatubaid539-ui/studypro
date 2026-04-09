import { BookOpen, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "To-Do", href: "#todo" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setMobileOpen(false);
  }

  return (
    <header
      data-ocid="header-nav"
      className={[
        "sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16",
        "bg-[#020617] border-b border-border/40",
        "transition-smooth",
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.6)]" : "",
      ].join(" ")}
    >
      {/* Logo */}
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        aria-label="Go to top"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 border border-primary/40">
          <BookOpen className="w-4 h-4 text-primary" strokeWidth={2} />
        </span>
        <span className="font-display font-bold text-lg tracking-tight text-foreground">
          StudyPro
        </span>
      </button>

      {/* Desktop nav */}
      <nav
        className="hidden md:flex items-center gap-1"
        aria-label="Main navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-ocid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={(e) => handleNav(e, link.href)}
            className="px-4 py-2 rounded-md text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA button */}
      <button
        type="button"
        onClick={() => scrollToSection("todo")}
        data-ocid="header-cta"
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold font-body transition-smooth hover:opacity-90 hover:shadow-[0_0_16px_oklch(var(--primary)/0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Get Started
      </button>

      {/* Mobile menu toggle */}
      <button
        type="button"
        className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((v) => !v)}
        data-ocid="mobile-menu-toggle"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#020617] border-b border-border/40 shadow-[0_8px_32px_rgba(0,0,0,0.5)] md:hidden py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block px-6 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pb-3 pt-1">
            <button
              type="button"
              onClick={() => {
                scrollToSection("todo");
                setMobileOpen(false);
              }}
              className="w-full block text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold font-body transition-smooth hover:opacity-90"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
