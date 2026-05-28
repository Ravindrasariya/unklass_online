'use client';

import FAQList from '@/components/faq/faq-list';
import BrandedSection from './ui/branded-section';
import SpanUnderline from './ui/span-underline';
import Image from 'next/image';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What are the class schedules and durations?',
      answer:
        'Our classes are scheduled at your convenience and typically last for 45-60 minutes depending on the subject and grade level.',
    },
    {
      question: "Can I select or change my child's teacher?",
      answer:
        'Yes, we offer a seamless teacher-switching option to ensure the best learning experience.',
    },
    {
      question: 'What are the pricing options and payment methods?',
      answer:
        'We offer flexible pricing based on your needs with various payment methods including credit/debit cards and digital wallets.',
    },
    {
      question: 'Does Unklass offer a free trial class?',
      answer:
        "Yes, book a free session today! <a href='/contact' class='text-primary-darker hover:underline'>Book a free trial</a>",
    },
    {
      question: "What is Unklass's refund policy?",
      answer:
        'We have a transparent refund policy. Any unused class credits will be refunded if you decide to discontinue.',
    },
    {
      question: 'How does Unklass adapt to different learning styles?',
      answer:
        'Our teachers are trained to identify and adapt to various learning styles, ensuring personalized education for each student.',
    },
  ];

  return (
    <BrandedSection color="purple" dottedLines={false} className="relative">
      <Image
        src="/assets/a/circle-r.webp"
        alt="decorative doodle"
        width={250}
        height={250}
        className="absolute bottom-0 -left-[128px] md:block hidden"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="sticky top-24 pl-8">
              <h2 className="text-5xl font-bold text-white mb-4">
                Your Questions,{' '}
                <SpanUnderline
                  color="var(--accent)"
                  className="font-heading font-bold"
                >
                  Answered.
                </SpanUnderline>
              </h2>
              <div className="mt-8">
                <p className="text-sm text-white">
                  Have more questions for us?
                  <br />
                  Write to us at{' '}
                  <a
                    href="mailto:support@unklass.com"
                    className="text-white hover:underline"
                  >
                    support@unklass.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 px-2">
            <FAQList faqs={faqs} showViewAllLink={true} />
          </div>
        </div>
      </div>
    </BrandedSection>
  );
}
