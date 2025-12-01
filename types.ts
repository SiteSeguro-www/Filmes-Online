export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  backdropUrl: string;
  match: number; // Percentage match
  year: number;
  genre: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Genre {
  Trending = 'Trending Now',
  Originals = 'NetClone Originals',
  Action = 'Action Thrillers',
  Comedy = 'Comedies',
  SciFi = 'Sci-Fi & Fantasy'
}