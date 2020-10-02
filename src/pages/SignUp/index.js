import View from './view.vue'

export * as View from './view.vue'
export default (overrides = {}) => {
  return {
    path: '/sign-up',
    component: () => import('./view.vue'),
    name: 'SignUp',
    meta: {
      requiresAuth: false,
    },
    ...overrides,
  }
}
