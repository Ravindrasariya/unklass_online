'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import SpanUnderline from './ui/span-underline';

type FeatureCardProps = {
  icon: string;
  roundedValue: string;
  title: string;
  description: string;
  delay?: number;
  bgColor?: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
  roundedValue,
  delay = 0,
  bgColor = 'bg-gray-100 dark:bg-gray-800',
}: FeatureCardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={cn(
          `w-24 h-24 mb-4 flex items-center justify-center`,
          bgColor,
          roundedValue
        )}
      >
        <Image
          src={`/assets/icons/${icon}`}
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12"
          style={{ color: 'var(--primary-dark)' }}
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-md text-gray-600 max-w-[240px]">{description}</p>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'wcu-pay.svg',
      title: 'Pay-As-You-Go Model',
      description:
        'No long-term commitments—pay only for the classes your child attends.',
      bgColor: 'bg-yellow-100 dark:bg-yellow-800',
      roundedValue: 'rounded-[var(--radius-blob-1)]',
    },
    {
      icon: 'wcu-pause.svg',
      title: 'Pause Anytime',
      description:
        'Take a break and resume learning whenever it suits your schedule.',
      bgColor: 'bg-red-100 dark:bg-red-800',
      roundedValue: 'rounded-[var(--radius-blob-2)]',
    },
    {
      icon: 'wcu-personalized.svg',
      title: 'Personalized Learning',
      description:
        "Get a custom study plan tailored to your child's strengths and needs.",
      bgColor: 'bg-green-100 dark:bg-green-800',
      roundedValue: 'rounded-[var(--radius-blob-3)]',
    },
    {
      icon: 'wcu-results.svg',
      title: 'Proven Results',
      description:
        '85% of students improve faster and score higher with our structured methods.',
      bgColor: 'bg-blue-100 dark:bg-blue-800',
      roundedValue: 'rounded-[var(--radius-blob-2)]',
    },
    {
      icon: 'wcu-scheduling.svg',
      title: 'Flexible Scheduling',
      description:
        "Choose class times that match your child's routine and availability.",
      bgColor: 'bg-purple-100 dark:bg-purple-800',
      roundedValue: 'rounded-[var(--radius-blob-5)]',
    },
  ];

  return (
    <div className="mx-auto container max-w-screen-2xl px-8 py-12 mb-25">
      <h1 className="text-5xl pb-10 text-center font-bold text-gray-900 dark:text-gray-100 mb-4">
        Why Choose{' '}
        <SpanUnderline className="font-bold font-heading">
          Unklass
        </SpanUnderline>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
            bgColor={feature.bgColor}
            roundedValue={feature.roundedValue}
          />
        ))}
      </div>
    </div>
  );
}
