<template>
<div id="map">
    <yandex-map @created="mapCreated"></yandex-map >
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
                let layer = new window.ymaps.Layer(TILES_PATH + '%2F%z%2Ftile-%x-%y.png?alt=media&token=5bc5a0d8-7923-4b7b-98d1-c1d591c3bd84', {
                    notFoundTile: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/tiles%2F2%2Ftile-4-2.png?alt=media&token=5d77ce3d-3adf-4870-87fa-24aaa29879f9'
                });
                layer.getZoomRange = function () {
                    return window.ymaps.vow.resolve([0,2]);
                };
                return layer;
            };
            window.ymaps.layer.storage.add(LAYER_NAME, Layer);

            let mapType = new window.ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
            window.ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);

            let worldSize = Math.pow(MAX_ZOOM, 1) * 256,

            map = new window.ymaps.Map("map", {
                center: [0, -9],
                zoom: 2,
                controls: ['zoomControl'],
                type: MAP_TYPE_NAME,
            }, {
                projection: new window.ymaps.projection.Cartesian([[PIC_HEIGHT / 4 - worldSize, -PIC_WIDTH / 4], [PIC_HEIGHT / 4, worldSize - PIC_WIDTH / 4]], [false, false]),
                restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]
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
#map {
    width: 90%;
    height: 539px;
}
.yandex-map {
    display: none;
}
</style>