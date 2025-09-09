import { useState, useEffect, useLayoutEffect } from 'react';
import ASCIIArt from './ASCIIArt';
import TypeWriter from './TypeWriter';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [step, setStep] = useState(0);
  const [canSkip, setCanSkip] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);

  // ——— UTIL: reseta TUDO pro topo, incluindo contêineres com overflow ———
  const resetAllScrollPositions = () => {
    // remove hash (#...) que pode ancorar no meio
    if (location.hash) {
      history.replaceState(null, '', location.pathname + location.search);
    }

    // evita animação de scroll
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    // limpa foco (foco em inputs/links pode forçar scroll)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    document.querySelectorAll<HTMLElement>('[autofocus]').forEach(el => el.removeAttribute('autofocus'));

    // window/document
    window.scrollTo(0, 0);
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // todos contêineres com overflow que geram scroll
    const all = document.querySelectorAll<HTMLElement>('*');
    all.forEach(el => {
      const cs = window.getComputedStyle(el);
      const overflowY = cs.overflowY;
      if ((overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') && el.scrollHeight > el.clientHeight) {
        el.scrollTop = 0;
      }
    });

    // reforço em frames subsequentes (garante após reflow/layout)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 60);

    // restaura comportamento anterior
    html.style.scrollBehavior = prevBehavior;
  };

  // ——— BLOQUEIA SCROLL durante loading/overlay ———
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevTouchAction = body.style.touchAction;
    const prevOverscrollHtml = (html.style as any).overscrollBehavior;
    const prevOverscrollBody = (body.style as any).overscrollBehavior;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';
    (html.style as any).overscrollBehavior = 'none';
    (body.style as any).overscrollBehavior = 'none';

    // garante topo quando o overlay monta
    resetAllScrollPositions();

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.touchAction = prevTouchAction;
      (html.style as any).overscrollBehavior = prevOverscrollHtml;
      (body.style as any).overscrollBehavior = prevOverscrollBody;
    };
  }, []);

  // ——— Libera "pode pular" (visual) ———
  useEffect(() => {
    const t = setTimeout(() => setCanSkip(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // ——— Termina animações e troca pra tela “Clique para entrar” ———
  useEffect(() => {
    const t = setTimeout(() => setFinishedLoading(true), 8000);
    return () => clearTimeout(t);
  }, []);

  // ——— Assim que entrar na fase final, já força topo (antes de revelar) ———
  useLayoutEffect(() => {
    if (finishedLoading) {
      resetAllScrollPositions();
    }
  }, [finishedLoading]);

  // ——— Clique/tecla para entrar: reset agressivo + onComplete ———
  useEffect(() => {
    if (!finishedLoading) return;

    const handleEnter = () => {
      resetAllScrollPositions();
      setTimeout(resetAllScrollPositions, 0);
      setTimeout(resetAllScrollPositions, 120);

      onComplete(); // o pai desmonta o overlay
    };

    window.addEventListener('click', handleEnter, { once: true });
    window.addEventListener('keydown', handleEnter, { once: true });

    return () => {
      window.removeEventListener('click', handleEnter);
      window.removeEventListener('keydown', handleEnter);
    };
  }, [finishedLoading, onComplete]);

  return (
    <div className="fixed inset-0 bg-terminal-black flex items-center justify-center z-50">
      {!finishedLoading ? (
        // Etapa 1: Loading
        <div className="text-center max-w-4xl px-8">
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
            <div
              className="mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              <ASCIIArt className="text-xs sm:text-sm md:text-base lg:text-lg" />
            </div>
          )}

          {step >= 2 && (
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
            >
              <TypeWriter
                text="welcome to 4bit core"
                speed={60}
                delay={4000}
                className="text-terminal-white text-xl md:text-2xl font-bold"
                showCursor={false}
              />
              <div className="mt-4">
                <TypeWriter
                  text={canSkip ? 'finishing boot sequence...' : 'Loading...'}
                  speed={40}
                  delay={6000}
                  className="text-terminal-light-gray text-sm animate-blink"
                  showCursor={false}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        // Etapa 2: Clique para entrar
        <div className="text-center">
          <p className="text-terminal-white text-2xl font-bold animate-bounce cursor-pointer">
            ► click to continue ◄

          </p>
          <p className="text-terminal-light-gray text-sm mt-2">
            (press any button)
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
