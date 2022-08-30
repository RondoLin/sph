import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api"


//home中的小仓库
const state = {
    //state中的数据默认初始值根据接口的返回值初始化
    categoryList:[],
    getBannerList:[],
    getFloorList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,getBannerList){
        state.getBannerList = getBannerList
    },
    GETFLOORLIST(state,getFloorList){
        state.getFloorList = getFloorList
    },
}
const actions = {
    //通过api里面的接口函数调用，向服务器发送请求，获取服务器结果
    async categoryList({commit}){
        let result = await reqCategoryList()
            if(result.code==200){
                commit("CATEGORYLIST",result.data)
            }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList()
            if(result.code == 200){
                commit('GETBANNERLIST',result.data)
            }
        
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
            if(result.code == 200){
                commit('GETFLOORLIST',result.data)
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