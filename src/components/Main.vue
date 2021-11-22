<template>
<div>
  <main class="main">

      <div class="about">
          <div class="about-description">
              <h1 class="about-description__title">Want anything to be easy with <b>LaslesVPN.</b></h1>
              <p class="about-description__description">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
              <a href="#price">
                  <button class="about-description__button">Get Started</button>
              </a>
          </div>
          <div class="about-img">
              <img class="about-img__img" src="../image/Illustration-1.png" alt="">
          </div>
      </div>

      <div class="info">
          <div class="info-block info-block_users">
              <div class="info-block__value">
                  <p class="info-block__title">90+</p>
                  <p class="info-block__description">Users</p>
              </div>
          </div>
          <div class="info-block info-block_locations">
              <div class="info-block__value">
                  <p class="info-block__title">30+</p>
                  <p class="info-block__description">Locations</p>
              </div>
          </div>
          <div class="info-block info-block_servers">
              <div class="info-block__value">
                  <p class="info-block__title">50+</p>
                  <p class="info-block__description">Servers</p>
              </div>
          </div>
      </div>

      <div class="features">
          <div class="features-img">
              <img class="features-img__image" src="../image/Illustration-2.png" alt="">
          </div>
          <div class="features-text">
              <h2 class="features-text__title">We Provide Many Features You Can Use</h2>
              <p class="features-text__description">You can explore the features that we provide with fun and have their own functions each feature.</p>
              <p class="features-text__item">Powerfull online protection.</p>
              <p class="features-text__item">Internet without borders.</p>
              <p class="features-text__item">Supercharged VPN</p>
              <p class="features-text__item">No specific time limits.</p>
          </div>
      </div>

      <div class="price" id="price">
          <h3 class="price__title">Choose Your Plan</h3>
          <p class="price__description">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
          <div class="price-block">

              <div class="price-block__package">
                  <p class="price-block__title">Free Plan</p>
                  <div class="price-block__list price-block__list_free">
                      <p class="price-block__item" v-for="item in freePlan" :key="item">  {{item}} </p>
                  </div>
                  <div>
                      <p class="price-block__cost">Free</p>
                      <button class="price-block__button" @click="showModalPrice">Select</button>
                  </div>
              </div>
              <div class="price-block__package price-block__package_standart">
                  <p class="price-block__title">Standard Plan</p>
                  <div class="price-block__list price-block__list_standard">
                      <p class="price-block__item" v-for="item in standardPlan" :key="item">  {{item}} </p>
                  </div>
                  <p class="price-block__cost">$9 / mo</p>
                  <button class="price-block__button" @click="showModalPrice">Select</button>
              </div>
              <div class="price-block__package price-block__package_premium">
                  <p class="price-block__title">Premium Plan</p>
                  <div class="price-block__list price-block__list_premium">
                      <p class="price-block__item" v-for="item in premiumPlan" :key="item">  {{item}} </p>
                  </div>
                  <p class="price-block__cost">$12 / mo</p>
                  <button class="price-block__button" @click="showModalPrice">Select</button>
              </div>
          </div>
          <Modal ref="modal"/>

          <div class="locations">
              <h3 class="locations__title">Huge Global Network of Fast VPN</h3>
              <p class="locations__description">See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</p>
              <img class="locations__img" src="../image/Huge-Global.png" alt="">
          </div>
      </div>

      <div class="partners"></div>

      <div class="reviews">
          <h3 class="reviews__title">Trusted by Thousands of Happy Customer</h3>
          <p class="reviews__description">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      </div>
      
      <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">
          <div>
              <div class="reviews-user">
                  <div class="reviews-user-header">
                      <img class="reviews-user__img" src="../image/robert-img.png" alt="">
                      <div class="reviews-user-main">
                          <p class="reviews-user__name" >{{ reviews.user1.surname }} {{ reviews.user1.name }}</p>
                          <p class="reviews-user__city">{{ reviews.user1.country }}, {{ reviews.user1.city }}</p>
                      </div>
                      <p class="reviews-user__rating">{{ reviews.user1.rating }}</p>
                  </div>
                  <p class="reviews-user__description"> {{ reviews.user1.message }}</p>
              </div>
        </div>
        <div>
            <div class="reviews-user">
                  <div class="reviews-user-header">
                      <img class="reviews-user__img" src="../image/christy-img.png" alt="">
                      <div class="reviews-user-main">
                          <p class="reviews-user__name" >{{ reviews.user2.surname }} {{ reviews.user2.name }}</p>
                          <p class="reviews-user__city">{{ reviews.user2.country }}, {{ reviews.user2.city }}</p>
                      </div>
                      <p class="reviews-user__rating">{{ reviews.user2.rating }}</p>
                  </div>
                  <p class="reviews-user__description"> {{ reviews.user2.message }}</p>
              </div>
        </div>
        <div>
            <div class="reviews-user">
                  <div class="reviews-user-header">
                      <img class="reviews-user__img" src="../image/kim-img.png" alt="">
                      <div class="reviews-user-main">
                          <p class="reviews-user__name" >{{ reviews.user3.surname }} {{ reviews.user3.name }}</p>
                          <p class="reviews-user__city">{{ reviews.user3.country }}, {{ reviews.user3.city }}</p>
                      </div>
                      <p class="reviews-user__rating">{{ reviews.user3.rating }}</p>
                  </div>
                  <p class="reviews-user__description"> {{ reviews.user3.message }}</p>
              </div>
        </div>
		<div>
            <div class="reviews-user">
                  <div class="reviews-user-header">
                      <img class="reviews-user__img" src="../image/christy-img.png" alt="">
                      <div class="reviews-user-main">
                          <p class="reviews-user__name" >{{ reviews.user2.surname }} {{ reviews.user2.name }}</p>
                          <p class="reviews-user__city">{{ reviews.user2.country }}, {{ reviews.user2.city }}</p>
                      </div>
                      <p class="reviews-user__rating">{{ reviews.user2.rating }}</p>
                  </div>
                  <p class="reviews-user__description"> {{ reviews.user2.message }} </p>
              </div>
        </div>
	</VueSlickCarousel>

      <div class="arrows-button">
              <div class="arrows-button-left" @click="prev"></div>
              <div class="arrows-button-right" @click="next"></div>
      </div>
  </main >

  <footer class="footer">
      <div class="subscribe">
          <div class="subscribe-info">
              <h3 class="subscribe-info__title">Subscribe Now for Get Special Features!</h3>
              <p class="subscribe-info__description">Let's subscribe with us and find the fun.</p>
          </div>
          <button class="subscribe__button" @click="showModal">Subscribe Now</button>
      </div>
      <Modal ref="modal"/>

      <div class="footer-main">
          <div class="footer-main-info">
              <a href="#" class="footer-main__logo"> <img src="../image/Logo.png" alt=""> </a>
              <p class="footer-main__description"><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
              <div class="footer-main-social">
                  <a href="https://ru-ru.facebook.com/"><div class="footer-main-social__facebook"></div></a>
                  <a href="https://www.instagram.com/?hl=ru"><div class="footer-main-social__instagram"></div></a>
                  <a href="hhttps://twitter.com/?lang=ru"><div class="footer-main-social__twitter"></div></a>
              </div>
              <p class="footer-main__year">©2020LaslesVPN</p>
          </div>
          <ul class="footer-main-links footer-main-links_left">
              <li class="footer-main-links__title">Product</li>
              <li class="footer-main-links__item"><a href="#">Download</a></li>
              <li class="footer-main-links__item"><a href="#">Pricing</a></li>
              <li class="footer-main-links__item"><a href="#">Locations</a></li>
              <li class="footer-main-links__item"><a href="#">Server</a></li>
              <li class="footer-main-links__item"><a href="#">Countries</a></li>
              <li class="footer-main-links__item"><a href="#">Blog</a></li>
          </ul>
          <ul class="footer-main-links footer-main-links_centre">
              <li class="footer-main-links__title">Engage</li>
              <li class="footer-main-links__item"><a href="#">LaslesVPN</a></li>
              <li class="footer-main-links__item"><a href="#">FAQ</a></li>
              <li class="footer-main-links__item"><a href="#">Tutorials</a></li>
              <li class="footer-main-links__item"><a href="#">About Us</a></li>
              <li class="footer-main-links__item"><a href="#">Privacy Policy</a></li>
              <li class="footer-main-links__item"><a href="#">Terms of Service</a></li>
          </ul>
          <ul class="footer-main-links footer-main-links_right">
              <li class="footer-main-links__title">Earn Money</li>
              <li class="footer-main-links__item"><a href="#">Affiliate</a></li>
              <li class="footer-main-links__item"><a href="#">Become Partner</a></li>
          </ul>
      </div>
  </footer>

  </div>
</template>

<script>
import axios from 'axios';
import Modal from '../components/Modal.vue';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

 
export default {
    components: { VueSlickCarousel, Modal},
    data() {
        return {
            reviews: {},
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
            freePlan: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs','Works on All Devices'],
            standardPlan: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs','Works on All Devices', 'Connect Anyware'],
            premiumPlan: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs','Works on All Devices', 'Connect Anyware', 'Get New Features'],
        }
    },
    mounted() {
        axios.get('https://laslesvpn-97c54-default-rtdb.firebaseio.com/reviews.json')
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