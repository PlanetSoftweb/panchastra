import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60" 
            alt="About Us"
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
            <h1 className="text-4xl sm:text-5xl font-bold title-font mb-4">About Panchastra</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionizing architectural visualization through cutting-edge technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Story Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2024, Panchastra emerged from a vision to transform how we experience and interact with architectural designs. Our journey began with a simple idea: to make architectural visualization more immersive, intuitive, and accessible.
              </p>
              <p className="text-gray-300">
                Today, we're at the forefront of AR/VR technology in architecture, pushing boundaries and creating new possibilities for designers, architects, and clients worldwide.
              </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                We strive to revolutionize the architectural industry by bridging the gap between imagination and reality through innovative technology solutions.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Empower architects with cutting-edge tools
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Make design visualization accessible to everyone
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Foster collaboration and innovation
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "1000+", label: "Happy Users" },
              { number: "10+", label: "Countries Reached" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center mb-20"
          >
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              To create a world where architectural visualization is seamlessly integrated with cutting-edge technology, making design exploration and collaboration more intuitive and immersive than ever before.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;