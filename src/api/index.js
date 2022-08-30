//当前这个模块，api进行统一管理

import requests from "./ajax";
import mockRequests from "./mockAjax"

export const reqCategoryList = () =>
     requests.get('http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList')


export const reqGetBannerList = () =>
     mockRequests.get('/mock/banner')


export const reqFloorList = () =>
     mockRequests.get('/mock/floor')


export const reqGetSearchInfo = (params) =>
     requests({ url: 'http://gmall-h5-api.atguigu.cn/api/list', method: 'post', data: params })

// export const reqGoodInfo = (skuid) => 
//      mockRequests.get('/mock/item')

export const reqGoodInfo = (skuid) =>
     requests.get(`http://gmall-h5-api.atguigu.cn/api/item/${skuid}`)

export const reqAddOrUpdateShopCart = (skuid, skuNum) =>
     requests.post(`http://gmall-h5-api.atguigu.cn/api/cart/addToCart/${skuid}/${skuNum}`)


export const reqCartList = () =>
     requests.get('http://gmall-h5-api.atguigu.cn/api/cart/cartList')

// export const  reqCartList = () => 
//      mockRequests.get('/mock/cartList')

export const reqDeleteCartById = (skuid) => requests.delete(`http://gmall-h5-api.atguigu.cn/api/cart/deleteCart/${skuid}`)

export const reqUpdateCheckedByid = (skuId, isChecked) =>
     requests.get(`http://gmall-h5-api.atguigu.cn/api/cart/checkCart/${skuId}/${isChecked}`)

export const reqGetCode = (phone) => requests.get(`http://gmall-h5-api.atguigu.cn/api/user/passport/sendCode/${phone}`)

export const reqUserRegister = (data) => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/register', data, method: 'post' })

export const reqUserLogin = (data) => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/login', data, method: 'post' })

export const reqUserInfo = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/auth/getUserInfo', method: 'get' })

export const reqLogout = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/logout', method: 'get' })

export const reqAddressInfo = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/userAddress/auth/findUserAddressList', method: 'get' })

export const reqOrderInfo = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/order/auth/trade', method: 'get' })

export const reqSubmitOrder = (tradeNo, data) => requests({ url: `http://gmall-h5-api.atguigu.cn/api/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

export const reqPayInfo = (orderId) => requests({ url: `http://gmall-h5-api.atguigu.cn/api/payment/weixin/createNative/${orderId}`, method: 'get' })

export const reqPayStatus = (orderId) => requests({ url: `http://gmall-h5-api.atguigu.cn/api/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

export const reqMyOrderList = (page,limit) => requests({ url: `http://gmall-h5-api.atguigu.cn/api/order/auth/${page}/${limit}`, method: 'get' })