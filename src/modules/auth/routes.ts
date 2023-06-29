export const routes = {
    path: '/',
    component: () => import('@/layouts/app/blank-layout.vue'),
    children: [
      {
        path: 'signup',
        component: () => import('./views/page-signup.vue'),
      },
    ],
  }
  