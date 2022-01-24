<template>
  <div class="dispatch-placeholder">
    <p class="visually-hidden">The content is loading...</p>
    <div class="placeholder banner" />
    <div class="grid">
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
        <div class="placeholder card" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DispatchPlaceholder',
};
</script>

<style lang="scss" scoped>
.placeholder {
  background: #E1E1E1;
  border-radius: 7px;
}

.banner {
  aspect-ratio: 16/9;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @include media-bp-up(md) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .card {
    height: 20rem;
  }
}
</style>
