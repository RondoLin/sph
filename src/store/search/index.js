import { reqGetSearchInfo } from "@/api"


const state = {
    getSearchList:{}
}
const mutations = {
    GETSEARCHLIST(state,getSearchList){
        state.getSearchList = getSearchList
    }
}
const actions = {
    async getSearchList({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
const getters = {
    goodsList(state){
        return state.getSearchList.goodsList || []
    },
    trademarkList(state){
        return state.getSearchList.trademarkList
    },
    attrsList(state){
        return state.getSearchList.attrsList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}