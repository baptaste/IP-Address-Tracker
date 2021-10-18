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
$VeryDarkGray: hsl(0, 0%, 17%);
$DarkGray: hsl(0, 0%, 59%);

.header {
  position: relative;
  width: 100%;
  height: 40%;
  text-align: center;
  background: url('../../public/images/pattern-bg.png') no-repeat center;
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
  width: fit-content;
  margin: 1rem auto 0;
  padding: .5rem 1rem;
  background-color: $VeryDarkGray;
  color: hsl(0, 86%, 45%);
  border-radius: 7px;
}

@media screen and (max-width: 500px) {
  .header {
    // height: 250px;
    &__title {
      font-size: 1.7rem;
    }
  }
  .errorField {
    width: 80%;
    font-size: .9rem;
  }
}
</style>
