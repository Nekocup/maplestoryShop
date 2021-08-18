<template>
  <div class="product">
    <div class="content rounded-lg pa-5 mb-3">
      <div class="d-md-flex justify-center">
        <div class="pa-1 pa-md-10">
          <p class="text-h5 text-center font-weight-black">
            {{ product.name }}
          </p>
          <img :src="product.image" alt="" />
          <p class="text-h5 text-center font-weight-black mt-3 red--text">
            {{ product.price }}
          </p>
          <hr />
        </div>
        <div class="pa-2 pa-md-10">
          <p class="text-h6 font-weight-black">類別 :</p>
          <p>{{ product.class }}</p>
          <p class="text-h6 font-weight-black">描述 :</p>
          <p>{{ product.description }}</p>
          <v-btn
            elevation="3"
            rounded
            class="mt-2 mb-2 font-weight-bold"
            :outlined="true"
            @click="addCartVerify(product)"
            width="100%"
          >
            加入購物車
          </v-btn>
        </div>
      </div>
      <div class="notic grey lighten-3 rounded-lg pa-6 mt-10">
        <ul>
          <li>
            <p>保固說明</p>
            <p>
              產品皆原廠公司貨，有正式發票證明及完整售後服務，享有原廠保固1年，請安心購買。
            </p>
          </li>
          <li>
            <p>退換貨須知</p>
            <p>商品到貨隔享15天鑑賞(猶豫)期之權益</p>
          </li>
        </ul>
        <img src="@/assets/image/page/product/pika.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { getItem } from "@/api/product.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      product: "",
    };
  },
  methods: {
    ...mapActions({
      addCartVerify: "addCartVerify",
    }),
  },
  mounted() {
    getItem(this.$route.params.id).then((data) => {
      this.product = data[0];
    });
  },
};
</script>
<style lang="scss">
.product {
  padding: 100px 0;
  min-height: 89vh;
  .content {
    margin: auto;
    background: rgb(255, 246, 218);
    width: 100%;
    max-width: 1200px;
    img {
      width: 100px;
      margin: auto;
      display: block;
    }
  }
  .notic {
    position: relative;
    img {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: none;
    }
  }
}
@media screen and (min-width: 473px) {
  .product .content .notic img {
    display: block;
  }
}
@media screen and (min-width: 960px) {
  .product {
    .content {
      height: 600px;
      hr {
        display: none;
      }
    }
  }
}
</style>