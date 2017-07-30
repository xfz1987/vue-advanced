import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Product from '@/view/Product'
import Detail from '@/view/Detail'
import Pro1 from '@/view/Pro1'
import Pro2 from '@/view/Pro2'
import Users from '@/view/Users'
import User from '@/view/User'
import Unknow from '@/view/Unknow'


Vue.use(Router)

//子目录视图
const proChilren = {
	template: `
		<router-view class="proChilren"></router-view>
	`
}

// export default new Router({
//   routes: [
//     {path: '/',name:'homePage',component: Home},
//     {path: '/product',component: proChilren,
//     	children: [
//     		{path: '/',name:'productPage',component: Product},
//     		{path: 'pro1',name:'pro1Page',component: Pro1},
//     		{path: 'pro2',name:'pro2Page',component: Pro2}
//     	]
// 	},
//     {path: '/detail',name:'detailPage',component: Detail}
//   ]
// })

// export default new Router({
//   routes: [
//     {path: '/',components: {
//     	default: Home,
//     	left: Product,
//     	right: Detail
//     }},
//     {path: '/product',components: {
//     	default: Home,
//     	left: Product,
//     	right: Detail
//     }},
//     {path: '/detail',components: {
//     	default: Home,
//     	left: Product,
//     	right: Detail
//     }}
//   ]
// })

// export default new Router({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {path: '/',component: Home},
//     {path: '/product/:aaa/:bbb',component: Product},
//     {path: '/detail/:id(\\d+)',component: Detail}
//   ]
// })

// export default new Router({
//   // mode: 'history',
//   base: __dirname,
//   routes: [
//     {path: '/',component: Home},
//     {path: '/users',component: Users,
// 		children: [
// 			{path:':username',name:'user',component:User}
// 		]
// 	}
//   ]
// })

// export default new Router({
//   routes: [
//     {path: '/',name:'homePage',component: Home, alias: '/gogo'},
//     {path: '/product',component: proChilren,
//     	children: [
//     		{path: '/',name:'productPage',component: Product},
//     		{path: 'pro1/:id',name:'pro1Page',component: Pro1},
//     		{path: 'pro2',name:'pro2Page',component: Pro2},
//     		{path: 'topro1/:id',redirect:'pro1/:id'}
//     	]
// 	},
//     {path: '/detail',name:'detailPage',component: Detail},
//     {path: '/ccc/:id',redirect:xxx => {
//     	const {hash,params,query} = xxx;
//     	if(params.id == '001'){
//     		return '/';
//     	}else if(params.id == '002'){
//     		return '/detail'
//     	}
//     }}
//   ]
// })

export default new Router({
  routes: [
    {path: '/',name:'homePage',component: Home},
    {path: '/product',component: Product},
    {path: '/detail',component: Detail,
        //进入之前
        beforeEnter: (to,from,next) => {
            console.log(to);
            console.log(from);
            console.log(next);
            //next(false);//可以跳转连接了，如果next(false)则不可以
            next({path:'/unKonw'})
        },
    },
    {path: '*',component: Unknow}
  ]
})