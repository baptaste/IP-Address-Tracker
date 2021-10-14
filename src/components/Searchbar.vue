<template>
  <form class="searchbar" @submit="onSearchSubmit">
    <input
      type="search"
      name="searchbar"
      id="searchbar"
      placeholder="Search for any IP address or domain"
      class="search-input"
      :value="inputValue"
      @change="onInputValueChange"
    >
    <button type="submit" class="searchbar__submit">></button>
  </form>
</template>

<script>
export default {
  name: 'Searchbar',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    onInputValueChange(e) {
      this.inputValue = e.target.value;
    },
    onSearchSubmit(e) {
      e.preventDefault();
      console.log(this.inputValue);
      //TODO
    }
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