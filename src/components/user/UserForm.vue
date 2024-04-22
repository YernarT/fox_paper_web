<template>
  <div class="user-form">
    <Form :model="formState" layout="vertical" @finish="onFinish">
      <div class="row">
        <FormItem name="avatar">
          <div class="avatar">
            <Icon name="ant-design:user-outlined" />
          </div>
        </FormItem>

        <FormItem name="birthday">
          <DatePicker
            v-model:value="formState.birthday"
            placeholder="День рождения"
          />
        </FormItem>
      </div>

      <div class="row">
        <FormItem
          name="firstname"
          :rules="[{ required: true, message: 'Требуется имя' }]"
        >
          <Input v-model:value="formState.firstname" placeholder="Иия" />
        </FormItem>
        <FormItem
          name="lastname"
          :rules="[{ required: true, message: 'Требуется фамиля' }]"
        >
          <Input v-model:value="formState.lastname" placeholder="Фамиля" />
        </FormItem>
      </div>

      <div class="row">
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
          name="phone"
          :rules="[{ required: true, message: 'Требуется номер телефон' }]"
        >
          <Input v-model:value="formState.phone" placeholder="Номер телефон" />
        </FormItem>
      </div>

      <div class="row">
        <FormItem name="role" label="Рол">
          <RadioGroup v-model:value="formState.role">
            <Radio :value="1">Обычные пользователи</Radio>
            <Radio :value="2">Модератор</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem name="gender" label="Пол">
          <RadioGroup v-model:value="formState.gender">
            <Radio value="Male">Мужской</Radio>
            <Radio value="Female">Женский</Radio>
            <Radio value="Other">Другой</Radio>
            <Radio value="Prefer not to say">Не хочу говорить</Radio>
          </RadioGroup>
        </FormItem>
      </div>

      <FormItem name="biography" label="Биография">
        <Textarea showCount :rows="4" :maxlength="500"></Textarea>
      </FormItem>

      <Button>Сохранить</Button>
    </Form>
  </div>
</template>

<script setup lang="ts">
// Types
import type { I_User } from "~/types/user";
// Vue
import { reactive } from "vue";
// Components
import Input from "~/components/common/Input/index.vue";
import Button from "~/components/common/Button/index.vue";
import {
  Form,
  FormItem,
  RadioGroup,
  Radio,
  DatePicker,
  Textarea,
} from "ant-design-vue";

defineOptions({ name: "UserForm" });

const props = defineProps<{
  readonly?: boolean;
  initValue: I_User;
}>();
const formState = reactive(props.initValue);

const onFinish = () => {
  console.log("user form: ", formState);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.user-form {
  padding: 24px;
  background-color: #fff;
  @include flex($direction: column);

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid var(--c-border);
    @include flexCenter;

    .itisit-icon {
      width: 40px;
      height: 40px;
    }
  }

  .row {
    @include flex($alignItems: center, $gap: 24px);
  }
}
</style>
