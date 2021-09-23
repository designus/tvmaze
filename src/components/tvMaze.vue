<template>
  <div class="tv-maze">
    <h3>Tv maze public API</h3>
    <div class="content">
      <SearchInput />
      <SelectedItems />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from './SearchInput.vue';
import SelectedItems from './SelectedItems.vue';

export default defineComponent({
  name: '',
  components: {
    SearchInput,
    SelectedItems
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tv-maze {
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

h3 {
  margin: 40px 0 0;
}
</style>
