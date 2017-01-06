<template>
  <section class="pd-bottom46">
    <section class="am-flexbox pd15 border-top border-bottom am-pb-5 header-top am-bg-l">
      <div class="am-flexbox-item">
        <div class="am-flexbox am-ft-sm am-mt-15 am-pb-10">
          <div class="am-list-item am-flexbox-item am-flex2" am-mode="check">
            <div class="am-checkbox" am-mode="middle">
              <input type="checkbox" v-model="P7070.serial_no"/>
              <span class="icon-check am-checkLeft" am-mode="icon-check-left"></span>
              <p class="am-ml-20">指定合约</p>
            </div>
          </div>

          <div v-show="P7070.serial_no"  class="am-ft-right"><span>{{P7070.serial_no === true ? '' : P7070.serial_no}}</span> </div>
          <div v-show="!P7070.serial_no" class="am-flexbox-item am-ft-right">顺序还款</div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">可还金额</div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input  type="text" readonly="true" class="text_input " value="{{RS7050.enable_balance}}" placeholder="可还金额" style="font-size:12px;">
                    </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">应还金额</div>
          <div class=" borderNo am-flexbox-item">
            <!--<div class="am-pd-7 am-ft-lightgray am-ft-smmm">应还金额：24522244</div>-->
            <span class="ui-form-field">
                        <input type="text" readonly="true" class="text_input " value="{{RS7050.enable_return_balance}}" placeholder="应还金额" style="font-size:12px;">
            </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input  type="text" readonly="true" class="text_input "  placeholder="人民币" style="font-size:12px;">
                    </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">还款金额</div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input v-model="P7070.occur_balance" type="number" class="text_input " value="" placeholder="请输入还款金额" style="font-size:12px;">
                       <a v-show="P7070.occur_balance" @click="P7070.occur_balance=''" class="close-ico bottom-3"></a>
                    </span>
          </div>
        </div>
        <a @click="AS7070" class="am-button am-mt-10 am-mb-10" am-mode="red ">还款</a>
      </div>
    </section>

    <ul class="itme border-bottom head-list amTop304">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray">
        <div class="am-flexbox-item">融资负债</div>
        <div class="am-flexbox-item itme-list-mild">未还金额</div>
        <div class="am-flexbox-item itme-list-mild">利息</div>
        <div class="am-flexbox-item ">未还费用</div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class='itme weui_cells' v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <template v-for="item in RS7360">
          <li class="am-flexbox border-bottom am-relative" v-bind:class="{ 'high_light': P7070.serial_no === item.serial_no }" @click="this.P7070.serial_no = item.serial_no">
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
              <p class="am-ft-11 am-ft-smm ">{{item.stock_code}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-11 am-ft-smm">{{Math.transScientificNum(parseFloat(item.real_compact_balance))}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-smm">{{Math.transScientificNum(parseFloat(item.real_compact_interest))}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-smm">{{Math.transScientificNum(parseFloat(item.real_compact_fare))}}</p>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: fixed;
    top: 342px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      this.AS7050()

      // 监听列表内容是否发生变化
      this.$watch('RS7360.length', function (val, oldVal) {
        this.loading = false
        if (val === oldVal) {
          this.loading = true
        }
      })
    },
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
    },
    data () {
      return {
        reload: true,
        loading: true,
        wrapper: {
          height: 0
        },
        P7050: $P('705:0'),
        P7360: $P('736:0'),
        P7070: $P('707:0')
      }
    },
    route: {
      data: function (transition) {
        this.RL7360()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7050: state => state.all['705:0'],
        RS7360: state => state.all['736:0'],
        RS7070: state => state.all['707:0']
      },
      actions: {
        AS7050: $AS('705:0'),
        AS7360: $AS('736:0'),
        RL7360: $RELOAD('736:0:0:4'),
        AS7070: $AS('707:0')
      }
    },
    methods: {
      loadMore () {
        $P('736:0').position_str = this.RS7360[this.RS7360.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7360()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      }
    }
  }
</script>
