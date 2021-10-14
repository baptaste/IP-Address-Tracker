<template>
  <header class="header">
    <h1 class="header__title">IP Address Tracker</h1>
    <Searchbar />
  </header>
</template>

<script>
import Searchbar from './Searchbar.vue'

export default {
  name: 'Header',
  components: {
    Searchbar,
  }
}
</script>

<style lang="scss" scoped>
.header {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  position: relative;
  width: 100%;
  height: 30%;
  background-color: lightskyblue;
  text-align: center;

  &__title {
    font-size: 2rem;
    color: white;
  }
}
</style>
