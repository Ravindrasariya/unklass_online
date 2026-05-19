import { Metadata } from 'next';
import { BaseLayout } from '@/components/base-layout';
import CTASection from '@/components/cta-section';
import FaqClientContent from './FaqClientContent';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about Unklass, our courses, tutors, enrollment process, and more. Get clarity on free trials, pricing, subjects, and technical support.',
  keywords: ['faq', 'frequently asked questions', 'unklass', 'online tutoring', 'free trial', 'pricing', 'support'],
};

const generalFaqsData = [
  {
    question: 'Is there a free trial?',
    answer:
      "Yes, book a free session today! <a href='/free-trial' class='text-primary-darker hover:underline'>Book a free trial</a>",
  },
  {
    question:
      'What makes Unklass different from other online tutoring platforms?',
    answer:
      'Unklass offers personalized learning, flexible schedules, expert tutors, and pay-as-you-go pricing.',
  },
  {
    question: 'Is Unklass available for students outside India?',
    answer:
      'Yes, we cater to students from US, UK, Canada, Singapore, Australia, and other English-speaking countries.',
  },
  {
    question: 'What subjects and boards do you cover?',
    answer:
      'We offer Math, Science, English, Coding, and Languages for CBSE, ICSE, IB, IGCSE, US Core, UK, Singapore, Canada, and Australia boards.',
  },
];

const teacherFaqsData = [
  {
    question: 'How do I select a tutor for my child?',
    answer:
      'We match students with tutors based on subject, learning needs, and availability. Parents can also request a specific tutor.',
  },
  {
    question: 'Can I switch teachers if my child is not comfortable?',
    answer:
      'Yes, we offer a seamless teacher-switching option to ensure the best learning experience.',
  },
  {
    question: 'Are all teachers verified?',
    answer:
      'Yes, all Unklass teachers go through a rigorous selection process, including skill assessments, demo classes, and background verification.',
  },
];

const enrollmentFaqsData = [
  {
    question: 'Do I need to commit to a fixed number of classes?',
    answer:
      'No, Unklass follows a pay-as-you-go model. You only pay for the classes your child attends.',
  },
  {
    question: 'How do I book a free trial class?',
    answer:
      "Click on the 'Book a Free Trial' button and fill out a simple form. Our team will schedule a session at your convenience.",
  },
  {
    question: 'What happens after the free trial class?',
    answer:
      "After the trial, our team will assess your child's learning needs and suggest a customized study plan.",
  },
  {
    question: 'Are there any discounts for multiple subjects or siblings?',
    answer:
      'Yes, we offer discounts for multi-subject enrollments and sibling plans. Contact our support team for details.',
  },
];

const learningFaqsData = [
  {
    question: "How do I track my child's progress?",
    answer:
      'Parents receive regular reports with attendance, class performance, test results, and areas for improvement.',
  },
  {
    question: 'Will the classes be recorded?',
    answer:
      'Some classes may have recorded sessions available for review, depending on the course.',
  },
  {
    question: 'Can my child get homework help?',
    answer:
      'Yes! Our tutors assist with homework, exam preparation, and concept clarity.',
  },
];

const technicalFaqsData = [
  {
    question: 'What devices do I need for online classes?',
    answer:
      'A laptop, tablet, or desktop with a stable internet connection is required. A pen tablet is recommended for subjects like Math.',
  },
  {
    question: 'Do I need to download any software?',
    answer:
      'No, classes happen on a browser-based interactive learning platform, with no extra software needed.',
  },
  {
    question: 'What should I do if I face technical issues during a class?',
    answer:
      'Our support team is available 24/7 via chat, email, and WhatsApp to resolve any issues quickly.',
  },
];

const cancellationFaqsData = [
  {
    question: 'Can I cancel a class if my child is unavailable?',
    answer:
      'Yes, we offer flexible rescheduling. Just inform us 24 hours in advance.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'We have a transparent refund policy. Contact our support team for details based on your plan.',
  },
];


export default function FAQPage() {
  return (
    <BaseLayout>
      <FaqClientContent
        generalFaqs={generalFaqsData}
        teacherFaqs={teacherFaqsData}
        enrollmentFaqs={enrollmentFaqsData}
        learningFaqs={learningFaqsData}
        technicalFaqs={technicalFaqsData}
        cancellationFaqs={cancellationFaqsData}
      />
      <CTASection
        label="Need help with something else?"
        description="Our team is here to help you with any questions you may have"
        buttonLabel="Contact Us"
      />
    </BaseLayout>
  );
}