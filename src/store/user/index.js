import { reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
import { setToken,getToken,removeToken } from "@/utils/token";


const state = {
    getCode:'',
    token:getToken(),
    userInfo:{}
}


const mutations = {
    GETCODE(state,getCode){
        state.getCode = getCode
    },
    USERLOGIN(state,token){
        state.token = token
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}


const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
        
        }else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        if(result.code==200){
            return 'ok'
        }else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        if(result.code==200){
           commit('USERLOGIN',result.data.token)
          setToken(result.data.token)
           return 'ok'
        }else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userInfo({commit}){
        let result = await reqUserInfo()
        if(result.code==200){
            commit('USERINFO',result.data)
            return 'ok'
        }else {
           
        }
    },
    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code==200){
            commit('CLEAR')
        }

    }
}



const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}