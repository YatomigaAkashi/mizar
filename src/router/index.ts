import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'timing-center',
        name: 'TimingCenter',
        component: () => import('../views/TimingCenter.vue')
      },
      {
        path: 'space-target',
        name: 'SpaceTarget',
        component: () => import('../views/SpaceTarget.vue')
      },
      {
        path: 'ground-station',
        name: 'GroundStation',
        component: () => import('../views/GroundStation.vue')
      },
      {
        path: 'working-status',
        name: 'WorkingStatus',
        component: () => import('../views/WorkingStatus.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
