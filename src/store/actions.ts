import { ActionTree, ActionContext } from 'vuex';
import { Movie } from '@/api/types';
import { State } from './state';
import { Mutations } from './mutations'
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.FETCH_MOVIES](context: AugmentedActionContext, query: string): Promise<Movie | void>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.FETCH_MOVIES]: async (context, query) => {
    try {
      const data: Movie[] = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then(data => data.json());
      context.commit(MutationTypes.SET_SEARCH_RESULTS, data);
    } catch (err) {
      context.commit(MutationTypes.SET_ERROR, 'Unable to fetch data');
    }
  }
}