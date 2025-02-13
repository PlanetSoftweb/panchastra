import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function LaunchApp() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(994);
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    // Fetch current counter value
    const fetchCounter = async () => {
      const counterDoc = await getDoc(doc(db, 'stats', 'waitlist'));
      if (counterDoc.exists()) {
        setCounter(counterDoc.data().count);
      }
    };
    fetchCounter();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add email to waitlist collection
      await addDoc(collection(db, 'waitlist'), {
        email,
        timestamp: new Date()
      });

      // Update counter in stats collection
      const newCount = counter + 1;
      await setDoc(doc(db, 'stats', 'waitlist'), {
        count: newCount
      });

      setCounter(newCount);
      setSubmittedEmail(email);
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error adding to waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Binary Rain Effect Component
  const BinaryRain = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20 text-xs whitespace-nowrap"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {[...Array(10)].map(() => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>
    );
  };

  // Confetti Effect Component
  const Confetti = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2"
            initial={{
              top: '50%',
              left: '50%',
              scale: 0,
              opacity: 1,
            }}
            animate={{
              top: ['50%', `${Math.random() * 100}%`],
              left: ['50%', `${Math.random() * 100}%`],
              scale: [0, 1],
              opacity: [1, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: i * 0.02,
            }}
          >
            <div
              className="w-full h-full rotate-45"
              style={{
                backgroundColor: ['#2563eb', '#1d4ed8', '#3b82f6'][Math.floor(Math.random() * 3)],
              }}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Binary Rain Background */}
      <BinaryRain />

      {/* Background Effects */}
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
              <svg
                viewBox="0 0 24 24"
                className="w-20 h-20 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path d="M14.05 2.05l-6.36 6.36" />
                <path d="M8.59 8.59l6.36-6.36" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-8 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Cyber Security Background Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary/10"
                style={{
                  width: Math.random() * 100 + 'px',
                  height: '1px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold title-font mb-6 text-white relative z-10"
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
            className="text-xl text-gray-300 mb-4 relative z-10"
          >
            Our revolutionary platform is in final approach. 
            Join {counter.toLocaleString()} others on the waitlist!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-primary mb-8 relative z-10"
          >
            {counter.toLocaleString()}
            <span className="text-base text-gray-400 ml-2">Early Access Members</span>
          </motion.div>

          {/* Success Animation and Confetti */}
          <AnimatePresence>
            {isSubmitted && <Confetti />}
          </AnimatePresence>

          {/* Notification Form */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4 relative z-10"
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
                className="relative z-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <h2 className="text-2xl font-bold text-green-400 mb-2">
                    Congratulations, {submittedEmail}!
                  </h2>
                  <p className="text-gray-300">
                    You're now #{counter.toLocaleString()} on our waitlist.<br />
                    Get ready for an extraordinary journey into the future of architecture!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 grid grid-cols-2 gap-4 relative z-10"
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