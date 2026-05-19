import { Metadata } from 'next';
import { BaseLayout } from '@/components/base-layout';
import ContactClientContent from './ContactClientContent';

export const metadata: Metadata = {
  title: 'Contact ',
  description: 'Have questions or want to book a free trial? Get in touch with us! Fill out the form or use our other contact methods. We are here to help.',
  keywords: ['contact', 'support', 'free trial', 'questions', 'get in touch'],
};

export default function ContactPage() {
  return (
    <BaseLayout>
      <ContactClientContent />
    </BaseLayout>
  );
}