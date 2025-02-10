import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCircle from './ProductCircle';

const products = [
  {
    name: 'BrahmaVision',
    description: 'VR Property Simulation & AI Design',
    gradient: 'from-violet-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=800',
    features: ['Real-time VR Simulation', 'AI-Powered Design', 'Photorealistic Rendering']
  },
  {
    name: 'PashuBuild',
    description: 'AR-Powered Construction & Blueprint Integration',
    gradient: 'from-emerald-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    features: ['AR Construction Guide', 'Blueprint Overlay', 'Progress Tracking']
  },
  {
    name: 'VarunaMarket',
    description: 'Metaverse-Based Real Estate Marketplace',
    gradient: 'from-blue-600 to-cyan-600',
    image: 'https://5ly.co/content/images/2022/09/real-estate-platform.jpg?auto=format&fit=crop&q=80&w=800',
    features: ['Virtual Property Tours', 'Blockchain Integration', 'Smart Contracts']
  },
  {
    name: 'VayuSmart',
    description: 'AR Interior & Smart Home Visualization',
    gradient: 'from-rose-600 to-orange-600',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    features: ['Smart Home Integration', 'Interior Visualization', 'IoT Control']
  },
  {
    name: 'NagShield',
    description: 'Blockchain Legal & Ownership Protection',
    gradient: 'from-red-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800',
    features: ['Legal Documentation', 'Ownership Verification', 'Secure Storage']
  }
];

function ProductsShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Solutions</h2>
          <p className="text-lg sm:text-xl text-gray-400">Integrated solutions for the modern real estate industry</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Interactive Circle */}
          <div className="relative h-[400px] sm:h-[600px] flex items-center justify-center">
            {/* Blue Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px]" />
            
            {/* Animated Wave Background */}
            {[1, 2, 3].map((wave) => (
              <motion.div
                key={wave}
                className="absolute rounded-full border border-primary/20"
                initial={{ width: 120, height: 120 }}
                animate={{
                  width: [`${120 + wave * 50}px`, `${180 + wave * 50}px`],
                  height: [`${120 + wave * 50}px`, `${180 + wave * 50}px`],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: wave * 1.2,
                  ease: "easeInOut"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}

            {/* Center Logo */}
            <motion.div
              className="absolute z-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(30, 64, 175, 0.2))',
                backdropFilter: 'blur(8px)',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
              animate={{
                scale: selectedProduct ? 0.8 : 1,
                opacity: selectedProduct ? 0.6 : 1,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-black/50" />
              <span className="relative text-lg sm:text-2xl font-bold title-font text-white">
                Panchastra
              </span>
            </motion.div>

            {/* Circular Products */}
            {products.map((product, index) => (
              <ProductCircle
                key={product.name}
                product={product}
                index={index}
                total={products.length}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {products.map((_, index) => {
                const angle = (index * 2 * Math.PI) / products.length - Math.PI / 2;
                const radius = window.innerWidth < 640 ? 120 : 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="rgba(37, 99, 235, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-4 relative overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedProduct === product.name ? 'ring-2 ring-primary scale-105' : ''
                }`}
                onClick={() => setSelectedProduct(selectedProduct === product.name ? null : product.name)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-5`} />
                <div className="relative flex gap-4">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold title-font mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-2">{product.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcase;