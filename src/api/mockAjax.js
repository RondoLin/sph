//对axios进行二次封装
import axios from "axios"
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

//利用axios对象的方法create创建一个axios实例
//request就是axios，只不过稍微配置一下
const mockRequests = axios.create({
    //在路径中默认带有/api
    // baseURL:"/api",  
    //请求超时时间
    timeout:5000,

})

//请求拦截器，在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
mockRequests.interceptors.request.use((config) => {
    nprogress.start()
    //config：配置对象，对象里面用一个属性很重要，headers请求头
    return config
})
    
//响应拦截器    
mockRequests.interceptors.response.use((res) => {
    nprogress.done()
    //成功的回调函数
    return res.data
},(error) => {
    //失败的回调函数
    return Promise.reject(new Error('falie'))
})


export default mockRequests