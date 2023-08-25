<template>
  <a-modal
    :open="modal.authModal.open"
    :footer="null"
    :title="modalTitle"
    class="auth-modal"
    @cancel="modal.authModal.open = false"
  >
    <LoginForm
      v-if="modalType === 'login'"
      @change-form="changeForm"
      @submit="handleLogin"
    />
    <RegisterForm
      v-if="modalType === 'register'"
      @change-form="changeForm"
      @submit="handleRegister"
    />
  </a-modal>
</template>

<script setup lang="ts">
// Types
import type { I_User } from "types/user";

// Vue
import { ref, computed } from "vue";
// Store
import { useGlobalModal } from "~/stores/modal";
import { useUser } from "~/stores/user";
// Hooks
import { useRequest } from "vue-hooks-plus";
// API
import { API_Login, API_Register } from "~/service/api/user-api";
// Component
import LoginForm from "./LoginForm/index.vue";
import RegisterForm from "./RegisterForm/index.vue";

const userStore = useUser();
const modal = useGlobalModal();
const modalType = ref("login");
const modalTitle = computed(() =>
  modalType.value === "login" ? "Вход" : "Регистрация"
);

const changeForm = (form: "login" | "register") => {
  modalType.value = form;
};

const { runAsync: login, loading: loadingLogin } = useRequest(API_Login, {
  manual: true,
});
const { runAsync: register, loading: loadingRegister } = useRequest(
  API_Register,
  {
    manual: true,
  }
);

const syncUser = (user: I_User) => {
  localStorage.set("user", user);
  userStore.$state = user;
};

const messageAndCloseModal = (msg: string) => {
  message.success(msg);
  modal.authModal.open = false;
};

const handleLogin = (values: any) => {
  login(values)
    .then((res) => {
      syncUser(res.data);
      messageAndCloseModal("Авторизация успешна");
    })
    .catch(({ message: errMessage }) => {
      message.error(errMessage);
    });
};

const handleRegister = (values: any) => {
  register(values)
    .then((res) => {
      syncUser(res.data);
      messageAndCloseModal("Вы успешно зарегистрировались");
    })
    .catch(({ message: errMessage }) => {
      message.error(errMessage);
    });
};
</script>

<style scoped lang="scss">
.auth-modal {
  /* Don't work */
  :deep(.ant-modal-header) {
    margin-bottom: 32px;

    .ant-modal-title {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
    }
  }
}
</style>
