<template>
  <div id="dispatch-template">
    <br> {{ title }}
    <br> {{ intro }}
    <br> {{ localities }}
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
