<template>
  <div class="logotyp" @click="$router.push('/')">
    <img class="logo" src="~/assets/image/logo.png" alt="Logo" />
    <span class="brand">ITReview</span>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.logotyp {
  cursor: pointer;
  @include flex($alignItems: center, $gap: 8px);

  .logo {
    width: 46px;
    height: 46px;
    object-fit: cover;
  }

  .brand {
    font-size: 24px;
  }
}
</style>
