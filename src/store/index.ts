import { InjectionKey } from 'vue';
import {
  createStore, createLogger, Store, useStore as baseUseStore,
} from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { State } from './state';

const debug = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

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
  console.log('Inside use store', key);
  return baseUseStore(key);
}
