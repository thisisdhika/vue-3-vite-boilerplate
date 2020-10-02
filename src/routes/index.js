import * as Router from 'vue-router'
import routes, { redirectPaths } from './routes'

function buildRouter(firebase) {
  const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes,
  })

  router.beforeEach((to, _from, next) => {
    const currentUser = firebase.auth().currentUser
    const requiresAuth = to.matched.some((rec) => rec.meta.requiresAuth)
    const { unAuthenticated, authenticated } = redirectPaths

    if (requiresAuth && !currentUser) next(unAuthenticated)
    else if (!requiresAuth && currentUser) next(authenticated)
    else next()
  })

  return router
}

export default buildRouter
