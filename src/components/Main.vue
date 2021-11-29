<template>
<div>
  <main class="main">

      <div class="about">
          <div class="about-description">
              <h1 class="about-description__title"> {{ $t('welcomeTitle') }} </h1>
              <p class="about-description__description"> {{ $t('welcomeText') }} </p>
              <a href="#price">
                  <button class="about-description__button"> {{ $t('welcomeButton') }} </button>
              </a>
          </div>
          <div class="about-img">
              <img class="about-img__img" src="../image/illustration-1.png" alt="a network LaslesVPN">
          </div>
      </div>

      <div class="info">
          <div class="info-block" :class="[item.activeClass]" v-for="item in info" :key="item.activeClass">
              <div class="info-block__value">
                  <p class="info-block__title"> {{item.title}} </p>
                  <p class="info-block__description"> {{item.description}} </p>
              </div>
          </div>
      </div>

      <div class="features">
          <div class="features-img">
              <img class="features-img__image" src="../image/illustration-2.png" alt="features LaslesVPN">
          </div>
          <div class="features-text">
              <h2 class="features-text__title"> {{ $t('featuresTitle') }} </h2>
              <p class="features-text__description"> {{ $t('featuresText') }} </p>
              <p class="features-text__item"> {{ $t('featuresItem_1') }} </p>
              <p class="features-text__item"> {{ $t('featuresItem_2') }} </p>
              <p class="features-text__item"> {{ $t('featuresItem_3') }} </p>
              <p class="features-text__item"> {{ $t('featuresItem_4') }} </p>
          </div>
      </div>

      <div class="price" id="price">
          <h3 class="price__title"> {{ $t('planTitle') }} </h3>
          <p class="price__description"> {{ $t('planText') }} </p>
          <div class="price-block">

              <div class="price-block__package" v-for="item in $t('plan')" :key="item.name" :class="[item.activeClass]">
                  <div class="price-block__list">
                      <p class="price-block__title"> {{item.name}} </p>
                      <p class="price-block__item" v-for="item in item.include" :key="item">  {{item}} </p>
                  </div>
                  <div>
                      <p class="price-block__cost">{{item.price}}</p>
                      <button class="price-block__button" @click="showModalPrice"> {{ $t('priseButton') }} </button>
                  </div>
              </div>
          </div>
          <Modal ref="modal"/>

          <div class="locations">
              <h3 class="locations__title"> {{ $t('locationsTitle') }} </h3>
              <p class="locations__description"> {{ $t('locationsText') }} </p>
              <img class="locations__img" src="../image/huge-global.png" alt="Global Network of VPN">
          </div>
      </div>

      <div class="partners"></div>

      <div class="reviews">
          <h3 class="reviews__title"> {{ $t('reviewsTitle') }} </h3>
          <p class="reviews__description"> {{ $t('reviewsText') }} </p>
      </div>
      
      
          <div v-if="GET_REVIEWS">
              <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">
              <div class="reviews-user" v-for="item in GET_REVIEWS" :key='item.name'>
                  <div class="reviews-user__header">
                      <img class="reviews-user__img" :src="[item.img]" :alt="[item.name]">
                      <div class="reviews-user__main">
                          <p class="reviews-user__name" >{{ item.surname }} {{ item.name }}</p>
                          <p class="reviews-user__city">{{ item.country }}, {{ item.city }}</p>
                      </div>
                      <p class="reviews-user__rating">{{ item.rating }}</p>
                  </div>
                  <p class="reviews-user__description"> {{ item.message }}</p>
              </div>
              </VueSlickCarousel>
        </div>

      <div class="arrows-button">
          <div class="arrows-button__left" @click="prev"></div>
          <div class="arrows-button__right" @click="next"></div>
      </div>
  </main >

  <footer class="footer">
      <div class="subscribe">
          <div class="subscribe-info">
              <h3 class="subscribe-info__title"> {{ $t('subscribeTitle') }} </h3>
              <p class="subscribe-info__description"> {{ $t('subscribeText') }} </p>
          </div>
          <button class="subscribe__button" @click="showModal"> {{ $t('subscribeButton') }} </button>
      </div>
      <Modal ref="modal"/>

      <div class="footer-main">
          <div class="footer-info">
              <a href="#" class="footer-info__logo"> <img class="footer-info__image" src="../image/logo.png" alt="logo LaslesVPN"> </a>
              <p class="footer-info__description"> {{ $t('footerText') }} </p>

              <div class="footer-social">
                  <div class="footer-social__icon" v-for="item in footerSocialIcon" :key='item.class'>
                    <a :class="[item.class]" :href="[item.url]"></a>
                </div>
              </div>

              <p class="footer-info__year"> {{ $t('footerInfo') }} </p>
          </div>

          <ul class="footer-links footer-links_left">
              <li class="footer-links__title">Product</li>
              <li class="footer-links__item" v-for="link in footerLinksProduct" :key='link'><a href="#">{{link}}</a></li>
          </ul>
          <ul class="footer-links footer-links_centre">
              <li class="footer-links__title">Engage</li>
              <li class="footer-links__item" v-for="link in footerLinksEngage" :key='link'><a href="#">{{link}}</a></li>
          </ul>
          <ul class="footer-links footer-links_right">
              <li class="footer-links__title">Earn Money</li>
              <li class="footer-links__item" v-for="link in footerLinksMoney" :key='link'><a href="#">{{link}}</a></li>
          </ul>
      </div>
  </footer>

  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import {mapGetters} from 'vuex'
 
export default {
    components: { VueSlickCarousel, Modal},
    data() {
        return {
            footerLinksProduct: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
            footerLinksEngage: ['LaslesVPN', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'],
            footerLinksMoney: ['Affiliate', 'Become Partner'],
            info: [
                {title: "90+", description: 'Users', activeClass: 'info-block_user'},
                {title: "30+", description: 'Locations', activeClass: 'info-block_location'},
                {title: "50+", description: 'Servers', activeClass: 'info-block_server'},
            ],

            footerSocialIcon: [
                {url: "https://ru-ru.facebook.com/", class: 'footer-social__facebook'},
                {url: "https://www.instagram.com/?hl=ru", class: 'footer-social__instagram'},
                {url: "https://twitter.com/?lang=ru", class: 'footer-social__twitter'},
            ],
            
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: true,
                responsive: [{
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            },
        }
    },

    computed: {
        ...mapGetters([
            'GET_REVIEWS',
        ])
    },

    mounted() {
        this.$store.dispatch('getReviews')
    },

    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
        showModal() {
            this.$refs.modal.open()
        },
        showModalPrice(e) {
            this.$refs.modal.open(e.target.parentNode.parentElement.firstChild.firstChild.innerText)
        }
    }

}
</script>