<template>
  <main class="map">
     <l-map
        style="height: 100%"
        :zoom="this.$store.state.map.zoom"
        :center="this.$store.state.map.center">
      <l-tile-layer
        :url="this.$store.state.map.url"
        :attribution="this.$store.state.map.attribution">
      </l-tile-layer>
      <l-marker
        :lat-lng="this.$store.state.map.marker">
      </l-marker>
    </l-map>
  </main>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
}
</script>

<style lang="scss" scoped>
.map {
  // position: fixed;
  // top: 30%;
  // left: 0;
  // right: 0;
  position: relative;
  width: 100%;
  height: 65%;
  background-color: #2b2b2b;
  text-align: center;
  color: white;
}
</style>