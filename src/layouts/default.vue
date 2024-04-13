<template>
  <div class="default-layout">
    <Navbar class="navbar" />
    <slot></slot>
    <TheFooter v-once />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/default_layout/Navbar/index.vue";
import TheFooter from "~/components/default_layout/TheFooter/index.vue";

defineOptions({ name: "DefaultLayout" });
</script>

<style scoped>
.default-layout {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 0px) 0% 0% /
      36px 36px,
    linear-gradient(90deg, rgba(0, 0, 0, 0.25) 1px, transparent 0px) 0% 0% /
      36px 36px;
}
</style>
