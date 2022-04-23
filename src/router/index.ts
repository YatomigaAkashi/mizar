import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/timing-center'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'timing-center',
        name: 'TimingCenter',
        component: () => import('../components/SideBar/TimingCenter.vue')
      },
      {
        path: 'space-target',
        name: 'SpaceTarget',
        component: () => import('../components/SideBar/SpaceTarget.vue')
      },
      {
        path: 'ground-station',
        name: 'GroundStation',
        component: () => import('../components/SideBar/GroundStation.vue')
      },
      {
        path: 'working-status',
        name: 'WorkingStatus',
        component: () => import('../components/SideBar/WorkingStatus.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
