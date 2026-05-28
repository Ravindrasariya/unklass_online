'use client';

import { useState } from 'react';
import Link from 'next/link';
import FAQItem from './faq-item';

type FAQListProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
  showViewAllLink?: boolean;
};

export default function FAQList({
  faqs,
  showViewAllLink = true,
}: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      {showViewAllLink && (
        <div className="mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-white font-medium transition-colors"
          >
            <div className="flex items-center gap-0.5">
              View all FAQs
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
      )}
    </div>
  );
}
