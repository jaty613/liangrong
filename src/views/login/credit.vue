<template>
  <div class="page-group">
    <div class="page page-current">
      <section class="am-mask am-coss" id="content_div">
        <header class="header">
          <div class="header_inner no_border">
            <a href="https://e.swsc.com.cn/m/mall/index.html#!/main/unifyMain.html" class="btn_cancel"></a>
          </div>
        </header>
        <div class="logo_box" ></div>
        <ul class=" weui_cells_access  grid " >
          <li>
            <div class="am-flexbox ">
              <div class="type-ico user-ico">
              </div>
              <div class="am-flexbox-input ui-form-field">
                <input v-model="params.account_content" type="text" class="text_input " placeholder="手机号码/信用账号">
              </div>
              <a v-show="params.account_content" @click="params.account_content = ''" class="close-ico2"></a>
            </div>
          </li>
          <li>
            <div class="am-flexbox">
              <div class=" type-ico password-ico">
              </div>
              <div class=" ui-form-field am-flexbox-item  ">
                <input v-model="params.password" v-bind:type="type" class="text_input " placeholder="请输入密码">
              </div>
              <a v-show="params.password" @click="params.password = ''" class="close-ico2" style="right:50px !important;"></a>
              <!--打开的class：icon_hidden  改icon_show-->
              <div class="icon_show_hidden" v-bind:class="[this.type === 'password' ? 'icon_show' : 'icon_hidden']" @click="this.type === 'password' ? this.type = 'text' : this.type = 'password'"></div>
            </div>
          </li>
        </ul>
        <!--列表-->
        <!--按钮-->
        <div class="btn-page btn-page-center" style="padding-top: 0.3rem">
          <a @click="login" class="am-button am-button-red" am-mode="red">登录</a>
        </div>
        <p class="links_box mt10" style="padding-bottom: 0.3rem">
          <a href="https://e.swsc.com.cn/m/mall/index.html#!/register/forgetPwd.html " style="font-size:0.14rem;"> 忘记密码？</a>
          <a href="https://e.swsc.com.cn/m/mall/index.html#!/register/register.html"  style="font-size:0.14rem;">手机快速注册</a>
        </p>
      </section>
      <footer class="am-footer am-flexbox border_cells am-ft-smmm">

        <a href="##" class="am-grid-item am-flexbox-item active">
          <p class="am-pt-5"><i class="ico-footer price-ico"></i></p>

          <p><span class="am-ft-center">行情</span></p>
        </a>
        <a href="##" class="am-grid-item am-flexbox-item ">
          <p class="am-pt-5"><i class="ico-footer transaction-ico"></i></p>

          <p><span class="am-ft-center">交易</span></p>
        </a>
      </footer>
    </div>
  </div>
</template>
<!-- 添加 "scoped" 属性 表示该标签下所有属性样式针对该组件 -->
<style scoped>
  @import url('./../../assets/css/ui.css');
  @import url('./../../assets/css/comin.css');
  @import url('./../../assets/css/login.css');
</style>
<script>
  import {$P} from 'vuexx/action/data-action'
  import {$AS} from 'vuexx/action/ui-action'
  export default {
    data () {
      return {
        type: 'password',
        params: $P('200:0')
      }
    },
    vuex: {
      actions: {
        login: $AS('200:0')
      }
    },
    ready: function () {
      window.history.forward(1)
      var that = this
      window.addEventListener('resize', function () {
        // 得到屏幕尺寸 (内部/外部宽度，内部/外部高度)
        that.changeLogoPosition()
      }, false)
    },
    methods: {
      changeLogoPosition () {
        var contentHeight = document.getElementById('content_div').clientHeight
        contentHeight = parseInt(contentHeight)
        if (document.body.scrollHeight - contentHeight <= 0) {
          document.getElementById('content_div').style.marginTop = '-180px'
        } else {
          document.getElementById('content_div').style.marginTop = '0px'
        }
      }
    }
  }
</script>
