import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  velocityX: number;
  velocityY: number;
}

const CursorParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (Math.random() > 0.7) { // Only create particles sometimes for performance
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          size: Math.random() * 3 + 1,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2,
        };

        setParticles(prev => [...prev.slice(-15), newParticle]); // Keep only last 15 particles
      }
    };

    const updateParticles = () => {
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.velocityX,
          y: particle.y + particle.velocityY,
          opacity: particle.opacity - 0.02,
          size: particle.size * 0.99,
        }))
        .filter(particle => particle.opacity > 0)
      );

      animationFrame = requestAnimationFrame(updateParticles);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateParticles();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-terminal-white rounded-full pixel-perfect"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default CursorParticles;