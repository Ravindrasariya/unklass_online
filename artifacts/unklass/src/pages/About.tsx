import { BaseLayout } from "@/components/layout/BaseLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const problems = [
  {
    title: "Lack of Personal Attention",
    description: "In traditional classrooms, teachers struggle to tailor learning to each student's pace and needs—leaving many either behind or unchallenged.",
    icon: Users,
  },
  {
    title: "Rigid Scheduling",
    description: "Fixed tuition timings make it difficult for students to balance academics, hobbies, and family time. There's little room for flexibility.",
    icon: Clock,
  },
  {
    title: "Limited Access to Quality Tutors",
    description: "Students in small towns or remote areas often don't have access to experienced, subject-expert teachers.",
    icon: MapPin,
  },
  {
    title: "High Cost of Coaching",
    description: "Most coaching programs require bulk payments or fixed plans—even if a child needs help with just one subject or topic.",
    icon: DollarSign,
  },
];

const solutionFeatures = [
  "Flexible scheduling that works around your life",
  "Personalized study plans for each student",
  "Pay-as-you-go pricing - no bulk commitments",
  "Expert tutors from anywhere in the world",
  "Real-time progress updates for parents",
  "Interactive learning tools and gamification",
];

const approaches = [
  {
    title: "Personalized Learning Plans",
    description: "Each student receives a customized curriculum based on their specific needs, learning style, and goals.",
  },
  {
    title: "Interactive Learning",
    description: "Creative strategies are embedded throughout lessons, using games and activities to make learning exciting.",
  },
  {
    title: "Assessments & Progress Reports",
    description: "Regular check-ins to track progress - clear reports help parents see how their child is improving.",
  },
];

const steps = [
  {
    title: "Application",
    description: "Teachers submit comprehensive experience information, education background, and expertise with different boards.",
    icon: "📝",
  },
  {
    title: "Screening",
    description: "Candidates complete thorough skill assessments to demonstrate expertise in their teaching areas.",
    icon: "🔍",
  },
  {
    title: "Demo Class",
    description: "Applicants teach a demo session, showcasing their interactive teaching methods and adaptability to different student types.",
    icon: "👨‍🏫",
  },
  {
    title: "Final Onboarding",
    description: "Based on student feedback and our evaluation, teachers receive final training on Unklass platform standards.",
    icon: "🎓",
  },
];

export default function About() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex flex-col gap-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-heading font-bold text-foreground">
                Empowering Students Through{" "}
                <span className="text-primary inline-block relative">
                  Personalized Learning
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
                Learn about our mission, vision, and the dedicated team making a difference in online education
              </p>
            </motion.div>
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3]">
                 <div className="absolute inset-0 bg-primary/10 rounded-[var(--radius-blob-2)] transform -rotate-6"></div>
                 <img src="/assets/hero/3.png" alt="About Unklass" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-joyful-coral/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-foreground/80">The guiding principles that drive everything we do at Unklass</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-10 shadow-lg border border-border">
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">Vision</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We want to transform the way students learn by combining technology, creativity, and personalization to make high-quality education accessible to every student, anywhere in the world.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-10 shadow-lg border border-border">
              <h3 className="text-3xl font-heading font-bold text-secondary mb-6">Mission</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our mission at Unklass is to redefine learning by providing flexible, engaging, and personalized education for every student, regardless of background or location. We empower learners with expert guidance, interactive tools, and real-time insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              The <span className="text-primary font-display font-bold px-2 inline-block">Unklass</span> Solution
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              At Unklass, we believe that education should be accessible, personalized, and effective—yet today's systems fall short in key areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              {problems.map((problem, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="bg-white border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center text-destructive">
                    <problem.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{problem.title}</h4>
                    <p className="text-foreground/70">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-10 shadow-xl h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Unklass is Here to Change That</h3>
                </div>
                <p className="text-xl text-foreground/80 mb-10">
                  We offer a complete solution that addresses every pain point in traditional education through innovation and technology.
                </p>
                <div className="space-y-4">
                  {solutionFeatures.map((feature, i) => (
                    <motion.div key={i} className="flex items-center gap-4 bg-white/80 rounded-xl p-4 shadow-sm border border-border">
                      <CheckCircle2 className="text-primary shrink-0" size={24} />
                      <span className="font-bold text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Approach */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Teachers' Approach</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-16">
            How our educators create engaging and effective learning experiences
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((app, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-left">
                <h3 className="text-2xl font-bold font-heading mb-4 text-accent">{app.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Teacher Selection Process</h2>
            <p className="text-xl text-foreground/80">How we ensure your kids receive the best from Unklass</p>
          </div>
          <div className="space-y-12 relative">
            <div className="hidden md:block absolute left-12 top-10 bottom-10 w-1 bg-primary/20 rounded-full"></div>
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-4xl shadow-xl shrink-0 z-10 border-4 border-white">
                  {step.icon}
                </div>
                <div className="bg-white border border-border rounded-2xl p-8 shadow-md flex-1 w-full relative">
                   <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-1 bg-primary/20 hidden md:block"></div>
                   <h3 className="text-2xl font-bold font-heading text-foreground mb-3 flex items-center gap-3">
                     <span className="text-primary font-black">0{i+1}.</span> {step.title}
                   </h3>
                   <p className="text-lg text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-8">
            Ready to make learning fun?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-full px-10 py-8 shadow-2xl hover:scale-105 transition-transform">
              Book a free trial
            </Button>
          </Link>
        </div>
      </section>

    </BaseLayout>
  );
}
