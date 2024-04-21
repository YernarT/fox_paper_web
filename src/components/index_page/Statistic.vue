<template>
  <div class="statistic">
    <p>Всего 883,343,882 документа</p>
    <p>Количество пользователей 143,117</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Statistic" });
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.statistic {
  font-size: 14px;
  color: var(--c-text-muted);
  @include flex($alignItems: center, $gap: 8px);
}
</style>
