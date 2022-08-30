import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import TypeNav from '@/components/TypeNav'
import store from '@/store' 
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
// import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
// import {Button} from "element-ui"
// Vue.component(Button.name,Button)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import tb from '@/assets/images/icons.png'

Vue.use(ElementUI);

// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:tb
})





//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
// Vue.component(Carousel.name,Carousel)

Vue.config.productionTip = false
import * as API from '@/api'
import myPlugins from './plugins/myPlugins'
Vue.use(myPlugins,{
  name:'upper'
})

import '@/plugins/validate'

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
