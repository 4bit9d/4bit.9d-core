import { useEffect, useState } from 'react';

const MatrixBackground = () => {
  const [pixels, setPixels] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const pixelArray = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      x: Math.floor(Math.random() * 20) * 5, // Grid-based positioning
      y: Math.floor(Math.random() * 20) * 5,
      size: Math.random() > 0.5 ? 8 : 12, // Only 8px or 12px sizes
      delay: Math.floor(Math.random() * 8) * 2, // Stepped delays
    }));
    setPixels(pixelArray);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-15">
      <div className="relative w-full h-full">
        {/* Retro moving pixels */}
        {pixels.map((pixel) => (
          <div
            key={pixel.id}
            className="absolute bg-terminal-white animate-retro-float pixel-perfect"
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`,
              width: `${pixel.size}px`,
              height: `${pixel.size}px`,
              animationDelay: `${pixel.delay}s`,
              animationDuration: '8s',
            }}
          />
        ))}
        
        {/* Retro grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </div>
  );
};

export default MatrixBackground;