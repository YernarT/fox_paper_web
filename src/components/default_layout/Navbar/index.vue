<template>
  <header class="itisit-container navbar">
    <Logotyp class="logotyp" />

    <nav class="block">
      <Button variant="primary" @click="modal.authModal.open = true">
        <span>Опубликовать обсуждение</span>
      </Button>
      <Button v-if="!user.isAuthenticated" @click="openRegisterModal">
        <span>Бесплатная регистрация</span>
      </Button>

      <Button v-if="user.isAuthenticated" @click="user.logout">
        <span>Выйти</span>
      </Button>

      <AuthModal />
    </nav>
  </header>
</template>

<script setup lang="ts">
// Vue
import { computed } from "vue";
// Store
import { useUser, defaultUserState } from "~/stores/user";
import { useGlobalModal } from "~/stores/modal";
// Component
import Logotyp from "../Logotyp.vue";
import AuthModal from "../AuthModal/index.vue";
import Button from "~/components/common/Button/index.vue";

const user = useUser();
const route = useRoute();
const modal = useGlobalModal();

const openRegisterModal = () => {
  modal.$patch({
    authModal: {
      open: true,
      modalType: 'Register'
    }
  })
}
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.navbar {
  height: 75px;
  border-bottom: 1px solid var(--c-border);
  background: var(--c-background);
  user-select: none;
  @include flex($alignItems: center);

  .block {
    margin-left: auto;
    @include flex($alignItems: center, $gap: 24px);
  }
}
</style>
