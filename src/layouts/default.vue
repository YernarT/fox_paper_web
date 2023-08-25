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
  background: var(--c-background);

  @media screen and (max-width: 600px) {
    .navbar {
      display: none;
    }
  }
}
</style>
