import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import routes from 'src/login-route.js'
import MintUI from 'mint-ui'
import App from './login.vue'
// import 'vconsole'

//  Vue Config
Vue.config.devtools = true
Vue.config.debug = true

//  Vue Work
Vue.use(VueRouter)
Vue.use(VueValidator)

//  MintUi
Vue.use(MintUI)

//  VueRouter Config
const router = new VueRouter({
  hashbang: true,
  history: false,
  abstract: false, /*  配合打包Cordova 等静态资源模式时候设置为true  */
  saveScrollPosition: true,
  suppressTransitionError: true
})
router.map(routes)

let indexScrollTop = 0
router.beforeEach(transition => {
  if (transition.to.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = transition.to.title || document.title
  transition.next()
})

router.afterEach(transition => {
  if (transition.to.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
})
router.start(App, '#login')
//  Window Global Attribute
window.router = router
Vue.prototype.$dic = window.$dic
