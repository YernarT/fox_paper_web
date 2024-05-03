<template>
  <main class="itisit-container research-page">
    <template v-if="research">
      <TypographyTitle
        v-model:content="research.title"
        :level="1"
        :editable="isMyPaper"
        class="title"
      />

      <p class="author">
        Автор:
        <NuxtLink :to="`/user/${research.author.id}`">
          {{ authorFullname }}
        </NuxtLink>
      </p>

      <p class="date">{{ dateText }}</p>

      <div v-if="isMyPaper && statusObject" class="status">
        Статус: {{ statusObject.label }}
        <Icon :name="statusObject.icon" :color="statusObject.color" />
      </div>

      <div class="description">
        <span class="title">Описание:</span>
        <TypographyParagraph
          v-model:content="research.description"
          :editable="isMyPaper"
          class="content"
        />
      </div>

      <div class="row">
        <div class="file">
          <Button @click="downloadResearch">Скачать статя</Button>
        </div>

        <Button v-if="isMyPaper" class="save-btn" @click="downloadResearch">
          Сохранить изменение
        </Button>
      </div>

      <div class="comment-block">
        <h6 class="title">Коментарий</h6>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
// Types
import { I_Research } from "@/types/research";
// Vue
import { ref, computed } from "vue";
// Store
import { useUserStore } from "@/stores/user";
// Components
import Button from "@/components/common/Button/index.vue";
import { TypographyTitle, TypographyParagraph } from "ant-design-vue";

defineOptions({ name: "ResearchPage" });

const research = ref<I_Research | null>({
  id: 1,
  title:
    "jsPsych: A JavaScript library for creating behavioral experiments in a Web browser",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delectus eos quis eum tempore molestias qui? Est provident, doloribus voluptate illo fugiat accusantium, maiores delectus rerum, soluta vitae deleniti! Esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delectus eos quis eum tempore molestias qui? Est provident, doloribus voluptate illo fugiat accusantium, maiores delectus rerum, soluta vitae deleniti! Esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delectus eos quis eum tempore molestias qui? Est provident, doloribus voluptate illo fugiat accusantium, maiores delectus rerum, soluta vitae deleniti! Esse.",
  status: "Submited",
  file: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
  createdAt: "2024-04-24 10:13:03",
  updatedAt: "2024-04-24 10:13:03",
  publishedAt: null,
  author: {
    id: 1,
    firstname: "JR De",
    lastname: "Leeuw",
    email: "xxxx@xx.xx",
    role: 1,
    gender: "Other",
    phone: "",
    birthday: "1997-02-27",
    biography: "None",
    createdAt: "2023-12-08",
    updatedAt: "2024-02-19",
  },
  categories: [],
});
const userStore = useUserStore();

const isMyPaper = computed(() => {
  // return userStore.id === research.value.author.id;
  return true;
});

const authorFullname = computed(() => {
  if (research.value === null) return "";
  return `${research.value.author.firstname} ${research.value.author.lastname}`;
});

const dateText = computed(() => {
  if (research.value === null) return "";

  switch (research.value.status) {
    case "Published":
      return `Опубликовано в ${research.value.publishedAt}`;
    default:
      return `Загружено в ${research.value.createdAt}`;
  }
});

const statusObject = computed(() => {
  if (research.value === null) return null;

  switch (research.value.status) {
    case "Submited":
      return {
        color: "var(--c-primary)",
        label: "Загрузил, жду проверки",
        icon: "mingcute:send-plane-fill",
      };
    case "Under Review":
      return {
        color: "var(--c-warning)",
        label: "На рассмотрении",
        icon: "material-symbols:safety-check-rounded",
      };
    case "Rejected":
      return {
        color: "var(--c-error)",
        label: "Отклоненный",
        icon: "material-symbols:cancel-outline-rounded",
      };
    case "Published":
      return {
        color: "var(--c-success)",
        label: "Опубликовано",
        icon: "material-symbols:check-circle-outline-rounded",
      };
  }
});

const downloadResearch = () => {
  const a = document.createElement("a");
  a.href = research.value!.file;
  a.hidden = true;
  a.download = research.value!.file.slice(
    research.value!.file.lastIndexOf("/") + 1
  );
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.research-page {
  min-height: calc(50dvh);
  padding-top: 40px;
  padding-bottom: 40px;
  @include flex($direction: column);

  .title {
    width: 100%;
    font-size: 28px;
    font-weight: 700;

    &.ant-typography {
      width: 100%;

      .ant-input {
        font-size: 28px;
        font-weight: 700;
      }
    }
  }

  .author {
    margin-bottom: 8px;

    a {
      color: var(--c-primary);
    }
  }

  .status {
    margin: 8px 0;
    @include flex($alignItems: center);

    .itisit-icon {
      margin-left: 8px;
    }
  }

  .description {
    width: 100%;
    @include flex($direction: column, $gap: 4px);

    .title {
      font-size: 16px;
      font-weight: 400;
    }

    .ant-typography {
      width: 100%;
      margin-top: 4px;
    }
  }

  .row {
    @include flex($alignItems: center, $gap: 16px);
  }

  .comment-block {
    margin-top: 32px;

    .title {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 16px;
    }
  }
}
</style>
