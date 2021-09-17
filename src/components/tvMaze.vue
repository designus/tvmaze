<template>
  <div class="tvMaze">
    <h3>Tv maze public API</h3>
    <Search />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from './Search.vue';

export default defineComponent({
  name: '',
  components: {
    Search
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
