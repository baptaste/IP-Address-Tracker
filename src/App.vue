<template>
  <div id="app">
    <Header />
    <Map />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Header,
    Map,
  }
}
</script>

<style lang="scss">
body {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
