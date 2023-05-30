export const routes = {
  path: '',
  component: () => import('@/layouts/app/full-layout.vue'),
  meta: {
    shortcut: 'main',
  },
  children: [
    {
      path: '',
      component: () => import('./views/page-home.vue'),
    },
    {
      path: 'about',
      component: () => import('./views/page-about.vue'),
    },
    {
      path: 'help',
      component: () => import('./views/page-help.vue'),
    },
    {
      path: 'contact',
      component: () => import('./views/page-contact.vue'),
    },
    {
      path: 'investor',
      component: () => import('./views/page-investor.vue'),
    },
  ],
}
