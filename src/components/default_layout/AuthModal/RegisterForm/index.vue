<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="icon">
        <Icon name="mdi:account-plus" class="itisit-icon" />
      </div>

      <h3 class="title">Регистрация</h3>

      <div class="closer" @click="modal.authModal.open = false">
        <Icon name="mdi:window-close" />
      </div>
    </div>

    <div class="inputs">
      <Input placeholder="Имя пользователя" />
      <Input placeholder="Пароль" type="password" />
    </div>

    <div class="actions">
      <Button type="submit" variant="primary">Регистрация</Button>
      <span>Или</span>
      <Button @click="modal.authModal.modalType = 'Login'">Вход</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
// Vue
import { reactive } from "vue";
// Component
import Input from "~/components/common/Input/index.vue";
import Button from "~/components/common/Button/index.vue";
// Store
import { useGlobalModal } from "~/stores/modal";

defineOptions({ name: "RegisterForm" });

const modal = useGlobalModal();
const formState = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  console.log("register values: ", formState);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.form {
  @include flex($direction: column, $alignItems: center);

  .row {
    @include flex($alignItems: center, $gap: 12px);
  }

  .icon {
    --size: 36px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(0, 120, 240, 0.1);
    @include flexCenter;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
  }

  .closer {
    cursor: pointer;
    @include positioned($top: 8px, $right: 8px);
  }

  .inputs {
    width: 100%;
    margin: 24px 0;
    @include flex($direction: column, $gap: 20px);

    .input-wrap {
      width: 100%;
    }
  }

  .actions {
    width: 100%;
    @include flex($direction: column, $alignItems: center, $gap: 8px);

    button {
      width: 100%;
    }
  }
}
</style>
