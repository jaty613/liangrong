<template>
  <div class="page-group">
    <div class="page page-current">
      <!-- 缓存一级路由切换的页面 -->
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
    </div>
  </div>

</template>

<script>
import store from 'vuexx/store'
import 'assets/global'

export default {
  ready () {
    //  系统配置初始化,微信、其他OpenAPI
  },
  store,
  data () {
    return {
      isIndex: true
    }
  },
  components: {
  }
}
</script>
