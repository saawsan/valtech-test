<template>
  <div id="dispatch-template">
    <br> {{ title }}
    <br> {{ intro }}
    <br> {{ localities }}

    <h1 class="heading heading-1"><span class="baseline d-block">Italy</span> Venise</h1><br>
    <h2 class="heading heading-2"><span class="baseline d-block">Italy</span> Venise</h2><br>
    <a href="#" class="btn">Explore more</a><br>
    <button type="button" class="btn">Explore more</button><br>
  </div>
</template>

<script>
import fetchDispatchData from '@/services/dispatch';

export default {
  name: 'Dispatch',
  components: {
  },
  data() {
    return {
      title: null,
      intro: null,
      localities: [],
    };
  },
  created() {
    fetchDispatchData().then(({ title, intro, grid }) => {
      this.title = title;
      this.intro = intro;
      this.localities = grid;
    }).catch((error) => {
      // todo: handle error
      console.log('catch', error);
    });
  },
};
</script>

<style lang="scss">
</style>
