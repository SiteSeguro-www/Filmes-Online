import React, { useRef } from 'react';
import { Movie } from '../types';

interface RowProps {
  title: string;
  movies: Movie[];
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { current } = rowRef;
      const scrollAmount = window.innerWidth / 2 > 600 ? window.innerWidth / 2 : 300;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="mb-8 px-4 md:px-12 group relative">
      <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-4 transition-colors hover:text-white cursor-pointer inline-block">
        {title}
      </h2>
      
      <div className="relative group/row">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 hidden group-hover/row:flex items-center justify-center transition-all opacity-0 group-hover/row:opacity-100 h-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Scroll Container */}
        <div 
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll no-scrollbar scroll-smooth py-4"
        >
          {movies.map((movie) => (
            <div 
              key={`${title}-${movie.id}`}
              className="flex-none w-[160px] md:w-[240px] relative cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-30 rounded-md overflow-hidden shadow-lg group/card"
            >
              <img 
                src={movie.imageUrl} 
                alt={movie.title} 
                className="w-full h-[240px] md:h-[360px] object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex flex-col justify-end p-2">
                 <h3 className="text-sm font-bold">{movie.title}</h3>
                 <div className="flex items-center gap-2 text-xs text-green-400 mt-1">
                    <span>{movie.match}% Match</span>
                    <span className="text-gray-300 border border-gray-500 px-1 rounded">HD</span>
                 </div>
                 <div className="flex gap-2 mt-1 text-xs text-gray-300">
                    <span>Action</span>
                    <span>&bull;</span>
                    <span>Sci-Fi</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 hidden group-hover/row:flex items-center justify-center transition-all opacity-0 group-hover/row:opacity-100 h-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Row;