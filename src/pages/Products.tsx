import { useState } from 'react';
import { motion } from 'framer-motion';
import DemoForm from '../components/DemoForm';

const products = [
  {
    title: "AR Visualization Suite",
    description: "Experience real-time architectural visualization with our advanced AR technology",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    features: ["Real-time rendering", "Interactive modifications", "Multi-user support", "Cloud sync"],
    madeInIndia: true
  },
  {
    title: "VR Design Studio",
    description: "Immerse yourself in virtual environments and design spaces in real-time",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=60",
    features: ["Full VR support", "Realistic lighting", "Physics simulation", "Design tools"],
    madeInIndia: true
  },
  {
    title: "AI Design Assistant",
    description: "Leverage AI to optimize and enhance your architectural designs",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    features: ["Design suggestions", "Space optimization", "Cost estimation", "Energy efficiency"],
    madeInIndia: true
  },
  {
    title: "Collaboration Hub",
    description: "Connect teams and stakeholders in a unified virtual workspace",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&auto=format&fit=crop&q=60",
    features: ["Real-time collaboration", "Version control", "Comments & feedback", "Project management"],
    madeInIndia: true
  }
];

function Products() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://media-hosting.imagekit.io//7cfa2415d0cb4ca6/An%20epic,%20amazing%20scene%20in%20intense%20jet%20black,%20featuring%20a%20man%20exploring%20a%20real%20estate%20project%20using%20AR%20technology%20and%20a%20high-definition%20hologram%20with%20dimensions.%20%20The%20scene%20uses%20a%20modern,%20futuristic%20style%20with%20lens%20glow%20lightin.jpg?Expires=1833798630&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MXD5RpF5KrSpdCB5gDJAko3HOco-gPBA247NPhIwb3NQ-zZrboVppEGh0aWnLPAeP0PdQeTFZJSLcJUY43Rs7RU6HaPXCaslGmRauZeV4COXvHUdQtK0ju-jPa~8u0ewCpGehqVgwfsKnhqU~o~UveeHTBblTU1EwoGQFDFS2ohvTYnWceWOoyP8qPcltccWtkkpo~XZkrlZCX4itcdNhiFDWTkxAFQsOX9gt9GTPp~rEM9xpgE2EbK4-d56V~ifKg2V3xkPEaDfKPrarAknTtWVQZiQWNebP45lpK1ToefgqaHc98Hlsyli6IIbQ-Uxtnm7-q~eFLZ-or28VEW8JA__" 
            alt="VR Experience"
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
            <h1 className="text-4xl sm:text-5xl font-bold title-font mb-4">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of architecture and design through our innovative solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {product.madeInIndia && (
                    <div className="absolute top-4 right-4 bg-white/90 text-black text-sm font-bold px-3 py-1 rounded-full">
                      Made in India
                    </div>
                  )}
                </div>
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDemoFormOpen(true)}
                    className="mt-6 px-6 py-2 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Book Demo
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
}

export default Products;