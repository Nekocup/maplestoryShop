<template>
  <v-container class="pt-10 text-center">
    <div class="banner pb-3 mt-15">
      <img src="@/assets/image/page/products/banner.jpg" alt="" />
    </div>
    <div class="products">
      <v-row>
        <v-col cols="12" lg="3">
          <div class="classify">
            <p
              class="red lighten-1 rounded white--text title text-h6 pa-1"
              @click="toggleClassifyDisplay"
            >
              分類
            </p>
            <ul :class="{ 'classify-hidden': classifyDisplay }">
              <li @click="changeClassify('全部')">全部</li>
              <li @click="changeClassify('飾品')">飾品</li>
              <li @click="changeClassify('雜貨')">雜貨</li>
              <li @click="changeClassify('防具')">防具</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" lg="9" class="pt-4">
          <p class="text-h5 text-left">{{ classfityTitle }}</p>
          <hr />
          <v-row>
            <v-col
              v-for="product in sales"
              :key="product.id"
              cols="12"
              sm="6"
              md="4"
              class="productsList pt-5"
            >
              <productCard :product="product"></productCard>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import productCard from "@/components/productCard";
import { getSales } from "@/api/product.js";
export default {
  data() {
    return {
      classifyDisplay: false,
      sales: [],
      classfityTitle: "全部",
    };
  },
  components: {
    productCard,
  },
  methods: {
    toggleClassifyDisplay() {
      this.classifyDisplay = !this.classifyDisplay;
    },
    changeClassify(classfity) {
      getSales(classfity).then((data) => {
        this.sales = data;
      });
      this.classfityTitle = classfity;
    },
  },
  mounted() {
    getSales("全部").then((data) => {
      this.sales = data;
    });
  },
};
</script>
<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    opacity: 0.9;
    max-width: 1600px;
  }
}
</style>