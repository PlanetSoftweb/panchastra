import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 'brahmavision',
    title: "BrahmaVision",
    subtitle: "VR Property Simulation & AI Design",
    description: "Experience architectural designs in photorealistic VR environments with real-time modifications and AI-powered optimization.",
    image: "https://media-hosting.imagekit.io//36f8c811e460497f/4K%20HD%20photorealistic%20rendering%20of%20BrahmaVision%20VR%20software%20interface%20showcasing%20metaverse%20architectural%20designs.%20%20Warm,%20slightly%20dark%20lighting%20with%20soft%20contrast%20and%20saturation.%20Elegant,%20refined%20aesthetic%20in%20the%20style.jpg?Expires=1833978651&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JBAMBOmL9w7OkWj9vU6zgoKUR09FAYTqJQtgfmvyO0mpdkowO7BVxoUcwBrUzHTc1iAvUVVzpqbjBNn2T5iiW~6d3JUVLimgoGB~wt0XWATfU-eiPMXrGqUqFJP5re27b5EH3VTp9hrMUB7vS9pTO9zNiriQHzFmB3vSBt~5g-wvKcQQ8IeLNhR4FcvUk2TnsuDFlKB81S~JaN6wUMsGoVYmcUqAbxE~-cJ2W~IN5smz7tXoalZeau1V3QmsvSB-5MVnLwMryS9EyMK6MxX63Mua2WxcpXWRuQUVVtnUBhLf9sJ~mRVy1KLUtlVsnOC7NIAtJr0Td1LuG78-Al8TGA__",
    features: [
      "Real-time VR Simulation",
      "AI-Powered Design",
      "Photorealistic Rendering",
      "Multi-user Support",
      "Cloud Synchronization",
      "Real-time Modifications",
      "Physics Simulation",
      "Voice Commands"
    ],
    technologies: [
      "Unreal Engine 5",
      "NVIDIA RTX",
      "OpenAI Integration",
      "Cloud Infrastructure"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 'shilpxr',
    title: "ShilpXR",
    subtitle: "AR-Powered Construction & Blueprint Integration",
    description: "Transform construction sites with AR technology, bringing blueprints to life and enabling real-time progress tracking.",
    image: "https://media-hosting.imagekit.io//23f7b67dacfe49c4/A%20detailed%20close-up%20of%20the%20ShilpXR%20software%20interface,%20emphasizing%20the%20iridescent%20color%20palette%20and%20contrasting%20chiaroscuro%20lighting.%20%20The%20AR%20construction%20guide,%20blueprint%20overlay,%20and%20progress%20tracking%20features%20are%20c.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WtGOnKQmKIYj9TUHUt0meBLPjvySEB-AM20~A~uLQ8rRcUbzJ6qotp3s3vX9nRXq9Wh4598O6spJ8bi7aVqI9xQKmuagPip8wqOF89S4OlQC5AYtT~TXi3i8KkPmkRQGhlE0VEMSF1KEodbZXEvND2Wqf8zBhfEfXJgFJaEcbqK250Z~Qic7GDDjUaKCsU9GnfnApn9SOoUO6k3FN5dkbqEnRohauS36IZjiZgLyr1TlM8j7kfdJfXukpxb0eonnsPjrr9i6nNAPV17sYH7s5Ed3l7voisjTeT2Y3v2rkoCwWO4wzL~vCxmN1dTAFCT2DAZf3dHjSayrl8JGh-Q14w__",
    features: [
      "AR Construction Guide",
      "Blueprint Overlay",
      "Progress Tracking",
      "Material Recognition",
      "Safety Alerts",
      "Team Coordination",
      "Quality Control",
      "Resource Management"
    ],
    technologies: [
      "ARKit/ARCore",
      "Computer Vision",
      "IoT Integration",
      "5G Connectivity"
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    id: 'griharealm',
    title: "GrihaRealm",
    subtitle: "Metaverse-Based Real Estate Marketplace",
    description: "A revolutionary marketplace where properties come to life in the metaverse, enabling virtual tours and secure transactions.",
    image: "https://media-hosting.imagekit.io//dbce515cc94a4f1b/GrihaRealm%20Metaverse%20real%20estate%20marketplace%20software%20interface,%204K%20resolution,%20high%20contrast,%20intense%20dramatic%20lighting.%20%20The%20logo%20is%20minimalist%20and%20geometric,%20sharp%20lines%20against%20dark%20background.%20The%20interface%20displ.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kK4~oQFWMxl3HsWPEpCPHW9rm-yt--yJM-f~y3Nia7Zqh-b8TfwD3D8WAQ7-BisaQ1lq2ba8ubHxVEAlM2jJnn~F2apWbspMg3lZqghP0dI5zVSQfPureVsBtxb-2VgrbVXY0nsi9TyKdyq2ilnNESf3CT1uHcOVjdJgfj39x7K8PXPOQnVVqyQh6u9~AU4dNrH-m7VoAscX~ZO56tugOsPVKHoHRYhv3Fx8c3xvzl88bU4tJ3YCkazjxU6x1MUxvuDTWKe21KVCD6mo5EDNmnPFnWmFrwBwUbTDMrKoQ0SJ8ZCFD2r1keiMe5j4oghqGdaeqi2oHciByD0V1jgVNQ__",
    features: [
      "Virtual Property Tours",
      "Blockchain Integration",
      "Smart Contracts",
      "Live Negotiations",
      "Virtual Staging",
      "Market Analytics",
      "Digital Twin Creation",
      "Real-time Valuation"
    ],
    technologies: [
      "Blockchain",
      "WebXR",
      "AI Analytics",
      "Cloud Computing"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 'vaastusense',
    title: "VaastuSense",
    subtitle: "AR Interior & Smart Home Visualization",
    description: "Visualize and control smart home features through AR, bringing IoT integration to life in an immersive way.",
    image: "https://media-hosting.imagekit.io//3abec08a59404423/4k%20HD%20image%20depicting%20a%20dreamy,%20ethereal%20VaastuSense%20AR%20software%20interface.%20Soft%20lighting,%20gentle%20color%20contrasts,%20and%20a%20hazy%20atmosphere%20create%20a%20mystic,%20enchanting%20environment.%20The%20logo%20is%20subtly%20integrated,%20reflecti.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QCG905DSzI6mdNjXm13~M8GwKB7ZDE9TeZECfTL4oETIqtHzft81fLImMv6d9NUFjyd3A1NdatTRF-04jVy-uyUjUTyLSixkcecVnyqXIE95Z0P9B5fJ2uZpWxT1Af5DfQ5~gZqaAVCW33uoyjZVzOXl7l6Vci4vE3S5KLlCA5y2XTAmL9OUmpQUaoLBJlt52Atpvf2lA3QjfX2MYATcwcId4i-GTPtb4-iBiGFuZxvywa1mtz3AzmokJ-rt89SMg9H4vVdKrqfR0Qx1HFdO1CtvGjEh09hay~Ekr7ARIfGI1K-9ochGE9UoJ836iKas8OVrncrAtGIskBF41~ZWAg__",
    features: [
      "Smart Home Integration",
      "Interior Visualization",
      "IoT Control",
      "Energy Management",
      "Automation Rules",
      "Climate Control",
      "Security Systems",
      "Lighting Design"
    ],
    technologies: [
      "IoT Protocols",
      "AR Framework",
      "AI Assistant",
      "Edge Computing"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 'nagshield',
    title: "NagShield",
    subtitle: "Blockchain Legal & Ownership Protection",
    description: "Secure property ownership and legal documentation through blockchain technology, ensuring transparent and tamper-proof records.",
    image: "https://media-hosting.imagekit.io//e3c34a52ede74fd7/4K%20HD%20image,%20rich%20burgundy%20and%20deep%20blue%20tones,%20NagShield%20logo%E2%80%94a%20sleek,%20modern%20design%20in%20a%20clean%20sans-serif%20font%E2%80%94displayed%20prominently%20on%20a%20sophisticated%20software%20interface%20depicting%20blockchain%20and%20AI%20security%20element.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LV4ynNx2p4yJwAiNCgNZX5B-F6TkI3LXrx9n~hVkkSJg94G4p2DUZSneYDvUBA4GUA24XsOuq8~rUiTXOCY7DHaxf3bzZqedEv~n1YJmdOR7UcJoGfiOuriIc8sdYmgE9DUhAEnvWoznwk6a-V617B-rbRKbZGJtd9jZDvt4-2lYhXsvYqAq68vrNGBcEHDU9FMJd2UWGoxOJHsBipW2a3iUZhy3QwPme9~bmw11ONa~r3z3UUcZ1jwZWoppn8n28twPRSiVntDLxYfws4fLHK1vxhhJSlHcT3E37RWCgCWMyzCfbkFmoG~dpPXgRgnD-rsP~0yTo-odQoP2BBX30A__",
    features: [
      "Legal Documentation",
      "Ownership Verification",
      "Secure Storage",
      "Audit Trail",
      "Digital Signatures",
      "Access Control",
      "Compliance Tracking",
      "Automated Validation"
    ],
    technologies: [
      "Blockchain",
      "Smart Contracts",
      "Encryption",
      "Distributed Storage"
    ],
    color: "from-purple-500 to-pink-500"
  }
];

function Products() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      setSelectedProduct(null);
      navigate('/launch-app');
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="https://media-hosting.imagekit.io//f1d1fe01b780459b/Surreal,%20dreamlike%204k%20HD%20close-up%20of%20ShilpXR's%20AR%20Construction%20software.%20%20Features%20include%20AR%20Construction%20Guide,%20Blueprint%20Overlay,%20and%20Progress%20Tracking.%20The%20interface%20is%20detailed,%20with%20a%20bizarre,%20fantastical%20scene%20.jpg?Expires=1834025368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FCD~DXNjL59trLaly0PZouoFTVx42VF7zUe6pznsIg9Tx25BeBwqI-TScYo~nZ~AIxTmz-ZJJ9yK4Mo1ziz0ZR17Mw328ch1ay6n3RCB-evwO2Zo668tnb3gCeOfuz6BeT9ieOY8DIcCWEnLDI8rlabRtoZHfcbOzufHiOeBSb6n7cp9gUONwEZecslEQNEx~G8OsmdtJmIcUO6YGoPLNAYdPg79U5DaBrIriol1UTk3nYQKjGOCd1O~CMhHxOyEi9DLUkctuXWlOgtP7D0Mutm3c7KZdr03WL8vxStEtNMdHwc~NoBhr3Ryx8QKx1x9tVpV7g0AtJ1kSDHDfAS-YQ__" 
              alt="Products Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 backdrop-blur-sm" />
          
          {/* Animated Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                width: '200%',
                transform: 'rotate(-35deg)'
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.5)",
                  "0 0 40px rgba(255, 255, 255, 0.3)",
                  "0 0 20px rgba(255, 255, 255, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold title-font mb-4 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Our Products</h1>
            </motion.div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transforming the future of architecture and real estate through cutting-edge technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, ${product.color})` }} />
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r opacity-20"
                      style={{ background: `linear-gradient(to right, ${product.color})` }}
                    />
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Pre-access Button */}
                    <motion.button
                      onClick={() => handleProductClick(product.id)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="bg-black/80 px-8 py-4 rounded-full text-white font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                        Get Pre-access
                      </div>
                    </motion.button>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${product.color})` }}>
                          {product.title}
                        </h2>
                        <p className="text-xl text-gray-400 mb-4">{product.subtitle}</p>
                      </motion.div>
                      <p className="text-gray-300">{product.description}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm">
                              <span className="w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${product.color})` }} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Launch Animation Overlay */}
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.2, 1],
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 2,
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }}
                className="w-32 h-32 relative mx-auto mb-8"
              >
                <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />
                <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-bold text-primary"
              >
                Launching Soon...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Products;