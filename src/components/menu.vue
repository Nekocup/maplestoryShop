<template>
  <div class="menu">
    <div class="logo">
      <a href="#/">
        <img src="@/assets/image//components/menu/logo.png" alt="" />
      </a>
    </div>
    <div class="hambuger" @click="toggleNavbar">
      <v-icon large :color="color">mdi-menu</v-icon>
    </div>
    <div class="navbar pt-5" :style="{ right: navBarRight }">
      <ul>
        <li class="pa-5 text-center text-h6 font-weight-bold">
          <a href="#/products" @click="hiddenNavbar">瀏覽商品</a>
        </li>
        <li class="pa-5 text-center text-h6 font-weight-bold">
          <div class="menuShopCartOuter ma-auto">
            <a href="#/shopCart" @click="hiddenNavbar">購物車</a>
            <div
              class="red white--text menuShopCart rounded-circle text-caption d-flex align-center justify-center"
              v-if="getShopCartLength !== 0"
            >
              {{ getShopCartLength }}
            </div>
          </div>
        </li>
        <template v-if="isLogin">
          <li class="pa-5 text-center text-h6 font-weight-bold">
            <a
              @click="
                logout();
                hiddenNavbar();
              "
              :key="'logout'"
              >登出</a
            >
          </li>
        </template>
        <template v-else>
          <li class="pa-5 text-center text-h6 font-weight-bold">
            <a href="#/login" @click="hiddenNavbar" :key="'login'">登入</a>
          </li>
        </template>
      </ul>
    </div>
    <div
      class="mask-bg"
      :class="{ on: maskBgDisplay }"
      @click="toggleNavbar"
    ></div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      color: "",
      navBarRight: "768px",
      maskBgDisplay: false,
    };
  },
  mounted() {
    // When hover the icon, change the color
    const $hambuger = document.querySelector(".hambuger");
    $hambuger.addEventListener("mouseover", this.changeIconColor);
    $hambuger.addEventListener("mouseout", this.changeIconColor);
  },
  methods: {
    changeIconColor() {
      this.color = this.color == "" ? "black" : "";
      return "change the Icon color!";
    },
    toggleNavbar() {
      this.navBarRight = this.navBarRight === "768px" ? "0px" : "768px";
      this.maskBgDisplay = this.maskBgDisplay === false ? true : false;
    },
    hiddenNavbar() {
      this.navBarRight = "768px";
      this.maskBgDisplay = false;
    },
    ...mapActions({
      logout: "logout",
    }),
  },
  computed: {
    ...mapGetters({
      isLogin: "isLogin",
      getShopCartLength: "getShopCartLength",
    }),
  },
  destroyed() {
    const $hambuger = document.querySelector(".hambuger");
    $hambuger.removeEventListener("mouseover", this.changeIconColor);
    $hambuger.removeEventListener("mouseout", this.changeIconColor);
  },
};
</script>