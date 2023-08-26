<template>
  <div class="default-layout">
    <Navbar class="navbar" />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/default_layout/Navbar/index.vue";
import Footer from "~/components/default_layout/Footer/index.vue";
</script>

<style scoped>
.default-layout {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 0px) 0% 0% /
      15px 15px,
    linear-gradient(90deg, rgba(0, 0, 0, 0.25) 1px, transparent 0px) 0% 0% /
      15px 15px,
    linear-gradient(rgb(255, 255, 255) 1px, transparent 0px) 0% 0% / 75px 75px,
    linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 0px) 0% 0% / 75px
      75px rgb(255, 255, 255);
}
</style>
