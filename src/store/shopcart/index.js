
import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from "@/api"



const state = {
    getCartList:[]
}
const mutations = {
    GETCARTLIST(state,getCartList){
        state.getCartList = getCartList
    }
    
}
const actions = {
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCartListBySkuId({commit},skuid){
        let result = await reqDeleteCartById(skuid)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedByid(skuId,isChecked)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll = []
        getters.getCartList.forEach(item => {
            let promise = item.isChecked == 1?dispatch('deleteCartListBSkuId',item.skuid):''
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    } ,  
    async updateAllCartChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.getCartList[0].forEach(item => {
            let promise = dispatch('updateAllCartChecked',{
                skuid:item.skuid,
                isChecked
            })
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    } ,  
}
const getters = {
    getCartList(state){
        return state.getCartList[0] || {}
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}