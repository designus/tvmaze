import { Movie } from '@/api/types';

export interface State {
  isLoading: boolean;
  error: string | null;
  data: {
    searchResults: Movie[];
    selectedMovies: Record<string, Movie>;
  }
}
