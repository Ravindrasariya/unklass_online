import { Link } from "wouter";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-primary/10 text-foreground py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <Link href="/">
              <img src="/assets/logo.png" alt="Unklass Logo" className="h-10 object-contain mb-6 cursor-pointer" />
            </Link>
            <p className="text-sm mb-4 text-foreground/80">
              Vegaklass Learning Private Limited
            </p>
            <p className="text-sm mb-4 text-foreground/80 leading-relaxed">
              Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
            </p>
            <p className="text-xs mt-8 text-foreground/60">
              © {new Date().getFullYear()} Vegaklass Learning Private Limited. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Courses", href: "/courses" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQs", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login">
                  <div className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                    Login
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-primary">Customer Support</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">Email</p>
                  <a href="mailto:support@unklass.com" className="text-sm text-foreground/80 hover:text-secondary transition-colors">
                    support@unklass.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">Phone</p>
                  <a href="tel:+918904061785" className="text-sm text-foreground/80 hover:text-secondary transition-colors">
                    +91 8904061785
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">WhatsApp</p>
                  <a href="https://wa.me/918904061785" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-secondary transition-colors">
                    +91 8904061785
                  </a>
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-heading font-bold mt-8 mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">
                  <div className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer">Privacy Policy</div>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  <div className="text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer">Terms of Use</div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-primary">Community</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="p-3 bg-white rounded-full text-[#1877F2] hover:-translate-y-1 transition-transform shadow-sm">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full text-black hover:-translate-y-1 transition-transform shadow-sm">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full text-[#0A66C2] hover:-translate-y-1 transition-transform shadow-sm">
                <FaLinkedin size={20} />
              </a>
            </div>
            
            <h3 className="text-lg font-heading font-bold mb-4 text-primary">Subjects & Boards</h3>
            <div className="flex flex-wrap gap-2">
              {['Mathematics', 'Science', 'English', 'Coding', 'Languages', 'CBSE', 'ICSE', 'IB', 'IGCSE'].map(item => (
                <span key={item} className="text-xs bg-white text-foreground/70 px-3 py-1.5 rounded-full shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
