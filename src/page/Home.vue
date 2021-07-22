<template>
  <div class="home pt-10">
    <div class="banner">
      <img src="@/assets/image/page/home/banner.jpg" alt="not fond" />
      <div
        class="
          title
          text-center
          ma-auto
          d-flex
          justify-center
          align-center
          rounded-lg
        "
      >
        <div class="text-h6 text-md-h5 white--text pa-2 font-weight-bold">
          全台最小的楓之谷交易網站
        </div>
      </div>
      <img
        src="@/assets/image/page/home/duck.gif"
        alt="not fond"
        class="duck ma-auto pb-3"
      />
    </div>
    <v-container class="modifyContainer">
      <div class="hotSale pt-5 pb-2">
        <div class="text-h4 text-center mb-8 red--text font-weight-bold">
          最近熱門
        </div>
        <HotSaleSwiper></HotSaleSwiper>
      </div>
      <div class="about pt-2">
        <v-row>
          <v-col cols="12" md="6">
            <div class="title text-h4 font-weight-bold text-center pt-7">
              關於楓之谷
            </div>
            <div class="text-h5 pt-8 pr-md-10">
              新楓之谷是一款橫向捲軸平面動作操作的免費大型多人線上角色扮演遊戲
              ，由韓國Wizet開發。在新楓之谷世界中，可以經由扮演來自各地的角色來進行冒險，透過技能攻擊怪物、解決任務以提升等級。
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <img src="@/assets/image/page/home/pikachu.png" alt="" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import HotSaleSwiper from "@/components/hotSaleSwiper.vue";
export default {
  name: "Home",
  components: {
    HotSaleSwiper,
  },
};
</script>
