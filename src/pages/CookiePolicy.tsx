import { motion } from 'framer-motion';

function CookiePolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-xs sm:text-sm text-gray-300">
            <section>
              <h2 className="text-lg font-semibold mb-4">1. Introduction to Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">1.1 What Are Cookies</h3>
                  <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Remembering your preferences</li>
                    <li>Understanding how you use our site</li>
                    <li>Improving site functionality</li>
                    <li>Personalizing content</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">1.2 Types of Cookies</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Session cookies (temporary)</li>
                    <li>Persistent cookies (remain until deleted)</li>
                    <li>First-party cookies (set by us)</li>
                    <li>Third-party cookies (set by partners)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">2. How We Use Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">2.1 Essential Cookies</h3>
                  <p>Required for basic site functionality:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Authentication</li>
                    <li>Security measures</li>
                    <li>Shopping cart functionality</li>
                    <li>Session management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2.2 Performance Cookies</h3>
                  <p>Help us understand and improve our website:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Traffic analysis</li>
                    <li>User behavior tracking</li>
                    <li>Error monitoring</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2.3 Functionality Cookies</h3>
                  <p>Enable enhanced features:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Personalization options</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2.4 Marketing Cookies</h3>
                  <p>Used for advertising purposes:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ad targeting</li>
                    <li>Campaign measurement</li>
                    <li>User profiling</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">3. Cookie Management</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">3.1 Browser Settings</h3>
                  <p>You can control cookies through your browser settings:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>Firefox: Options → Privacy & Security → Cookies</li>
                    <li>Safari: Preferences → Privacy → Cookies</li>
                    <li>Edge: Settings → Privacy & Security → Cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3.2 Cookie Preferences</h3>
                  <p>You can manage your cookie preferences through our cookie consent banner or settings panel.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">4. Third-Party Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">4.1 Our Partners</h3>
                  <p>We work with trusted partners who may set cookies on our site:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics</li>
                    <li>Facebook Pixel</li>
                    <li>HubSpot</li>
                    <li>Other analytics and marketing tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4.2 Partner Policies</h3>
                  <p>Please refer to our partners' privacy policies for more information about their cookie usage.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy periodically. Changes will be effective immediately upon posting to our website.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">6. Contact Information</h2>
              <p>For questions about our Cookie Policy:</p>
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

export default CookiePolicy;