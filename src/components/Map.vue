<template>
  <l-map style="height: 600px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from 'vue2-leaflet';


export default {
    name: 'Map',
    components: {LMap, LTileLayer},
    data() {
        return {
            zoom: 2,
            center: latLng(47.41322, -1.219482),
            url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        }
    }

    
}
</script>

