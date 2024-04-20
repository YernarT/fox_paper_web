<template>
  <ClientOnly>
    <Modal
      without-header
      without-footer
      :class="{
        'login-form-modal': modal.authModal.modalType === 'Login',
        'register-form-modal': modal.authModal.modalType === 'Register',
      }"
      :open="modal.authModal.open"
      @close="modal.authModal.open = false"
    >
      <LoginForm v-if="modal.authModal.modalType === 'Login'" />
      <RegisterForm v-if="modal.authModal.modalType === 'Register'" />
    </Modal>
  </ClientOnly>
</template>

<script setup lang="ts">
// Store
import { useGlobalModal } from "~/stores/modal";
// Component
import LoginForm from "./LoginForm/index.vue";
import RegisterForm from "./RegisterForm/index.vue";
import Modal from "~/components/common/Modal/index.vue";

defineOptions({ name: "AuthModal" });

const modal = useGlobalModal();

// const { runAsync: login, loading: loadingLogin } = useRequest(API_Login, {
//   manual: true,
// });
// const { runAsync: register, loading: loadingRegister } = useRequest(
//   API_Register,
//   {
//     manual: true,
//   }
// );

// const syncUser = (user: I_User) => {
//   localStorage.set("user", user);
//   userStore.$state = user;
// };

// const messageAndCloseModal = (msg: string) => {
//   message.success(msg);
//   modal.authModal.open = false;
// };

// const handleLogin = (values: any) => {
//   login(values)
//     .then((res) => {
//       syncUser(res.data);
//       messageAndCloseModal("Авторизация успешна");
//     })
//     .catch(({ message: errMessage }) => {
//       message.error(errMessage);
//     });
// };

// const handleRegister = (values: any) => {
//   register(values)
//     .then((res) => {
//       syncUser(res.data);
//       messageAndCloseModal("Вы успешно зарегистрировались");
//     })
//     .catch(({ message: errMessage }) => {
//       message.error(errMessage);
//     });
// };
</script>
