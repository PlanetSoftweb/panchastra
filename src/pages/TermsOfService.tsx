import { motion } from 'framer-motion';

function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-xs sm:text-sm text-gray-300">
            <section>
              <h2 className="text-lg font-semibold mb-4">1. Agreement to Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">1.1 Acceptance</h3>
                  <p>By accessing or using Panchastra's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">1.2 Modifications</h3>
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">2. User Accounts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">2.1 Registration Requirements</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Must be at least 18 years old</li>
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account</li>
                    <li>Notify us of any unauthorized use</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2.2 Account Responsibilities</h3>
                  <p>You are responsible for all activities that occur under your account.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">3. Service Usage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">3.1 Permitted Use</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Use services as intended</li>
                    <li>Comply with all applicable laws</li>
                    <li>Respect intellectual property rights</li>
                    <li>Maintain appropriate conduct</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3.2 Prohibited Activities</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unauthorized access or use</li>
                    <li>Interference with services</li>
                    <li>Distribution of malware</li>
                    <li>Harassment or abuse</li>
                    <li>Fraudulent activities</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">4. Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">4.1 Ownership</h3>
                  <p>All content and materials available through our services are protected by intellectual property rights and belong to Panchastra or its licensors.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4.2 License</h3>
                  <p>We grant you a limited, non-exclusive, non-transferable license to use our services for their intended purpose.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">5. Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">5.1 Fees</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Payment required for premium features</li>
                    <li>Prices subject to change with notice</li>
                    <li>Automatic renewal unless cancelled</li>
                    <li>Refunds at our discretion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">5.2 Billing</h3>
                  <p>You agree to provide current, complete, and accurate payment information.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">6. Limitation of Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">6.1 Disclaimer</h3>
                  <p>Services are provided "as is" without warranties of any kind.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">6.2 Limitations</h3>
                  <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">7. Termination</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">7.1 Termination Rights</h3>
                  <p>We reserve the right to terminate or suspend access to our services for any reason.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">7.2 Effect of Termination</h3>
                  <p>Upon termination, your right to use the services will immediately cease.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">8. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of India.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">9. Contact Information</h2>
              <p>For any questions about these Terms:</p>
              <ul className="list-none space-y-1 mt-2">
                <li>Email: legal@panchastra.com</li>
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

export default TermsOfService;