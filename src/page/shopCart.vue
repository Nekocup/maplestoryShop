<template >
  <div class="shopCart d-flex">
    <v-container>
      <div class="maxWidth">
        <div class="text-h4 pb-3 font-weight-bold orange--text text--lighten-1">
          購物車
        </div>
        <v-simple-table>
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
                  <v-btn @click="addCountVerify(product.detail.id)">+</v-btn>
                </div>
              </td>
              <td class="text-center"><v-btn>刪除</v-btn></td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getShopCart: "getShopCart",
    }),
  },
  methods: {
    ...mapActions({
      addCountVerify: "addCountVerify",
      reduceCounterVerify: "reduceCounterVerify",
    }),
  },
};
</script>