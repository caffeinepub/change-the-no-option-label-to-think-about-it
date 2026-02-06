import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

export function AvoidButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAvoiding, setIsAvoiding] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const parentRect = button.parentElement?.getBoundingClientRect();

    if (!parentRect) return;

    // Calculate available space
    const maxX = parentRect.width - rect.width;
    const maxY = parentRect.height - rect.height;

    // Generate random position away from current position
    let newX = Math.random() * maxX - maxX / 2;
    let newY = Math.random() * maxY - maxY / 2;

    // Ensure the button moves a minimum distance
    const minDistance = 100;
    const distance = Math.sqrt(newX * newX + newY * newY);
    if (distance < minDistance) {
      const scale = minDistance / distance;
      newX *= scale;
      newY *= scale;
    }

    setPosition({ x: newX, y: newY });
    setIsAvoiding(true);
  };

  const handleMouseLeave = () => {
    // Keep the button in its new position
  };

  return (
    <div className="relative inline-block">
      <Button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        size="lg"
        variant="outline"
        className="bg-white hover:bg-gray-50 text-gray-700 font-bold text-xl px-12 py-6 rounded-full shadow-lg border-2 border-gray-300 transition-all duration-300 ease-out"
        style={{
          transform: isAvoiding ? `translate(${position.x}px, ${position.y}px)` : 'translate(0, 0)',
        }}
      >
        think about it
      </Button>
    </div>
  );
}
