import { BaseLayout } from "@/components/layout/BaseLayout";

export default function PrivacyPolicy() {
  return (
    <BaseLayout>
      <div className="bg-primary/10 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-lg opacity-80 text-foreground">Effective Date: 01 June 2025</p>
      </div>
      <div className="container mx-auto px-6 max-w-4xl py-16 prose prose-lg prose-headings:font-heading prose-headings:text-foreground">
        <p>
          Vegaklass Learning Private Limited ("Company", "we", "our", or "us") is committed to safeguarding your privacy.
        </p>
        <h2>1. Information We Collect</h2>
        <p>We collect personal information such as name, email, and academic details to provide personalized learning.</p>
        <h2>2. How We Use Information</h2>
        <p>Information is used to deliver classes, process payments, and improve the platform.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions, reach out at <strong>support@unklass.com</strong></p>
      </div>
    </BaseLayout>
  );
}
