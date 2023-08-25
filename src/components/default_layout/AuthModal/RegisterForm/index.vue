<template>
  <a-form
    :model="formState"
    class="form"
    layout="vertical"
    :colon="false"
    @finish="handleSubmit"
  >
    <a-form-item
      label="Имя пользователя"
      name="username"
      :rules="[
        {
          required: true,
          message: 'Введите ваше имя пользователя',
        },
      ]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Пароль"
      name="password"
      :rules="[{ required: true, message: 'Введите ваше имя пароль' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item>
      <a-button block type="primary" html-type="submit"> Регистрация </a-button>
      <span>Или</span>
      <a-button block @click="emit('change-form', 'login')">Вход</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
// Vue
import { reactive } from "vue";

const emit = defineEmits(["submit", "change-form"]);

const formState = reactive({
  username: "",
  password: "",
});

const handleSubmit = (values: typeof formState) => {
  emit("submit", values);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.form {
  :deep(.ant-form-item):last-child {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 0;

    .ant-form-item-control-input-content {
      @include flex($direction: column, $alignItems: center, $gap: 8px);
    }
  }
}
</style>
