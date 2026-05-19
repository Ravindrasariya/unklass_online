'use client';

import Link from 'next/link';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Logo from './logo';
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-primary-light text-primary-foreground py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-sm mb-4 opacity-90">
              Vegaklass Learning Private Limited
            </p>
            <p className="text-sm mb-4 opacity-90">
              Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli,
              Bengaluru, Karnataka 560008
            </p>
            <p className="text-xs mt-8 opacity-70">
              © {new Date().getFullYear()} Vegaklass Learning Private Limited.
              All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Courses
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/blog"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <div className="text-sm opacity-50 cursor-not-allowed">
                  Login
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Customer Support
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-joyful-teal" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:support@unklass.com"
                    className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                  >
                    support@unklass.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-joyful-teal" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href="tel:+918904061785"
                    className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                  >
                    +91 8904061785
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 mr-2 mt-0.5 text-joyful-teal" />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/918904061785"
                    className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 8904061785
                  </a>
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-heading font-semibold mt-6 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:opacity-100 hover:text-joyful-teal transition"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Community */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Community
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61570956001996"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:opacity-90 transition shadow-sm"
              >
                <FaFacebook className="h-5 w-5 text-[#1877F2]" />
              </a>
              <a
                href="https://x.com/unklass?t=VntFZR1UDBCt_-vn9hVMXw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:opacity-90 transition shadow-sm"
              >
                <FaXTwitter className="h-5 w-5 text-[#000000]" />
              </a>
              <a
                href="https://www.linkedin.com/company/unklass/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:opacity-90 transition shadow-sm"
              >
                <FaLinkedin className="h-5 w-5 text-[#0A66C2]" />
              </a>
            </div>

            <h3 className="text-lg font-heading font-semibold mb-4">
              Subjects & Boards
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {/* Extracted Subjects */}
              {[
                { title: '🔢 Mathematics' },
                { title: '🧪 Science' },
                { title: '📚 English' },
                { title: '💻 Coding' },
                { title: '🗣️ Languages' },
                { title: '🌍 Social Science' },
              ].map((subject) => (
                <span key={subject.title} className="text-sm opacity-80">
                  {subject.title.split(' ')[1]}{' '}
                  {/* Display only the subject name */}
                </span>
              ))}

              {/* Extracted Boards */}
              {[
                { name: 'CBSE & ICSE' },
                { name: 'IB & IGCSE' },
                { name: 'US, UK, Canada' },
                { name: 'Singapore, Australia' },
              ].map((board) => (
                <span key={board.name} className="text-sm opacity-80">
                  {board.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center border-t border-primary-foreground/30 text-xs opacity-70">
          <p>
            Vegaklass Learning Private Limited is a company registered under the
            Companies Act, 2013, with CIN: [CIN Number]. Registered under the
            laws of India with its registered office located at Unit 101, Oxford
            Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka
            560008.
          </p>
        </div>

        <div className="mt-4 text-center text-xs opacity-70">
          <p>
            Got any questions? Reach out to us at{' '}
            <Mail className="inline h-3 w-3" /> support@unklass.com /{' '}
            <Phone className="inline h-3 w-3" /> +91 8904061785
          </p>
        </div>

        <div className="mt-6 text-center text-[10px] opacity-40">
          <p>
            Built by{' '}
            <a
              href="https://tangerinetech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition underline"
            >
              tangerinetech.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
