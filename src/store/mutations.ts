import { MutationTree } from 'vuex';
import { Movie } from '@/api/types';
import { State } from './state';
import { MutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [MutationTypes.SET_ERROR](state: S, error: string): void;
  [MutationTypes.SET_IS_LOADING](state: S): void;
  [MutationTypes.SET_SEARCH_RESULTS](state: S, movies: Movie[]): void;
  [MutationTypes.TOGGLE_MOVIE](state: S, movie: Movie): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ERROR]: (state, error) => {
    state.error = error;
    state.isLoading = false;
  },
  [MutationTypes.SET_IS_LOADING]: (state) => {
    state.isLoading = true;
    state.error = null;
  },
  [MutationTypes.SET_SEARCH_RESULTS]: (state, movies) => {
    state.data.searchResults = movies;
    state.isLoading = false;
  },
  [MutationTypes.TOGGLE_MOVIE]: (state, movie) => {
    if (state.data.selectedMovies[movie.show.id]) {
      delete state.data.selectedMovies[movie.show.id];
    } else {
      state.data.selectedMovies[movie.show.id] = movie;
    }
  },
};
