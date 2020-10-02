import { createApp } from 'vue'
import gsap, { TweenLite } from 'gsap'
import loadPlugins from './plugins'

import buildRouter from './routes'
import store from './store'

import App from './App.vue'

import './styles/main.scss'

const app = createApp(App)
let router = undefined

gsap.registerPlugin(TweenLite)
loadPlugins().then((plugins) => {
  const {
    config: { globalProperties: prototype },
  } = app

  plugins.forEach(({ default: pkg }) => {
    if (Object.prototype.hasOwnProperty.call(pkg, 'hasGlobal')) prototype[pkg.name] = pkg.module

    if (Object.prototype.hasOwnProperty.call(pkg, 'hasWindow')) window[pkg.name] = pkg.module
  })

  if (prototype.firebase && !router) {
    const $el = document.createElement('div')
    router = buildRouter(prototype.firebase)
    $el.setAttribute('data-app', '')
    document.body.prepend($el)

    prototype.firebase.auth().onAuthStateChanged(() => app.use(store).use(router).mount($el))

    setTimeout(() => {
      TweenLite.to('.page-loader', 0.35, { opacity: 0 }).then(() => {
        document.querySelector('.page-loader').remove()
        gsap.killTweensOf('.page-loader')
      })
    }, 1500)
  }
})
