<template>
  <Html lang="ru">
    <Head>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="theme-color" content="#1191ff" />
      <meta name="color-scheme" content="light" />

      <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <Meta httpEquiv="x-ua-compatible" content="IE=7" />

      <Meta name="description" content="Fox paper" />
      <Meta name="keywords" content="Fox paper" />
      <Meta name="author" content="https://github.com/YernarT" />

      <Meta property="og:title" content="Fox Paper" />
      <Meta property="og:description" content="Fox paper." />
      <Meta property="og:image" content="/favicon.ico" />
      <Meta property="og:site_name" content="Fox paper" />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content="ru_RU" />

      <Link rel="icon" href="/favicon.ico" />

      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <Title>Fox paper</Title>
    </Head>

    <Body>
      <NuxtLayout>
        <ConfigProvider :locale="ru_RU" :theme="ANTD_THEME">
          <NuxtPage />
        </ConfigProvider>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
// Vue
import { onBeforeMount } from "vue";
// Store
import { useUser } from "@/stores/user";
// Antd
import ru_RU from "ant-design-vue/locale/ru_RU";
import { ConfigProvider } from "ant-design-vue";
import { ANTD_THEME } from "@/constants/antd";

defineOptions({ name: "App" });

// 初始化 Store
onBeforeMount(() => {
  const user = useUser();
  user.initUserFromLocal();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity var(--transition), filter var(--transition);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
}
</style>
