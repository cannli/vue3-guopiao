// eslint-disable-next-line
import {BasicLayout, BlankLayout, PageView, RouteView, UserLayout} from '@/layouts'
import {bxAnaalyse} from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/cashmain/outputInvoice',
    children: [
      // dashboard
      {
        path: '/cashmain',
        name: 'cashmain',
        redirect: '/cashmain/outputInvoice',
        component: PageView,
        meta: { title: '发票管理', keepAlive: true, icon: bxAnaalyse, permission: [ 'cashmain' ] },
        children: [
          {
            path: '/cashmain/outputInvoice',
            name: 'OutputInvoice',
            component: () => import('@/views/stock/cashmain/outputInvoice'),
            meta: { title: '销项发票', keepAlive: true, hiddenHeaderContent: false, permission: [ 'cashmain' ] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      // {
      //   path: 'register',
      //   name: 'register',
      //   component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      // },
      // {
      //   path: 'register-result',
      //   name: 'registerResult',
      //   component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      // }
    ]
  },

  // {
  //   path: '/test',
  //   component: BlankLayout,
  //   redirect: '/test/home',
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'TestHome',
  //       component: () => import('@/views/Home')
  //     }
  //   ]
  // },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
