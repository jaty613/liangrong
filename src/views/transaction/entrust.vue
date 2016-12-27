<template>
  <section class="pd-bottom46">
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height + "px" }'>
      <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='5'>
        <template v-for="item in RS4010">
          <li class="am-flexbox border-bottom am-relative"  @click="this.P3040.entrust_no = item.entrust_no">
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
              <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-11 am-ft-sm">{{$dic('entrust_type',item.entrust_type)}}</p>
              <p class="am-ft-11 am-ft-smm">{{$dic('entrust_status',item.entrust_status)}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.entrust_price}}</p>
              <p class="am-ft-15 am-ft-smm">{{parseInt(item.entrust_amount)}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-11 am-ft-sm">{{Math.transCNScientific(parseInt(item.business_amount))}}</p>
              <p class="am-ft-15 am-ft-smm {{item.entrust_bs === '1' ? 'am-ft-red' : 'am-ft-green'}}">{{$dic('entrust_bs',item.entrust_bs)}}</p>
            </div>
          </li>
          <li v-show="(P3040.entrust_no === item.entrust_no)" class="am-flexbox weui_cell am-bg-l am-ft-center am-ft-blue2">
            <p @click="AS3040" class="am-flexbox-item am-ft-15 am-ft-sm">
              <i class="contetn-third contetn-third4"></i>
              <span>撤单</span>
            </p>
          </li>
        </template>
      </ul>
    </div>
    <ul class="itme weui_cells header-top">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">名称</p>
          <p class="am-ft-11 am-ft-smm">代码</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-11 am-ft-sm ">类别</p>
          <p class="am-ft-11 am-ft-smm ">状态</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">委托价</p>
          <p class="am-ft-15 am-ft-smm">委托量</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-11 am-ft-sm ">成交量</p>
          <p class="am-ft-15 am-ft-smm">买卖</p>
        </div>
      </li>
    </ul>
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
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS4010.length', function (val, oldVal) {
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
        P3040: $P('304:0'),
        P4010: $P('401:0')
      }
    },
    route: {
      data: function (transition) {
        this.RL4010()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS4010: state => state.all['401:0'],
        RS3040: state => state.all['304:0']
      },
      actions: {
        AS4010: $AS('401:0'),
        RL4010: $RELOAD('401:0:0:4'),
        AS3040: $AS('304:0')
      }
    },
    methods: {
      loadMore () {
        $P('401:0').position_str = this.RS4010[this.RS4010.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS4010()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      },
      _select (entrustNo, exchangeType) {
        this.P3040.entrust_no = this.P3040.entrust_no === entrustNo ? '' : entrustNo
        this.P3040.exchange_type = exchangeType
      }
    },
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
    }
  }
</script>
