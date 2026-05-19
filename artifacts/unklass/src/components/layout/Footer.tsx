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

const subjects = [
  "Mathematics",
  "Science",
  "English",
  "Coding",
  "Languages",
  "CBSE",
  "ICSE",
  "IB",
  "IGCSE",
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 max-w-7xl py-8">
        {/* Row 1: Brand+address (left) | Subjects (right) */}
        <div className="grid grid-cols-2 gap-6 sm:gap-10">
          <div>
            <Link href="/">
              <div className="inline-flex items-center gap-2 bg-white rounded-xl px-3 py-2 mb-3 cursor-pointer shadow-sm">
                <img
                  src="/assets/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 object-cover object-left"
                />
                <span className="font-heading font-extrabold text-base text-foreground leading-none tracking-tight">
                  Unklass
                </span>
              </div>
            </Link>
            <p className="text-xs font-semibold text-white mb-1">
              Vegaklass Learning Private Limited
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
            </p>
          </div>

          <div>
            <h3 className="text-xs font-heading font-bold mb-3 text-white uppercase tracking-wider">
              Subjects &amp; Boards
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {subjects.map((item) => (
                <span
                  key={item}
                  className="text-[11px] bg-white text-foreground px-2.5 py-1 rounded-full shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 my-6" />

        {/* Row 2: Quick Links | Get in Touch | Community */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-heading font-bold mb-3 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="text-xs text-white/85 hover:text-accent transition-colors cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
              <Link href="/privacy-policy">
                <span className="text-white/70 hover:text-accent transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/terms-and-conditions">
                <span className="text-white/70 hover:text-accent transition-colors cursor-pointer">
                  Terms of Use
                </span>
              </Link>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xs font-heading font-bold mb-3 text-white uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-2">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="p-1.5 bg-white rounded-full shadow-sm shrink-0">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <div className="leading-tight min-w-0">
                    <p className="text-[9px] font-bold text-white/70 uppercase tracking-wide">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs text-white hover:text-accent transition-colors break-all"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-heading font-bold mb-3 text-white uppercase tracking-wider">
              Community
            </h3>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white rounded-full text-[#1877F2] hover:-translate-y-0.5 transition-transform shadow-sm"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="p-2 bg-white rounded-full text-black hover:-translate-y-0.5 transition-transform shadow-sm"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 bg-white rounded-full text-[#0A66C2] hover:-translate-y-0.5 transition-transform shadow-sm"
              >
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/15">
        <div className="container mx-auto px-6 max-w-7xl py-2.5 flex items-center justify-center">
          <p className="text-[11px] text-white/70 text-center">
            © {new Date().getFullYear()} Vegaklass Learning Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
