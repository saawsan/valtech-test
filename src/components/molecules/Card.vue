<template>
  <article class="card">
    <a :href="url" :target="openNewTab ? '_blank' : '_self'">
      <h3 class="heading heading-2">
        <span v-if="baseline" v-text="baseline" class="baseline d-block"></span>
        {{ title }}
      </h3>
      <p v-if="intro" v-text="intro" class="intro" />
      <p class="btn btn-light">Explore more</p>
      <img :src="backgroundImages.xl" alt="" class="bg" />
    </a>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    baseline: {
      type: String,
      required: false,
    },
    intro: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    openNewTab: {
      type: Boolean,
      required: false,
    },
    backgroundImages: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    margin-bottom: 1rem;
    padding: 1.6rem 1rem;
    border-radius: 7px;
    color: $font-light-color;
    background: rgba(0,0,0,.3);
    transition: all 300ms ease-out;

    &:hover {
      background: rgba(0,0,0,.6);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    .heading {
      margin-bottom: 1.2rem;
    }
    .intro {
      margin-bottom: 1.7rem;
      font-size: .85rem;
    }
    .bg {
      position: absolute;
      top: 0; right: 0;
      border-radius: 7px;
      width: 100%; height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    @include media-bp-up(md) {
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
      }
      .btn {
        margin-top: auto;
      }
    }
    @include media-bp-up(lg) {
      padding: 4rem 1rem;
      min-height: 28rem;
      text-align: center;
      a {
        align-items: center;
      }

      .heading {
        margin-bottom: 0;
        transition: all 300ms ease-out;
      }
      .intro {
        // display: none;
        max-width: 20rem;
        max-height: 0;
        overflow: hidden;
        transition: all 200ms ease-out;
        opacity: 0;
      }
      .btn {
        position: absolute;
        margin-top: 4rem;
        opacity: 0;
        transition: all 200ms ease-out;
      }

      &:hover {
        .intro {
          max-height: 20rem;
          opacity: 1;
        }
        .btn {
          position: relative;
          opacity: 1;
        }
        .heading {
          margin-bottom: 2rem;
        }
      }
    }
  }
</style>
