<template>
  <main class="itisit-container home-page">
    <Search @search="onSearch" />
  </main>
</template>

<script setup lang="ts">
import Search from "~/components/index_page/Search.vue";

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

  .search {
    align-self: center;
  }
}
</style>
