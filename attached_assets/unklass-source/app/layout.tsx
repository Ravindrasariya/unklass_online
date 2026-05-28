import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Nunito,
  Baloo_2,
  Outfit,
} from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

const baloo = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s • Unklass',
    default: 'Unklass',
  },

  description: 'Unklass is a modern learning platform offering a diverse range of courses and resources to help you achieve your educational and professional goals. Join our community and start learning today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${nunito.variable} ${baloo.variable} ${outfit.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
