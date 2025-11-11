import Link from "next/link";
import { LegalNav } from "@/components/legal/legal-nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  UserCheck,
  Zap,
  CreditCard,
  Ban,
  ShieldAlert,
} from "lucide-react";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using Plushify. By accessing
              or using our service, you agree to be bound by these terms.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Content */}
          <div className="space-y-12">
            <section id="acceptance" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Acceptance of Terms</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  By accessing or using Plushify (&quot;Service&quot;,
                  &quot;Platform&quot;, &quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;), you agree to be bound by these Terms of Service
                  (&quot;Terms&quot;). If you disagree with any part of these terms,
                  you may not access the Service.
                </p>
                <p className="text-muted-foreground">
                  These Terms apply to all visitors, users, and others who access or
                  use the Service. We reserve the right to update these Terms at any
                  time. Your continued use of the Service after changes are posted
                  constitutes acceptance of the new Terms.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="description" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Service Description</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Plushify is an AI-powered service that transforms photos into
                  plushie-style images. Our service includes:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Image Generation:</strong> Upload photos and receive
                    AI-generated plushie transformations.
                  </li>
                  <li>
                    <strong>Gallery Storage:</strong> Save and manage your generated
                    plushies in your personal gallery.
                  </li>
                  <li>
                    <strong>Credit System:</strong> Purchase and use credits to
                    generate plushie images.
                  </li>
                  <li>
                    <strong>Download Capability:</strong> Download your generated
                    images for personal use.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any aspect
                  of the Service at any time, with or without notice.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="accounts" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">User Accounts</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 id="account-creation" className="mb-3 text-xl font-semibold">Account Creation</h3>
                <p className="text-muted-foreground">To use Plushify, you must create an account by providing:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>A valid email address</li>
                  <li>A secure password</li>
                  <li>Accurate account information</li>
                </ul>

                <h3 id="account-responsibilities" className="mb-3 text-xl font-semibold">Your Responsibilities</h3>
                <p className="text-muted-foreground">You are responsible for:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Security:</strong> Maintaining the confidentiality of
                    your account credentials.
                  </li>
                  <li>
                    <strong>Accuracy:</strong> Providing accurate and up-to-date
                    information.
                  </li>
                  <li>
                    <strong>Activity:</strong> All activities that occur under your
                    account.
                  </li>
                  <li>
                    <strong>Notification:</strong> Immediately notifying us of any
                    unauthorized use of your account.
                  </li>
                </ul>

                <h3 id="account-termination" className="mb-3 text-xl font-semibold">Account Termination</h3>
                <p className="text-muted-foreground">
                  We may suspend or terminate your account if you violate these
                  Terms, engage in fraudulent activity, or for any other reason at
                  our sole discretion. You may also close your account at any time
                  through your account settings.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="credits-system" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Credits and Payments</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 id="credit-packages" className="mb-3 text-xl font-semibold">Credit Packages</h3>
                <p className="text-muted-foreground">
                  Plushify uses a credit-based system. Credits can be purchased in
                  packages:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>1 Credit = 1 Generation:</strong> Each plushie
                    generation costs 1 credit.
                  </li>
                  <li>
                    <strong>Non-Refundable:</strong> Credits are generally
                    non-refundable except as required by law or stated in our{" "}
                    <Link href="/legal/refund" className="text-primary hover:underline">Refund Policy</Link>.
                  </li>
                  <li>
                    <strong>No Expiration:</strong> Credits do not expire as long as
                    your account remains active.
                  </li>
                  <li>
                    <strong>Non-Transferable:</strong> Credits cannot be transferred
                    to other users or exchanged for cash.
                  </li>
                </ul>

                <h3 id="payment-processing" className="mb-3 text-xl font-semibold">Payment Processing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    All payments are processed securely through our third-party
                    payment provider.
                  </li>
                  <li>
                    You agree to provide accurate payment information and authorize
                    us to charge your payment method.
                  </li>
                  <li>
                    Prices are subject to change with notice. Changes will not
                    affect credits already purchased.
                  </li>
                  <li>
                    You are responsible for any taxes, fees, or charges imposed by
                    your bank or payment provider.
                  </li>
                </ul>

                <h3 id="failed-generations" className="mb-3 text-xl font-semibold">Failed Generations</h3>
                <p className="text-muted-foreground">
                  If a generation fails due to a system error on our end, the credit
                  will be automatically refunded to your account. Credits will not
                  be refunded for:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>User errors (wrong image, incorrect format)</li>
                  <li>
                    Images that violate our content policy (discovered after
                    processing)
                  </li>
                  <li>Dissatisfaction with generation results</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="prohibited-uses" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Ban className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Prohibited Uses</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">You agree NOT to use Plushify for any of the following:</p>

                <h3 id="content-restrictions" className="mb-3 text-xl font-semibold">Content Restrictions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Illegal Content:</strong> Upload images that are
                    illegal, violate any laws, or infringe on others&apos; rights.
                  </li>
                  <li>
                    <strong>Inappropriate Content:</strong> Upload explicit, violent,
                    hateful, or otherwise offensive content.
                  </li>
                  <li>
                    <strong>Minors:</strong> Upload images of minors without proper
                    consent from parents/guardians.
                  </li>
                  <li>
                    <strong>Privacy Violations:</strong> Upload images of
                    individuals without their consent.
                  </li>
                  <li>
                    <strong>Impersonation:</strong> Upload images intending to
                    impersonate or misrepresent others.
                  </li>
                </ul>

                <h3 id="system-abuse" className="mb-3 text-xl font-semibold">System Abuse</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Automation:</strong> Use bots, scripts, or automated
                    tools to access the Service.
                  </li>
                  <li>
                    <strong>Exploitation:</strong> Attempt to exploit bugs,
                    vulnerabilities, or security features.
                  </li>
                  <li>
                    <strong>Interference:</strong> Interfere with or disrupt the
                    Service or servers.
                  </li>
                  <li>
                    <strong>Reverse Engineering:</strong> Reverse engineer,
                    decompile, or attempt to extract source code.
                  </li>
                  <li>
                    <strong>Resale:</strong> Resell or commercialize the Service
                    without authorization.
                  </li>
                </ul>

                <h3 id="consequences" className="mb-3 text-xl font-semibold">Consequences of Violation</h3>
                <p className="text-muted-foreground">
                  Violation of these prohibited uses may result in immediate account
                  suspension or termination, forfeiture of credits, and potential
                  legal action.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="intellectual-property" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Intellectual Property</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 id="your-content" className="mb-3 text-xl font-semibold">Your Content</h3>
                <p className="text-muted-foreground">You retain all rights to images you upload. By uploading:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    You grant us a limited license to process your images for the
                    purpose of providing the Service.
                  </li>
                  <li>
                    You warrant that you have the necessary rights to upload and
                    process the images.
                  </li>
                  <li>
                    You are responsible for any copyright infringement or other
                    violations.
                  </li>
                </ul>

                <h3 id="generated-content" className="mb-3 text-xl font-semibold">Generated Content</h3>
                <p className="text-muted-foreground">For AI-generated plushie images:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Ownership:</strong> You own the generated images and may
                    use them for personal or commercial purposes.
                  </li>
                  <li>
                    <strong>Attribution:</strong> Attribution to Plushify is
                    appreciated but not required.
                  </li>
                  <li>
                    <strong>Quality:</strong> We make no guarantees about the
                    quality or accuracy of generated images.
                  </li>
                </ul>

                <h3 id="our-property" className="mb-3 text-xl font-semibold">Our Property</h3>
                <p className="text-muted-foreground">
                  The Service, including all software, designs, text, graphics,
                  logos, and other content (excluding user-generated content), is
                  owned by Plushify and protected by intellectual property laws. You
                  may not copy, modify, distribute, or create derivative works
                  without our express written permission.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="limitation-liability" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Limitation of Liability</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Plushify and its
                  affiliates, officers, employees, and agents shall not be liable
                  for:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Indirect Damages:</strong> Any indirect, incidental,
                    special, consequential, or punitive damages.
                  </li>
                  <li>
                    <strong>Service Interruption:</strong> Loss of use, data, or
                    profits arising from service interruptions.
                  </li>
                  <li>
                    <strong>Third Parties:</strong> Actions or omissions of third
                    parties, including payment processors.
                  </li>
                  <li>
                    <strong>Content:</strong> Quality, accuracy, or suitability of
                    generated images.
                  </li>
                  <li>
                    <strong>Security:</strong> Unauthorized access to your account
                    or transmitted data.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Our total liability to you for all claims arising from your use of
                  the Service shall not exceed the amount you paid to Plushify in
                  the 12 months preceding the claim.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="warranties" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Disclaimers and Warranties</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Availability:</strong> We do not guarantee uninterrupted
                    or error-free service.
                  </li>
                  <li>
                    <strong>Accuracy:</strong> We do not guarantee the accuracy or
                    quality of generated images.
                  </li>
                  <li>
                    <strong>Results:</strong> We do not guarantee specific results
                    from using the Service.
                  </li>
                  <li>
                    <strong>Security:</strong> We do not guarantee absolute security
                    of your data.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Some jurisdictions do not allow the exclusion of certain
                  warranties, so some of these limitations may not apply to you.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="indemnification" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Indemnification</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  You agree to indemnify, defend, and hold harmless Plushify and its
                  affiliates, officers, employees, and agents from any claims,
                  liabilities, damages, losses, and expenses (including legal fees)
                  arising from:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Content you upload or generate</li>
                  <li>Your violation of any applicable laws</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="dispute-resolution" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Dispute Resolution</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 id="governing-law" className="mb-3 text-xl font-semibold">Governing Law</h3>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with
                  the laws of [Jurisdiction], without regard to its conflict of law
                  provisions.
                </p>

                <h3 id="arbitration" className="mb-3 text-xl font-semibold">Arbitration</h3>
                <p className="text-muted-foreground">
                  Any disputes arising from these Terms or your use of the Service
                  shall be resolved through binding arbitration, except that either
                  party may seek injunctive relief in court for intellectual
                  property infringement.
                </p>

                <h3 id="class-action-waiver" className="mb-3 text-xl font-semibold">Class Action Waiver</h3>
                <p className="text-muted-foreground">
                  You agree that any arbitration or proceeding shall be limited to
                  the dispute between you and Plushify individually. You waive any
                  right to participate in a class action or representative action.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="general-provisions" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">General Provisions</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 id="entire-agreement" className="mb-3 text-xl font-semibold">Entire Agreement</h3>
                <p className="text-muted-foreground">
                  These Terms, together with our{" "}
                  <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link> and any other legal
                  notices published by us, constitute the entire agreement between
                  you and Plushify.
                </p>

                <h3 id="severability" className="mb-3 text-xl font-semibold">Severability</h3>
                <p className="text-muted-foreground">
                  If any provision of these Terms is found to be unenforceable, the
                  remaining provisions will continue in full force and effect.
                </p>

                <h3 id="waiver" className="mb-3 text-xl font-semibold">Waiver</h3>
                <p className="text-muted-foreground">
                  Our failure to enforce any right or provision of these Terms will
                  not be considered a waiver of those rights.
                </p>

                <h3 id="assignment" className="mb-3 text-xl font-semibold">Assignment</h3>
                <p className="text-muted-foreground">
                  We may assign our rights and obligations under these Terms without
                  notice. You may not assign these Terms without our prior written
                  consent.
                </p>

                <h3 id="force-majeure" className="mb-3 text-xl font-semibold">Force Majeure</h3>
                <p className="text-muted-foreground">
                  We shall not be liable for any failure to perform due to
                  circumstances beyond our reasonable control, including natural
                  disasters, war, terrorism, riots, or failure of third-party
                  services.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="contact-information" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Contact Information</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border my-6">
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:legal@plushify.com"
                      className="text-primary hover:underline"
                    >
                      legal@plushify.com
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
                    <strong>Response Time:</strong> We aim to respond to all legal
                    inquiries within 5 business days.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="acknowledgment" className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold">Acknowledgment</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  By using Plushify, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms of Service. If you do not
                  agree to these Terms, you must not use the Service.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Last updated: January 15, 2025
                </p>
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
