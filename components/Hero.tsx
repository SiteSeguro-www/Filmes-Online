import React from 'react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <div className="relative h-[56.25vw] max-h-[85vh] w-full text-white">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent z-10" />
        <img 
          src={movie.backdropUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="absolute top-[30%] md:top-[40%] left-4 md:left-12 z-20 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          {movie.title}
        </h1>
        <p className="text-lg text-green-400 font-semibold mb-2">{movie.match}% Relevante</p>
        <p className="text-shadow-md text-sm md:text-lg mb-6 line-clamp-3 md:line-clamp-none text-gray-100">
          {movie.description}
        </p>
        
        <div className="flex space-x-3">
          <button className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-opacity-80 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            Assistir
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            Mais informações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;