<template>
  <section class="">
    <ul class="itme weui_cells header-top">
      <li class="am-flexbox itme-title  am-bg-l am-ft-sm am-ft-gray">
        <div class="am-flexbox-item am-ft-smmm">客户名称</div>
        <div class="am-flexbox-item am-ft-smmm">交易类别</div>
        <div class="am-flexbox-item am-ft-smmm">股东状态</div>
        <div class="am-flexbox-item am-ft-smmm">账户类别</div>
        <div class="am-flexbox-item am-ft-smmm">席位编号</div>
      </li>
    </ul>
    <div class="container-list">
      <ul class="itme am-cells am-mt-36">
        <li class="am-flexbox border-bottom am-relative am-pd-15" v-for="item in RS4070">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.client_name}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{$dic('exchange_type',item.exchange_type)}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{$dic('holder_status',item.holder_status)}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{$dic('holder_kind',item.holder_kind)}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.seat_no}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style>
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS} from 'vuexx/action/ui-action'
  export default {
    data () {
      return {
        queryParams: $P('407:0')
      }
    },
    vuex: {
      getters: {
        RS4070: state => state.all['407:0']
      },
      actions: {
        AS4070: $AS('407:0')
      }
    },
    route: {
      data: function (transition) {
        this.AS4070()
      }
    }
  }
</script>

