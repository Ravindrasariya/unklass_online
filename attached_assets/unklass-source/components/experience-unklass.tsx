'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BrandedSection from './ui/branded-section';
import SpanUnderline from './ui/span-underline';
import BookFreeTrial from './book-free-trial';
import SpanAttention from './ui/span-attention';
import ProgramCard from './program-card';
import { Button } from './ui/button';

type ProgramItemProps = {
  title: string;
  grades: string;
  className?: string;
  imageSrc?: string;
};

function ProgramItem({ title, grades, className, imageSrc }: ProgramItemProps) {
  return (
    <div className={cn('text-center', className)}>
      {imageSrc && (
        <div className="mb-4 flex justify-center">
          <Link href="/courses">
            <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer relative">
              <div className="absolute inset-0 bg-primary-darker opacity-0 hover:opacity-30 transition-opacity duration-300 z-10 rounded-lg"></div>
              <Image
                src={imageSrc}
                alt={title}
                width={240}
                height={160}
                className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>
        </div>
      )}
      <h3 className="text-xl md:text-4xl font-heading font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-foreground/80">{grades}</p>
    </div>
  );
}

type SectionItemProps = {
  title: string;
  items: string[];
  buttonLabel?: string;
  buttonLink?: string;
};

function SectionItem({
  title,
  items,
  buttonLabel = 'Check all',
  buttonLink = '#',
}: SectionItemProps) {
  return (
    <div className="w-full bg-joyful-yellow/20 dark:bg-slate-800 rounded-2xl p-6 md:p-8">
      <div className="flex justify-between items-center gap-2 mb-8 flex-wrap">
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground dark:text-gray-200">
          {title}
        </h3>
        <Link
          href={buttonLink}
          className="flex items-center gap-0.5 text-primary dark:text-primary-light hover:text-joyful-coral dark:hover:text-joyful-coral font-medium transition-colors"
        >
          <div className="flex items-center gap-0.5">
            {buttonLabel}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-joyful-coral dark:bg-joyful-coral/70 flex-shrink-0"></span>
            <span className="text-lg text-foreground/90 dark:text-gray-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ProgramBenefitProps = {
  benefits: string[];
};

function ProgramBenefits({ benefits }: ProgramBenefitProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8 mx-auto max-w-4xl">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-[var(--accent-green)] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12L10 17L19 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type LearningOptionCardProps = {
  title: string;
  description: string;
  benefits: string[];
  className?: string;
};

function LearningOptionCard({
  title,
  description,
  benefits,
  className,
}: LearningOptionCardProps) {
  return (
    <div
      className={cn(
        'bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full',
        className
      )}
    >
      <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">
        {title}
      </h3>
      <p className="text-white/90 mb-6 text-lg leading-relaxed">
        {description}
      </p>
      <div>
        <h4 className="text-xl font-heading font-semibold text-white mb-4">
          Key Benefits:
        </h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-white text-md leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceUnklass() {
  const oneOnOneBenefits = [
    '💡 Personalized lesson plans tailored to your child&apos;s strengths and weaknesses',
    '🧘‍♀️ Flexible scheduling and pacing',
    '👩‍🏫 Complete attention from the tutor ensures faster doubt resolution',
    '🛠️ Great for remedial support, advanced learning, or exam prep',
  ];

  const groupClassBenefits = [
    '👨‍👩‍👧‍👦 Small batches (4–6 students) for healthy competition and peer learning',
    '🗣️ Encourages group discussions, critical thinking, and communication skills',
    '💸 Cost-effective without compromising on quality',
    '⏱️ Structured schedules to build consistency and routine',
  ];

  return (
    <BrandedSection
      color="purple"
      dottedLines={false}
      className="py-24 pb-32 relative overflow-hidden"
    >
      {/* Decorative doodles */}
      <Image
        src="/assets/a/circle-l.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute top-0 -right-[22px]"
      />

      <Image
        src="/assets/a/chevron-triangle-neon.webp"
        alt="decorative doodle"
        width={200}
        height={200}
        className="absolute bottom-0 -left-8 scale-75 md:scale-100 md:bottom-0 md:left-0"
      />

      <div className="py-12 md:py-8 text-center mb-12 md:mb-16 z-10 relative max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Learning Options That Fit Every Child
        </h2>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          At{' '}
          <SpanAttention className="font-bold font-heading mr-4">
            Unklass,
          </SpanAttention>
          {'  '}we understand that every learner is unique. That&apos;s why we
          offer two flexible learning formats to suit different needs and
          preferences:
        </p>
      </div>

      {/* Learning Option Cards */}
      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        <LearningOptionCard
          title="1-on-1 Classes (Personalized Attention)"
          description="Ideal for students who need focused guidance, a customized pace, or extra support in specific subjects."
          benefits={oneOnOneBenefits}
        />
        <LearningOptionCard
          title="Group Classes (Collaborative Learning)"
          description="Best suited for learners who thrive in interactive, peer-based environments and want an affordable, high-quality solution."
          benefits={groupClassBenefits}
        />
      </div>

      <div className="text-center mb-12 md:mb-4 mt-12 flex justify-center relative z-10">
        <Link href="/contact">
          <Button
            size="lg"
            variant="outline"
            className="font-bold bg-transparent text-white hover:bg-accent font-heading"
          >
            Get Started Today!
          </Button>
        </Link>
      </div>
    </BrandedSection>
  );
}
