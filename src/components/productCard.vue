<template>
  <div class="HotCard rounded-lg pa-10">
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
        :outlined="true"
        @click="$router.push(`/product/${product.id}`)"
      >
        詳細資訊
      </v-btn>
      <v-btn
        elevation="2"
        rounded
        class="mt-2 mb-2 font-weight-bold"
        :outlined="true"
        @click="addCartVerify(product)"
      >
        加入購物車
      </v-btn>
    </div>
    <div
      v-if="product.hot"
      class="hot red accent-4 white--text pa-3 rounded-b-lg font-weight-bold"
    >
      HOT
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    product: Object,
  },
  methods: {
    ...mapActions({
      addCartVerify: "addCartVerify",
    }),
  },
};
</script>
<style lang="scss">
.HotCard {
  position: relative;
  border: 2px solid gray;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hot {
    position: absolute;
    top: 0;
    right: 5%;
  }
}
</style>