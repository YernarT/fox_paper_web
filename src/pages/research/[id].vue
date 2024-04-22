<template>
  <main class="itisit-container research-page"></main>
</template>

<script setup lang="ts">
// Types
import { I_Research } from "@/types/research";
// Vue
import { ref } from "vue";
// Store
import { useUserStore } from "@/stores/user";
// Components
import { Tabs, TabPane } from "ant-design-vue";
import UserForm from "@/components/user/UserForm.vue";

defineOptions({ name: "ResearchPage" });

const research = ref<I_Research>({
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
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.research-page {
  min-height: calc(50dvh);
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
