<template>
  <div id="dispatch-template" class="main-wrapper">
    <div v-if="pending">Placeholder</div>
    <template v-else>
      <banner
        :baseline="title"
        :content="intro"
        :background="background"
        :with-logo="true" />
      <mosaic-cards
        v-if="localitiesList.length"
        :title="localitiesTitle"
        :cards="localitiesList" />
    </template>
  </div>
</template>

<script>
import fetchDispatchData from '@/services/dispatch';
import Banner from '@/components/molecules/Banner.vue';
import MosaicCards from '@/components/organisms/MosaicCards.vue';

export default {
  name: 'Dispatch',
  components: {
    Banner,
    MosaicCards,
  },
  data() {
    return {
      title: null,
      intro: null,
      localitiesTitle: null,
      localitiesList: [],
      pending: true,
    };
  },
  created() {
    fetchDispatchData().then(({
      title, intro, background, localities,
    }) => {
      this.title = title;
      this.intro = intro;
      this.background = background;
      this.localitiesTitle = localities.title;
      this.localitiesList = localities.list;
    }).catch((error) => {
      // todo: handle error
      console.log('catch', error);
    }).finally(() => {
      this.pending = false;
    });
  },
};
</script>

<style lang="scss">
#dispatch-template {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
