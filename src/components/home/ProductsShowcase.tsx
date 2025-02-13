import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCircle from './ProductCircle';

const products = [
  {
    name: 'BrahmaVision',
    description: 'VR Property Simulation & AI Design',
    gradient: 'from-violet-600 to-indigo-600',
    image: 'https://media-hosting.imagekit.io//36f8c811e460497f/4K%20HD%20photorealistic%20rendering%20of%20BrahmaVision%20VR%20software%20interface%20showcasing%20metaverse%20architectural%20designs.%20%20Warm,%20slightly%20dark%20lighting%20with%20soft%20contrast%20and%20saturation.%20Elegant,%20refined%20aesthetic%20in%20the%20style.jpg?Expires=1833978651&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JBAMBOmL9w7OkWj9vU6zgoKUR09FAYTqJQtgfmvyO0mpdkowO7BVxoUcwBrUzHTc1iAvUVVzpqbjBNn2T5iiW~6d3JUVLimgoGB~wt0XWATfU-eiPMXrGqUqFJP5re27b5EH3VTp9hrMUB7vS9pTO9zNiriQHzFmB3vSBt~5g-wvKcQQ8IeLNhR4FcvUk2TnsuDFlKB81S~JaN6wUMsGoVYmcUqAbxE~-cJ2W~IN5smz7tXoalZeau1V3QmsvSB-5MVnLwMryS9EyMK6MxX63Mua2WxcpXWRuQUVVtnUBhLf9sJ~mRVy1KLUtlVsnOC7NIAtJr0Td1LuG78-Al8TGA__',
    features: ['Real-time VR Simulation', 'AI-Powered Design', 'Photorealistic Rendering']
  },
  {
    name: 'ShilpXR',
    description: 'AR-Powered Construction & Blueprint Integration',
    gradient: 'from-emerald-600 to-teal-600',
    image: 'https://media-hosting.imagekit.io//23f7b67dacfe49c4/A%20detailed%20close-up%20of%20the%20ShilpXR%20software%20interface,%20emphasizing%20the%20iridescent%20color%20palette%20and%20contrasting%20chiaroscuro%20lighting.%20%20The%20AR%20construction%20guide,%20blueprint%20overlay,%20and%20progress%20tracking%20features%20are%20c.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WtGOnKQmKIYj9TUHUt0meBLPjvySEB-AM20~A~uLQ8rRcUbzJ6qotp3s3vX9nRXq9Wh4598O6spJ8bi7aVqI9xQKmuagPip8wqOF89S4OlQC5AYtT~TXi3i8KkPmkRQGhlE0VEMSF1KEodbZXEvND2Wqf8zBhfEfXJgFJaEcbqK250Z~Qic7GDDjUaKCsU9GnfnApn9SOoUO6k3FN5dkbqEnRohauS36IZjiZgLyr1TlM8j7kfdJfXukpxb0eonnsPjrr9i6nNAPV17sYH7s5Ed3l7voisjTeT2Y3v2rkoCwWO4wzL~vCxmN1dTAFCT2DAZf3dHjSayrl8JGh-Q14w__',
    features: ['AR Construction Guide', 'Blueprint Overlay', 'Progress Tracking']
  },
  {
    name: 'GrihaRealm',
    description: 'Metaverse-Based Real Estate Marketplace',
    gradient: 'from-blue-600 to-cyan-600',
    image: 'https://media-hosting.imagekit.io//dbce515cc94a4f1b/GrihaRealm%20Metaverse%20real%20estate%20marketplace%20software%20interface,%204K%20resolution,%20high%20contrast,%20intense%20dramatic%20lighting.%20%20The%20logo%20is%20minimalist%20and%20geometric,%20sharp%20lines%20against%20dark%20background.%20The%20interface%20displ.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kK4~oQFWMxl3HsWPEpCPHW9rm-yt--yJM-f~y3Nia7Zqh-b8TfwD3D8WAQ7-BisaQ1lq2ba8ubHxVEAlM2jJnn~F2apWbspMg3lZqghP0dI5zVSQfPureVsBtxb-2VgrbVXY0nsi9TyKdyq2ilnNESf3CT1uHcOVjdJgfj39x7K8PXPOQnVVqyQh6u9~AU4dNrH-m7VoAscX~ZO56tugOsPVKHoHRYhv3Fx8c3xvzl88bU4tJ3YCkazjxU6x1MUxvuDTWKe21KVCD6mo5EDNmnPFnWmFrwBwUbTDMrKoQ0SJ8ZCFD2r1keiMe5j4oghqGdaeqi2oHciByD0V1jgVNQ__',
    features: ['Virtual Property Tours', 'Blockchain Integration', 'Smart Contracts']
  },
  {
    name: 'VaastuSense',
    description: 'AR Interior & Smart Home Visualization',
    gradient: 'from-rose-600 to-orange-600',
    image: 'https://media-hosting.imagekit.io//3abec08a59404423/4k%20HD%20image%20depicting%20a%20dreamy,%20ethereal%20VaastuSense%20AR%20software%20interface.%20Soft%20lighting,%20gentle%20color%20contrasts,%20and%20a%20hazy%20atmosphere%20create%20a%20mystic,%20enchanting%20environment.%20The%20logo%20is%20subtly%20integrated,%20reflecti.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QCG905DSzI6mdNjXm13~M8GwKB7ZDE9TeZECfTL4oETIqtHzft81fLImMv6d9NUFjyd3A1NdatTRF-04jVy-uyUjUTyLSixkcecVnyqXIE95Z0P9B5fJ2uZpWxT1Af5DfQ5~gZqaAVCW33uoyjZVzOXl7l6Vci4vE3S5KLlCA5y2XTAmL9OUmpQUaoLBJlt52Atpvf2lA3QjfX2MYATcwcId4i-GTPtb4-iBiGFuZxvywa1mtz3AzmokJ-rt89SMg9H4vVdKrqfR0Qx1HFdO1CtvGjEh09hay~Ekr7ARIfGI1K-9ochGE9UoJ836iKas8OVrncrAtGIskBF41~ZWAg__',
    features: ['Smart Home Integration', 'Interior Visualization', 'IoT Control']
  },
  {
    name: 'NagShield',
    description: 'Blockchain Legal & Ownership Protection',
    gradient: 'from-red-600 to-pink-600',
    image: 'https://media-hosting.imagekit.io//e3c34a52ede74fd7/4K%20HD%20image,%20rich%20burgundy%20and%20deep%20blue%20tones,%20NagShield%20logo%E2%80%94a%20sleek,%20modern%20design%20in%20a%20clean%20sans-serif%20font%E2%80%94displayed%20prominently%20on%20a%20sophisticated%20software%20interface%20depicting%20blockchain%20and%20AI%20security%20element.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LV4ynNx2p4yJwAiNCgNZX5B-F6TkI3LXrx9n~hVkkSJg94G4p2DUZSneYDvUBA4GUA24XsOuq8~rUiTXOCY7DHaxf3bzZqedEv~n1YJmdOR7UcJoGfiOuriIc8sdYmgE9DUhAEnvWoznwk6a-V617B-rbRKbZGJtd9jZDvt4-2lYhXsvYqAq68vrNGBcEHDU9FMJd2UWGoxOJHsBipW2a3iUZhy3QwPme9~bmw11ONa~r3z3UUcZ1jwZWoppn8n28twPRSiVntDLxYfws4fLHK1vxhhJSlHcT3E37RWCgCWMyzCfbkFmoG~dpPXgRgnD-rsP~0yTo-odQoP2BBX30A__',
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