<template>
  <div>
    <v-app>
      <Menu></Menu>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Menu from "@/components/menu";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>
