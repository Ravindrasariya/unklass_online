import { BaseLayout } from '@/components/base-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Unklass',
  description: 'Privacy Policy for Unklass Learning Platform',
};

export default function PrivacyPolicyPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-primary-light text-primary-foreground py-16">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">Effective Date: 01 June 2025</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-8 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Vegaklass Learning Private Limited (&ldquo;Company&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
              committed to safeguarding your privacy. This Privacy Policy
              outlines how we collect, use, disclose, and protect your
              information when you use our website, mobile applications,
              services, and online or offline learning platforms (collectively,
              &ldquo;Services&rdquo;). By accessing or using our Services, you
              agree to the terms of this Privacy Policy.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-6">
                  We collect both personal and non-personal information to
                  provide and improve our Services.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      a. Personal Information
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        <strong>Identification Details:</strong> Full name, date
                        of birth (for age verification), residential address.
                      </li>
                      <li>
                        <strong>Contact Information:</strong> Email address,
                        phone number.
                      </li>
                      <li>
                        <strong>Guardian Details:</strong> Parent/guardian
                        contact information (for minor students).
                      </li>
                      <li>
                        <strong>Academic Information:</strong> School name,
                        grade/class, academic performance data.
                      </li>
                      <li>
                        <strong>Payment Information:</strong> Billing details,
                        transaction history (processed via secure third-party
                        payment gateways).
                      </li>
                      <li>
                        <strong>Multimedia Data:</strong> Voice and video
                        recordings from classes or sessions (if applicable).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      b. Technical & Usage Information
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        <strong>Device Information:</strong> IP address, browser
                        type and version, device type, operating system, device
                        identifiers.
                      </li>
                      <li>
                        <strong>Usage Data:</strong> Access times, pages
                        visited, clickstream data, search queries.
                      </li>
                      <li>
                        <strong>Cookies and Tracking Technologies:</strong>{' '}
                        Information collected through cookies, web beacons, and
                        similar technologies.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  2. How We Collect Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information through various means:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Direct Interactions:</strong> When you register,
                    fill out forms, or communicate with us via email, phone, or
                    chat.
                  </li>
                  <li>
                    <strong>Automated Technologies:</strong> Through cookies and
                    analytics tools when you interact with our Services.
                  </li>
                  <li>
                    <strong>Third-Party Sources:</strong> From payment
                    processors and other service providers.
                  </li>
                  <li>
                    <strong>During Service Use:</strong> When you participate in
                    classes, sessions, or assessments.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Provide Services:</strong> Register and manage user
                    accounts, deliver personalized tutoring services.
                  </li>
                  <li>
                    <strong>Communicate:</strong> Send class schedules, updates,
                    feedback, and respond to inquiries.
                  </li>
                  <li>
                    <strong>Process Transactions:</strong> Facilitate payments
                    and maintain financial records.
                  </li>
                  <li>
                    <strong>Improve Services:</strong> Analyze usage to enhance
                    our platform, teaching quality, and user experience.
                  </li>
                  <li>
                    <strong>Ensure Security:</strong> Monitor and ensure safety,
                    prevent fraud, and comply with legal obligations.
                  </li>
                  <li>
                    <strong>Marketing:</strong> Send newsletters, updates, and
                    promotional content (only with your explicit consent).
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  4. Sharing Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal data. We may share your
                  information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Tutors and Academic Staff:</strong> To facilitate
                    personalized learning experiences.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors for
                    payment processing (e.g., Razorpay), analytics, cloud
                    storage, and customer support.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required to comply
                    with legal obligations.
                  </li>
                  <li>
                    <strong>Parents or Guardians:</strong> For students under 18
                    years of age.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Affiliates or partners
                    involved in service delivery or business expansion, under
                    confidentiality agreements.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Enhance User Experience:</strong> Remember user
                    preferences and settings.
                  </li>
                  <li>
                    <strong>Analyze Performance:</strong> Understand how our
                    Services are used to improve functionality.
                  </li>
                  <li>
                    <strong>Personalize Content:</strong> Tailor content and
                    recommendations based on user behavior.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can manage or disable cookies through your browser
                  settings. However, disabling cookies may affect the
                  functionality of our Services.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  6. Data Retention
                </h2>
                <p className="text-gray-700 mb-4">We retain personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Active Use:</strong> As long as your account is
                    active or as needed to provide Services.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with legal,
                    tax, or regulatory requirements.
                  </li>
                  <li>
                    <strong>Service Improvement:</strong> For internal analysis
                    and service enhancement (in anonymized form).
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You may request deletion of your account and personal data at
                  any time, subject to certain legal obligations.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  7. Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect
                  your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Encryption:</strong> SSL/TLS encryption for data
                    transmission.
                  </li>
                  <li>
                    <strong>Secure Storage:</strong> Firewalls and secure cloud
                    storage solutions.
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Role-based access and
                    password protection.
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> System audits and
                    vulnerability assessments.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Despite our efforts, no system is completely secure. We
                  encourage you to maintain the confidentiality of your login
                  credentials.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  8. Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on your jurisdiction, you may have the following
                  rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    data.
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    data.
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your
                    personal data.
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing.
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request transfer of your
                    data to another service provider.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at:{' '}
                  <a
                    href="mailto:support@unklass.com"
                    className="text-primary-dark hover:underline"
                  >
                    support@unklass.com
                  </a>
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  9. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700">
                  Our Services are intended for users of all ages, including
                  minors. For users under the age of 18, we require consent from
                  a parent or guardian before collecting personal information.
                  We do not knowingly collect personal data from children under
                  13 without verifiable parental consent.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  10. International Data Transfers
                </h2>
                <p className="text-gray-700">
                  If you are accessing our Services from outside India, your
                  data may be transferred to and processed in India. We ensure
                  that appropriate safeguards are in place to protect your data
                  in accordance with applicable laws.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  11. Updates to This Privacy Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy periodically. Any changes
                  will be posted on this page with the updated effective date.
                  We encourage you to review this policy regularly to stay
                  informed about how we protect your information.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  12. Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold">
                    Unklass (Vegaklass Learning Pvt. Ltd.)
                  </p>
                  <p className="text-gray-700">Unit 101, Oxford Towers,</p>
                  <p className="text-gray-700">
                    139, HAL Old Airport Rd, Kodihalli,
                  </p>
                  <p className="text-gray-700">Bengaluru, Karnataka – 560008</p>
                  <p className="text-gray-700 mt-2">
                    📧 Email:{' '}
                    <a
                      href="mailto:support@unklass.com"
                      className="text-primary-dark hover:underline"
                    >
                      support@unklass.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Final Note */}
              <section className="bg-primary-light/10 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  This Privacy Policy is designed to provide transparency into
                  our privacy practices and principles in a format that users
                  can navigate, read, and understand. We are committed to
                  protecting your privacy and ensuring that your personal
                  information is handled in a safe and responsible manner.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
