<template>
  <div class="results">
    <ul class="results__list">
      <li>IP Address</li>
      <li>Location</li>
      <li>Timezone</li>
      <li>ISP</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Results'
}
</script>

<style lang="scss">
.results {
  width: 80%;
  height: 150px;
  position: absolute;
  top: 23%;
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