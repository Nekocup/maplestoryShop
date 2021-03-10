<template >
  <div class="shopCart d-flex">
    <v-container>
      <div class="maxWidth">
        <template v-if="getShopCartLength !== 0">
          <div>
            <div
              class="text-h4 pb-3 font-weight-bold orange--text text--lighten-1"
            >
              購物車
            </div>
            <v-simple-table style="min-height: 300px">
              <thead>
                <tr>
                  <th class="text-center">商品名稱</th>
                  <th class="text-center">單價</th>
                  <th class="text-center">數量</th>
                  <th class="text-center">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getShopCart" :key="product.detail.id">
                  <td>
                    <div class="text-center">
                      <img
                        :src="product.detail.image"
                        alt="Not fond"
                        class="ma-1 pr-3"
                      />
                      <div class="text-h7">{{ product.detail.name }}</div>
                    </div>
                  </td>
                  <td class="text-center">{{ product.detail.price }}</td>
                  <td>
                    <div class="d-flex justify-center align-center">
                      <v-btn @click="reduceCounterVerify(product.detail.id)"
                        >-</v-btn
                      >
                      <div class="price text-center counter">
                        {{ product.count }}
                      </div>
                      <v-btn @click="addCountVerify(product.detail.id)"
                        >+</v-btn
                      >
                    </div>
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="red lighten-1 white--text font-weight-bold"
                      @click="removeProductVerify(product.detail.id)"
                      >刪除</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-btn
              class="goCheckout mt-10 orange lighten-2 white--text font-weight-bold"
              href="#/checkout"
              >前往結帳</v-btn
            >
          </div>
        </template>
        <template v-else>
          <div
            class="text-h5 text-sm-h4 text-md-h3 text-center pt-15 grey--text"
          >
            目前尚無購買任何商品
          </div>
          <v-btn
            href="#/products"
            class="goShop orange lighten-2 white--text font-weight-bold mt-10"
          >
            瀏覽商品
          </v-btn>
        </template>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      w: true,
    };
  },
  computed: {
    ...mapGetters({
      getShopCart: "getShopCart",
      isLogin: "isLogin",
      getShopCartLength: "getShopCartLength",
    }),
  },
  methods: {
    ...mapActions({
      addCountVerify: "addCountVerify",
      reduceCounterVerify: "reduceCounterVerify",
      removeProductVerify: "removeProductVerify",
    }),
  },
  created() {
    if (!this.isLogin) {
      alert("請先登入帳號");
      location.href = "#/login";
    }
  },
};
</script>