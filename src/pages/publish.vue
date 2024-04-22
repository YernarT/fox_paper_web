<template>
  <main class="itisit-container publish-page">
    <div class="research-form">
      <Form :model="formState">
        <h3 class="title">Загрузить статью</h3>

        <FormItem
          name="title"
          label="Заголовок"
          :rules="[
            {
              required: true,
              message: 'Требует заголовок',
            },
          ]"
        >
          <Input v-model:value="formState.title" />
        </FormItem>

        <FormItem
          name="desription"
          label="Описание"
          :rules="[
            {
              required: true,
              message: 'Требует описание',
            },
          ]"
        >
          <Textarea
            v-model:value="formState.description"
            showCount
            :rows="4"
            :maxlength="500"
          ></Textarea>
        </FormItem>

        <FormItem
          name="flie"
          label="Статья"
          :rules="[
            {
              required: true,
              message: 'Требует статя',
            },
          ]"
        >
          <Upload v-model:fileList="formState.file" :maxCount="1">
            <Button>Выберите документ</Button>
          </Upload>
        </FormItem>

        <FormItem>
          <Button type="submit">Загрузить</Button>
        </FormItem>
      </Form>
    </div>
  </main>
</template>

<script setup lang="ts">
// Types
import type { I_Research, I_PostResearch } from "~/types/research";
import type { UploadFile } from "ant-design-vue";
// Vue
import { reactive } from "vue";
// Components
import Input from "~/components/common/Input/index.vue";
import Button from "~/components/common/Button/index.vue";
import { Form, FormItem, Upload, Textarea } from "ant-design-vue";

defineOptions({ name: "PublishPage" });

const formState = reactive<I_PostResearch>({
  title: "",
  description: "",
  file: [] as UploadFile[],
  categories: [],
});

const onFinish = () => {
  console.log("research form: ", formState);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.publish-page {
  padding-top: 40px;
  padding-bottom: 40px;

  .research-form {
    padding: 24px;
    background-color: #fff;
    @include flex($direction: column);

    .ant-form {
      width: 100%;

      .ant-form-item {
        margin-bottom: 40px;

        &:last-child {
          .btn {
            margin-left: 75px;
          }
        }
      }
    }

    .title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 40px;
    }
  }
}
</style>
