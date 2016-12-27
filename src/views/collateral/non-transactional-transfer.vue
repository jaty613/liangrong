<template>

  <section class="pd-bottom46">
    <ul class="itme weui_cells header-top border-bottom">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">名称</p>
          <p class="am-ft-11 am-ft-smm">代码</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-11 am-ft-sm">买卖方向</p>
          <p class="am-ft-15 am-ft-smm">委托属性</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">委托数量</p>
          <p class="am-ft-11 am-ft-smm">委托状态</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">委托号</p>
          <p class="am-ft-11 am-ft-smm">划转时间</p>
        </div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme am-cells">
        <li class="am-flexbox border-bottom am-relative am-pd-15" v-for="item in RS7131">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
          </div>
          <div class="am-flexbox-item text-center">
            <p class="am-ft-15 am-ft-sm {{item.entrust_bs === '1' ? 'am-ft-red' : 'am-ft-green'}}">{{$dic('entrust_bs',item.entrust_bs)}}</p>
            <p class="am-ft-15 am-ft-smm">{{item.trade_name}}</p>
          </div>
          <div class="am-flexbox-item text-center">
            <p class="am-ft-11 am-ft-sm">{{Math.transCNScientific(parseInt(item.entrust_amount))}}</p>
            <p class="am-ft-11 am-ft-smm am-ft-orange">{{$dic('entrust_status',item.entrust_status)}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.entrust_no}}</p>
            <p class="am-ft-15 am-ft-sm">{{item.curr_time ? `${item.curr_time.substr(0, 2) + ':' + item.curr_time.substr(2, 2) + ':' + item.curr_time.substr(4, 2)}` : ''}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: fixed;
    top: 55px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    data () {
      return {
        reload: true,
        loading: true,
        wrapper: {
          height: 0
        },
        P7131: $P('713:1')
      }
    },
    route: {
      data: function (transition) {
        this.RL7131()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7131: state => state.all['713:1']
      },
      actions: {
        AS7131: $AS('713:1'),
        RL7131: $RELOAD('713:1:0:4')
      }
    },
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
      // this.AS7131()
    }
  }
</script>

