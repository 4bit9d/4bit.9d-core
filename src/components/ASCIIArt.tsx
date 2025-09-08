interface ASCIIArtProps {
  className?: string;
}

const ASCIIArt = ({ className = '' }: ASCIIArtProps) => {
  const asciiArt = `   
                                  
        ,d8    88           88                 ⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⠶⠶⠷⠶⠶⣦⣤⡀⠀⠀⠀⠀⠀⠀
      ,d888    88           ""    ,d           ⠀⠀⠀⠀⠀⢠⡶⠟⠉⠀⠀⠀⠀⠀⠀⠀⠉⠻⢶⡄⠀⠀⠀⠀
    ,d8" 88    88                 88           ⠀⠀⠀⠀⣴⡟⣥⣤⣤⣤⣤⣤⣤⣤⣤⡀⠀⠀⠈⢻⣦⠀⠀⠀
  ,d8"   88    88,dPPYba,   88  MM88MMM         ⠀⠀⠀⢰⡟⠀⠻⠿⠿⠟⠁⣼⣿⣿⣿⣷⡀⠀⠀⠀⢻⡆⠀⠀
,d8"     88    88P'    "8a  88    88            ⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⣼⣿⡏⠙⣿⣿⣇⠀⠀⠀⠘⣿⠀⠀
8888888888888  88       d8  88    88            ⠀⠀⠀⣿⡄⠀⠀⠀⠀⣴⣿⠟⠃⠀⠙⣿⣿⡆⠀⠀⢠⣿⠀⠀
         88    88b,   ,a8"  88    88,           ⠀⠀⠀⠹⣧⠀⠀⠀⢸⡟⠁⠀⠀⠀⠀⠘⢿⣷⡀⠀⣼⠏⠀⠀
         88    8Y"Ybbd8"'   88    "Y888         ⠀⠀⠀⠀⠻⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠃⣴⠟⠀⠀⠀
                                               ⠀⠀⠀⠀⠀⠙⢷⣤⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠋⠀⠀⠀⠀
                                               ⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠶⠶⠶⠶⠶⠟⠛⠁⠀⠀⠀⠀⠀⠀

`;

  return (
    <pre className={`font-mono text-terminal-white leading-tight retro-glow animate-retro-flicker ${className}`}>
      {asciiArt}
    </pre>
  );
};

export default ASCIIArt;