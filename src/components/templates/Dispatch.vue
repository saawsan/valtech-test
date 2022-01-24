<template>
  <div id="dispatch-template" class="main-wrapper">
    <dispatch-placeholder v-if="pending" />
    <banner
      v-else-if="showErrorMessage"
      baseline="error code"
      content="Sorry, something went wrong! Please try again later."
      title="Sorry, something went wrong!" />
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
import DispatchPlaceholder from '@/components/organisms/DispatchPlaceholder.vue';

export default {
  name: 'Dispatch',
  components: {
    Banner,
    MosaicCards,
    DispatchPlaceholder,
  },
  data() {
    return {
      title: null,
      intro: null,
      localitiesTitle: null,
      localitiesList: [],
      pending: true,
      showErrorMessage: false,
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
      // todo: send message into an error tracking service
      console.log('catch', error);
      this.showErrorMessage = true;
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
