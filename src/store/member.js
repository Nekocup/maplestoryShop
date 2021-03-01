export default {
    state :{
        email: null,
    },
    actions: {
        // 驗證登入的帳密
        loginVerify({commit}, emailPass){
            const emailRegxp = /[\w-]+@([\w-]+\.)+[\w-]+/;
            
            let email = emailPass.email
            let password = emailPass.password
            if(emailRegxp.test(email) && password != ''){    
                commit('login',emailPass.email)
                location.href = '.#/'
                return 'Pass'
            }else {
                alert("帳號或密碼格式錯誤")
                return 'login Error'
            }
        },
        // 登出
        logout( { state , commit}){
            if( state.email !== ""){
                commit('logout')
            }
        }
    },
    mutations: {
        login(state, email){
            state.email = email
        },
        logout(state){
            state.email = null
        }
    }, 
    getters: {
        // 是否登入
        isLogin(state) {
          if (state.email == null) {
            return false;
        }else {
            return true;
        }
        },
    },
}