import Link from "next/link";
import { LegalNav } from "@/components/legal/legal-nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Share2, Cookie, Lock, UserCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 lg:w-72">
          <LegalNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect,
              use, and protect your personal information.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Content */}
          <div className="space-y-12">
            <section id="information-collection" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Information We Collect</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  At Plushify, we collect various types of information to provide
                  and improve our services. This includes:
                </p>

                <h3 id="personal-information" className="mb-3 text-xl font-semibold">Personal Information</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Account Information:</strong> When you create an
                    account, we collect your name, email address, and password.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> When purchasing credits,
                    we collect payment information processed securely through our
                    payment provider.
                  </li>
                  <li>
                    <strong>Profile Information:</strong> Any additional information
                    you choose to add to your profile.
                  </li>
                </ul>

                <h3 id="usage-information" className="mb-3 text-xl font-semibold">Usage Information</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Images:</strong> Photos you upload for plushie
                    generation are temporarily processed and stored.
                  </li>
                  <li>
                    <strong>Generated Content:</strong> The plushie images we create
                    for you are stored in your account.
                  </li>
                  <li>
                    <strong>Analytics:</strong> We collect anonymous usage data to
                    improve our service, including pages visited and features used.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type,
                    device information, and operating system.
                  </li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="how-we-use-information" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">How We Use Your Information</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">We use the collected information for the following purposes:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Service Delivery:</strong> To process your images and
                    generate plushie transformations.
                  </li>
                  <li>
                    <strong>Account Management:</strong> To create and maintain your
                    account, manage your credits, and provide customer support.
                  </li>
                  <li>
                    <strong>Communication:</strong> To send you service updates,
                    security alerts, and respond to your inquiries.
                  </li>
                  <li>
                    <strong>Improvement:</strong> To analyze usage patterns and
                    improve our AI models and user experience.
                  </li>
                  <li>
                    <strong>Security:</strong> To detect and prevent fraud, abuse,
                    and security incidents.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with legal
                    obligations and protect our rights.
                  </li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="information-sharing" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Information Sharing</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share information
                  in the following circumstances:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> We share data with trusted
                    third-party service providers who help us operate our platform
                    (hosting, payment processing, email services).
                  </li>
                  <li>
                    <strong>AI Processing:</strong> Images are processed through our
                    AI service providers under strict confidentiality agreements.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose information
                    if required by law or in response to valid legal requests.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger,
                    acquisition, or sale of assets, your information may be
                    transferred to the new owner.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share information for
                    any other purpose with your explicit consent.
                  </li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="cookies-tracking" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Cookies and Tracking</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your
                  experience:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website to
                    function properly (authentication, security).
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how users
                    interact with our service.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and
                    preferences (theme, language).
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings. For more
                  details, see our{" "}
                  <Link href="/legal/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="data-security" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Data Security</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your
                  information:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Encryption:</strong> All data transmitted to and from
                    our service is encrypted using SSL/TLS.
                  </li>
                  <li>
                    <strong>Secure Storage:</strong> Your data is stored on secure
                    servers with restricted access.
                  </li>
                  <li>
                    <strong>Access Controls:</strong> We limit employee access to
                    personal information on a need-to-know basis.
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> We conduct regular security
                    assessments and updates.
                  </li>
                  <li>
                    <strong>Image Deletion:</strong> Uploaded images used for
                    generation are deleted from our servers within 30 days unless
                    saved to your gallery.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  While we take reasonable measures to protect your information, no
                  security system is impenetrable. We cannot guarantee absolute
                  security.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="your-rights" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Your Rights and Choices</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information in your account settings.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your account and
                    associated data (subject to legal retention requirements).
                  </li>
                  <li>
                    <strong>Export:</strong> Download your generated plushies and
                    account data.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing
                    communications (service-related emails cannot be opted out).
                  </li>
                  <li>
                    <strong>Object:</strong> Object to certain types of processing
                    of your data.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@plushify.com"
                    className="text-primary hover:underline"
                  >
                    privacy@plushify.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="data-retention" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Data Retention</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">We retain your information for the following periods:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Account Data:</strong> Retained while your account is
                    active and for a reasonable period afterward.
                  </li>
                  <li>
                    <strong>Uploaded Images:</strong> Original uploads are deleted
                    within 30 days unless saved to your gallery.
                  </li>
                  <li>
                    <strong>Generated Plushies:</strong> Stored in your account
                    until you delete them or close your account.
                  </li>
                  <li>
                    <strong>Transaction Records:</strong> Retained for 7 years for
                    accounting and legal purposes.
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> Anonymized data may be retained
                    indefinitely.
                  </li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="childrens-privacy" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Children&apos;s Privacy</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Plushify is not intended for children under 13 years of age. We do
                  not knowingly collect personal information from children under 13.
                  If we discover that we have collected information from a child
                  under 13, we will delete it promptly.
                </p>
                <p className="text-muted-foreground">
                  If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us at{" "}
                  <a
                    href="mailto:privacy@plushify.com"
                    className="text-primary hover:underline"
                  >
                    privacy@plushify.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="international-transfers" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">International Data Transfers</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries
                  other than your country of residence. These countries may have
                  different data protection laws than your country.
                </p>
                <p className="text-muted-foreground">
                  When we transfer your information internationally, we ensure
                  appropriate safeguards are in place to protect your data in
                  accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="policy-changes" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Changes to This Policy</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal reasons. We will notify you
                  of any material changes by:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Posting the updated policy on this page</li>
                  <li>Updating the &quot;Last Updated&quot; date</li>
                  <li>
                    Sending you an email notification (for significant changes)
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Your continued use of Plushify after changes are posted
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="contact-us" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Contact Us</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border my-6">
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:privacy@plushify.com"
                      className="text-primary hover:underline"
                    >
                      privacy@plushify.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Support:</strong>{" "}
                    <a
                      href="mailto:support@plushify.com"
                      className="text-primary hover:underline"
                    >
                      support@plushify.com
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong>Response Time:</strong> We aim to respond to all privacy
                    inquiries within 3 business days.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-sm text-muted-foreground">
            Last updated: January 15, 2025
          </div>
        </main>
      </div>
    </div>
  );
}
