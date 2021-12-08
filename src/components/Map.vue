<template>
<div id="map" style="width: 100%; height: 539px">
    <yandex-map @created="mapCreated"></yandex-map>
</div>
</template>

<script>

import Vue from 'vue'
import YandexMap from 'vue-yandex-map'

Vue.use(YandexMap, {
    lang: 'en',
    apiKey: 'dfe1404a-8284-4b5e-b1c5-50186604fa36',
});

export default {
    name: 'Map',
    data() {
        return {
            size: [[29,29], [50,50], [30,30], [38,38], [29,29], [65,65], [25,25], [29,29], [55,55], [55,55], [55,55], [40,40], [65,65], [55,55], [40,40], 
            [29,29], [50,50], [40,40], [40,40], [25,25], [38,38], [38,38], [38,38], [31,31], [35,35], [60,60], [25,25], [31,31], [40,40], [31,31]]
        }
    },
    mounted() {
        this.$store.dispatch('getMarkersMap')
    },

    methods: {
        mapCreated() {

            let LAYER_NAME = 'layer',
            MAP_TYPE_NAME = 'customMap',
            TILES_PATH = 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/tiles',
            MAX_ZOOM = 2,
            PIC_WIDTH = 1060,
            PIC_HEIGHT = 539;

            let Layer = () => {
                let layer = new window.ymaps.Layer(TILES_PATH + '%2F0%2Ftile-%x-%y.png?alt=media&token=938b2357-257b-4b0c-88b9-870d616b08d6', {
                    notFoundTile: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/tiles%2F0%2Ftile-0-2.png?alt=media&token=fa9fe33a-e481-4814-ae75-33fa1e2218ad'
                });
                layer.getZoomRange = () => {
                    return window.ymaps.vow.resolve([0,2]);
                };
                return layer;
            };
            
            window.ymaps.layer.storage.add(LAYER_NAME, Layer);

            let mapType = new window.ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
            window.ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);
            
            let worldSize = Math.pow(2, MAX_ZOOM) * 256,
            
            map = new window.ymaps.Map('map', {
                center: [0,0],
                zoom: 2,
                controls: ['zoomControl'],
                type: MAP_TYPE_NAME
            }, {
                projection: new window.ymaps.projection.Cartesian([[PIC_HEIGHT / 4 - worldSize, -PIC_WIDTH / 4], [PIC_HEIGHT / 4, worldSize - PIC_WIDTH / 4]], [false, false]),
                restrictMapArea: [[-PIC_HEIGHT / 3, -PIC_WIDTH / 3], [PIC_HEIGHT / 3, PIC_WIDTH / 3]]
            });
            map.behaviors.disable('scrollZoom');

            // markers
            for (let key in this.$store.getters.GET_MARKERS) {
                let obj = this.$store.getters.GET_MARKERS[key]
                for (let item in obj) {
                     if(item === 'coordinates') {
                        let place = new window.ymaps.Placemark((obj[item]), {}, {
                            iconLayout: 'default#image',
                            iconImageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=f9cfb180-288d-46ac-bee8-641a14cb5064',
                            iconImageSize: this.size[obj.id]
                        })
                        map.geoObjects.add(place);
                    }
                }
            }
        }


    }
}
</script>


<style>
.yandex-map {
    display: none;
}
</style>