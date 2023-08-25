<template>
  <header class="itisit-container navbar">
    <Logotyp class="logotyp" />

    <nav class="block">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="nav-link"
        :class="{ 'nav-link--active': linkIsActive(link.path) }"
      >
        {{ link.label }}
      </NuxtLink>

      <a-button
        v-if="!user.isAuthenticated"
        type="primary"
        class="action-btn"
        @click="modal.authModal.open = true"
      >
        <span>Регистрация</span>
      </a-button>

      <a-button
        v-if="user.isAuthenticated"
        danger
        class="action-btn"
        @click="user.logout"
      >
        <span>Выйти</span>
      </a-button>

      <ClientOnly>
        <AuthModal />
      </ClientOnly>
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

const navLinks = [
  {
    path: "/",
    label: "Глвный",
  },
  {
    path: "/products",
    label: "Продукты",
  },
  {
    path: "/contact-us",
    label: "Контакт",
  },
  {
    path: "/faq",
    label: "FAQ",
  },
];

const user = useUser();
const route = useRoute();
const modal = useGlobalModal();

const linkIsActive = computed(() => (path: string) => path === route.path);
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.navbar {
  height: 75px;
  user-select: none;
  @include flex($alignItems: center);

  .block {
    margin-left: auto;
    @include flex($alignItems: center, $gap: 60px);
  }

  .nav-link {
    position: relative;
    @include flexCenter;

    color: var(--c-text);
    font-weight: 700;
    text-decoration: none;

    outline: none;
    cursor: pointer;
    transition: color var(--transition);

    &::after {
      content: "";
      width: 100%;
      height: 3px;
      border-radius: var(--border-radius);
      background: var(--c-primary);
      @include positioned($top: calc(100% + 3px));

      transform: scaleX(0);
      transform-origin: top left;
      transition: transform var(--transition);
    }

    &--active {
      color: var(--c-primary);
    }

    &--active,
    &:hover,
    &:focus {
      &::after {
        transform: scaleX(1);
      }
    }
  }

  .action-btn {
    @include flexCenter;

    span {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1290px) {
    .block {
      gap: 40px;
    }
  }

  @media screen and (max-width: 1080px) {
    height: 144px;
    padding: 24px 0;
    flex-direction: column;
    gap: 24px;

    .block {
      margin: 0;
      justify-content: center;
      gap: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    .block {
      gap: 40px;
    }
  }
}
</style>
