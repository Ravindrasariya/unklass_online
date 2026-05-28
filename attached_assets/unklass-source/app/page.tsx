import Hero from '@/components/hero';
import Features from '@/components/features';
import WhyChooseUs from '@/components/why-choose-us';
import Metrics from '@/components/metrics';
import ExperienceUnklass from '@/components/experience-unklass';
import Testimonials from '@/components/testimonials';
import FAQSection from '@/components/faq-section';
import { BaseLayout } from '@/components/base-layout';
import HowItWorks from '@/components/how-it-works';
// import StarterVideo from '@/components/starter-video';
import CTASection from '@/components/cta-section';
import WhatWeTeach from '@/components/what-we-teach';

export const metadata = {
  title: 'Home • Unklass', 
  description: 'Welcome to Unklass! Discover innovative courses in Math, Science, English, and Coding. Start your learning journey with us today.',
};

export default function Home() {
  return (
    <BaseLayout>
      <div className="min-h-screen">
        <Hero />
        <ExperienceUnklass />
        <WhyChooseUs />
        <WhatWeTeach />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <Metrics />
        {/* <Features /> */}
        {/* <StarterVideo /> */}
        <CTASection />
      </div>
    </BaseLayout>
  );
}
