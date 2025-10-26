import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Cache le curseur par défaut
    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Particule centrale */}
      <motion.div
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-50"
        animate={{ x: mousePos.x - 6, y: mousePos.y - 6 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      />

      {/* Cercles électriques */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-8 h-8 border border-accent/40 rounded-full pointer-events-none z-40"
          animate={{
            x: mousePos.x - 16,
            y: mousePos.y - 16,
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            borderColor: ['rgba(241, 48, 36, 0.2)', 'rgba(241, 48, 36, 0.8)', 'rgba(241, 48, 36, 0.2)']
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Effet électrique */}
      <motion.div
        className="fixed w-12 h-12 pointer-events-none z-45"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 28 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/60"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 45}deg) translateY(-10px)`
            }}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default CustomCursor;