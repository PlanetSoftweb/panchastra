import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

function HeroSection() {
  return (
    <section className="min-h-[100vh] relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Shadow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://media-hosting.imagekit.io//adab9a43f753435b/Create%20a%20wallpaper%20in%20the%20style%20of%20an%20Apple%20ARVR%20technology%20advertisement.%20%20Use%20rich%20burgundy%20and%20deep%20blue,%20with%20blurred%20lines%20to%20convey%20dynamic%20motion,%20action%20poses,%20and%20sophisticated,%20elegant,%20bright%20lighting.jpg?Expires=1833785561&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mro3r~0ITDdnQxltuklp4Axy37DRKVueCNslDH1d~AtWOz~JeF8qpAwhnZGZKnSN3tct23SWqMVBFEWvT8qXQi1VuW7pXOO47n73mFJ1LD0OVfn31zEnhbTgOTdM2SXBMIOylA58VkSuF4XjamQ1MMnbW~RS9VdAhyZi6jxcQAlldagDQuYrg811p2-FpA~N~Jug0qYkOhWL0696n2I4f8evT4bIm6Y0JObmUra~fX1LBgUOWR5Rqe8cwXP3GICg4jGlCRW6Vrij9nvhPnGqZ72GPk5gq3xrq38Qh8jCvWfTwUHqGafAX7sg7HGdTY9J1sbrdOxjDEB8Y7BGfdIqmw__')] bg-cover bg-center bg-no-repeat" />
        
        {/* Shadow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Vintage Grain Effect */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'
        }} />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-gray-400 font-light">
                Welcome to the Future
              </span>
            </motion.div>

            <motion.h1 
              className="title-font font-bold mb-6 sm:mb-8 text-glow leading-none drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl mb-4">
                We are
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl mb-4">
                Shaping the Future of
              </span>
              <motion.span 
                className="block text-3xl sm:text-4xl md:text-5xl leading-none text-white font-black italic"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Real Estate
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-sm sm:text-base md:text-lg mb-10 text-gray-300 max-w-2xl mx-auto px-4 drop-shadow-lg font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              One Platform • One Workforce • One Solution
              <span className="block mt-2 text-xs sm:text-sm text-gray-400">
                Faster Projects • Smarter Investments • Secure Transactions
              </span>
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="space-y-6"
          >
            <motion.a
              href="/products"
              className="glass-card px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-primary/20 transition-all duration-300 inline-block shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.a>
            <div className="animate-bounce mt-8">
              <ArrowDownIcon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-gray-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;