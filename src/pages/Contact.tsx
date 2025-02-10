import { motion } from 'framer-motion';

function Contact() {
  const contactInfo = [
    { icon: '📍', title: 'Address', content: 'Bangalore, India' },
    { icon: '📧', title: 'Email', content: 'panchastra@gmail.com' },
    { icon: '📱', title: 'Phone', content: '+91 (XXX) XXX-XXXX' },
    { icon: '⏰', title: 'Hours', content: 'Mon-Fri: 9AM - 6PM IST' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://media-hosting.imagekit.io//f76501477c9b4bca/Creative%20light%20art%20in%20HD,%20featuring%20abstract%20patterns%20and%20artistic%20lighting.%20A%20man%20explores%20a%20real%20estate%20project%20using%20AI,%20AR,%20and%20VR%20technology.jpg?Expires=1833798550&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=23L6dVzZ89A2xNI-O2AG1h6Of9UeWwTQkAiOZ4GZjplbqG9wQsvGGMJzUhviM1j8YP6PPuA9UO~XOp1YShAKK0TwxT9YwDCf6P~v0sf0ZjdCrSF979TcbvWW9bEJ4rEStYtod0f2JfwTQf6conmAVpRGF5OhlnoLJagncRUtSTVhdeJEM-c3hoSPI8RDCPePupZR1W5SN7GrO2TXCo7CaIq7rFhcrVfxYoxOy-TLKZHsPKhhEOBP1qG2w8YBnd6QT3S-ZSezVhV4NCmbMrN7fovQ8YIfSiln8FuAjiZw~14Yfhey9OdRSyeEvRIq0ZfVg87k4QKnj1qL~2pxTfbrog__" 
            alt="VR Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold title-font mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can transform your architectural visualization experience
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="glass-card p-6 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-3xl mb-4 block">{info.icon}</span>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-400">{info.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">How can I schedule a demo?</h4>
                    <p className="text-gray-400">Fill out the contact form or email us directly to schedule a personalized demo of our AR/VR solutions.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">What support options are available?</h4>
                    <p className="text-gray-400">We offer 24/7 email support and priority phone support during business hours for all our clients.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;