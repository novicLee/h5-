/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '客户中心',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '客户中心',
          keepAlive: false
        }
      },
      {
        path: '/myCar',
        name: 'myCar',
        component: () => import('@/views/myCar/index'),
        meta: {
          title: '我的车辆',
          keepAlive: false
        }
      },
      {
        path: '/carDetail',
        name: 'carDetail',
        component: () => import('@/views/carDetail'),
        meta: {
          title: '车辆详情',
          keepAlive: false
        }
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import('@/views/userInfo'),
        meta: {
          title: '个人信息',
          keepAlive: false
        }
      },
    ]
  },
]
