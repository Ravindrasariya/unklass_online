import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 max-w-7xl flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <Link href="/">
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0">
            <img
              src="/assets/logo.png"
              alt=""
              aria-hidden="true"
              className="h-8 sm:h-11 md:h-14 w-8 sm:w-11 md:w-14 object-cover object-left"
            />
            <span className="font-heading font-extrabold text-lg sm:text-2xl md:text-4xl text-foreground leading-none tracking-tight">
              Unklass
            </span>
          </div>
        </Link>

        {/* Nav — always horizontal */}
        <nav className="flex items-center gap-2 sm:gap-5 md:gap-8 min-w-0">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`text-[11px] sm:text-sm md:text-base font-medium transition-colors hover:text-primary cursor-pointer whitespace-nowrap ${
                  location === item.href ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
          <Link href="/contact" className="hidden md:inline-flex">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-5 md:px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">
              Book a Free Trial
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
