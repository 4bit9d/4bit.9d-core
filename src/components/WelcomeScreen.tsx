import { useState, useEffect } from 'react';
import ASCIIArt from './ASCIIArt';
import TypeWriter from './TypeWriter';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [step, setStep] = useState(0);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanSkip(true);
    }, 3000); // Allow skipping after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = () => {
      if (canSkip) {
        onComplete();
      }
    };

    const handleClick = () => {
      if (canSkip) {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [canSkip, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 8000); // Auto-complete after 8 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-terminal-black flex items-center justify-center z-50">
      <div className="text-center max-w-4xl px-8">
        {/* Boot sequence */}
        <div className="mb-8">
          <TypeWriter 
            text=" SYSTEM INITIALIZING..."
            speed={80}
            className="text-terminal-light-gray text-sm"
            showCursor={false}
            onComplete={() => setStep(1)}
          />
        </div>

        {step >= 1 && (
          <div className="mb-8">
            <TypeWriter 
              text=" Loading ASCII  4bit.9d interface... [████████████████████] 100%"
              speed={20}
              delay={500}
              className="text-terminal-light-gray text-sm"
              showCursor={false}
              onComplete={() => setStep(2)}
            />
          </div>
        )}

        {step >= 2 && (
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <ASCIIArt className="text-xs sm:text-sm md:text-base lg:text-lg" />
          </div>
        )}

        {step >= 2 && (
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            <TypeWriter 
              text="welcome to 4bit core"
              speed={60}
              delay={4000}
              className="text-terminal-white text-xl md:text-2xl font-bold"
              showCursor={false}
            />
            <div className="mt-4">
              <TypeWriter 
                text={canSkip ? "press any key to continue..." : "Loading..."}
                speed={40}
                delay={6000}
                className="text-terminal-light-gray text-sm animate-blink"
                showCursor={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;