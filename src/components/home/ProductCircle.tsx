import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  description: string;
  gradient: string;
  image: string;
  features: string[];
}

interface ProductCircleProps {
  product: Product;
  index: number;
  total: number;
  selectedProduct: string | null;
  setSelectedProduct: (name: string | null) => void;
}

function ProductCircle({ product, index, total, selectedProduct, setSelectedProduct }: ProductCircleProps) {
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setRadius(120);
      } else {
        setRadius(200);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const position = getPosition(index, total, radius);
  const isSelected = selectedProduct === product.name;

  return (
    <motion.div
      className={`absolute cursor-pointer ${
        selectedProduct && !isSelected ? 'opacity-30' : 'opacity-100'
      }`}
      initial={false}
      animate={{
        x: isSelected ? 0 : position.x,
        y: isSelected ? 0 : position.y,
        scale: isSelected ? 1.5 : 1,
        zIndex: isSelected ? 20 : 1,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 25
        }
      }}
      onClick={() => setSelectedProduct(isSelected ? null : product.name)}
      style={{ 
        left: '50%', 
        top: '50%', 
        marginLeft: '-35px',
        marginTop: '-35px',
        width: '70px'
      }}
    >
      <motion.div 
        className="relative group"
        animate={{
          width: isSelected ? '140px' : '70px',
          height: isSelected ? '140px' : '70px',
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 25
          }
        }}
      >
        <div 
          className="w-full h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${isSelected ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255, 255, 255, 0.1)'}, ${isSelected ? 'rgba(30, 64, 175, 0.3)' : 'rgba(255, 255, 255, 0.05)'})`,
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
            <motion.div
              animate={{
                scale: isSelected ? 1.1 : 1,
                y: isSelected ? 0 : 0
              }}
              className="text-center"
            >
              <h3 className="text-xs sm:text-sm font-bold title-font text-white leading-tight px-1">
                {product.name}
              </h3>
            </motion.div>
          </div>
        </div>

        {isSelected && (
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/10" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProductCircle;