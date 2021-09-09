import { Movie } from './types';

export const fetchData = async (query: string): Promise<Movie[]> => {
  try {
    return fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then(data => data.json());
  } catch (err) {
    console.log('Error', err);
    return [];
  }
}