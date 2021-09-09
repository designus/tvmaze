import { InjectionKey } from 'vue';
import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex';
import { Movie } from '@/api/types';

const debug = process.env.NODE_ENV !== 'production';

export interface State {
  isLoading: boolean;
  error: string | null;
  data: {
    searchResults: Movie[];
    selectedMovies: Record<string, Movie>; 
  }
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    isLoading: false,
    error: null,
    data: {
      searchResults: [],
      selectedMovies: {}
    }
  },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export function useStore() {
  return baseUseStore(key);
}
