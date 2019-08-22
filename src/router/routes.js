const routes = [
  {
    path: '/',
    component: () => import('layouts/Auth.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'registrar',
        component: () => import('pages/Registrar.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Menu.vue'),
    children: [
      {
        path: 'home',
        component: () => import('pages/Home.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    redirect: '/login'
  })
}

export default routes
