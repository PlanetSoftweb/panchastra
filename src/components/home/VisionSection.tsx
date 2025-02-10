import { motion } from 'framer-motion';

function VisionSection() {
  return (
    <section className="py-16 sm:py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing the architecture and real estate industry through immersive technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Problem</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Traditional architectural visualization is time-consuming
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Limited collaboration between stakeholders
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Difficulty in visualizing final outcomes
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Inefficient design iteration process
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Solution</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Real-time 3D visualization with AR/VR
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                AI-powered design optimization
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Cloud-based collaboration platform
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Instant design modifications and updates
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;