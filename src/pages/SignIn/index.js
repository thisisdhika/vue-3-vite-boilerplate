import View from './view.vue'

export * as View from './view.vue'
export default (overrides = {}) => {
  return {
    path: '/sign-in',
    component: () => import('./view.vue'),
    name: 'SignIn',
    meta: {
      requiresAuth: false,
    },
    ...overrides,
  }
}
