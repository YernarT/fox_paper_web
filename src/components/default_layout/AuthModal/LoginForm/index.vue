<template>
  <Form
    :model="formState"
    scrollToFirstError
    autocomplete="off"
    @finish="handleSubmit"
  >
    <div class="icon">
      <Icon name="mdi:account" class="itisit-icon" />
    </div>

    <h3 class="title">Вход</h3>

    <div class="closer" @click="modal.authModal.open = false">
      <Icon name="mdi:window-close" />
    </div>

    <FormItem
      name="email"
      :rules="[{ required: true, message: 'Требуется E-mail' }]"
    >
      <Input
        v-model:value="formState.email"
        type="email"
        placeholder="E-mail"
      />
    </FormItem>

    <FormItem
      name="password"
      :rules="[{ required: true, message: 'Требуется пароль' }]"
    >
      <Input
        v-model:value="formState.password"
        placeholder="Пароль"
        type="password"
      />
    </FormItem>

    <div class="actions">
      <Button type="submit" variant="primary">Вход</Button>
      <span>Или</span>
      <Button type="button" @click="modal.authModal.modalType = 'Register'">
        Зарегистрируйтесь
      </Button>
    </div>
  </Form>
</template>

<script setup lang="ts">
// Vue
import { reactive } from "vue";
// Component
import Input from "~/components/common/Input/index.vue";
import Button from "~/components/common/Button/index.vue";
import { Form, FormItem } from "ant-design-vue";
// Store
import { useGlobalModal } from "~/stores/modal";

defineOptions({ name: "LoginForm" });

const modal = useGlobalModal();
const formState = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  console.log("login values: ", formState);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.ant-form {
  @include flex($direction: column, $alignItems: center);

  .ant-form-item {
    width: 100%;
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
    margin-bottom: 8px;
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
    margin-top: 8px;
    @include flex($direction: column, $alignItems: center, $gap: 8px);

    button {
      width: 100%;
    }
  }
}
</style>
