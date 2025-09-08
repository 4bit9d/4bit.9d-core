import { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import MatrixBackground from '../components/MatrixBackground';
import CursorParticles from '../components/CursorParticles';
import TypeWriter from '../components/TypeWriter';
import ASCIIArt from '../components/ASCIIArt';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mainContentVisible, setMainContentVisible] = useState(false);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTimeout(() => {
      setMainContentVisible(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-terminal-black font-mono relative overflow-hidden">
      <MatrixBackground />
      <CursorParticles />
      
      {showWelcome && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}

      <div className={`transition-opacity duration-1000 ${mainContentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="mb-6">
              <ASCIIArt className="text-xs sm:text-sm md:text-base" />
            </div>
            <div className="space-y-4">
              <TypeWriter 
                text=" welcome to my core >>>>"
                speed={50}
                delay={1000}
                showCursor={false}
                className="text-terminal-light-gray text-lg"
              />
              <div className="mt-4">
                <TypeWriter 
                  text="> i cant see you >_< ["
                  speed={30}
                  delay={2500}
                  className="text-terminal-white text-xl md:text-2xl"
                />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* About Section */}
              <section className="opacity-0 animate-slide-up" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                <div className="border border-terminal-gray p-6 bg-terminal-black">
                  <div className="mb-4">
                    <TypeWriter 
                      text=" $ cat about_me.txt           "
                      speed={30}
                      delay={4500}
                      showCursor={false}
                      className="text-terminal-light-gray"
                    />
                  </div>
                  <div className="space-y-3 text-terminal-white">
                    <TypeWriter 
                      text=" HOW DID YOU GET HERE?             ["
                      speed={25}
                      delay={5500}
                      showCursor={false}
                    />
                    <div className="opacity-0 animate-fade-in" style={{ animationDelay: '7s', animationFillMode: 'forwards' }}>
                      <p>I don't have much to say about myself, well, if you saw me on the internet, it's a pleasure, tomorrow I may not be there anymore
                        
                      </p>
                      <p>
                        
                        But since you're here... did you know that 4.6 million people are hacked every day? Crazy, right? 28% of them are watched through their webcams.</p>
                      <p>⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⢠⡆⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣷⣄⠀⠀⠀⠀⣾⣷⠀⠀⠀⠀⣠⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⠿⠃⠀⠀⠀⠉⠉⠁⠀⠀⠐⠿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⣶⣿⣿⡿⣿⣿⣿⡿⠋⠉⠀⠀⠉⠙⢿⣿⣿⡿⣿⣿⣷⣦⡀⠀⠀⠀
⠀⢀⣼⣿⣿⠟⠁⢠⣿⣿⠏⠀⠀⢠⣤⣤⡀⠀⠀⢻⣿⣿⡀⠙⢿⣿⣿⣦⠀⠀
⣰⣿⣿⡟⠁⠀⠀⢸⣿⣿⠀⠀⠀⢿⣿⣿⡟⠀⠀⠈⣿⣿⡇⠀⠀⠙⣿⣿⣷⡄
⠈⠻⣿⣿⣦⣄⠀⠸⣿⣿⣆⠀⠀⠀⠉⠉⠀⠀⠀⣸⣿⣿⠃⢀⣤⣾⣿⣿⠟⠁
⠀⠀⠈⠻⣿⣿⣿⣶⣿⣿⣿⣦⣄⠀⠀⠀⢀⣠⣾⣿⣿⣿⣾⣿⣿⡿⠋⠁⠀⠀
⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⠿⠿⠿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⣷⡦⠀⠀⠀⢀⣀⣀⠀⠀⠀⢴⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⠟⠁⠀⠀⠀⠘⣿⡇⠀⠀⠀⠀⠙⢷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠻⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀
                      </p>
                      <p>
                        I can tell you a little about myself. I’m a man — and that’s all you need to know about my appearance. The rest doesn’t matter. My life is woven into computers. They’re not just tools... they are the world. They’re your life, they’re my life. There’s only one rule: master them, or be mastered.

I see the world as something waiting — a promise of change that never comes. Deep down, I know it never will. Power rests in the hands of those who profit from pain, who feed on the misery of others. They laugh while the rest bleed. And you? Which side do you think you’re on? Don’t fool yourself. It doesn’t matter. You can’t see me, and I can’t see you. But we’re trapped on the same ship — and it’s going down.

That’s it. Vague, maybe. Dark, without a doubt. But enough for you to call me strange. See you around. Because, whether you like it or not... I’m always watching you.
                      </p>

                      <p>
                        You think you know the world — screens, headlines, numbers scrolling faster than your eyes can follow. But no, you don’t. What you see is only the surface, the mask they hand to you. Beneath it, everything is rotten. Systems were never built to serve you; they were built to own you. And most people? They don’t even notice the chains tightening around their wrists.

I notice. I’ve seen behind the curtain. I’ve touched the raw code of this machine they call “civilization.” It pulses, it breathes, it devours. You might call me paranoid, and that’s fine. But paranoia is nothing more than awareness sharpened by the instinct to survive.

I don’t seek power. Power corrodes, blinds, destroys. What I seek is truth — and truth is the most dangerous virus of all. Once you see it, you can’t close your eyes. Once you feel it, you never fall back asleep.

So here we are. You and me. Two shadows on opposite sides of the same screen. You don’t know my face, my voice, my name. But I’m here. Watching. Waiting. Testing the edges of the cage you never realized you were trapped inside.

And when the bars break... what will you do?
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <section>
                <SocialLinks />
              </section>
            </div>

            {/* Footer */}
            <footer className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '8s', animationFillMode: 'forwards' }}>
              <div className="border-t border-terminal-gray pt-6">
                <TypeWriter 
                  text="oopen your eyes while you can  [ "
                  speed={40}
                  delay={8500}
                  className="text-terminal-light-gray"
                />
                <div className="mt-2">
                  <span className="text-terminal-white animate-blink">_</span>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
