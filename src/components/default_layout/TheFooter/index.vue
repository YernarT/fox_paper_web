<template>
  <footer class="itisit-container footer">
    <div class="columns">
      <div class="col-1">
        <h6 class="title">Контакт</h6>

        <ul class="list">
          <li class="item">
            <Icon name="material-symbols:call" />
            <span class="value">+7(771)-452-65-55</span>
          </li>
          <li class="item">
            <Icon name="material-symbols:mail" />
            <span class="value">toktaryernar@gmail.com</span>
          </li>
          <li class="item">
            <Icon name="material-symbols:location-on-outline" />
            <span class="value"> ҚР, Астана қаласы </span>
          </li>
        </ul>
      </div>

      <div class="col-2">
        <h6 class="title">Краткое введение</h6>

        <p class="item">
          Добро пожаловать на <strong>Fox Paper</strong>! Мы стремимся
          предоставить Пользователи качественных академических ресурсов
          инструмент исследования. Как и
          <a href="https://sci-hub.se/" target="_blank">Sci-Hub</a> и
          <a href="https://scholar.google.com/" target="_blank"> Google Scholar </a>, 
          наш на сайте собрано множество научной литературы. Исследования,
          облегчающие пользователям поиск и доступ Новейшую академическую
          информацию, которая поможет вам исследовать научные области, читайте
          Публикуйте статьи и проводите научные исследования. <br />
          Мы искренне приглашаем вас присоединиться к нам Исследуйте
          безграничные возможности академического мира!
        </p>
      </div>
    </div>

    <div class="else">
      <h6 class="supplier">
        Разработано
        <a href="https://itisit.netlify.app/" target="_blank">IT IS IT</a>
      </h6>
      <h6 class="cr">Fox paper {{ currentYear }} @ Все права защищены</h6>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

defineOptions({ name: "TheFooter" });
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.footer {
  padding-top: 72px;
  padding-bottom: 40px;
  border-top: 1px solid var(--c-border);
  background: var(--c-background);
  @include flex($direction: column, $gap: 64px);

  .columns {
    @include flex($gap: 72px);

    @media screen and (max-width: 786px) {
      @include flex($direction: column, $gap: 32px);
    }

    [class^="col"] {
      list-style: none;
      @include flex(
        $direction: column,
        $justifyContent: space-between,
        $gap: 24px
      );

      .title {
        color: var(--c-text);
        font-size: 26px;
        font-weight: 700;
      }

      .list {
        list-style: none;
        @include flex($direction: column, $gap: 20px);

        .item {
          text-decoration: none;
          color: var(--c-text-secondary);
        }
      }
    }

    .col-1 {
      flex: 1 0 280px;
      @media screen and (max-width: 786px) {
        flex-basis: auto;
      }

      .item {
        cursor: pointer;
        @include flex($alignItems: center, $gap: 12px);
      }
    }

    .col-2 {
      .item {
        line-height: 32px;

        a {
          color: var(--c-primary);
          text-decoration: none;
        }
      }
    }
  }

  .else {
    width: 100%;
    @include flex($justifyContent: space-between, $alignItems: center);

    .cr,
    .supplier {
      color: var(--c-text-secondary);

      a {
        margin-left: 4px;
        color: var(--c-primary);
        letter-spacing: 1px;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 576px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>
