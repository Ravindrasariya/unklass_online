'use client';

import { useState } from 'react';
import FAQItem from './faq-item';

type FAQCategoryProps = {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};

export default function FAQCategory({
  title,
  faqs,
  className = '',
}: FAQCategoryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`bg-primary-light rounded-2xl  px-8 mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        {title}
      </h2>
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
    </div>
  );
}
