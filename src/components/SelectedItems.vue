<template>
  <div class="selected-movies">
    <table>
      <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Genres</th>
        <th>Language</th>
        <th>Score</th>
        <th>Remove</th>
      </thead>
      <tbody>
        <template v-if="selectedMovies.length">
          <tr
            v-for="selectedMovie in selectedMovies"
            :key="selectedMovie.show.id"
          >
            <td>
              <img v-bind:src="selectedMovie.show.image?.medium" />
            </td>
            <td>
              {{ selectedMovie.show.name }}
            </td>
            <td>
              {{ selectedMovie.show.genres.join(',')}}
            </td>
            <td>
              {{ selectedMovie.show.language }}
            </td>
            <td>
              {{ selectedMovie.score }}
            </td>
            <td>
              <div @click="handleClick(selectedMovie)" >
                <i class="remove-movie far fa-trash-alt"></i>
              </div>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="6">Nothing is selected</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue';
import { Movie } from '@/api/types';
import { useStore } from '../store';
import { MutationTypes } from '@/store/mutation-types';

export default defineComponent({
  name: 'SelectedItems',
  setup() {
    const store = useStore();

    const handleClick = (movie: Movie) => {
      store.commit(MutationTypes.TOGGLE_MOVIE, movie);
    };

    const selectedMovies = computed(() => Object.values(store.state.data.selectedMovies));

    return {
      selectedMovies,
      handleClick
    };
  },
});
</script>

<style scoped lang="scss">
  .selected-movies {
    width: 100%;
    margin-left: 25px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }

  th {
    height: 23px;
    font-size: 15px;
    font-weight: 600;
  }

  td {
    font-size: 13px;
    padding: 5px;

    img {
      width: 100px;
      height: auto;
    }
  }

  th, td {
    border: 1px solid #ccc;
  }

  .remove-movie {
    cursor: pointer;
  }
</style>
