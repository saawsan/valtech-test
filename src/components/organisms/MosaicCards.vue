<template>
  <section class="mosaic-cards">
    <h2 v-if="title" v-text="title" class="visually-hidden" />
    <div class="mosaic-wrapper">
      <card
        v-for="card, i in cards"
        :key="i"
        :title="card.title"
        :baseline="card.baseline"
        :intro="card.intro"
        :url="card.cta.url"
        :open-new-tab="card.newWindow"
        :background-images="card.background" />
    </div>
  </section>
</template>

<script>
import Card from '@/components/molecules/Card.vue';

export default {
  name: 'MosaicCards',
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@include media-bp-up(md) {
  .mosaic-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    .card {
      margin-bottom: 0;

      &:nth-child(6n + 1) {
        grid-column: 1 / 3;
      }
      &:nth-child(6n + 6) {
        grid-column: 3 / 5;
      }
    }
  }
}

</style>
