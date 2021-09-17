import { InjectionKey } from 'vue';
import {
  createStore, createLogger, Store, useStore as baseUseStore,
} from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { State } from './state';

const debug = process.env.NODE_ENV !== 'production';

export const key: InjectionKey<Store<State>> = Symbol('injection key');

export const store = createStore<State>({
  state: {
    isLoading: false,
    error: null,
    data: {
      searchResults: [],
      selectedMovies: {},
    },
  },
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
