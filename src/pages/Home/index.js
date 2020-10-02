export * as View from './view.vue'
export default (overrides = {}) => {
  return {
    path: '/',
    component: () => import('./view.vue'),
    name: 'Home',
    meta: {
      requiresAuth: true,
    },
    ...overrides,
  }
}
