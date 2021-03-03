<template>
  <div class="menu">
    <div class="logo">
      <a href="#/">
        <img src="@/assets/image//components/menu/logo.png" alt="" />
      </a>
    </div>
    <div class="hambuger" @click="displayNavbar">
      <v-icon large :color="color">mdi-menu</v-icon>
    </div>
    <div class="navbar pt-5" :style="{ right: navBarRight }">
      <ul>
        <li class="pa-5 text-center text-h6 font-weight-bold">
          <a href="#">瀏覽商品</a>
        </li>
        <li class="pa-5 text-center text-h6 font-weight-bold">
          <a href="#/shopCart">購物車</a>
        </li>
        <template v-if="isLogin">
          <li class="pa-5 text-center text-h6 font-weight-bold">
            <a @click="logout">登出</a>
          </li>
        </template>
        <template v-else>
          <li class="pa-5 text-center text-h6 font-weight-bold">
            <a href="#/login">登入</a>
          </li>
        </template>
      </ul>
    </div>
    <div
      class="mask-bg"
      :class="{ on: maskBgDisplay }"
      @click="displayNavbar"
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
    displayNavbar() {
      this.navBarRight = this.navBarRight === "768px" ? "0px" : "768px";
      this.maskBgDisplay = this.maskBgDisplay === false ? true : false;
    },
    ...mapActions({
      logout: "logout",
    }),
  },
  computed: {
    ...mapGetters({
      isLogin: "isLogin",
    }),
  },
  destroyed() {
    const $hambuger = document.querySelector(".hambuger");
    $hambuger.removeEventListener("mouseover", this.changeIconColor);
    $hambuger.removeEventListener("mouseout", this.changeIconColor);
  },
};
</script>