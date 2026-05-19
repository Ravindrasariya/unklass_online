import { BaseLayout } from "@/components/layout/BaseLayout";

export default function Terms() {
  return (
    <BaseLayout>
      <div className="bg-secondary/10 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">Terms & Conditions</h1>
        <p className="text-lg opacity-80 text-foreground">Effective Date: 01 June 2025</p>
      </div>
      <div className="container mx-auto px-6 max-w-4xl py-16 prose prose-lg prose-headings:font-heading prose-headings:text-foreground">
        <p>
          Welcome to Unklass! These Terms govern your use of our services.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing Unklass, you agree to these Terms.</p>
        <h2>2. Acceptable Use</h2>
        <p>You must not post illegal, harassing, or malicious content.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions, reach out at <strong>support@unklass.com</strong></p>
      </div>
    </BaseLayout>
  );
}
