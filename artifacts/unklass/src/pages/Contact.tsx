import { BaseLayout } from "@/components/layout/BaseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll be in touch soon.");
  };

  return (
    <BaseLayout>
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-foreground mb-6">Have Questions? Let's Talk!</h1>
          <p className="text-xl text-foreground/70">We are here to help! Fill out the form to book your free trial or ask a question.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div className="hidden md:block">
            <img src="/cta.jpeg" alt="Contact Us" className="rounded-2xl shadow-xl w-full object-cover aspect-square" />
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Parent's Name</Label>
                <Input id="name" required placeholder="John Doe" className="bg-gray-50 border-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required placeholder="john@example.com" className="bg-gray-50 border-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required placeholder="+1 234 567 8900" className="bg-gray-50 border-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="How can we help?" className="bg-gray-50 border-transparent resize-none" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
