<template>
<div id="map" style="width: 100%; height: 600px" v-if="GET_MARKERS">
    <yandex-map ymap-class="map-box" :coords="coords" :zoom="2" :scroll-zoom="scrollZoom" :settings="settings">
        
        <ymap-marker v-for="item in GET_MARKERS" :key='item.id'
        marker-id="[item.id]" 
        :coords="[item.coardsX, item.coardsY]"
        :icon="markerIcon[item.id]"
        />

    </yandex-map>

</div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import {mapGetters} from 'vuex'

export default {
    name: 'Map',
    components: {yandexMap, ymapMarker},
    data() {
        return {
            settings: {
                apiKey: 'dfe1404a-8284-4b5e-b1c5-50186604fa36',
                lang: 'ru_RU',
                coordorder: 'latlong',
            },
            coords: [40, 18],
            scrollZoom: false,

            markerIcon: [
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [29,29],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [55,55],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [29,29],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [45,45],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [29,29],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [29,29],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [70,70],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [40,40],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [55,55],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [55,55],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [40,40],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [55,55],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [70,70],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [55,55],  
                },
                {
                    layout: 'default#imageWithContent',
                    imageHref: 'https://firebasestorage.googleapis.com/v0/b/laslesvpn-97c54.appspot.com/o/marker.png?alt=media&token=7d00acef-a876-47ce-ab90-c53658e4c8ab',
                    imageSize: [40,40],  
                },

            ]

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


}
</script>




<style >
    .map-box {
        width: 100%;
        height: 600px;
    }
/* #map {
	filter: grayscale(1);
-ms-filter: grayscale(1);
-webkit-filter: grayscale(1);
-moz-filter: grayscale(1);
-o-filter: grayscale(1);
} */
</style>