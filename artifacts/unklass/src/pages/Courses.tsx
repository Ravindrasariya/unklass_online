import { BaseLayout } from "@/components/layout/BaseLayout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const subjects = [
  {
    title: "Mathematics",
    description: ["Mental Math & Vedic Math", "Algebra, Geometry & Calculus", "Competitive Exam Prep (Olympiads, SAT)"],
    icon: "/assets/icons/math.svg",
    color: "bg-emerald-100",
    shadow: "shadow-emerald-200"
  },
  {
    title: "Science",
    description: ["Physics, Chemistry & Biology", "Hands-on Experiments", "Scientific Inquiry & Reasoning"],
    icon: "/assets/icons/science.png",
    color: "bg-amber-100",
    shadow: "shadow-amber-200"
  },
  {
    title: "English",
    description: ["Phonics, Reading & Writing", "Grammar & Vocabulary", "Public Speaking & Communication"],
    icon: "/assets/icons/english.svg",
    color: "bg-blue-100",
    shadow: "shadow-blue-200"
  },
  {
    title: "Coding",
    description: ["Block-Based Coding (Scratch)", "Python & Web Development", "App Design & Logical Thinking"],
    icon: "/assets/icons/code.svg",
    color: "bg-purple-100",
    shadow: "shadow-purple-200"
  },
  {
    title: "Languages",
    description: ["Hindi, French, Spanish, German", "Conversational Fluency", "Reading & Writing Skills"],
    icon: "/assets/icons/lang.png",
    color: "bg-rose-100",
    shadow: "shadow-rose-200"
  }
];

const boards = [
  { name: "CBSE & ICSE", description: "Aligned with Indian national curriculum standards." },
  { name: "IB & IGCSE", description: "International curriculum focusing on critical thinking." },
  { name: "US, UK, Canada", description: "Curriculum mapped to North American and UK standards." },
  { name: "Singapore & Australia", description: "Specialized frameworks including Singapore Math." },
];

const grades = [
  "Kindergarten & Grade 1",
  "Grade 2 to 5 (Primary)",
  "Grade 6 to 8 (Middle School)",
  "Grade 9 to 12 (High School)",
  "Competitive Exam Prep",
];

export default function Courses() {
  return (
    <BaseLayout>
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6">
                Discover Engaging Courses for <span className="text-primary inline-block relative">Every Student
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
                Comprehensive support for students at all educational levels across various boards and curricula.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative hidden lg:block">
              <div className="relative aspect-[4/3] w-full">
                <img src="/assets/hero/2.png" alt="Students learning" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Subjects & Specializations</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">These courses are available for all the boards and grades listed below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {subjects.map((sub, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className={`rounded-3xl p-8 text-center text-foreground flex flex-col items-center ${sub.color} shadow-lg`}>
                <div className={`w-24 h-24 bg-white rounded-[var(--radius-blob-${(i%5)+1})] flex items-center justify-center mb-6 shadow-sm`}>
                  <img src={sub.icon} alt={sub.title} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-6 text-foreground">{sub.title}</h3>
                <ul className="text-left space-y-3 w-full">
                  {sub.description.map((desc, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-white/60 flex items-center justify-center text-foreground font-bold text-sm">✓</div>
                      <span className="text-foreground/80 font-medium">{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Boards We Cover</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">We support students studying under various educational boards worldwide.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boards.map((board, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-2xl p-8 shadow-md border border-border border-t-4 border-t-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">{board.name}</h3>
                </div>
                <p className="text-foreground/70">{board.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 pb-32">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Available For</h2>
          <p className="text-xl text-foreground/80 mb-12">We provide comprehensive support for students at all educational levels.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {grades.map((grade, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white border-2 border-primary/20 text-primary font-bold px-8 py-4 rounded-full shadow-sm cursor-pointer hover:bg-primary/5 hover:border-primary">
                {grade}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">Start your learning journey today</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-full px-10 py-8 shadow-xl">
              Book a Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </BaseLayout>
  );
}
