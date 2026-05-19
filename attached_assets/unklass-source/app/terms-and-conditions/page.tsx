import { BaseLayout } from '@/components/base-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Unklass',
  description: 'Terms & Conditions of Use for Unklass Learning Platform',
};

export default function TermsAndConditionsPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-primary-light text-primary-foreground py-16">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Terms & Conditions of Use
            </h1>
            <p className="text-lg opacity-90">Effective Date: 01 June 2025</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-8 py-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Welcome to Unklass! These Terms & Conditions of Use govern your
              use of our website, mobile applications, services, and online or
              offline learning platforms (collectively, the
              &ldquo;Service&rdquo;). By accessing or using our Service, you
              agree to be bound by these Terms.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  By using or accessing the Unklass website
                  (&ldquo;Service&rdquo;), you agree to be bound by these Terms
                  & Conditions (&ldquo;Terms&rdquo;), along with any
                  supplemental policies or procedures posted on the Service. If
                  you do not agree with any part of these Terms, please refrain
                  from using the Service.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  2. Eligibility
                </h2>
                <p className="text-gray-700 mb-4">
                  You must be at least 13 years old to use the Service, or meet
                  the minimum legal age in your jurisdiction. If you&apos;re
                  under 18 (or the age of majority in your region), you must use
                  the Service under parental or guardian supervision. By using
                  the Service, you affirm that you meet these eligibility
                  criteria.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  3. Account Registration & Security
                </h2>
                <p className="text-gray-700 mb-4">
                  You may be required to create an account to access certain
                  features. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>provide accurate, current, and complete information;</li>
                  <li>maintain and promptly update any changes;</li>
                  <li>keep your username and password secure;</li>
                  <li>notify us immediately of any unauthorized access.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You are responsible for all activity under your account. We
                  are not liable for losses arising from unauthorized use of
                  your credentials, unless caused by our negligence.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  4. Acceptable Use
                </h2>
                <p className="text-gray-700 mb-4">
                  You are prohibited from posting, uploading, or transmitting
                  any content that is:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Illegal, harassing, defamatory, hateful, obscene,
                    threatening, or pornographic;
                  </li>
                  <li>
                    Infringing on intellectual property or proprietary rights of
                    others;
                  </li>
                  <li>
                    Contains malware, harmful code, or unsolicited
                    advertisements;
                  </li>
                  <li>
                    Encourages illegal behavior, self-harm, or contains false
                    information.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We reserve the right to moderate or remove any content at our
                  discretion and to suspend or terminate accounts for
                  violations.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  5. Intellectual Property Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  All content on the Service (&ldquo;Unklass Content&rdquo;),
                  including UI design, branding, code, text, and multimedia, is
                  owned or licensed by Unklass and protected under IP law.
                </p>
                <p className="text-gray-700 mb-4">
                  You may view and use the Service for personal, non-commercial
                  purposes only.
                </p>
                <p className="text-gray-700">
                  All rights are reserved. Use of the content beyond these
                  limits requires our express written consent.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  6. User-Generated Content
                </h2>
                <p className="text-gray-700 mb-4">
                  &ldquo;Your Content&rdquo; refers to anything you submit
                  (messages, posts, comments, etc.). You retain ownership but
                  grant us a perpetual, irrevocable, worldwide license to
                  reproduce, distribute, display, adapt, and otherwise use it.
                </p>
                <p className="text-gray-700 mb-4">You warrant that:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You own or have rights to Your Content;</li>
                  <li>Your Content does not infringe on any rights;</li>
                  <li>
                    You will defend and indemnify us for any claims arising out
                    of Your Content.
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  7. Privacy Policy
                </h2>
                <p className="text-gray-700">
                  Your use of the Service is subject to our Privacy Policy,
                  which explains how we collect, use, store, and share your
                  personal data. By using our Service, you agree to the
                  collection and use of data in accordance with that Policy.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  8. Disclaimers & Warranties
                </h2>
                <p className="text-gray-700 mb-4">
                  The Service is provided as is and as available, without any
                  warranties.
                </p>
                <p className="text-gray-700 mb-4">
                  We do not guarantee non-interruption, security, or error-free
                  operation.
                </p>
                <p className="text-gray-700">
                  We disclaim all implied warranties, including merchantability,
                  fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  9. Limitation of Liability
                </h2>
                <p className="text-gray-700 mb-4">
                  To the fullest extent permitted by law, Unklass and its
                  affiliates are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Indirect, incidental, special, punitive, or exemplary
                    damages;
                  </li>
                  <li>
                    Losses of data, revenue, profits, goodwill, or reputation;
                  </li>
                  <li>Any use or inability to use the Service.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  In jurisdictions where such exclusions are prohibited, our
                  liability is limited to the maximum permitted by law.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  10. Indemnification
                </h2>
                <p className="text-gray-700 mb-4">
                  You agree to indemnify, defend, and hold spare Unklass, its
                  affiliates, officers, employees, agents, licensors, and
                  service providers from any claims, damages, losses,
                  liabilities, and expenses arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your use of the Service;</li>
                  <li>Your violation of these Terms;</li>
                  <li>Your infringement on rights of third parties.</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  11. Termination
                </h2>
                <p className="text-gray-700 mb-4">
                  We may suspend or terminate your access—without prior
                  notice—for any reason, including violation of these Terms or
                  inactivity.
                </p>
                <p className="text-gray-700">
                  Upon termination, your rights under these Terms cease, but
                  provisions like Intellectual Property, Disclaimers,
                  Indemnification, and Liability survive.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  12. Modifications to Terms
                </h2>
                <p className="text-gray-700">
                  We reserve the right to update these Terms at any time.
                  Changes take effect upon posting. Continued use of the Service
                  after changes indicates acceptance. If you disagree with any
                  change, stop using the Service.
                </p>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  13. Governing Law & Dispute Resolution
                </h2>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the laws of the jurisdiction where
                  Unklass is registered, without regard to conflict-of-law
                  principles.
                </p>
                <p className="text-gray-700 mb-4">
                  Any disputes will be resolved via binding arbitration (subject
                  to local law) or through the small-claims court in the
                  applicable jurisdiction.
                </p>
                <p className="text-gray-700">
                  You waive your right to class-action suits if arbitration
                  applies.
                </p>
              </section>

              {/* Section 14 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  14. International Use
                </h2>
                <p className="text-gray-700">
                  The Service is offered globally. If you access it from outside
                  our home jurisdiction, you agree to comply with local laws.
                </p>
              </section>

              {/* Section 15 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  15. Severability
                </h2>
                <p className="text-gray-700">
                  If any part of these Terms is invalid or unenforceable, the
                  remainder remains in effect.
                </p>
              </section>

              {/* Section 16 */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  16. Entire Agreement
                </h2>
                <p className="text-gray-700">
                  These Terms (plus Privacy Policy and other referenced
                  documents) represent the entire agreement between you and
                  Unklass regarding the Service, superseding all prior
                  agreements.
                </p>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms & Conditions,
                  please contact us:
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
                  These Terms & Conditions are designed to provide clear
                  guidelines for using our Service. We are committed to
                  providing a safe, educational, and enjoyable experience for
                  all users.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
