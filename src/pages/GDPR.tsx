import { motion } from 'framer-motion';

function GDPR() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          <h1 className="text-3xl font-bold mb-8">GDPR Compliance</h1>
          
          <div className="space-y-6 text-xs sm:text-sm text-gray-300">
            <section>
              <h2 className="text-lg font-semibold mb-4">1. Introduction</h2>
              <p>This policy outlines how we comply with the General Data Protection Regulation (GDPR) and protect your rights.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">2. Your Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">2.1 Core Rights</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Rights related to automated decision making</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2.2 Additional Rights</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to withdraw consent</li>
                    <li>Right to lodge a complaint</li>
                    <li>Right to be informed</li>
                    <li>Right to prevent direct marketing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">3. Data Processing Principles</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">3.1 Core Principles</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lawfulness, fairness, and transparency</li>
                    <li>Purpose limitation</li>
                    <li>Data minimization</li>
                    <li>Accuracy</li>
                    <li>Storage limitation</li>
                    <li>Integrity and confidentiality</li>
                    <li>Accountability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3.2 Legal Bases for Processing</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Consent</li>
                    <li>Contract performance</li>
                    <li>Legal obligation</li>
                    <li>Vital interests</li>
                    <li>Public interest</li>
                    <li>Legitimate interests</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">4. Data Protection Measures</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">4.1 Technical Measures</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Encryption of personal data</li>
                    <li>Regular security testing</li>
                    <li>Access controls</li>
                    <li>Backup procedures</li>
                    <li>Incident response plans</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4.2 Organizational Measures</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Staff training</li>
                    <li>Data protection policies</li>
                    <li>Regular audits</li>
                    <li>Documentation of processing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">5. International Transfers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">5.1 Transfer Mechanisms</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Standard contractual clauses</li>
                    <li>Adequacy decisions</li>
                    <li>Binding corporate rules</li>
                    <li>Explicit consent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">5.2 Safeguards</h3>
                  <p>We implement appropriate safeguards for international transfers of personal data.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">6. Data Breach Procedures</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">6.1 Detection and Response</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>24/7 monitoring systems</li>
                    <li>Incident response team</li>
                    <li>Breach notification procedures</li>
                    <li>Documentation requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">6.2 Notification Timeline</h3>
                  <p>We will notify relevant authorities within 72 hours and affected individuals without undue delay.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">7. Data Protection Officer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">7.1 DPO Role</h3>
                  <p>Our Data Protection Officer oversees GDPR compliance and can be contacted for any related inquiries.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">7.2 Contact Information</h3>
                  <ul className="list-none space-y-1">
                    <li>Email: dpo@panchastra.com</li>
                    <li>Address: Bangalore, India</li>
                    <li>Phone: +91 (XXX) XXX-XXXX</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">8. Additional Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">8.1 Updates</h3>
                  <p>This policy is reviewed and updated regularly to ensure continued compliance with GDPR requirements.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">8.2 Complaints</h3>
                  <p>You have the right to lodge a complaint with your local supervisory authority.</p>
                </div>
              </div>
            </section>

            <div className="text-xs text-gray-400 mt-8">
              Last updated: March 1, 2024<br />
              Effective date: March 1, 2024<br />
              Document version: 1.0
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default GDPR;