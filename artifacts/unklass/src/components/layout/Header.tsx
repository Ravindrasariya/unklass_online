import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 max-w-7xl flex items-center gap-3 sm:gap-6">
        {/* Brand */}
        <Link href="/">
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0">
            <img
              src="/assets/logo.png"
              alt=""
              aria-hidden="true"
              className="h-9 sm:h-11 md:h-14 w-9 sm:w-11 md:w-14 object-cover object-left"
            />
            <span className="font-heading font-extrabold text-xl sm:text-2xl md:text-4xl text-foreground leading-none tracking-tight">
              Unklass
            </span>
          </div>
        </Link>

        {/* Desktop nav — centered, always horizontal at md+ */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-4 sm:gap-7 md:gap-10 min-w-0">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`text-base sm:text-lg md:text-xl font-bold transition-colors hover:text-primary cursor-pointer whitespace-nowrap ${
                  location === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>

        {/* Spacer so brand stays left and menu/CTA stays right on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:inline-flex shrink-0">
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-5 md:px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">
            Book a Free Trial
          </Button>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="md:hidden shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full text-foreground hover:bg-foreground/5 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85%] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10">
          <span className="font-heading font-extrabold text-xl text-foreground">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full text-foreground hover:bg-foreground/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-4 gap-1">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-bold py-3 px-2 rounded-md transition-colors cursor-pointer ${
                  location === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>

        <div className="px-5 pt-2 pb-6">
          <Link href="/contact">
            <Button
              onClick={() => setMobileOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 py-5 shadow-md hover:shadow-lg transition-all"
            >
              Book a Free Trial
            </Button>
          </Link>
        </div>
      </aside>
    </header>
  );
}
