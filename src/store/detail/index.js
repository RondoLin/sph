import { reqAddOrUpdateShopCart, reqGoodInfo } from "@/api"
import {getUUID} from '@/utils/uuid_token'


const state = {
    getGoodInfo:{},
    uuid_token:getUUID()
}

const mutations = {
    GETGOODINFO(state,getGoodInfo){
        state.getGoodInfo = getGoodInfo
    },
}

const actions = {
    async getGoodInfo({commit},skuid){
        let result = await reqGoodInfo(skuid)
            if(result.code==200){
                commit("GETGOODINFO",result.data)
            }
    },
    async addOrUpdateShopCart({commit},{skuid,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuid,skuNum)
            if(result.code==200){
                return "Ok"
            }else{
                return Promise.reject(new Error('fail'))
            }
    },

}
const getters = {
    categoryView(state){
        return state.getGoodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.getGoodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.getGoodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}