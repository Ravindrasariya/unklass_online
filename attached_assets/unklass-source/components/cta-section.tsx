'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import BrandedSection from './ui/branded-section';
import { motion } from 'framer-motion';
import BookFreeTrial from './book-free-trial';
import SpanAttention from './ui/span-attention';
import SpanUnderline from './ui/span-underline';

type CTASectionProps = {
  label?: string;
  description?: string;
  buttonLabel?: string;
};

export default function CTASection({
  label = 'Ready to make learning fun?',
  description = 'Join the Unklass community where education becomes an adventure.',
  buttonLabel = 'Get a free 1-on-1 lesson now!',
}: CTASectionProps) {
  const labelLastWord = label.split(' ').pop();

  const labelWithoutLastWord = label.split(' ').slice(0, -1).join(' ');

  return (
    <BrandedSection color="accent" dottedLines={false} className="relative">
      <Image
        src="/assets/a/abstract-t.webp"
        alt="decorative doodle"
        width={250}
        height={250}
        className="absolute bottom-0 -right-2 md:block hidden"
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <motion.div
            className="max-w-md space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold tracking-tight text-gray-900  sm:text-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {labelWithoutLastWord}
              <SpanUnderline
                color="var(--primary)"
                className="font-bold font-heading ml-1.5"
              >
                {labelLastWord}
              </SpanUnderline>
            </motion.h2>
            <motion.p
              className="text-lg "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookFreeTrial label={buttonLabel} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/cta.jpeg"
              alt="Students enjoying interactive learning"
              width={500}
              height={500}
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </BrandedSection>
  );
}
