import { Link } from "wouter";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faq" },
  { label: "Login", href: "/login" },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "support@unklass.com",
    href: "mailto:support@unklass.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8904061785",
    href: "tel:+918904061785",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+91 8904061785",
    href: "https://wa.me/918904061785",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary/10 text-foreground">
      <div className="container mx-auto px-6 max-w-7xl py-10">
        {/* Top row: 4 horizontal blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand + address */}
          <div>
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="Unklass"
                className="h-12 object-contain mb-3 cursor-pointer"
              />
            </Link>
            <p className="text-xs font-semibold text-foreground/80 mb-1">
              Vegaklass Learning Private Limited
            </p>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-heading font-bold mb-3 text-primary uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-4 text-xs">
              <Link href="/privacy-policy">
                <span className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <span className="text-foreground/30">•</span>
              <Link href="/terms-and-conditions">
                <span className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                  Terms of Use
                </span>
              </Link>
            </div>
          </div>

          {/* Contact — horizontal row */}
          <div>
            <h3 className="text-sm font-heading font-bold mb-3 text-primary uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="p-1.5 bg-white rounded-full shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-secondary" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[10px] font-bold text-foreground/60 uppercase tracking-wide">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs text-foreground/80 hover:text-secondary transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Community + Subjects */}
          <div>
            <h3 className="text-sm font-heading font-bold mb-3 text-primary uppercase tracking-wider">
              Community
            </h3>
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white rounded-full text-[#1877F2] hover:-translate-y-1 transition-transform shadow-sm"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="p-2 bg-white rounded-full text-black hover:-translate-y-1 transition-transform shadow-sm"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 bg-white rounded-full text-[#0A66C2] hover:-translate-y-1 transition-transform shadow-sm"
              >
                <FaLinkedin size={16} />
              </a>
            </div>

            <h4 className="text-xs font-heading font-bold mb-2 text-primary uppercase tracking-wider">
              Subjects & Boards
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Mathematics",
                "Science",
                "English",
                "Coding",
                "Languages",
                "CBSE",
                "ICSE",
                "IB",
                "IGCSE",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[10px] bg-white text-foreground/70 px-2 py-0.5 rounded-full shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/10 bg-primary/5">
        <div className="container mx-auto px-6 max-w-7xl py-3 flex items-center justify-center">
          <p className="text-xs text-foreground/60 text-center">
            © {new Date().getFullYear()} Vegaklass Learning Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
