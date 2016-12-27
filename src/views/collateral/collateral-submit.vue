<template>
  <section class="pd-bottom46">
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <template v-for="item in RS4032">
          <li class="am-flexbox border-bottom am-relative am-pd-15"  v-bind:class="{ 'high_light': P7120.stock_code === item.stock_code }" @click="P7120.stock_code = item.stock_code">
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
              <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
            </div>
            <div class="am-flexbox-item text-center">
              <p class="am-ft-15 am-ft-sm">{{$dic('exchange_type',item.exchange_type)}}</p>
              <p class="am-ft-11 am-ft-smm">{{Math.transCNScientific(parseInt(item.current_amount))}}</p>
            </div>
            <div class="am-flexbox-item text-center">
              <p class="am-ft-15 am-ft-sm {{item.income_balance_ratio > 0 ? 'am-ft-red' : 'am-ft-green'}}">{{item.income_balance_ratio}}% </p>
              <p class="am-ft-11 am-ft-smm {{item.income_balance > 0 ? 'am-ft-red' : 'am-ft-green'}}">{{Math.transCNScientific(parseFloat(item.income_balance))}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-11 am-ft-sm">{{item.last_price}}</p>
              <p class="am-ft-15 am-ft-smm">{{Math.transCNScientific(parseFloat(item.enable_amount))}}</p>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <section class="am-flexbox pd15 am-pt-10 border-top border-bottom am-pb-5 header-top am-bg-l">
      <div class="am-flexbox-item">
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">股票代码</div>
          <div class=" borderNo am-flexbox-item">
                <span class="ui-form-field">
                   <input v-model="P7120.stock_code" style="font-size:12px;" debounce="700" type="number" class="text_input" value="" placeholder="请输入股票代码">
                    <a v-show="P7120.stock_code" @click="P7120.stock_code=''" class="close-ico bottom-3"></a>
                </span>
            <span class="share_name am-ft-gray"></span>
          </div>
        </div>
        <!--浮出页面-->
        <div class="list-codeSug" v-show="(StockList.length > 0)">
          <ul class="select-results am-selectList" v-for="item in StockList">
            <li @click="P7120.stock_code = item.stock_code">
              <span class="am-right-5">{{item.stock_code}}</span><span>{{item.stock_name}}</span>
            </li>
          </ul>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">证券名称</div>
          <div class=" borderNo am-flexbox-item">
                <span class="ui-form-field">
                    <input  type="text" readonly="true" class="text_input " value="{{P7120.stock_name}}" placeholder="证券名称" style="font-size:12px;">
                </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">普通股东</div>
          <div class=" borderNo am-flexbox-item">
                <span class="ui-form-field">
                    <input  type="text" readonly="true" class="text_input " value="{{P7120.stock_account}}" placeholder="普通股东" style="font-size:12px;">
                </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">普通席位</div>
          <div class=" borderNo am-flexbox-item">
              <span class="ui-form-field">
                  <input  type="text" readonly="true" class="text_input " value="{{P7120.seat_no}}" placeholder="普通席位" style="font-size:12px;">
              </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">委托数量</div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input v-model="P7120.occur_amount" type="number" class="text_input " value="" placeholder="请输入委托数量" style="font-size:12px;">
                         <a v-show="P7120.occur_amount" @click="P7120.occur_amount=''" class="close-ico bottom-3"></a>
                    </span>
          </div>
        </div>
        <a @click="AS7120" class="am-button am-mt-10" am-mode="red ">确定</a>
      </div>
    </section>
    <ul class="itme border-bottom head-list amTop302">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">

          <p class="am-ft-15 am-ft-sm">名称</p>
          <p class="am-ft-11 am-ft-smm">代码</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">市场类别</p>
          <p class="am-ft-11 am-ft-smm">股票余额</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-11 am-ft-sm">盈亏率</p>
          <p class="am-ft-15 am-ft-smm">盈亏</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-11 am-ft-sm">现价</p>
          <p class="am-ft-15 am-ft-smm">可卖数量</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: fixed;
    top: 361px
  }
</style>
<script type='text/babel'>
  import {$P, $Session, $Macro} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听市场类别
      this.$watch('P7120.exchange_type', function (val, oldVal) {
        if (val === '') { // 没有市场类别
          this.P7120['stock_account'] = ''
          this.P7120['seat_no'] = ''
        } else {
          this.RS4071.map((account) => {
            if (account['exchange_type'] === val) {
              this.P7120['stock_account'] = account['stock_account']
              this.P7120['seat_no'] = account['seat_no']
            } else {
              this.RS4071.map((account) => { // 普通账户
                if (account['exchange_type'] === val) {
                  $P('711:0')['stock_account'] = account['stock_account'] // 冻结账户

                  this.P7120['stock_account'] = account['stock_account']
                  this.P7120['seat_no'] = account['seat_no']
                  // 普通账号
                  this.P7120.stock_account_comm = account.stock_account
                  this.P7120.seat_no_comm = account.seat_no
                  // 对方账户
                  this.P7120.stock_account_df = account.stock_account
                  this.P7120.seat_no_df = account.seat_no
                }
              })

              this.RS4070.map((account) => { // 信用账户
                if (account['exchange_type'] === val) {
                  this.P7120['stock_account'] = account['stock_account']
                  this.P7120['seat_no'] = account['seat_no']
                  // 信用账户
                  this.P7120.stock_account_crdt = account.stock_account
                  this.P7120.seat_no_crdt = account.seat_no
                }
              })
            }
          })
        }
      })
      // 监听股票代码
      this.$watch('P7120.stock_code', function (val, oldVal) {
        this.StockList = []
        if (val && val.length === 6) { // 输入完成
          $Macro(val, 1).then((list) => {
            if ((list instanceof Array) && list.length === 1) {
              if (!list[0]['exchange_type']) {
                this.P7120['stock_code'] = ''
              } else {
                this.P7120['exchange_type'] = list[0]['exchange_type']
                this.P7120['stock_name'] = list[0]['stock_name']
              }
            }
          })
        } else {
          if (val && val.length > 0 && val.length < 6) { // 输入中
            $Macro(val, 5).then((list) => {
              this.StockList = list
            })
          }
          // 重置内容
          this.P7120['exchange_type'] = ''
          this.P7120['stock_name'] = ''
          this.P7120['occur_amount'] = ''
        }
      })
      // 监听列表内容是否发生变化
      this.$watch('RS4032.length', function (val, oldVal) {
        this.loading = false
        if (val === oldVal) {
          this.loading = true
        }
      })
    },
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
    },
    route: {
      data: function (transition) {
        $Session().then((msg) => {
          if (!msg.trade_credit_default) {
            window.location.replace('login.html')
          } else if (!msg.trade_secu_default) {
            let url = encodeURIComponent('h5.html#!/collateral/collateral-submit')
            window.location.replace(`login.html#!/secu?fund_account=${msg['trade_credit_default'].client_id}&redict=${url}`)
          } else {
            // 普通账户
            this.P7120.branch_no_comm = msg['trade_secu_default']['branch_no']
            this.P7120.fund_account_comm = msg['trade_secu_default']['fund_account']
            this.P7120.client_id_comm = msg['trade_secu_default']['client_id']
            // 信用账户
            this.P7120.branch_no_crdt = msg['trade_credit_default']['branch_no']
            this.P7120.fund_account_crdt = msg['trade_credit_default']['fund_account']
            this.P7120.client_id_crdt = msg['trade_credit_default']['client_id']
            // 对方账户 (融资融券的对方账户是普通账号)
            this.P7120.branch_no_df = msg['trade_secu_default']['branch_no']
            this.P7120.fund_account_df = msg['trade_secu_default']['fund_account']
            this.AS4070() // 信用账户 - 股东信息
            this.AS4071() // 普通账号 - 股东信息
          }
        })
        this.RL4032()
        this.reload = true
      }
    },
    data () {
      return {
        reload: true,
        loading: true,
        wrapper: {
          height: 0
        },
        StockList: [], // 模糊搜索、股票代码集合
        P7110: $P('711:0'),
        P7120: $P('712:0'),
        P4032: $P('403:2'),
        P4033: $P('403:3')
      }
    },
    vuex: {
      getters: {
        RS4032: state => state.all['403:2'],
        RS4033: state => state.all['403:3'],
        RS4070: state => state.all['407:0'],
        RS4071: state => state.all['407:1']
      },
      actions: {
        AS4032: $AS('403:2'),
        RL4032: $RELOAD('403:2:0:1'),
        AS4033: $AS('403:3'),
        AS4070: $AS('407:0'),
        AS4071: $AS('407:1'),
        AS7120: $AS('712:0:submit')
      }
    },
    methods: {
      loadMore () {
        $P('403:2').position_str = this.RS4032[this.RS4032.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS4032()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      }
    }
  }
</script>

