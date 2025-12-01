import { Movie, Genre } from './types';

// Helper to generate consistent fake images
const getImg = (id: number, width: number, height: number) => `https://picsum.photos/id/${id}/${width}/${height}`;

export const MOCK_MOVIES: Movie[] = [
  {
    id: 10,
    title: "Cyber Chronicles",
    description: "In a future where memories are currency, a data thief uncovers a conspiracy that threatens to wipe out humanity's collective history.",
    imageUrl: getImg(10, 300, 450),
    backdropUrl: getImg(10, 1920, 1080),
    match: 98,
    year: 2024,
    genre: Genre.Originals
  },
  {
    id: 25,
    title: "Forest of Echoes",
    description: "A biologist discovers a forest where sound behaves backwards, revealing secrets of the past that were meant to stay hidden.",
    imageUrl: getImg(25, 300, 450),
    backdropUrl: getImg(25, 1920, 1080),
    match: 95,
    year: 2023,
    genre: Genre.Trending
  },
  {
    id: 38,
    title: "The Last Barista",
    description: "In a world dominated by instant coffee machines, one man fights to keep the art of brewing alive.",
    imageUrl: getImg(38, 300, 450),
    backdropUrl: getImg(38, 1920, 1080),
    match: 88,
    year: 2024,
    genre: Genre.Comedy
  },
  {
    id: 42,
    title: "Neon Nights",
    description: "A gritty detective story set in a city that never sleeps, literally, due to a rogue satellite reflecting constant sunlight.",
    imageUrl: getImg(42, 300, 450),
    backdropUrl: getImg(42, 1920, 1080),
    match: 92,
    year: 2022,
    genre: Genre.Action
  },
  {
    id: 55,
    title: "Space Drifters",
    description: "Two astronauts stranded in deep space must rely on a sarcastic AI to navigate a wormhole back home.",
    imageUrl: getImg(55, 300, 450),
    backdropUrl: getImg(55, 1920, 1080),
    match: 99,
    year: 2025,
    genre: Genre.SciFi
  },
  {
    id: 67,
    title: "Ocean's Deep",
    description: "An underwater expedition finds an ancient civilization that isn't too happy about visitors.",
    imageUrl: getImg(67, 300, 450),
    backdropUrl: getImg(67, 1920, 1080),
    match: 85,
    year: 2023,
    genre: Genre.Action
  },
  {
    id: 71,
    title: "Laugh Track",
    description: "A sitcom character realizes they are in a show and tries to escape into the real world.",
    imageUrl: getImg(71, 300, 450),
    backdropUrl: getImg(71, 1920, 1080),
    match: 90,
    year: 2021,
    genre: Genre.Comedy
  },
  {
    id: 88,
    title: "Quantum Leapfrog",
    description: "A physics experiment goes wrong, causing the protagonist to jump between parallel universes every time they sneeze.",
    imageUrl: getImg(88, 300, 450),
    backdropUrl: getImg(88, 1920, 1080),
    match: 94,
    year: 2024,
    genre: Genre.SciFi
  }
];

// Replicate data to fill rows
export const ALL_MOVIES = [...MOCK_MOVIES, ...MOCK_MOVIES.map(m => ({...m, id: m.id + 100}))];