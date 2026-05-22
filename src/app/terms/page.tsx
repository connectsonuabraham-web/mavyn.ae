"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title={"Terms &\nConditions"}
        subtitle="The terms governing your use of the Mavyn Advisory website and engagement of our services."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80"
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

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Mavyn Advisory website (mavyn.ae), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this website.
            </p>
            <p>
              These terms constitute a legally binding agreement between you and Mavyn Advisory, a firm registered and operating in the United Arab Emirates.
            </p>

            <h2>2. About Mavyn Advisory</h2>
            <p>
              Mavyn Advisory is a UAE-based professional advisory firm providing compliance, risk management, audit, and business services to regulated entities including banks, DNFBPs, free-zone and mainland companies.
            </p>
            <ul>
              <li><strong>Registered location:</strong> Sharjah, United Arab Emirates</li>
              <li><strong>Contact:</strong> hello@mavyn.ae | +971 (0) 56 856 5999</li>
            </ul>

            <h2>3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Infringe the rights of any third party</li>
              <li>Restrict or inhibit anyone else&rsquo;s use of the website</li>
              <li>Attempt to gain unauthorised access to any part of the website or its systems</li>
              <li>Introduce viruses, malware, or other harmful material</li>
              <li>Collect or harvest personal data of other users</li>
              <li>Use the website for any fraudulent or unlawful purpose</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, design elements, and software, is the property of Mavyn Advisory or its licensors and is protected by UAE and international intellectual property laws.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Reproduce, distribute, or modify any content without prior written consent</li>
              <li>Use our trademarks, logos, or branding without authorisation</li>
              <li>Frame or mirror any part of this website on another website</li>
            </ul>

            <h2>5. Services and Engagement</h2>
            <p>
              Information on this website describes our general service capabilities. It does not constitute a binding offer or professional advice. Formal engagement of Mavyn Advisory services is subject to:
            </p>
            <ul>
              <li>A separate engagement letter or service agreement</li>
              <li>Mutual agreement on scope, fees, and deliverables</li>
              <li>Completion of any required conflict checks and onboarding procedures</li>
            </ul>
            <p>
              No client relationship is formed solely by visiting this website or submitting a contact form.
            </p>

            <h2>6. Professional Disclaimer</h2>
            <p>
              The content on this website is provided for general informational purposes only. It does not constitute legal, financial, regulatory, or professional advice. You should not act or refrain from acting based on information on this website without seeking appropriate professional counsel.
            </p>
            <p>
              While we strive to keep information accurate and current, we make no representations or warranties about the completeness, accuracy, or reliability of any content.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by UAE law:</p>
            <ul>
              <li>Mavyn Advisory shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website</li>
              <li>We are not liable for any loss of profit, data, business opportunity, or goodwill</li>
              <li>Our total liability for any claim related to this website shall not exceed AED 1,000</li>
              <li>We are not responsible for any downtime, errors, or interruptions in website availability</li>
            </ul>

            <h2>8. Third-Party Links</h2>
            <p>
              This website may contain links to external websites operated by third parties. We have no control over the content or practices of those sites and accept no responsibility for them. Inclusion of a link does not imply endorsement.
            </p>

            <h2>9. Contact Form and Communications</h2>
            <p>
              When you submit information through our contact form, you acknowledge that:
            </p>
            <ul>
              <li>The information you provide is accurate and complete</li>
              <li>Submission does not create a client-advisor relationship</li>
              <li>We will process your data in accordance with our Privacy Policy</li>
              <li>We aim to respond within one business week but do not guarantee response times</li>
            </ul>

            <h2>10. Confidentiality</h2>
            <p>
              Any confidential information shared during a formal engagement is governed by the terms of the applicable engagement letter. Information submitted through the website contact form is not automatically subject to professional confidentiality obligations.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mavyn Advisory, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your breach of these terms or misuse of this website.
            </p>

            <h2>12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Sharjah, UAE.
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
            </p>

            <h2>14. Modifications</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes take effect immediately upon posting to this page. Your continued use of the website after changes constitutes acceptance of the revised terms.
            </p>

            <h2>15. Contact</h2>
            <p>
              For questions about these Terms and Conditions, please contact us:
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
