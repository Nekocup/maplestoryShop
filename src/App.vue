<template>
  <div>
    <v-app>
      <Menu></Menu>
      <router-view />
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Menu from "@/components/menu";
import Footer from "@/components/Footer";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Menu,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>
