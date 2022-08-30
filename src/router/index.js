
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import store from '@/store'

import routes from './routes'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {

        }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {
        }, () => { })
    }
}

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

// router.beforeEach(async (to, from, next) => {
//     let token = store.state.user.token
//     let name = store.state.user.userInfo.name
//     if (token) {
//         if (to.path == '/login') {
//             next('/home')
//         } else {
//             if (name) {
//                 next()
//             } else {
//                 try {
//                     await store.dispatch('userInfo')
//                     next()
//                 } catch (error) {
//                     await store.dispatch('userLogout')
//                     next('/login')
//                 }
//             }
//         }
//     } else {
        
//         let toPath = to.path
//         if (toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!= -1) {
//             next('/login?redirect='+toPath)
//         } else {
//             next()
//         }
//     }
// })



export default router