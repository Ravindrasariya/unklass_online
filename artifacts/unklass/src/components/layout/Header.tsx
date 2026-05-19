import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-4">
        <Link href="/">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <img
              src="/assets/logo.png"
              alt=""
              aria-hidden="true"
              className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 object-cover object-left"
            />
            <span className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground leading-none tracking-tight">
              Unklass
            </span>
          </div>
        </Link>

        {/* Desktop Nav — visible from sm and up */}
        <nav className="hidden sm:flex items-center gap-5 md:gap-8">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`text-sm md:text-base font-medium transition-colors hover:text-primary cursor-pointer whitespace-nowrap ${
                  location === item.href ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-5 md:px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">
              Book a Free Trial
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle — only true mobile */}
        <button
          className="sm:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="sm:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-border overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      className={`block px-4 py-3 rounded-xl transition-colors cursor-pointer ${
                        location === item.href
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-foreground hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-6">
                    Book a Free Trial
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
