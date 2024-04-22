<template>
  <main class="itisit-container user-page">
    <Tabs v-model:activeKey="activeTab" tab-position="left">
      <TabPane key="profile">
        <template #tab>
          <div class="panel-title">
            <Icon name="material-symbols:person-edit-sharp" />
            Профиль
          </div>
        </template>

        <UserForm :initValue="toRaw(userStore.$state)" />
      </TabPane>
      <TabPane key="research">
        <template #tab>
          <div class="panel-title">
            <Icon name="game-icons:archive-research" />
            Статья
          </div>
        </template>

        Research
      </TabPane>
    </Tabs>
  </main>
</template>

<script setup lang="ts">
// Vue
import { ref } from "vue";
// Store
import { useUserStore } from "@/stores/user";
// Components
import { Tabs, TabPane } from "ant-design-vue";
import UserForm from "@/components/user/UserForm.vue";

defineOptions({ name: "UserPage" });

const userStore = useUserStore();
const activeTab = ref<"profile" | "research">("profile");
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.user-page {
  min-height: calc(50dvh);
  padding-top: 40px;
  padding-bottom: 40px;

  .ant-tabs-tab .panel-title {
    @include flex($alignItems: center, $gap: 8px);
  }
}
</style>
