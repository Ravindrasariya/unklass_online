import { BaseLayout } from "@/components/layout/BaseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from "wouter";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.error("Login is not wired up yet in this demo.");
  };

  return (
    <BaseLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <img src="/assets/logo.png" alt="Unklass Logo" className="h-12 mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-foreground/60">Log in to your Unklass account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" required className="bg-gray-50 border-transparent h-12 px-4 rounded-xl" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary font-medium hover:underline">Forgot?</a>
              </div>
              <Input id="password" type="password" required className="bg-gray-50 border-transparent h-12 px-4 rounded-xl" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-xl">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-foreground/60">
            Don't have an account? <Link href="/contact"><span className="text-primary font-bold hover:underline cursor-pointer">Book a free trial</span></Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
