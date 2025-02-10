import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60"
          alt="404 Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 sm:p-12"
        >
          {/* 404 Text */}
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-8xl sm:text-9xl font-bold title-font text-primary mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Reality Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-8"
          >
            The virtual space you're looking for seems to have glitched out of existence.
            Let's get you back to a stable dimension.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Return to Reality
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-primary/20 rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;