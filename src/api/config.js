import Vue from 'vue'
import VueResource from 'vue-resource'
// Vue Resource
Vue.use(VueResource)
//  Vue.http.options.root = './../static/mocks'
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

Vue.http.interceptors.push(function (request, next) {
  //  console.warn('进入拦截了,进行JWT认证 。。。。')
  //  添加请求头
  //  Vue.http.headers.common['Authorization'] = 'JWT' + window.sessionStorage.getItem('token')
  request.credentials = true
  var timeout
  // 這裡改用 _timeout ，就不會觸發原本的
  if (request._timeout) {
    // 一樣綁定一個定時器，但是這裡是只要觸發了，就立即返回 response ， 並且這邊自定義了 status 和 statusText
    timeout = setTimeout(() => {
      if (request.onTimeout) {
        request.onTimeout(request)
      }
      request.abort()
      next(request.respondWith(request.body, {
        status: 408,
        statusText: 'Request Timeout'
      }))
    }, request._timeout)
  }
  next((response) => {
    clearTimeout(timeout)
  })
})

export const $http = Vue.http
