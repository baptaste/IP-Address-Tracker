<template>
  <form class="searchbar" @submit="onSearchSubmit">
    <input
      type="search"
      name="searchbar"
      id="searchbar"
      placeholder="Search for any IP address or domain"
      class="search-input"
      :value="this.$store.state.settings.inputValue"
      @change="onInputValueChange"
    >
    <button type="submit" class="searchbar__submit">></button>
  </form>
</template>

<script>
import axios from '../../node_modules/axios'

export default {
  name: 'Searchbar',
  mounted() {
    this.getClientIP();
  },
  methods: {
    async getClientIP() {
      try {
        const res = await axios.get(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${this.$store.state.settings.APIKey}`
          );
          this.$store.state.clients.userClient = res.data
      } catch (error) {
        console.error(error);
      }
    },
    onInputValueChange(e) {
      this.$store.state.settings.inputValue = e.target.value
    },
    async onSearchSubmit(e) {
      e.preventDefault();
      this.$store.state.settings.targetIP = this.$store.state.settings.inputValue
      try {
          const res = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${this.$store.state.settings.APIKey}&ipAddress=${this.$store.state.settings.targetIP}`
        );
        this.$store.commit("setClientQuery", res.data)
        this.$store.commit("setIsError", false)
      } catch (error) {
        console.error(error);
        this.$store.commit("setIsError", true)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.searchbar {
  &__submit {
    padding: 1rem 1.3rem;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border: none;
    background-color: hsl(0, 0%, 17%);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
}

.search-input {
  width: 500px;
  padding: 1rem 1.5rem;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: none;
}
</style>