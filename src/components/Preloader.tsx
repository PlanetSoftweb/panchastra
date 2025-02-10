import { motion } from 'framer-motion';

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 preloader-bg flex items-center justify-center"
    >
      <div className="relative">
        {/* 3D Cube */}
        <motion.div
          className="w-32 h-32 relative transform-gpu"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* Front face */}
          <div className="absolute w-full h-full border-2 border-primary bg-primary/10 transform translate-z-16"></div>
          {/* Back face */}
          <div className="absolute w-full h-full border-2 border-primary bg-primary/10 transform -translate-z-16 rotate-180"></div>
          {/* Right face */}
          <div className="absolute w-full h-full border-2 border-primary bg-primary/10 transform translate-x-16 rotate-y-90"></div>
          {/* Left face */}
          <div className="absolute w-full h-full border-2 border-primary bg-primary/10 transform -translate-x-16 -rotate-y-90"></div>
          {/* Top face */}
          <div className="absolute w-full h-full border-2 border-primary bg-primary/10 transform translate-y-16 rotate-x-90"></div>
          {/* Bottom face */}
          <div className="absolute w-full h-full border-2 border-primary bg-primary/10 transform -translate-y-16 -rotate-x-90"></div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          <span className="text-sm font-title text-primary">INITIALIZING VIRTUAL SPACE</span>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute -bottom-16 left-0 h-0.5 bg-primary/50"
          style={{ width: 200 }}
        />
      </div>
    </motion.div>
  );
}

export default Preloader;