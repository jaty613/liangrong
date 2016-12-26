<template>

  <section class="pd-bottom46">
    <ul class="itme weui_cells border-bottom header-top">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">名称</p>
          <p class="am-ft-11 am-ft-smm">代码</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">数量</p>
          <p class="am-ft-11 am-ft-smm">状态</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">过户类别</p>
          <p class="am-ft-11 am-ft-smm">市场类别</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">可撤标记</p>
          <p class="am-ft-11 am-ft-smm">委托号</p>
        </div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <template v-for="item in RS7130">
          <li class="am-flexbox  am-relative am-pd-15 border-bottom" @click="_select(item.entrust_no, item.exchange_type)">
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
              <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
            </div>
            <div class="am-flexbox-item text-center">
              <p class="am-ft-11 am-ft-sm">{{Math.transCNScientific(parseInt(item.entrust_amount))}}</p>
              <p class="am-ft-11 am-ft-smm am-ft-orange">{{$dic('entrust_status',item.entrust_status)}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.trade_name}}</p>
              <p class="am-ft-15 am-ft-smm">{{$dic('exchange_type',item.exchange_type)}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm am-ft-blue2">{{$dic('cancel_flag',item.cancel_flag)}}</p>
              <p class="am-ft-15 am-ft-smm">{{item.entrust_no}}</p>
            </div>
          </li>
          <li v-show="(P3041.entrust_no === item.entrust_no)" class="am-flexbox weui_cell am-bg-l am-ft-center am-ft-blue2">
            <p @click="AS3041" class="am-flexbox-item am-ft-15 am-ft-sm">
              <i class="contetn-third contetn-third4"></i>
              <span>撤单</span>
            </p>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: absolute;
    top: 55px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS7130.length', function (val, oldVal) {
        this.loading = false
        if (val === oldVal) {
          this.loading = true
        }
      })
    },
    data () {
      return {
        reload: true,
        loading: true,
        wrapper: {
          height: 0
        },
        P3041: $P('304:1'),
        P7130: $P('713:0')
      }
    },
    route: {
      data: function (transition) {
        this.RL7130()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7130: state => state.all['713:0']
      },
      actions: {
        AS7130: $AS('713:0'),
        RL7130: $RELOAD('713:0:0:4'),
        AS3041: $AS('304:1')
      }
    },
    methods: {
      loadMore () {
        $P('713:0').position_str = this.RS7130[this.RS7130.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7130()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      },
      _select (entrustNo, exchangeType) {
        this.P3041.entrust_no = this.P3041.entrust_no === entrustNo ? '' : entrustNo
        this.P3041.exchange_type = exchangeType
      }
    },
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
    }
  }
</script>

