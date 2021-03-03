export default {
    state :{
        email: null,
        shopCart: []
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
            }else {
                alert("帳號或密碼格式錯誤")
                return 400
            }
        },
        // 登出
        logout( { state , commit}){
            if( state.email !== ""){
                commit('logout')
            } else {
                return 401
            }
        },
        // 加入購物車驗證
        addCartVerify({state, commit}, detail) {
            if(state.email !== null){
                commit('addCart', detail)
            }else {
                return 401
            }
        },
        addCountVerify({ state, commit }, id){
            let pass = false

            state.shopCart.forEach(data=>{
                if(data.detail.id === id){
                    if(data.count < 998){
                        pass = true
                    }
                }
            })
            if(state.email !== null && pass){
                commit('addCount', id)
            }else {
                return 401
            }
        },
        reduceCounterVerify({state, commit}, id){

            let pass = false

            state.shopCart.forEach(data=>{
                if(data.detail.id === id){
                    if(data.count !== 1){
                        pass = true
                    }
                }
            })
            if(state.email !== null && pass){
                commit('reduceCount', id)
            }else {
                return 401
            }            
        }
    },
    mutations: {
        login(state, email){
            state.email = email
        },
        logout(state){
            state.email = null
        },
        addCart(state, detail) {
            
            let added = false
            state.shopCart.forEach( product => {
                if(product.detail.id == detail.id){
                    product.count ++
                    added = true
                }
            })
            if(!added){
                state.shopCart.push({detail, count : 1})
            }
        },
        addCount(state, id) {
            let find = false
            state.shopCart.forEach((product)=>{
                if(product.detail.id === id){
                    product.count ++
                    find = true
                }
            })
        },
        reduceCount(state, id) {
            state.shopCart.forEach((product)=>{
                if(product.detail.id === id){
                    product.count --
                }
            })
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
        getShopCart(state) {
            return state.shopCart
        }
    },
}