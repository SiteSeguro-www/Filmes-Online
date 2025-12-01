import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import AIChatModal from './components/AIChatModal';
import { ALL_MOVIES, MOCK_MOVIES } from './constants';
import { Genre } from './types';

function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Filter movies by genre
  const originals = ALL_MOVIES.filter(m => m.genre === Genre.Originals);
  const trending = ALL_MOVIES.filter(m => m.genre === Genre.Trending);
  const action = ALL_MOVIES.filter(m => m.genre === Genre.Action);
  const comedy = ALL_MOVIES.filter(m => m.genre === Genre.Comedy);
  const scifi = ALL_MOVIES.filter(m => m.genre === Genre.SciFi);

  // Select a random movie for Hero
  const randomMovie = MOCK_MOVIES[Math.floor(Math.random() * MOCK_MOVIES.length)];

  return (
    <div className="bg-[#141414] min-h-screen text-white pb-20 overflow-hidden">
      <Navbar onOpenSearch={() => setIsAiModalOpen(true)} />
      
      <Hero movie={randomMovie} />

      <div className="relative z-30 -mt-16 md:-mt-32 space-y-4 md:space-y-8 pl-4 pb-8">
        <Row title={Genre.Trending} movies={trending} />
        <Row title={Genre.Originals} movies={originals} />
        <Row title={Genre.Action} movies={action} />
        <Row title={Genre.Comedy} movies={comedy} />
        <Row title={Genre.SciFi} movies={scifi} />
      </div>

      <AIChatModal 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
      />

      <footer className="px-12 py-8 text-gray-500 text-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
           <ul>
             <li className="mb-2 hover:underline cursor-pointer">Audio and Subtitles</li>
             <li className="mb-2 hover:underline cursor-pointer">Media Center</li>
             <li className="mb-2 hover:underline cursor-pointer">Privacy</li>
             <li className="mb-2 hover:underline cursor-pointer">Contact Us</li>
           </ul>
           <ul>
             <li className="mb-2 hover:underline cursor-pointer">Audio Description</li>
             <li className="mb-2 hover:underline cursor-pointer">Investor Relations</li>
             <li className="mb-2 hover:underline cursor-pointer">Legal Notices</li>
           </ul>
           <ul>
             <li className="mb-2 hover:underline cursor-pointer">Help Center</li>
             <li className="mb-2 hover:underline cursor-pointer">Jobs</li>
             <li className="mb-2 hover:underline cursor-pointer">Cookie Preferences</li>
           </ul>
           <ul>
             <li className="mb-2 hover:underline cursor-pointer">Gift Cards</li>
             <li className="mb-2 hover:underline cursor-pointer">Terms of Use</li>
             <li className="mb-2 hover:underline cursor-pointer">Corporate Information</li>
           </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-4 text-xs">
          © 2024 NetClone AI Simulation.
        </div>
      </footer>
    </div>
  );
}

export default App;