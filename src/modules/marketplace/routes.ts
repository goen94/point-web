export const routes = {
    path: '/',
    component: () => import('@/layouts/app/full-layout.vue'),
    children: [
      {
        path: 'marketplace',
        component: () => import('./page-marketplace.vue'),
      },
      {
        path: 'detail',
        component: () => import('./page-marketplace-detail.vue'),
      },
    ],
  }
  