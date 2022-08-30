

export default [
        {
            path:"/home",
            component:() =>import('@/pages/Home'),
            meta:{show:true}
        },
        {
            path:"/center",
            component:() =>import('@/pages/Center'),
            meta:{show:true},
            children:[
                {
                    path:'myorder',
                    component:() =>import('@/pages/Center/myOrder'),
                },
                {
                    path:'grouporder',
                    component:() =>import('@/pages/Center/groupOrder'),
                }
            ]
        },
        {
            path:"/detail/:skuid",
            component:() =>import('@/pages/Detail'),
            meta:{show:true}
        },
        {
            path:"/addcartsuccess",
            component:() =>import('@/pages/AddCartSuccess'),
            name:'addcartsuccess',
            meta:{show:true}
        },
        {
            path:"/paysuccess",
            component:() =>import('@/pages/PaySuccess'),
            name:'paysuccess',
            meta:{show:true}
        },
        {
            path:"/shopCart",
            component:() =>import('@/pages/ShopCart'),
            name:'shopCart',
            meta:{show:true}
        },
        {
            path:"/trade",
            component:() =>import('@/pages/Trade'),
            name:'trade',
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if(from.path == '/shopcart'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path:"/pay",
            component:() =>import('@/pages/Pay'),
            name:'pay',
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if(from.path == '/trade'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path:"/search/:keyword?",
            component:() =>import('@/pages/Search'),
            meta:{show:true},
            name:"search"
        },
        {
            path:"/login",
            component:() =>import('@/pages/Login'),
        },
        {
            path:"/register",
            component:() =>import('@/pages/Register'),
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path:'*',
            redirect:"/home"
        },
    ]
