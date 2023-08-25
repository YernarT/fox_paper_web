<template>
  <footer class="itisit-container footer">
    <div class="columns">
      <div class="col">
        <h6 class="title">Контакт</h6>

        <ul class="list">
          <li class="item">
            <IconPhone />
            <span class="value">+7(771)-452-65-55</span>
          </li>
          <li class="item">
            <IconMail />
            <span class="value">plastic-world@gmail.com</span>
          </li>
          <li class="item">
            <IconAddress />
            <span class="value">
              501 West Broadway, Suite 800, San Diego, CA 92101
            </span>
          </li>
        </ul>
      </div>

      <div class="col">
        <h6 class="title">Ссылки</h6>

        <ul class="list">
          <NuxtLink to="/" class="item">Главный</NuxtLink>
          <NuxtLink to="/products" class="item">Продукты</NuxtLink>
          <NuxtLink to="/faq" class="item">FAQ</NuxtLink>
          <NuxtLink to="/contact-us" class="item">Контакт</NuxtLink>
        </ul>
      </div>

      <div class="col">
        <!-- <h6 class="title">Investment disclosure</h6> -->
        <h6 class="title">Краткое введение</h6>

        <p class="item">
          <!-- When you invest with 《Plastic World》, you are more than a number,
          you are a partner. As a partner with us, you can access opportunities
          usually reserved only for the largest institutional investors. You can
          access a team driven only by excellence and results. You can access
          real estate investment opportunities designed with you in mind. -->
          Добро пожаловать на наш веб-сайт. Мы сосредоточены на том, чтобы
          предложить вам широкий выбор хорошо продуманной мебели, которая
          наполнит ваше домашнее пространство индивидуальностью и теплотой. Мы
          стремимся предоставлять качественные услуги, чтобы сделать ваши
          покупки на дому приятными и приятными. Начните сегодня и найдите
          идеальную мебель для своего дома!
        </p>
      </div>
    </div>

    <!-- <h6 class="cr">Plastic World {{ currentYear }} @ All Right Reserved</h6> -->
    <h6 class="cr">Хоз товары {{ currentYear }} @ Все права защищены</h6>
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
  --c-text: #fff;
  --c-text-secondary: rgba(255, 255, 255, 0.72);

  padding-top: 72px;
  padding-bottom: 40px;
  background: #161b1f;
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
        font-family: "Poppins", sans-serif;
        font-size: 26px;
        font-weight: 700;
      }

      .list {
        @include flex($direction: column, $gap: 20px);
      }

      .item {
        text-decoration: none;
        color: var(--c-text-secondary);
        font-family: "Poppins", sans-serif;
      }

      &:first-child {
        .item {
          cursor: pointer;
          color: rgba(255, 255, 255, 0.9);
          @include flex($alignItems: center, $gap: 12px);

          svg {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
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
          font-family: "Inter", sans-serif;
          line-height: 34px;
        }
      }
    }
  }

  .cr {
    width: 100%;
    color: var(--c-text);
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
}
</style>
