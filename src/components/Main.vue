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
              <img class="about-img__img" src="../image/Illustration-1.png" alt="">
          </div>
      </div>

      <div class="info">
          <div class="info-block" v-bind:class="[item.activeClass]" v-for="item in info" :key="item.activeClass">
              <div class="info-block__value">
                  <p class="info-block__title"> {{item.title}} </p>
                  <p class="info-block__description"> {{item.description}} </p>
              </div>
          </div>
      </div>

      <div class="features">
          <div class="features-img">
              <img class="features-img__image" src="../image/Illustration-2.png" alt="">
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

              <div class="price-block__package" v-for="item in $t('plan')" :key="item.name" v-bind:class="[item.activeClass]">
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
              <img class="locations__img" src="../image/Huge-Global.png" alt="">
          </div>
      </div>

      <div class="partners"></div>

      <div class="reviews">
          <h3 class="reviews__title"> {{ $t('reviewsTitle') }} </h3>
          <p class="reviews__description"> {{ $t('reviewsText') }} </p>
      </div>
      
      <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">
          <div v-for="item in reviews" :key='item.name'>
              <div class="reviews-user">
                  <div class="reviews-user-header">
                      <img class="reviews-user__img" v-bind:src="[item.img]" alt="">
                      <div class="reviews-user__main">
                          <p class="reviews-user__name" >{{ item.surname }} {{ item.name }}</p>
                          <p class="reviews-user__city">{{ item.country }}, {{ item.city }}</p>
                      </div>
                      <p class="reviews-user__rating">{{ item.rating }}</p>
                  </div>
                  <p class="reviews-user__description"> {{ item.message }}</p>
              </div>
        </div>
	</VueSlickCarousel>

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
          <div class="footer-main-info">
              <a href="#" class="footer-main__logo"> <img src="../image/Logo.png" alt=""> </a>
              <p class="footer-main__description"> {{ $t('subscribeText') }} </p>
              <div class="footer-main-social">
                  <a href="https://ru-ru.facebook.com/"><div class="footer-main-social__facebook"></div></a>
                  <a href="https://www.instagram.com/?hl=ru"><div class="footer-main-social__instagram"></div></a>
                  <a href="hhttps://twitter.com/?lang=ru"><div class="footer-main-social__twitter"></div></a>
              </div>
              <p class="footer-main__year">©2020LaslesVPN</p>
          </div>
          <ul class="footer-main-links footer-main-links_left">
              <li class="footer-main-links__title">Product</li>
              <li class="footer-main-links__item" v-for="link in footerLinksProduct" :key='link'><a href="#">{{link}}</a></li>
          </ul>
          <ul class="footer-main-links footer-main-links_centre">
              <li class="footer-main-links__title">Engage</li>
              <li class="footer-main-links__item" v-for="link in footerLinksEngage" :key='link'><a href="#">{{link}}</a></li>
          </ul>
          <ul class="footer-main-links footer-main-links_right">
              <li class="footer-main-links__title">Earn Money</li>
              <li class="footer-main-links__item" v-for="link in footerLinksMoney" :key='link'><a href="#">{{link}}</a></li>
          </ul>
      </div>
  </footer>

  </div>
</template>

<script>
import axios from 'axios';
import Modal from '../components/Modal.vue';
import {apiUrls} from '../apiUrls.js';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
 
export default {
    components: { VueSlickCarousel, Modal},
    data() {
        return {
            reviews: {},
            footerLinksProduct: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
            footerLinksEngage: ['LaslesVPN', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'],
            footerLinksMoney: ['Affiliate', 'Become Partner'],
            info: [
                {title: "90+", description: 'Users', activeClass: 'info-block_users'},
                {title: "30+", description: 'Locations', activeClass: 'info-block_locations'},
                {title: "50+", description: 'Servers', activeClass: 'info-block_servers'},
            ],

            settings: {
				"slidesToShow": 3,
				"slidesToScroll": 1,
                responsive: [{
                    breakpoint: 824,
                    settings: {
                        "slidesToShow": 2,
                        "slidesToScroll": 1,
                    }
                },
                {
                    breakpoint: 415,
                    settings: {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                    }
                }]
            },
        }
    },
    mounted() {
        axios.get( apiUrls.getReviews)
        .then(response => {
            this.reviews = response.data
        });
    },
    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
        showModal() {
            this.$refs.modal.isModalVisible = true
        },
        showModalPrice(e) {
            this.$refs.modal.selectPlan = e.target.parentNode.firstChild.innerHTML
            this.$refs.modal.isModalVisible = true
        }
    }

}
</script>