<template>
  <div class="login d-flex align-center justify-center flex-column">
    <div class="loginFrom pa-3 rounded-lg">
      <div class="title pa-2">
        <div class="text-center">
          <v-icon size="100" class="pink--text text--lighten-2"
            >mdi-cellphone-link</v-icon
          >
          <div class="text-h5 text-md-h4 pt-2 pb-5 pink--text text--lighten-2">
            Welcome back
          </div>
        </div>
      </div>
      <main class="text-center">
        <input
          type="email"
          placeholder="Email"
          class="mt-3 mb-3 pa-1 rounded"
          v-model="email"
        />
        <br />
        <input
          type="password"
          placeholder="密碼"
          class="mt-3 mb-3 pa-1 rounded"
          v-model="password"
        />
        <div v-show="statusMsg === 400 ? true : false" class="red--text">
          信箱格式錯誤 !
        </div>
        <v-btn
          @click="
            loginVerify({ email, password }).then((status) => {
              statusMsg = status;
            })
          "
          class="ma-auto mt-10 mb-3 pa-1 rounded pink lighten-2 white--text"
          >登入</v-btn
        >
      </main>
    </div>
    <div class="picList pt-10 text-center">
      <img src="@/assets/image/page/login/1.gif" alt="" />
      <img src="@/assets/image/page/login/2.gif" alt="" />
      <img src="@/assets/image/page/login/3.gif" alt="" />
      <img src="@/assets/image/page/login/4.gif" alt="" />
      <img src="@/assets/image/page/login/5.gif" alt="" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      statusMsg: 0,
    };
  },
  computed: {
    ...mapGetters({
      isLogin: "isLogin",
    }),
  },
  methods: {
    ...mapActions({ loginVerify: "loginVerify" }),
  },
  mounted() {
    if (this.isLogin) {
      this.$router.push("/");
    }
  },
};
</script>