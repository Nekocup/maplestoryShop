<template>
  <footer
    class="
      d-flex
      flex-column
      align-center
      justify-center
      grey--text
      text--darken-1 text-center
      pt-3
      pb-1
      grey
      lighten-2
    "
  >
    <div>
      <a href="https://www.facebook.com/dyk881229/"
        ><v-icon class="pa-2">mdi-facebook</v-icon></a
      >
      <a href="https://www.instagram.com/zxclf1bbb"
        ><v-icon class="pa-2">mdi-instagram</v-icon></a
      >
      <a href="https://github.com/Nekocup"
        ><v-icon class="pa-2">mdi-github</v-icon></a
      >
      <a href="https://twitter.com/Nekocup7755"
        ><v-icon class="pa-2">mdi-twitter</v-icon></a
      >
    </div>
    <div class="text-h7">版權所有© 2021 Nekocup</div>
    <div class="text-h7">所有的圖片和內容歸 NEXON Korea Corporation 所有</div>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="scss">
footer {
  // background: blanchedalmond;
  position: relative;
  a {
    text-decoration: none;
  }
}
@media screen and (max-width: 768px) {
  footer img {
    display: none;
  }
}
</style>