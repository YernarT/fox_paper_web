<template>
  <header class="itisit-container navbar">
    <Logotyp class="logotyp" />

    <nav class="block">
      <Button variant="primary" @click="goToPublish">
        <span>Опубликовать статя</span>
      </Button>
      <Button v-if="!userStore.isAuthenticated" @click="openRegisterModal">
        <span>Бесплатная регистрация</span>
      </Button>

      <Button v-if="userStore.isAuthenticated" @click="userStore.logout">
        <span>Выйти</span>
      </Button>

      <AuthModal />
    </nav>
  </header>
</template>

<script setup lang="ts">
// Store
import { useUserStore } from "~/stores/user";
import { useGlobalModal } from "~/stores/modal";
// Component
import Logotyp from "~/components/default_layout/Logotyp.vue";
import AuthModal from "~/components/default_layout/AuthModal/index.vue";
import Button from "~/components/common/Button/index.vue";

defineOptions({ name: "Navbar" });

const userStore = useUserStore();
const router = useRouter();
const modal = useGlobalModal();

const openRegisterModal = () => {
  modal.$patch({
    authModal: {
      open: true,
      modalType: "Register",
    },
  });
};

const goToPublish = () => {
  if (userStore.isAuthenticated) {
    return router.push("/publish");
  }

  openRegisterModal();
};
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

  :deep(.login-form-modal),
  :deep(.register-form-modal) {
    top: 70%;
  }
}
</style>
