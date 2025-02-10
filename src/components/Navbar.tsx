import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/team', label: 'Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleLaunch = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      navigate('/launch-app');
    }, 2000);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0">
        <div className="glass-card mx-2 my-2 sm:mx-4 sm:my-4">
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex justify-between h-12 sm:h-14 md:h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg sm:text-xl md:text-2xl font-bold title-font text-white"
                  >
                    Panchastra
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative ml-1 sm:ml-2"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <span className="relative text-[8px] sm:text-[10px] text-white font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-primary/50 bg-primary/20">
                      BETA
                    </span>
                  </motion.div>
                </Link>
              </div>

              {/* Launch App Button (visible on larger screens) */}
              <div className="hidden md:flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to="/launch-app"
                    onClick={handleLaunch}
                    className="relative px-6 sm:px-8 py-2.5 text-gray-900 font-bold rounded-full bg-white hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base border-2 border-primary/20 shadow-lg shadow-primary/20"
                  >
                    LAUNCH APP
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 text-gray-300 hover:text-white transition-colors icon-3d"
                >
                  <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.button>
              </div>

              {/* Menu Button (visible on mobile) */}
              <div className="md:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 text-gray-300 hover:text-white transition-colors icon-3d"
                >
                  <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg grid-pattern"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4 sm:p-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors icon-3d"
                >
                  <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.button>
              </div>
              
              <div className="flex flex-col items-center justify-center flex-grow gap-6 sm:gap-8">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold title-font text-white hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Launch App Button in Mobile Menu */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/launch-app"
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        handleLaunch(e);
                      }}
                      className="px-8 sm:px-10 py-3 sm:py-4 text-gray-900 font-bold rounded-full bg-white hover:bg-gray-100 transition-all duration-300 text-lg sm:text-xl border-2 border-primary/20 shadow-lg shadow-primary/20"
                    >
                      LAUNCH APP
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launch Animation Overlay */}
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
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
                Launching...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: 50 },
  open: { opacity: 1, x: 0 }
};

export default Navbar;