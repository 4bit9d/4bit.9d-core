import React, { useState } from 'react';
import TypeWriter from './TypeWriter';

const SocialLinks = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  
  const socialData = [
    { name: 'Discord', handle: '@4bit.9d', url: 'https://discord.com/users/1258947724795969606' },
    { name: 'YouTube', handle: '@4bit.9d', url: 'https://www.youtube.com/@4bit.9d' },
    { name: 'GitHub', handle: '@4bit9d', url: 'https://github.com/4bit9d' },
    { name: 'Twitter', handle: '4bit.9d', url: 'https://x.com/4bit_9d' },
  ];

  const handleSocialClick = (e, social) => {
    if (social.url) {
      e.preventDefault();
      setSelectedUrl(social.url);
      setIsPopupActive(true);
    }
  };

  const closePopup = () => {
    setIsPopupActive(false);
    setSelectedUrl('');
  };

  const handleConfirm = () => {
    if (selectedUrl) {
      window.open(selectedUrl, '_blank', 'noopener,noreferrer');
    }
    closePopup();
  };

  return (
    <>
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ffffff52, 0 0 10px #fff, 0 0 20px #b8b8b8, 0 0 30px #c4c4c4;
          }
          100% {
            box-shadow: 0 0 10px #ffffff63, 0 0 20px #fff, 0 0 30px #d3d3d3, 0 0 40px #c5c5c5;
          }
        }

        @keyframes glow1 {
          0% {
            text-shadow: 0 0 2px #ffffff52, 0 0 5px #fff, 0 0 10px #b8b8b8, 0 0 10px #c4c4c4;
          }
          100% {
            text-shadow: 0 0 5px #ffffff63, 0 0 10px #fff, 0 0 20px #d3d3d3, 0 0 20px #c5c5c5;
          }
        }


        @keyframes scanlines {
          from {
            background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%);
            background-size: 100% 4px;
          }
          to {
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 50%, transparent 51%);
            background-size: 100% 4px;
          }
        }

        @keyframes opacity {
          0% {opacity: .6;}
          20% {opacity:.3;}
          35% {opacity:.5;}
          50% {opacity:.8;}
          60% {opacity:.4;}
          80% {opacity:.7;}
          100% {opacity:.6;}
        }

        .popup-overlay {
          visibility: hidden;
          opacity: 0;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
          z-index: 9999;
          cursor: url('/media/WinOS Pointer.cur'), auto;
          backdrop-filter: blur(8px);
          background-color: rgba(0, 0, 0, 0.6);
        }

        .popup-overlay.active {
          visibility: visible;
          opacity: 1;
        }

        .popup {
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid white;
          border-radius: 10px;
          box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.14);
          width: 400px;
          overflow: hidden;
          transform: scale(0.5);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          font-family: 'Satoshi', sans-serif;
          position: relative;
        }

        .popup-overlay.active .popup {
          transform: scale(1);
          opacity: 1; 
        }

        .popup-header {
          background-color: rgba(0, 0, 0, 0.7);
          color: #ffffff;
          padding: 15px;
          font-size: 1.5em;
          font-weight: bold;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          animation: glow1 1s ease-in-out infinite alternate;
        }

        .popup-content {
          padding: 25px;
          color: white;
          font-size: 1.1em;
          line-height: 1.5;
          text-align: center;
        }

        .popup-actions {
          padding: 20px;
          text-align: right;
          background-color: rgba(0, 0, 0, 0.4);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn {
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 14px;
          font-weight: bold;
          cursor: url('/media/WinOS Pointer.cur'), auto;
          border: 1px solid white;
          margin-left: 15px;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          outline: none;
          background: transparent;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
          animation: glow2 1s ease-in-out infinite alternate;
        }

        .btn-primary {
          background-color: rgba(0, 0, 0, 1);
          color: #ffffffff;
        }

        .btn-secondary {
          background-color: rgba(255, 255, 255, 1);
          color:rgba(0, 0, 0, 0.8); 
        }

        .popup:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3) 51%);
          background-size: 100% 4px;
          will-change: background, background-size;
          animation: scanlines 0.2s linear infinite;
          z-index: 10;
          opacity: 0.3;
          border-radius: 10px;
        }

        .scanlines-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10000;
          opacity: 0.6;
          will-change: opacity;
          animation: opacity 3s linear infinite;
        }

        .scanlines-overlay:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%);
          background-size: 100% 4px;
          will-change: background, background-size;
          animation: scanlines 0.2s linear infinite;
        }

        @media (max-width: 480px) {
          .popup {
            width: 90%;
            max-width: 350px;
          }
          
          .popup-header {
            font-size: 1.2em;
            padding: 12px;
          }
          
          .popup-content {
            padding: 15px;
            font-size: 1em;
          }
          
          .btn {
            padding: 8px 15px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="space-y-4">
        <div className="border border-terminal-gray p-6 bg-terminal-black">
          <div className="mb-4">
            <TypeWriter 
              text="$ ls -la /social"
              speed={30}
              delay={2000}
              showCursor={false}
              className="text-terminal-light-gray"
            />
          </div>
          
          <div className="space-y-2">
            {socialData.map((social, index) => (
              <div key={social.name} className="opacity-0 animate-slide-up" style={{ animationDelay: `${3 + index * 0.3}s`, animationFillMode: 'forwards' }}>
                <a 
                  href="#"
                  onClick={(e) => handleSocialClick(e, social)}
                  className="block hover:bg-terminal-dark-gray p-2 transition-colors duration-200 group"
                >
                  <span className="text-terminal-white">
                    drwxr-xr-x 2 user user 4096 {new Date().toLocaleDateString()} 
                  </span>
                  <span className="text-terminal-light-gray ml-2">
                    {social.name.toLowerCase()}/
                  </span>
                  <span className="text-terminal-white group-hover:animate-pixel-pulse retro-glow">
                    {social.handle}
                  </span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-6 opacity-0 animate-slide-up" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
            <TypeWriter 
              text="\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"
              speed={30}
              delay={5000}
              showCursor={false}
              className="text-terminal-light-gray"
            />
            <div className="mt-2 text-terminal-white">
              <TypeWriter 
                text="⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⠋⠻⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⢸⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣿⡀⠀⠘⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠃⠀⠀⠀⢸⠏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠃⠀⠀⠀⠻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠀⠀⠀⠀⠀⣿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠘⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⣠⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠈⢻⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠁⠀⠀⠀⠀⠀⠀⠀⢻⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠙⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡿⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠀⢠⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡄⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣰⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⠀⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣠⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠷⠛⠋⠉⠉⠛⠻⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠁⠀⢀⣀⣀⣀⠀⠀⠀⠙⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⡟⠉⠉⠉⠙⠒⠦⣬⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⡟⠋⣁⣀⡀⠀⠀⠀⠀⠈⠻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠇⠀⢀⠀⢹⠆⠀⢀⠤⣄⣠⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢰⣿⠗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡋⠀⠀⠀⠈⠉⠋⠀⢰⣇⣠⣾⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠸⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣿⣿⣿⣿⡿⠋⠠⡀⠀⠀⠀⠠⣄⡰⠃⢀⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⠃⠀⠀⠙⢦⣀⠀⠻⢂⣠⣴⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⢿⣄⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⣀⣀⣭⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣻⠆⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠹⣿⣿⣦⡀⠀⠀⠀⠀⠀⢀⣤⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⡀⠀⠀⢀⣴⣿⣿⣿⣿⡏⣿⣿⠃⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⣿⣿⢹⣿⣶⣄⠀⠀⢀⣸⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢻⣷⣤⣾⣿⣿⣿⣿⣿⣿⠁⢿⣿⡀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣼⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠸⣿⣷⣀⣿⣿⣿⡿⠟⠛⠉⠉⠁⠀⠀⠀⠈⠉⠙⠻⢿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣴⣿⣿⣿⣋⣉⠉⠛⠿⣿⣿⣿⡄⣹⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⢰⠒⠤⣀⡀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣾⣿⣿⣿⣿⣿⣙⣉⣀⣀⣈⣽⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⣠⢄⣑⣦⣤⡉⠓⠂⠠⣴⣿⣿⣿⡇⠀⠉⠛⠿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⣿⠛⠋⠉⠉⣟⢻⡯⣭⢍⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣇⣳⠤⠤⠤⠀⠀⠀⠀⢿⣿⣿⣿⠇⣠⡇⠀⣀⠈⡙⢿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣾⣿⣤⡤⠤⣀⡿⢸⠃⡸⢘⣧⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣜⣯⣭⠭⠤⠀⠀⣀⣼⣿⣿⡟⣰⣿⡇⢠⣿⣆⣿⣷⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣦⡈⠁⠀⠀⠑⢋⣴⣿⣿⣿⣿⣿⣿⣦⣄⡀⠀⠀⠀⠀⠀⠈⠑⠿⠖⠚⠉⠉⠉⣻⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠹⣿⣿⣿⣿⣧⠀⠀⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣤⣤⣤⣤⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⣿⣛⡛⠛⠲⠶⠛⢉⣼⣿⣿⣿⣿⣿⡿⢹⣿⣿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⣿⣿⣿⣿⠀⠀⠀⠈⠉⠉⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠻⠿⣿⡷⠦⠴⣾⣿⣿⣿⣿⣿⣿⠟⠀⢸⣿⣿⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⠟⠁⢀⡆⢸⣿⡇⢠⠘⣿⣿⣿⣿⣿⣿⣿⣿⡿⠈⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠏⢀⣴⡟⠀⢸⣿⡇⢸⡆⢻⣿⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠋⣠⣾⠏⠀⠀⠈⣿⣇⠘⣿⡈⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⢻⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠃⣰⣿⡟⠀⣠⡆⠀⣿⣿⠀⢻⣧⠘⣿⣿⣿⣿⣿⡿⢀⣿⣿⡏⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⡏⣴⣿⡿⠀⢰⣿⠃⠀⢺⣿⡆⠈⢿⣷⡘⢿⣿⣿⠟⢁⣾⣿⡿⠀⣸⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣼⣿⣿⠇⢀⣿⣿⠀⠀⠸⣿⣿⡀⠘⣿⣿⣦⣤⣤⣴⣿⣿⡿⠁⢀⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡿⠀⣼⣿⡇⠀⠀⠀⣿⣿⣷⡄⠈⠻⠿⣿⣿⡿⠿⠛⠀⠀⢸⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡇⢀⣿⣿⡇⠀⠀⠀⢹⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠇⣸⣿⣿⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⢠⣿⣿⣿⠀⢠⡀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣾⣿⣿⣿⠀⢸⣧⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣧⡀⠀⠈⢿⣿⣿⣿⣿⠏⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣷⣄⠀⠀⠉⠛⠉⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣿⡿⢶⣶⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣷⣤⣀⡀⠀⣀⣀⣠⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠹⣿⣷⣦⣌⡙⠿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⢰⡄⠘⢿⣿⣿⣿⣦⣌⠙⣿⣿⣦⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣦⣬⣭⣽⣿⡍⣿⡇⢸⣿⣿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⢏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⣴⢸⣿⣿⣿⣿⣿⡟⣼⣿⣿⠀⠙⢿⣧⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣇⠘⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢰⣿⢼⣿⣿⣿⣿⡟⢰⣿⣿⣿⣆⠀⠈⠙⣿⣦⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⡄⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢠⣿⣿⢸⣿⣿⣿⣿⡄⢹⣿⣿⣿⠿⢧⡀⠀⣿⣿⣷⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⡻⢿⣦⣄⣈⣙⣛⣛⣛⣛⡉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣾⣿⡏⣼⣿⣿⣿⣿⣿⣄⠋⣩⣶⡇⠈⣷⠀⣿⣿⣿⣷
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣷⣮⣿⡿⣿⣿⣿⣿⣿⣿⣶⣄⠙⢿⣿⣿⣏⡻⢿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⢀⣿⣿⣿⣿⣿⡿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⠻⣿⣿⣦⣌⠙⠻⠿⢿⢁⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⢸⣿⣿⣿⣿⡿⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⣿⣿⣿⣿⣿⣿⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣷⣦⣄⡀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠁⢀⣾⢸⣿⣿⣿⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⢹⣿⣿⣿⣿⣿⣶⣤⣄⣉⠙⠛⠿⣿⣿⣿⣿⣿⣿⡌⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣾⡟⢸⣿⣿⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣌⣙⠻⢿⣿⣿⡄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⡇⢸⣿⡟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣷⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣯⠻⣿⣿⣿⣿⣿⣷⣾⣿⣿⣷⣌⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣾⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣶⣌⠛⢿⣿⣿⣿⣿⣿⣿⣧⠙⢿⣿⣿⣿⡟⢉⣉⣉⣉⣩⣵⣼⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⣡⣾⣿⣿⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷⣦⣈⠛⠿⣿⣿⣿⣿⣷⡀⠻⣿⡟⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣶⣾⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣷⣦⣄⠙⠻⣿⣿⣿⣄⠉⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣦⡈⠻⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢿⣶⣌⡙⠛⠛⠛⠛⣋⡿⠟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣷⡶⠖⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
                speed={0.5}
                delay={6000}
                className="text-terminal-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      <div className={`popup-overlay ${isPopupActive ? 'active' : ''}`} onClick={closePopup}>
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="popup-header">
            system alert !
          </div>
          <div className="popup-content">
            you will be redirected. is that okay?
          </div>
          <div className="popup-actions">
            <button className="btn btn-primary" onClick={closePopup}>
              no, im afraid
            </button>
            <button className="btn btn-secondary" onClick={handleConfirm}>
              yes xd
            </button>
          </div>
        </div>
      </div>

      {/* Scanlines quando o popup está ativo */}
      {isPopupActive && <div className="scanlines-overlay"></div>}
    </>
  );
};

export default SocialLinks;