<template>
  <div class="search-component">
    <input
      class="search-input"
      type="text"
      placeholder="Search movies"
      :value="query"
      @input="updateQuery"
    />
    <div v-if="searchResults.length > 0" class="search-results">
      <div class="search-item header">
        <div class="name">
          Name
        </div>
        <div class="score">
          Score
        </div>
      </div>
      <div
        class="search-item"
        @click="handleClick(movie)"
        v-for="movie in searchResults"
        :key="movie.show.id"
      >
        <div class="name">
          {{ movie.show.name }}
        </div>
        <div class="score">
          {{ movie.score }}
        </div>
        <div v-if="!!selectedMovies[movie.show.id]" class="selected-icon">
          <i class="fas fa-check"></i>
        </div>
      </div>
    </div>
    <div class="search-results" v-else-if="query && searchResults.length === 0">
      No results found
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed
} from 'vue';
import { Movie } from '@/api/types';
import { useStore } from '../store';
import { ActionTypes } from '../store/action-types';
import { MutationTypes } from '../store/mutation-types';

export default defineComponent({
  name: 'Search',
  setup() {
    const query = ref('');
    const store = useStore();

    const updateQuery = (e: any) => {
      query.value = e.target.value;
      store.dispatch(ActionTypes.FETCH_MOVIES, e.target.value);
    };

    const handleClick = (movie: Movie) => {
      store.commit(MutationTypes.TOGGLE_MOVIE, movie);
    };

    const searchResults = computed(() => store.state.data.searchResults);

    const selectedMovies = computed(() => store.state.data.selectedMovies);

    return {
      query,
      updateQuery,
      searchResults,
      handleClick,
      selectedMovies
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-component {
  padding: 20px 0;
  width: 300px;
}

.search-input {
  padding: 5px 10px;
  margin: 0 0 15px;
  width: calc(100% - 20px);
  &:focus {
    outline: none;
  }
}

.selected-icon {
  margin-left: 10px;
}

.search-input,
.search-results {
  border: 1px solid #ccc;
}

.search-results {
  width: 100%;
}

.score {
  margin-left: auto;
}

.search-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  text-align: left;
  cursor: pointer;

  &.header {
    font-weight: bold;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
}
</style>
