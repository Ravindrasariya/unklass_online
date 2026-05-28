import { BaseLayout } from "@/components/layout/BaseLayout";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const generalFaqsData = [
  { question: "Is there a free trial?", answer: "Yes, book a free session today! <a href='/contact' class='text-primary font-bold hover:underline'>Book a free trial</a>" },
  { question: "What makes Unklass different from other online tutoring platforms?", answer: "Unklass offers personalized learning, flexible schedules, expert tutors, and pay-as-you-go pricing." },
  { question: "Is Unklass available for students outside India?", answer: "Yes, we cater to students from US, UK, Canada, Singapore, Australia, and other English-speaking countries." },
  { question: "What subjects and boards do you cover?", answer: "We offer Math, Science, English, Coding, and Languages for CBSE, ICSE, IB, IGCSE, US Core, UK, Singapore, Canada, and Australia boards." },
];

const teacherFaqsData = [
  { question: "How do I select a tutor for my child?", answer: "We match students with tutors based on subject, learning needs, and availability. Parents can also request a specific tutor." },
  { question: "Can I switch teachers if my child is not comfortable?", answer: "Yes, we offer a seamless teacher-switching option to ensure the best learning experience." },
  { question: "Are all teachers verified?", answer: "Yes, all Unklass teachers go through a rigorous selection process, including skill assessments, demo classes, and background verification." },
];

const enrollmentFaqsData = [
  { question: "Do I need to commit to a fixed number of classes?", answer: "No, Unklass follows a pay-as-you-go model. You only pay for the classes your child attends." },
  { question: "How do I book a free trial class?", answer: "Click on the 'Book a Free Trial' button and fill out a simple form. Our team will schedule a session at your convenience." },
  { question: "What happens after the free trial class?", answer: "After the trial, our team will assess your child's learning needs and suggest a customized study plan." },
];

const learningFaqsData = [
  { question: "How do I track my child's progress?", answer: "Parents receive regular reports with attendance, class performance, test results, and areas for improvement." },
  { question: "Will the classes be recorded?", answer: "Some classes may have recorded sessions available for review, depending on the course." },
  { question: "Can my child get homework help?", answer: "Yes! Our tutors assist with homework, exam preparation, and concept clarity." },
];

const technicalFaqsData = [
  { question: "What devices do I need for online classes?", answer: "A laptop, tablet, or desktop with a stable internet connection is required. A pen tablet is recommended for subjects like Math." },
  { question: "Do I need to download any software?", answer: "No, classes happen on a browser-based interactive learning platform, with no extra software needed." },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer mb-4" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-lg font-bold font-heading text-foreground">{question}</h3>
        <div className={`shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown size={20} />
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 text-foreground/70 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
      )}
    </div>
  );
};

const FaqCategory = ({ title, faqs }: { title: string; faqs: any[] }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-heading font-bold text-foreground mb-6">{title}</h2>
    <div>
      {faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </div>
);

export default function Faq() {
  return (
    <BaseLayout>
      <section className="bg-primary pt-24 pb-32 text-center text-white rounded-b-[4rem]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80">Find answers to frequently asked questions about Unklass, our courses, tutors, and enrollment process.</p>
        </div>
      </section>

      <section className="py-16 -mt-16 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50">
            <FaqCategory title="General Questions" faqs={generalFaqsData} />
            <FaqCategory title="Class & Teacher Selection" faqs={teacherFaqsData} />
            <FaqCategory title="Enrollment & Pricing" faqs={enrollmentFaqsData} />
            <FaqCategory title="Learning & Progress" faqs={learningFaqsData} />
            <FaqCategory title="Technical & Support" faqs={technicalFaqsData} />
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-accent relative overflow-hidden text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Need help with something else?</h2>
          <p className="text-xl text-foreground/80 mb-10">Our team is here to help you with any questions you may have.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-full px-10 py-8 shadow-xl">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </BaseLayout>
  );
}
