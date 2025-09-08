import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

const TypeWriter = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  onComplete, 
  className = '',
  showCursor = true 
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && (
        <span className={`inline-block w-2 h-5 bg-terminal-white ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`}>
        </span>
      )}
    </span>
  );
};

export default TypeWriter;