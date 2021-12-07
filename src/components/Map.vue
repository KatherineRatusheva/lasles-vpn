<template>
<!-- <div id="map" style="width: 100%; height: 660px" v-if="GET_MARKERS">
    <yandex-map ymap-class="layer" :coords="coords" :zoom="2" :scroll-zoom="false" :settings='settings'>
        <ymap-marker v-for="item in GET_MARKERS" :key='item.id'
        marker-id="[item.id]" 
        :coords="[item.coardsX, item.coardsY]"
        :icon="markerIcon[item.id]"
        />
    </yandex-map>

</div> -->
<div id="map" style="width: 100%; height: 539px">
    <yandex-map @created="mapCreated"></yandex-map>
</div>
</template>

<script>

import Vue from 'vue'
import YandexMap from 'vue-yandex-map'
import {mapGetters} from 'vuex'

Vue.use(YandexMap, {
    lang: 'ru_RU',
    apiKey: 'dfe1404a-8284-4b5e-b1c5-50186604fa36',
});

export default {
    name: 'Map',
    data(){
        return {
            pointer: [[-29, 142], [-20, 115], [-1, 102]]
        }
    },

    computed: {
        ...mapGetters([
            'GET_MARKERS',
        ])
    },

    mounted() {
        this.$store.dispatch('getMarkersMap')
    },

    methods: {
        mapCreated: function () {

            var LAYER_NAME = 'user#layer',
            MAP_TYPE_NAME = 'user#customMap',
            TILES_PATH = 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/tiles',
            MAX_ZOOM = 2,
            PIC_WIDTH = 1060,
            PIC_HEIGHT = 539;

            var Layer = function () {
                var layer = new window.ymaps.Layer(TILES_PATH + '%2F0%2Ftile-%x-%y.png?alt=media&token=938b2357-257b-4b0c-88b9-870d616b08d6');
                layer.getZoomRange = function () {
                    return window.ymaps.vow.resolve([0,2]);
                };
                return layer;
            };
            
            window.ymaps.layer.storage.add(LAYER_NAME, Layer);

            var mapType = new window.ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
            window.ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);
            
            var worldSize = Math.pow(2, MAX_ZOOM) * 256,
            
            map = new window.ymaps.Map('map', {
                center: [0,20],
                zoom: 2,
                controls: ['zoomControl'],
                type: MAP_TYPE_NAME
            }, {
                projection: new window.ymaps.projection.Cartesian([[PIC_HEIGHT / 4 - worldSize, -PIC_WIDTH / 4], [PIC_HEIGHT / 4, worldSize - PIC_WIDTH / 4]], [false, false]),
                restrictMapArea: [[-PIC_HEIGHT / 3, -PIC_WIDTH / 3], [PIC_HEIGHT / 3, PIC_WIDTH / 3]]
            });
            map.behaviors.disable('scrollZoom');

            // метки
            for (let i = 0; i < this.pointer.length; ++i) {
                let place = new window.ymaps.Placemark((this.pointer[i]), {}, {
                iconLayout: 'default#image',
                iconImageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                iconImageSize: [30, 30],
            })
                map.geoObjects.add(place);
            }
            
        }


      }
    }
</script>




<style >
.yandex-map {
    display: none;
}
</style>