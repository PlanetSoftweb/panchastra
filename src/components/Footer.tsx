import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const footerSections = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Team', path: '/team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' }
    ],
    products: [
      { label: 'AR Suite', path: '/products#ar-suite' },
      { label: 'VR Studio', path: '/products#vr-studio' },
      { label: 'AI Assistant', path: '/products#ai-assistant' },
      { label: 'Collaboration Hub', path: '/products#collaboration-hub' }
    ],
    resources: [
      { label: 'Documentation', path: '#' },
      { label: 'Blog', path: '/blog' },
      { label: 'Case Studies', path: '#' },
      { label: 'Support', path: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
      { label: 'GDPR', path: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '🔗' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'GitHub', url: '#', icon: '💻' },
    { name: 'Instagram', url: '#', icon: '📸' }
  ];

  return (
    <footer className="bg-black/90 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold title-font mb-4 text-primary">Panchastra</h3>
              <p className="text-sm text-gray-400 mb-4">
                Revolutionizing real estate and architecture through AR/VR technology
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerSections).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="hidden sm:block"
            >
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-6 sm:py-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto text-center"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Stay Updated</h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and innovations
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-white/10 text-center text-xs sm:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Panchastra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;