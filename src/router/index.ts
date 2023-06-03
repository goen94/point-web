import { createRouter, createWebHistory } from 'vue-router'

import { routes as mainRoutes } from '@/modules/main/routes'
import { routes as marketplaceRoutes } from '@/modules/marketplace/routes'
import { routes as authRoutes } from '@/modules/auth/routes'
import { routes as templateRoutes } from '@/modules/template/routes'

const routes = [mainRoutes, marketplaceRoutes, authRoutes, templateRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
