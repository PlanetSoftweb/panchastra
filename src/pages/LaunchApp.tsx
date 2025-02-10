import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LaunchApp() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Aviation-themed Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        {/* Animated Flight Path Lines */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 max-w-2xl mx-auto px-4 text-center"
      >
        {/* 3D Airplane Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5 
          }}
          className="mb-12"
        >
          <div className="w-40 h-40 mx-auto relative">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotateY: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-primary/20 rounded-full"
            />
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotateZ: [-5, 5, -5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* 3D Airplane Icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-20 h-20 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path d="M14.05 2.05l-6.36 6.36"></path>
                <path d="M8.59 8.59l6.36-6.36"></path>
              </svg>
            </motion.div>
            
            {/* Contrail Effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, -100],
                  opacity: [1, 0],
                  scale: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
                className="absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                style={{
                  top: `${45 + i * 5}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-8 backdrop-blur-xl"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold title-font mb-6 text-white"
            animate={{ 
              textShadow: ["0 0 10px rgba(37, 99, 235, 0)", "0 0 20px rgba(37, 99, 235, 0.5)", "0 0 10px rgba(37, 99, 235, 0)"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Prepare for Takeoff
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
          >
            Our revolutionary platform is in final approach. 
            Join the flight crew for early access!
          </motion.p>

          {/* Notification Form */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 rounded-full bg-white/10 border-2 border-primary/20 focus:border-primary outline-none text-white placeholder-gray-400 pr-32"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      "Join Waitlist"
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-400 font-semibold"
              >
                Welcome aboard! We'll notify you when we're ready for takeoff.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 grid grid-cols-2 gap-4"
          >
            {[
              { icon: "plane", text: "Immersive AR/VR" },
              { icon: "building", text: "3D Visualization" },
              { icon: "chip", text: "AI-powered Tools" },
              { icon: "users", text: "Collaboration Hub" }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="glass-card p-4 flex items-center space-x-3"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon === "plane" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  )}
                  {feature.icon === "building" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  )}
                  {feature.icon === "chip" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  )}
                  {feature.icon === "users" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  )}
                </svg>
                <span className="text-sm text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LaunchApp;