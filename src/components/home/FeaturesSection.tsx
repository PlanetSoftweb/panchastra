import { motion } from 'framer-motion';

function FeaturesSection() {
  return (
    <section className="py-16 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced tools and technologies that transform your architectural workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Immersive Design",
              description: "Experience your architectural designs in photorealistic VR environments with real-time lighting and materials",
              features: ["Photorealistic rendering", "Real-time lighting", "Material simulation", "Scale visualization"]
            },
            {
              title: "AI-Powered Planning",
              description: "Optimize space utilization and design efficiency with our advanced AI algorithms and machine learning models",
              features: ["Space optimization", "Cost estimation", "Energy efficiency", "Design validation"]
            },
            {
              title: "Real-time Collaboration",
              description: "Connect team members, clients, and stakeholders in a virtual space for seamless collaboration",
              features: ["Multi-user VR", "Cloud sync", "Version control", "Instant feedback"]
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;