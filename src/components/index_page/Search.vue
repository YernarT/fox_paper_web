<template>
  <div class="search-wrap">
    <Statistic />

    <div class="search" :class="{ 'search--focused': isFocused }">
      <Input
        v-model:value="searchText"
        placeholder="Пойск"
        @blur="isFocused = false"
        @focus="isFocused = true"
      />
      <Button icon variant="primary" @click="emit('search', searchText)">
        <Icon name="material-symbols:search" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref } from "vue";

// Components
import Input from "~/components/common/Input/index.vue";
import Button from "~/components/common/Button/index.vue";
import Statistic from "~/components/index_page/Statistic.vue";

defineOptions({ name: "Search" });

const emit = defineEmits<{
  (event: "search", searchText: string): void;
}>();

const isFocused = ref(false);
const searchText = ref("");
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.search-wrap {
  @include flex($direction: column, $alignItems: center, $gap: 8px);
}

.search {
  width: 560px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 16px;
  transition: transform var(--transition), box-shadow var(--transition);
  @include flex($justifyContent: center);

  &--focused {
    transform: translateY(2px) scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.2) 0 30px 40px -6px;
  }

  :deep(.input-wrap) {
    width: 100%;
    height: 50px;
    padding: 2px 0 2px 8px;
    border: 1px solid var(--c-border);
    border-right: none;

    input {
      font-size: 20px;
      padding-right: 8px;
    }
  }

  .btn {
    height: 50px;
    padding: 4px 10px;
  }
}
</style>
