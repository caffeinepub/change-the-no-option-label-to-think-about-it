import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    // Generate random hearts
    const newHearts: HeartParticle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 30,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up opacity-0"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            bottom: '-50px',
          }}
        >
          <Heart
            className="text-rose-500 fill-rose-500"
            style={{ width: `${heart.size}px`, height: `${heart.size}px` }}
          />
        </div>
      ))}
    </div>
  );
}
