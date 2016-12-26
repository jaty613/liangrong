import NavConfig from './login.config.json'

const registerRoute = (config) => {
  let route = {}
  config.map(nav => nav.list.map(page => {
    try {
      route[`${page.path}`] = {
        component: function (resolve) {
          require([`src/views/login${page.path}.vue`], resolve)
        },
        title: page.title || page.name,
        description: page.description
      }
    } catch (e) {
      console.error(e)
      page.disabled = true
    }
  }))

  return { route, navs: config }
}

const route = registerRoute(NavConfig)

export const navs = route.navs
route.route['/'] = {
  title: '信用账户认证',
  component: function (resolve) {
    require(['src/views/login/credit.vue'], resolve)
  }
}
route.route['*'] = {
  title: '信用账户认证',
  component: function (resolve) {
    require(['src/views/login/credit.vue'], resolve)
  }
}

export default route.route
