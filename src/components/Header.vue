<template>
  <header class="header">
    <h1 class="header__title">IP Address Tracker</h1>
    <Searchbar />
    <div class="errorField" v-if="this.$store.state.settings.isError">
      {{ this.$store.state.settings.errorMsg }}
    </div>
    <Results />
  </header>
</template>

<script>
import Searchbar from './Searchbar.vue'
import Results from './Results.vue'

export default {
  name: 'Header',
  components: {
    Searchbar,
    Results,
  },
}
</script>

<style lang="scss">
$DarkGray: hsl(0, 0%, 59%);

.header {
  position: relative;
  width: 100%;
  height: 35%;
  text-align: center;
  background: url('../assets/pattern-bg.png') no-repeat center;
  background-size: cover;

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
  color: hsl(0, 86%, 50%);
}


</style>
