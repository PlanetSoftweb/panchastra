import { motion } from 'framer-motion';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-xs sm:text-sm text-gray-300">
            <section>
              <h2 className="text-lg font-semibold mb-4">1. Information Collection</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">1.1 Personal Information</h3>
                  <p className="mb-2">We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name and contact details</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Communication preferences</li>
                    <li>Professional information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">1.2 Usage Data</h3>
                  <p>We automatically collect certain information about your device and usage of our services:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Device information and identifiers</li>
                    <li>Browser type and settings</li>
                    <li>Operating system information</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">2. Use of Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">2.1 Primary Uses</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Providing and maintaining our services</li>
                    <li>Processing your transactions</li>
                    <li>Communicating with you about our services</li>
                    <li>Personalizing your experience</li>
                    <li>Improving our services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2.2 Secondary Uses</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Analytics and research</li>
                    <li>Marketing and promotional purposes</li>
                    <li>Legal compliance</li>
                    <li>Fraud prevention</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">3. Information Sharing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">3.1 Third-Party Service Providers</h3>
                  <p>We may share your information with trusted service providers who assist us in:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Payment processing</li>
                    <li>Cloud hosting</li>
                    <li>Analytics</li>
                    <li>Customer support</li>
                    <li>Marketing and advertising</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3.2 Legal Requirements</h3>
                  <p>We may disclose your information if required by law or in response to valid requests from public authorities.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">4. Data Security</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">4.1 Security Measures</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Monitoring and logging</li>
                    <li>Employee training and policies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4.2 Data Retention</h3>
                  <p>We retain your information for as long as necessary to provide our services and comply with legal obligations.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">5. Your Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">5.1 Access and Control</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing</li>
                    <li>Data portability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">5.2 Exercise Your Rights</h3>
                  <p>Contact us at privacy@panchastra.com to exercise your rights.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">6. International Transfers</h2>
              <p>We may transfer your information to countries outside your residence. We ensure appropriate safeguards are in place for such transfers.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">7. Children's Privacy</h2>
              <p>Our services are not intended for children under 13. We do not knowingly collect information from children under 13.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">8. Changes to Privacy Policy</h2>
              <p>We may update this policy periodically. We will notify you of any material changes via email or through our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">9. Contact Information</h2>
              <p>For privacy-related inquiries:</p>
              <ul className="list-none space-y-1 mt-2">
                <li>Email: privacy@panchastra.com</li>
                <li>Address: Bangalore, India</li>
                <li>Phone: +91 (XXX) XXX-XXXX</li>
              </ul>
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

export default PrivacyPolicy;