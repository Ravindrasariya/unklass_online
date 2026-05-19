import { BaseLayout } from "@/components/layout/BaseLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const featuresData = [
  {
    title: "Pay-As-You-Go Model",
    description: "No long-term commitments—pay only for the classes your child attends.",
    icon: "/assets/icons/wcu-pay.svg",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Pause Anytime",
    description: "Take a break and resume learning whenever it suits your schedule.",
    icon: "/assets/icons/wcu-pause.svg",
    bgColor: "bg-red-100",
  },
  {
    title: "Personalized Learning",
    description: "Get a custom study plan tailored to your child's strengths and needs.",
    icon: "/assets/icons/wcu-personalized.svg",
    bgColor: "bg-green-100",
  },
  {
    title: "Proven Results",
    description: "85% of students improve faster and score higher with our structured methods.",
    icon: "/assets/icons/wcu-results.svg",
    bgColor: "bg-blue-100",
  },
  {
    title: "Flexible Scheduling",
    description: "Choose class times that match your child's routine and availability.",
    icon: "/assets/icons/wcu-scheduling.svg",
    bgColor: "bg-purple-100",
  }
];

const metrics = [
  { icon: "📚", value: "10,000+", label: "Classes Conducted" },
  { icon: "👩‍🏫", value: "500+", label: "Expert Tutors" },
  { icon: "🌍", value: "10+", label: "Countries Served" },
  { icon: "📈", value: "85%", label: "Average Score Improvement" },
];

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Parent",
    board: "New Jersey, USA",
    quote: "We were looking for an online tutor for my son to stay connected with Indian curriculum while studying abroad. Unklass has been the perfect solution – well-structured, disciplined, and engaging.",
    avatar: "/assets/images/testimonial-parent-1.png"
  },
  {
    name: "Meera Pillai",
    role: "Parent",
    board: "Melbourne, Australia",
    quote: "Unklass has made a big difference in my daughter's studies. The classes are punctual and focused. The teachers really care and are consistent – just what we needed.",
    avatar: "/assets/images/testimonial-parent-1.png"
  },
  {
    name: "Sameer Arora",
    role: "Parent",
    board: "Doha, Qatar",
    quote: "My kids were missing a strong foundation in Hindi and Math. Unklass tutors brought that back. Their personal approach and cultural connection make a big difference.",
    avatar: "/assets/images/testimonial-parent-1.png"
  },
  {
    name: "Anjali Patel",
    role: "Parent",
    board: "Class 6 Student",
    quote: "We were looking for a reliable tutor for our son who could focus on basics and help with homework. Unklass exceeded our expectations. The progress is clearly visible.",
    avatar: "/assets/images/testimonial-parent-1.png"
  },
  {
    name: "Rakesh Jain",
    role: "Parent",
    board: "Father of Class 10 Student",
    quote: "The structured learning, timely tests, and regular feedback from Unklass teachers helped my daughter stay ahead. The online classes feel like real classrooms!",
    avatar: "/assets/images/testimonial-parent-1.png"
  }
];

const faqTeaser = [
  { question: "What are the class schedules and durations?", answer: "Our classes are scheduled at your convenience and typically last for 45-60 minutes depending on the subject and grade level." },
  { question: "Can I select or change my child's teacher?", answer: "Yes, we offer a seamless teacher-switching option to ensure the best learning experience." },
  { question: "What are the pricing options and payment methods?", answer: "We offer flexible pricing based on your needs with various payment methods including credit/debit cards and digital wallets." },
  { question: "Does Unklass offer a free trial class?", answer: "Yes, book a free session today!" }
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Personalized Online Learning for <span className="text-primary inline-block relative">Every Student
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 font-medium">
                Live 1-on-1 and group classes in Math, Science, English, Coding & Languages. Expert tutors, flexible schedules, and customized learning paths.
              </p>
              <div className="mt-4 flex justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    Book a Free Trial
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-joyful-yellow/20 rounded-[var(--radius-blob-1)] transform rotate-6"></div>
                <div className="absolute inset-0 bg-joyful-teal/10 rounded-[var(--radius-blob-3)] transform -rotate-3"></div>
                <img src="/assets/hero/1.png" alt="Happy student learning" className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Unklass */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Learning Options That Fit Every Child</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16">
             At <span className="font-bold text-accent px-1">Unklass,</span> we understand that every learner is unique. We offer flexible learning formats to suit different needs:
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-colors">
               <h3 className="text-3xl font-heading font-bold mb-4 text-accent">1-on-1 Classes</h3>
               <p className="text-lg text-white/90 mb-6">Personalized Attention: Ideal for students who need focused guidance, a customized pace, or extra support in specific subjects.</p>
               <ul className="space-y-4">
                 {["Personalized lesson plans", "Flexible scheduling and pacing", "Complete attention from the tutor", "Great for remedial support"].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">✓</span>
                      <span className="font-medium text-white/90">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-colors">
               <h3 className="text-3xl font-heading font-bold mb-4 text-accent">Group Classes</h3>
               <p className="text-lg text-white/90 mb-6">Collaborative Learning: Best suited for learners who thrive in interactive, peer-based environments and want an affordable, high-quality solution.</p>
               <ul className="space-y-4">
                 {["Small batches (4–6 students)", "Encourages group discussions", "Cost-effective pricing", "Structured schedules to build routine"].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">✓</span>
                      <span className="font-medium text-white/90">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-16">Why Choose Unklass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuresData.map((feature, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="flex flex-col items-center text-center px-4">
                <div className={`w-24 h-24 rounded-[var(--radius-blob-${(i%5)+1})] ${feature.bgColor} flex items-center justify-center mb-6 shadow-md border border-gray-100`}>
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain filter invert opacity-80" style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(85%) saturate(3065%) hue-rotate(248deg) brightness(91%) contrast(92%)' }} />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What We Teach */}
      <section className="py-24 bg-gray-50 text-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">What We Teach</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Explore a glimpse of our core subjects, designed for comprehensive learning and skill development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Mathematics", icon: "/assets/icons/math.svg", color: "bg-emerald-100" },
              { title: "Science", icon: "/assets/icons/science.png", color: "bg-amber-100" },
              { title: "English", icon: "/assets/icons/english.svg", color: "bg-blue-100" },
              { title: "Coding", icon: "/assets/icons/code.svg", color: "bg-purple-100" }
            ].map((subject, i) => (
              <Link key={i} href="/courses">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className={`rounded-3xl p-8 text-center flex flex-col items-center shadow-lg cursor-pointer ${subject.color}`}
                >
                  <div className={`w-24 h-24 bg-white rounded-[var(--radius-blob-${(i%5)+1})] flex items-center justify-center mb-6 shadow-sm`}>
                    <img src={subject.icon} alt={subject.title} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-heading">{subject.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg rounded-full px-8 py-6">
                Discover More!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Our Proven Approach to Effective <span className="text-primary font-display">Learning</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-primary transform -translate-y-1/2 z-0 opacity-20"></div>
            
            {[
              { step: 1, title: "Book a Free Trial", desc: "Experience an interactive session", color: "bg-emerald-100", img: "/assets/icons/how-it-works-2.svg" },
              { step: 2, title: "Assessment", desc: "Understand strengths & areas to improve", color: "bg-blue-100", img: "/assets/icons/how-it-works-2.svg" },
              { step: 3, title: "Live Classes", desc: "Engaging, concept-driven sessions", color: "bg-purple-100", img: "/assets/icons/how-it-works-3.svg" },
              { step: 4, title: "Progress Tracking", desc: "Regular updates for parents", color: "bg-amber-100", img: "/assets/icons/how-it-works-4.svg" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-xl font-bold font-heading text-primary shadow-sm mb-4">
                  {item.step}
                </div>
                <div className={`w-40 h-40 ${item.color} rounded-3xl flex items-center justify-center mb-6 shadow-md transform hover:scale-105 transition-transform`}>
                  <img src={item.img} className="w-24 h-24 object-contain opacity-80" alt={item.title} />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden bg-grid-0">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">From Our Community</h2>
           </div>
           
           <div className="relative">
             <div className="overflow-hidden" ref={emblaRef}>
               <div className="flex gap-6 items-stretch ml-4 mr-4">
                 {testimonials.map((test, i) => (
                   <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pb-4 pt-4">
                     <div className="bg-white p-8 rounded-3xl shadow-lg border border-border h-full flex flex-col justify-between transform hover:-translate-y-2 transition-transform">
                       <div>
                         <div className="flex items-center gap-4 mb-6">
                           <img src={test.avatar} alt={test.name} className="w-14 h-14 rounded-full object-cover shadow-sm bg-gray-100" />
                           <div>
                             <h4 className="font-bold text-foreground">{test.name}</h4>
                             <p className="text-sm text-foreground/60">{test.board}</p>
                           </div>
                         </div>
                         <div className="text-6xl text-primary/20 font-serif leading-none absolute top-6 right-6">"</div>
                         <p className="text-foreground/80 italic relative z-10 leading-relaxed">
                           {test.quote}
                         </p>
                       </div>
                       <div className="mt-6 inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full self-start">
                         {test.role}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </section>
      
      {/* FAQ Teaser */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Your Questions, <span className="text-accent underline decoration-4 underline-offset-8">Answered.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqTeaser.map((faq, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold font-heading mb-3">{faq.question}</h3>
                <p className="text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/faq">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 font-bold text-lg">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-foreground text-white">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {metrics.map((metric, i) => (
                 <div key={i}>
                    <div className="text-4xl mb-4">{metric.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold font-heading mb-2">{metric.value}</div>
                    <div className="text-sm font-bold opacity-80 uppercase tracking-wider">{metric.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to make learning fun?
            </h2>
            <p className="text-xl text-foreground/80 mb-10">
              Join the Unklass community where education becomes an adventure.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-full px-10 py-8 shadow-2xl hover:scale-105 transition-transform">
                Get a free 1-on-1 lesson now!
              </Button>
            </Link>
          </div>
          <div className="w-full max-w-md">
            <img src="/cta.jpeg" alt="Call to Action" className="w-full rounded-3xl shadow-2xl transform rotate-3" />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
