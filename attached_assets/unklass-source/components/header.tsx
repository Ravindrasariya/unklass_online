'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import BookFreeTrial from './book-free-trial';

const navigationItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Courses',
    href: '/courses',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  // {
  //   label: 'Blog',
  //   href: '/blog',
  // },
  {
    label: 'Contact Us',
    href: '/contact',
    disabled: false,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Transform values based on scroll position
  const headerBackgroundOpacity = useTransform(scrollY, [0, 50], [0.5, 1]);
  const headerBorderOpacity = useTransform(scrollY, [0, 50], [0, 0.15]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 10]);
  const headerTop = useTransform(scrollY, [0, 100], ['0rem', '1.5rem']);
  // Adjust width transformation for better mobile experience
  const headerWidth = useTransform(scrollY, [0, 100], ['100%', '94%']);
  const headerBorderRadius = useTransform(scrollY, [0, 100], ['0rem', '2rem']);
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 2px 10px oklch(0 0 0 / 0.06)', '0 4px 20px oklch(0 0 0 / 0.1)']
  );

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="w-full h-16 overflow-x-hidden">
      <motion.header
        style={{
          position: 'fixed',
          top: headerTop,
          left: 0,
          right: 0,
          maxWidth: '100%',
          width: headerWidth,
          margin: '0 auto',
          zIndex: 50,
          overflow: 'visible',
          padding: '0',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          style={{
            backgroundImage: useTransform(
              headerBackgroundOpacity,
              (opacity) =>
                `linear-gradient(to right, rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))`
            ),
            backdropFilter: useTransform(
              headerBlur,
              (blur) => `blur(${blur}px)`
            ),
            boxShadow: headerShadow,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: useTransform(
              headerBorderOpacity,
              (opacity) => `oklch(from var(--border) l c h / ${opacity})`
            ),
            borderRadius: headerBorderRadius,
            backgroundColor: useTransform(
              headerBackgroundOpacity,
              (opacity) => `oklch(from var(--background) l c h / ${opacity})`
            ),
          }}
          className="flex h-16 items-center justify-between px-6"
        >
          <div className="flex items-center gap-6">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.disabled ? (
                      <span
                        className="cursor-not-allowed opacity-50"
                        onClick={() =>
                          window.alert(
                            'Dashboard and live classes coming soon!'
                          )
                        }
                      >
                        <div className={navigationMenuTriggerStyle()}>
                          {item.label}
                        </div>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className = {`${navigationMenuTriggerStyle()} ${isActive(item.href) ? 'font-semibold' : ''}`}
                        data-active={isActive(item.href)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <BookFreeTrial animate={false} size="sm" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-joyful-teal/20 rounded-md transition-all duration-200 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu with AnimatePresence for proper exit animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 mx-3 mt-1 shadow-lg z-50 md:hidden rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: 'var(--background)',
                borderRadius: '1rem',
                border: '1px solid var(--border)',
              }}
            >
              <div className="px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) =>
                    item.disabled ? (
                      <span
                        key={item.href}
                        className="px-4 py-2 opacity-50 cursor-not-allowed"
                        onClick={() =>
                          window.alert(
                            'Dashboard and live classes coming soon!'
                          )
                        }
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 hover:bg-joyful-yellow/30 rounded-xl transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-foreground'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  <div className="pt-2">
                    <BookFreeTrial className="w-full" />
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
