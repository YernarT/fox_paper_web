<template>
  <footer class="itisit-container footer">
    <div class="columns">
      <div class="col">
        <h6 class="title">Контакт</h6>

        <ul class="list">
          <li class="item">
            <IconPhone class="itisit-icon" />
            <span class="value">+7(771)-452-65-55</span>
          </li>
          <li class="item">
            <IconMail class="itisit-icon" />
            <span class="value">toktaryernar@gmail.com</span>
          </li>
          <li class="item">
            <IconAddress class="itisit-icon" />
            <span class="value"> ҚР, Астана қаласы </span>
          </li>
        </ul>
      </div>

      <div class="col">
        <!-- <h6 class="title">Ссылки</h6>

        <ul class="list">
          <NuxtLink to="/" class="item">Главный</NuxtLink>
          <NuxtLink to="/products" class="item">Продукты</NuxtLink>
          <NuxtLink to="/faq" class="item">FAQ</NuxtLink>
          <NuxtLink to="/contact-us" class="item">Контакт</NuxtLink>
        </ul> -->
      </div>

      <div class="col">
        <h6 class="title">Краткое введение</h6>

        <p class="item">
          Добро пожаловать на наш сайт! Это платформа, которая собирает
          информацию от многих отечественных ИТ-компаний и предоставляет вам
          оценки и баллы непосредственно от сотрудников. Информацию об условиях
          работы, уровне комфорта и зарплатном пакете вы можете найти в разных
          компаниях. В то же время вы также можете участвовать в тематических
          обсуждениях и обмениваться опытом работы и мнениями в этих компаниях с
          другими. Независимо от того, ищете ли вы работу или интересуетесь
          ИТ-индустрией, здесь вы можете найти полезную информацию, которая
          поможет вам принять решение о карьере!
        </p>
      </div>
    </div>

    <div class="else">
      <h6 class="supplier">
        Разработано
        <a href="https://itisit.netlify.app/" target="_blank">IT IS IT</a>
      </h6>
      <h6 class="cr">ITReview {{ currentYear }} @ Все права защищены</h6>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconPhone from "~/assets/icons/phone.vue";
import IconMail from "~/assets/icons/mail.vue";
import IconAddress from "~/assets/icons/address.vue";

const currentYear = new Date().getFullYear();
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

    @media screen and (max-width: 1180px) {
      display: grid;
      grid-template-areas:
        "col1 col2"
        "col3 .";
    }
    @media screen and (max-width: 600px) {
      @include flex($direction: column, $gap: 32px);
    }

    .col {
      list-style: none;
      @include flex(
        $direction: column,
        $justifyContent: space-between,
        $gap: 24px
      );

      &:first-child {
        flex: 1 0 280px;
        grid-area: col1;

        @media screen and (max-width: 600px) {
          flex-basis: auto;
        }
      }

      &:nth-child(2) {
        flex-shrink: 0;
        grid-area: col2;
        .item {
          white-space: nowrap;
        }
      }

      .title {
        color: var(--c-text);
        font-size: 26px;
        font-weight: 700;
      }

      .list {
        @include flex($direction: column, $gap: 20px);
      }

      .item {
        text-decoration: none;
        color: var(--c-text-secondary);
      }

      &:first-child {
        .item {
          cursor: pointer;
          @include flex($alignItems: center, $gap: 12px);

          svg {
            flex-shrink: 0;
          }

          &:last-child {
            gap: 0;

            svg {
              width: 38px;
              height: 38px;
            }
          }
        }
      }

      &:last-child {
        grid-area: col3;
        .item {
          line-height: 34px;
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
        letter-spacing: 2px;
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
