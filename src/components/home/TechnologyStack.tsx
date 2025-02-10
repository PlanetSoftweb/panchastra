import { motion } from 'framer-motion';

function TechnologyStack() {
  return (
    <section className="py-16 sm:py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies for maximum performance and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "AR",
              subtitle: "Augmented Reality",
              description: "Advanced spatial mapping and real-world integration",
              gradient: "from-blue-500 to-purple-500"
            },
            {
              title: "VR",
              subtitle: "Virtual Reality",
              description: "Immersive 3D environments with realistic physics",
              gradient: "from-green-500 to-teal-500"
            },
            {
              title: "AI",
              subtitle: "Artificial Intelligence",
              description: "Machine learning for design optimization",
              gradient: "from-indigo-500 to-blue-500"
            },
            {
              title: "3D",
              subtitle: "Advanced Modeling",
              description: "High-performance rendering engine",
              gradient: "from-orange-500 to-pink-500"
            }
          ].map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{tech.title}</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">{tech.subtitle}</p>
              <p className="text-sm text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;