"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title={"Privacy\nPolicy"}
        subtitle="How Mavyn Advisory collects, uses, and protects your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 (PDPL)."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="relative py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
        <div className="relative mx-auto max-w-[860px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose-mavyn"
          >
            <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-10" style={{ color: "#147B58" }}>
              Last updated: 1 January 2026
            </p>

            <h2>1. Introduction</h2>
            <p>
              Mavyn Advisory (&ldquo;Mavyn&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a UAE-registered advisory firm. We are committed to protecting the privacy and security of personal data we collect from visitors to our website (mavyn.ae) and from our clients, partners, and stakeholders.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, who we share it with, and your rights under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021).
            </p>

            <h2>2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is:
            </p>
            <ul>
              <li><strong>Entity:</strong> Mavyn Advisory</li>
              <li><strong>Location:</strong> Sharjah, United Arab Emirates</li>
              <li><strong>Email:</strong> hello@mavyn.ae</li>
              <li><strong>Phone:</strong> +971 (0) 56 856 5999</li>
            </ul>

            <h2>3. Information We Collect</h2>
            <p>We may collect the following categories of personal data:</p>

            <h3>3.1 Information You Provide</h3>
            <ul>
              <li>Full name, email address, phone number, and company name (via our contact form)</li>
              <li>Messages and enquiries you submit through the website</li>
              <li>Professional information shared during advisory engagements</li>
            </ul>

            <h3>3.2 Information Collected Automatically</h3>
            <ul>
              <li>IP address and approximate geographic location</li>
              <li>Browser type, device type, and operating system</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referring website or source</li>
            </ul>

            <h3>3.3 Cookies and Similar Technologies</h3>
            <p>
              We use essential cookies to ensure the website functions correctly. We may also use analytics cookies to understand how visitors interact with our site. You can manage cookie preferences through your browser settings.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Essential</td>
                  <td>Site functionality, security</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Usage patterns, page performance</td>
                  <td>Up to 12 months</td>
                </tr>
              </tbody>
            </table>

            <h2>4. How We Use Your Data</h2>
            <p>We process personal data for the following purposes:</p>
            <ul>
              <li>Responding to your enquiries and contact form submissions</li>
              <li>Providing advisory and consulting services</li>
              <li>Sending relevant communications about our services (with your consent)</li>
              <li>Improving our website and user experience</li>
              <li>Complying with legal and regulatory obligations in the UAE</li>
              <li>Protecting our legitimate business interests</li>
            </ul>

            <h2>5. Legal Basis for Processing</h2>
            <p>Under UAE PDPL, we process your data based on:</p>
            <ul>
              <li><strong>Consent:</strong> When you submit a contact form or subscribe to communications</li>
              <li><strong>Contractual necessity:</strong> To deliver advisory services you have engaged us for</li>
              <li><strong>Legitimate interest:</strong> Website analytics, security, and business development</li>
              <li><strong>Legal obligation:</strong> Compliance with UAE laws and regulatory requirements</li>
            </ul>

            <h2>6. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul>
              <li><strong>Service providers:</strong> Hosting, email, and analytics providers who process data on our behalf under strict contractual obligations</li>
              <li><strong>Regulatory authorities:</strong> When required by UAE law or regulatory request</li>
              <li><strong>Professional advisors:</strong> Legal counsel or auditors, under confidentiality obligations</li>
            </ul>
            <p>
              We do not transfer personal data outside the UAE unless adequate safeguards are in place as required by the PDPL.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Typical retention periods:
            </p>
            <ul>
              <li>Contact form submissions: 24 months from last interaction</li>
              <li>Client engagement records: 7 years (regulatory requirement)</li>
              <li>Website analytics data: 14 months</li>
            </ul>

            <h2>8. Your Rights</h2>
            <p>Under UAE PDPL, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Withdraw consent at any time</li>
              <li>Object to processing based on legitimate interest</li>
              <li>Request restriction of processing</li>
              <li>Lodge a complaint with the UAE Data Office</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href="mailto:hello@mavyn.ae">hello@mavyn.ae</a>. We will respond within 14 business days.
            </p>

            <h2>9. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted communications (TLS/SSL), access controls, and regular security reviews.
            </p>

            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before providing any personal data.
            </p>

            <h2>11. Children&rsquo;s Privacy</h2>
            <p>
              Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal data from children. If we become aware that we have collected data from a minor, we will delete it promptly.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:hello@mavyn.ae">hello@mavyn.ae</a></li>
              <li><strong>Phone:</strong> +971 (0) 56 856 5999</li>
              <li><strong>Address:</strong> Sharjah, United Arab Emirates</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

