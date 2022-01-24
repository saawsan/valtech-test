<template>
  <section class="banner">
    <h1 class="heading heading-1">
      <span v-if="baseline" v-text="baseline" class="baseline d-block"></span>
      <logo v-if="withLogo" class="logo" />
      <template v-else>{{ title }}</template>
    </h1>
    <p v-text="content" class="content" />
    <img :src="background.xl" alt="" class="bg" />
  </section>
</template>

<script>
import Logo from '@/components/atoms/Logo.vue';

export default {
  name: 'Banner',
  components: {
    Logo,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    baseline: {
      type: String,
      required: false,
    },
    withLogo: {
      type: Boolean,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    background: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1.3rem 1rem;
    border-radius: 7px;
    color: $font-light-color;
    text-align: center;
    background: rgba(0,0,0,.3);
    aspect-ratio: 16 / 9;

    .content {
      margin: 1rem auto 0;
      max-width: 35rem;
    }

    .logo {
      margin-top: .7rem;
      width: 10rem;
      fill: $font-light-color;
      @include media-bp-up(md) {
        margin-top: 1.2rem;
        width: 20rem;
      }
    }

    .bg {
      position: absolute;
      top: 0; right: 0;
      border-radius: 7px;
      width: 100%; height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }
</style>
