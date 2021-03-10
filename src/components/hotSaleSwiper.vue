<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="product in hotSale" :key="product.id">
      <!-- <div class="HotCard rounded-lg pa-10">
        <img :src="product.image" alt="" />
        <div class="contain">
          <div class="text-h6 font-weight-bold">{{ product.name }}</div>
          <div class="description text-left pt-2 grey--text text--darken-1">
            {{ product.description }}
          </div>
          <div class="text-h6 pt-6 red--text text--lighten-1 pb-6">
            ${{ product.price }}
          </div>
        </div>
        <div class="d-flex flex-column">
          <v-btn
            elevation="2"
            rounded
            class="mt-2 mb-2 font-weight-bold"
            outlined="true"
          >
            詳細資訊
          </v-btn>
          <v-btn
            elevation="2"
            rounded
            class="mt-2 mb-2 font-weight-bold"
            outlined="true"
            @click="addCartVerify(product)"
          >
            加入購物車
          </v-btn>
        </div>
        <div
          class="hot red accent-4 white--text pa-3 rounded-b-lg font-weight-bold"
        >
          HOT
        </div>
      </div> -->
      <productCard :product="product"></productCard>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import { getHotSale } from "@/api/product.js";
import productCard from "@/components/productCard";
export default {
  components: {
    Swiper,
    SwiperSlide,
    productCard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetweenSlides: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
          },
          793: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
          },
        },
      },
      hotSale: [],
    };
  },
  mounted() {
    getHotSale().then((data) => {
      this.hotSale = data;
    });
  },
};
</script>
