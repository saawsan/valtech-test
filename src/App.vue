<template>
  <div id="app">
    <!-- <header></header> -->
    <main>
      <dispatch />
    </main>
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import Dispatch from './components/templates/Dispatch.vue';

export default {
  name: 'App',
  components: {
    Dispatch,
  },
};
</script>
