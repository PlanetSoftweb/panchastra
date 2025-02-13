import { motion } from 'framer-motion';

function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60" 
            alt="Careers"
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
            <h1 className="text-4xl sm:text-5xl font-bold title-font mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Shape the future of architectural visualization with us
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Currently Not Hiring Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">We're Currently Building Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              While we don't have any open positions at the moment, we're always interested in connecting with talented individuals who are passionate about AR/VR technology and architectural innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Join Talent Pool
            </motion.button>
          </motion.div>

          {/* Why Join Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Work with cutting-edge AR/VR technology"
              },
              {
                icon: "🌱",
                title: "Growth Opportunities",
                description: "Continuous learning and development"
              },
              {
                icon: "🤝",
                title: "Collaborative Culture",
                description: "Work with passionate professionals"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Future Opportunities Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Future Opportunities</h2>
            <p className="text-gray-300 mb-6">
              We anticipate opening positions in the following areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AR/VR Development",
                "3D Modeling",
                "UI/UX Design",
                "Machine Learning",
                "Project Management",
                "Customer Success"
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"
                >
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-gray-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Careers;