<template>
  <main class="itisit-container home-page">
    <Search @search="onSearch" />

    <ol class="papers">
      <Paper v-for="i in '01234556789'" :key="i" />
    </ol>
  </main>
</template>

<script setup lang="ts">
import Search from "~/components/index_page/Search.vue";
import Paper from "~/components/research/Paper.vue";

defineOptions({ name: "IndexPage" });

const onSearch = (searchText: string) => {
  console.log("search text: ", searchText);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.home-page {
  padding-top: 40px;
  padding-bottom: 40px;
  @include flex($direction: column);

  .search-wrap {
    align-self: center;
    margin-bottom: 40px;
  }

  .papers {
    @include flex($direction: column, $gap: 24px);
  }
}
</style>
