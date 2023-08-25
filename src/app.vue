<template>
  <Html lang="ru">
    <Head>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="theme-color" content="#0093FF" />
      <meta name="color-scheme" content="light" />

      <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <Meta httpEquiv="x-ua-compatible" content="IE=7" />

      <Meta name="description" content="ITReview" />
      <Meta name="keywords" content="ITReview" />
      <Meta name="author" content="https://github.com/YernarT" />

      <Meta property="og:title" content="IIReview" />
      <Meta property="og:description" content="ITReview" />
      <Meta property="og:image" content="/favicon.ico" />
      <Meta property="og:site_name" content="ITReview" />
      <Meta property="og:type" content="website" />
      <Meta property="og:locale" content="ru_RU" />

      <Link rel="icon" href="/favicon.ico" />

      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <Title>ITReview</Title>
    </Head>

    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
// Vue
import { onBeforeMount } from "vue";
// Store
import { useUser } from "~/stores/user";

onBeforeMount(() => {
  const user = useUser();
  user.initUserFromLocal();
});
</script>
