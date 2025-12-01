import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenSearch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-netflix-dark' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <div className="flex items-center space-x-8">
          <h1 className="text-netflix-red text-2xl md:text-4xl font-bold cursor-pointer tracking-tighter">NETFLY</h1>
          <ul className="hidden md:flex space-x-6 text-sm text-gray-300">
            <li className="cursor-pointer hover:text-white transition font-medium">Início</li>
            <li className="cursor-pointer hover:text-white transition">Séries</li>
            <li className="cursor-pointer hover:text-white transition">Filmes</li>
            <li className="cursor-pointer hover:text-white transition">Bombando</li>
            <li className="cursor-pointer hover:text-white transition">Minha Lista</li>
          </ul>
        </div>

        <div className="flex items-center space-x-6 text-white">
          <button 
            onClick={onOpenSearch}
            className="flex items-center gap-2 hover:text-gray-300 transition"
            title="Ask AI"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <span className="hidden sm:inline font-medium">Netfly AI</span>
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <img 
              src="https://picsum.photos/id/64/100/100" 
              alt="User" 
              className="w-8 h-8 rounded" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;