<template>
  <header class="header">
    <h1 class="header__title">IP Address Tracker</h1>
    <Searchbar />
    <div class="errorField" v-if="this.$store.state.settings.isError">
      {{ this.$store.state.settings.errorMsg }}
    </div>
    <div class="results">
      <ul class="results__list">
        <li>IP Address</li>
        <li>Location</li>
        <li>Timezone</li>
        <li>ISP</li>
      </ul>
    </div>
  </header>
</template>

<script>
import Searchbar from './Searchbar.vue'

export default {
  name: 'Header',
  components: {
    Searchbar,
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 35%;
  background-color: lightskyblue;
  text-align: center;

  &__title {
    font-size: 2rem;
    font-weight: 400;
    color: white;
    padding-top: 1.5rem;
    margin: 0 0 1rem;
  }
}

.errorField {
  margin-top: 1rem;
  color: hsl(0, 100%, 40%);
  // text-align: left;
}

.results {
  width: 80%;
  height: 150px;
  position: absolute;
  top: 70%;
  left: 10%;
  background-color: white;
  color: black;
  border-radius: 15px;
  z-index: 5000;

  &__list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
}
</style>
