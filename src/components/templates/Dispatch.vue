<template>
  <div id="dispatch-template" class="main-wrapper">
    <div v-if="pending">Placeholder</div>
    <template v-else>
      <banner
        :baseline="title"
        :content="intro"
        :background="background"
        with-logo="true" />

      <hr>
      <h1 class="heading heading-1"><span class="baseline d-block">Italy</span> Venise</h1><br>
      <h2 class="heading heading-2"><span class="baseline d-block">Italy</span> Venise</h2><br>
      <a href="#" class="btn">Explore more</a><br>
      <button type="button" class="btn">Explore more</button><br>
    </template>
  </div>
</template>

<script>
import fetchDispatchData from '@/services/dispatch';
import Banner from '@/components/molecules/Banner.vue';

export default {
  name: 'Dispatch',
  components: {
    Banner,
  },
  data() {
    return {
      title: null,
      intro: null,
      localities: [],
      pending: true,
    };
  },
  created() {
    fetchDispatchData().then(({
      title, intro, background, grid,
    }) => {
      this.title = title;
      this.intro = intro;
      this.background = background;
      this.localities = grid;
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
}
</style>
