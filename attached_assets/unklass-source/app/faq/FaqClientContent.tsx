'use client';

import BrandedSection from '@/components/ui/branded-section';
import FAQCategory from '@/components/faq/faq-category';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqClientContentProps {
  generalFaqs: FaqItem[];
  teacherFaqs: FaqItem[];
  enrollmentFaqs: FaqItem[];
  learningFaqs: FaqItem[];
  technicalFaqs: FaqItem[];
  cancellationFaqs: FaqItem[];
}

export default function FaqClientContent({
  generalFaqs,
  teacherFaqs,
  enrollmentFaqs,
  learningFaqs,
  technicalFaqs,
  cancellationFaqs,
}: FaqClientContentProps) {
  return (
    <BrandedSection dottedLines={true}>
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        Frequently Asked Questions
      </h1>
      <div className="max-w-4xl mx-auto">
        <FAQCategory title="General Questions" faqs={generalFaqs} />
        <FAQCategory title="Class & Teacher Selection" faqs={teacherFaqs} />
        <FAQCategory title="Enrollment & Pricing" faqs={enrollmentFaqs} />
        <FAQCategory title="Learning & Progress" faqs={learningFaqs} />
        <FAQCategory title="Technical & Support" faqs={technicalFaqs} />
        <FAQCategory title="Cancellation & Refund" faqs={cancellationFaqs} />
      </div>
    </BrandedSection>
  );
}