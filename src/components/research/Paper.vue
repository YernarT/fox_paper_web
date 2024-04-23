<template>
  <div class="paper">
    <h6 class="title" @click="$router.push('/research/1')">
      jsPsych: A JavaScript library for creating behavioral experiments in a Web
      browser
    </h6>

    <div class="green-block">
      <NuxtLink to="/user/1">JR De Leeuw</NuxtLink>
      (и 3 ассоц. автора), 2015.09.13
    </div>

    <p class="related-content">
      ... <strong>JavaScript library</strong> called jsPsych, which accelerates
      the development process for browser-based experiments. The
      <strong>library</strong> ... The <strong>library</strong> is designed so
      that experiments can be assembled ...
    </p>

    <div class="actions">
      <div class="save">
        <Icon name="material-symbols:kid-star-outline-sharp" />
        Cохранять
      </div>
      <div class="cite">
        <Icon name="mdi:format-quote-close-outline" />
        Цитировать
      </div>
      <div class="cite-by">Цитируется 1651 раз</div>
      <NuxtLink to="/?related=2">Похожие 14 статей</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Paper" });
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.paper {
  @include flex($direction: column);

  .title {
    font-size: 18px;
    color: var(--c-primary);
    margin-bottom: 8px;
    cursor: pointer;

    strong {
      font-weight: 700;
    }
  }

  .green-block {
    margin-bottom: 8px;

    &,
    a {
      font-size: 14px;
      color: #006621;
    }
  }

  .related-content {
    margin-bottom: 8px;

    strong {
      font-weight: 700;
    }
  }

  .actions {
    @include flex($alignItems: center, $gap: 8px);

    & > * {
      cursor: pointer;

      &:not(&:last-child) {
        &::after {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--c-text);
        }
      }
    }

    .save,
    .cite {
      @include flex($alignItems: center, $gap: 4px);

      .itisit-icon {
        color: var(--c-primary);
      }
    }

    a {
      color: var(--c-primary);
    }
  }
}
</style>
