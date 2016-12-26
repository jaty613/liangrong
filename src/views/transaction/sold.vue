<template>
  <section class="pd-bottom46">
    <section class="am-flexbox pd15 am-pt-10 border-top border-bottom am-pb-5 header-top am-bg-l">
      <div class="am-flexbox-item am-right-10">
        <div class="con-code">
          <div class="ui-formContainer btn-border">
                     <span class="ui-form-field">
                        <input v-model="P3021.stock_code" debounce="700" type="number" class="text_input" defaultvalue="股票名称/代码" value="" placeholder="请输入股票代码">
                        <a v-show="P3021.stock_code > 0" @click="P3021.stock_code=''" class="close-ico bottom-10"></a>
                    </span>
            <span class="share_name am-ft-gray">{{P3021.stock_name}}</span>
          </div>
          <!--浮出页面-->
          <div class="list-codeSug" v-show="(StockList.length > 0)">
            <ul class="select-results am-selectList" v-for="item in StockList">
              <li @click="P3021.stock_code = item.stock_code">
                <span class="am-right-5">{{item.stock_code}}</span><span>{{item.stock_name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind btn-border firmb-flexbox-buy am-mt-10 am-bg-white">
          <div class="firmbTags firmbTags-minus am-left-10"  @click="P3021.entrust_price = !isNaN(P3021.entrust_price) ? ((parseFloat(P3021.entrust_price) - (parseInt(RS1050.price_step) * 0.001)).toFixed(RS1050.price_step === '10' ? 2 : 3)) : 1">
            <p class="p1"></p>
          </div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input v-model="P3021.entrust_price" type="number" class="text_input am-ft-center " value="" placeholder="卖出价">
                    </span>
          </div>
          <div class="firmbTags am-right-10" @click="P3021.entrust_price = !isNaN(P3021.entrust_price) ? ((parseFloat(P3021.entrust_price) + (parseInt(RS1050.price_step) * 0.001)).toFixed(RS1050.price_step === '10' ? 2 : 3)) : 1">
            <p class="p2"></p>
          </div>
        </div>
        <select class="con-select am-mb-0" v-model="P3021.entrust_prop">
          <template v-if="P3021.exchange_type === '1'">
            <option value="0">限价委托</option>
            <option value="U">五档即成剩撤</option>
            <option value="R">五档即成转限价</option>
          </template>
          <template v-if="P3021.exchange_type === '2'">
            <option value="0">限价委托</option>
            <option value="Q">对手方最优价格</option>
            <option value="S">本方最优价格</option>
            <option value="U">五档即成剩撤</option>
            <option value="T">即时成交剩余撤销</option>
            <option value="V">全额成交或撤单</option>
          </template>
          <template v-if="P3021.exchange_type === ''">
            <option value="0">限价委托</option>
          </template>
        </select>
        <div class="am-flexbox ui-formContainer am-flexbox-remind btn-border firmb-flexbox-buy am-mt-10 am-bg-white">
          <div class="firmbTags firmbTags-minus am-left-10"  @click="P3021.entrust_amount = P3021.entrust_amount.toString().length > 0 ? (parseFloat(P3021.entrust_amount) - 100 > 100 ? parseFloat(P3021.entrust_amount) - 100 : 100) : 100 ">
            <p class="p1"></p>
          </div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input v-model="P3021.entrust_amount" type="number" class="text_input am-ft-center " value="" placeholder="委托数量">
                    </span>
          </div>
          <div class="firmbTags am-right-10"  @click="P3021.entrust_amount = P3021.entrust_amount.toString().length > 0 ? parseFloat(P3021.entrust_amount) + 100 : 100">
            <p class="p2"></p>
          </div>
        </div>
        <div class="am-flexbox am-ft-smmm am-ft-lightgray am-mt-10">
          <div class="am-flexbox-item am-ft-left">可卖 {{RS3000.enable_amount ? Math.transCNScientific(parseFloat(RS3000.enable_amount)) : ''}}</div>
        </div>
        <a @click="AS3021(this)" class="am-button am-mt-10 am-mb-15" am-mode="green">担保品卖出</a>
      </div>
      <div class="sell-22" style="min-width: 95px">
        <ul class=" am-ft-smm border-bottom am-pb-5 sell-5 sell-8 am-relative">
          <li @click="this.P3021.entrust_price = this.RealData.sellPrice5" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">卖5</p>
            <p class="am-flexbox-item am-ft-center {{RealData.sellPrice5 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.sellPrice5 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.sellPrice5 ? parseFloat(RealData.sellPrice5).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.sellCount5 ? Math.transScientific(parseFloat(RealData.sellCount5)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.sellPrice4" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">卖4</p>
            <p class="am-flexbox-item am-ft-center {{RealData.sellPrice4 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.sellPrice4 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.sellPrice4 ? parseFloat(RealData.sellPrice4).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.sellCount4 ? Math.transScientific(parseFloat(RealData.sellCount4)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.sellPrice3" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">卖3</p>
            <p class="am-flexbox-item am-ft-center {{RealData.sellPrice3 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.sellPrice3 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.sellPrice3 ? parseFloat(RealData.sellPrice3).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.sellCount3 ? Math.transScientific(parseFloat(RealData.sellCount3)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.sellPrice2" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">卖2</p>
            <p class="am-flexbox-item am-ft-center {{RealData.sellPrice2 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.sellPrice2 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.sellPrice2 ? parseFloat(RealData.sellPrice2).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <!-- 手数上百万字体大小用-->
            <p class="am-flexbox-item am-ft-right">{{RealData.sellCount2 ? Math.transScientific(parseFloat(RealData.sellCount2)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.sellPrice1" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">卖1</p>
            <p class="am-flexbox-item am-ft-center {{RealData.sellPrice1 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.sellPrice1 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.sellPrice1 ? parseFloat(RealData.sellPrice1).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <!-- 手数上百万字体大小用-->
            <p class="am-flexbox-item am-ft-right">{{RealData.sellCount1 ? Math.transScientific(parseFloat(RealData.sellCount1)) : '--'}}</p>
          </li>
        </ul>
        <ul class="am-ft-smm am-mt-5 sell-5 sell-8">
          <li @click="this.P3021.entrust_price = this.RealData.buyPrice1" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">买1</p>
            <p class="am-flexbox-item am-ft-center {{RealData.buyCount1 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.buyPrice1 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.buyPrice1 ? parseFloat(RealData.buyPrice1).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.buyCount1 ? Math.transScientific(parseFloat(RealData.buyCount1)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.buyPrice2" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">买2</p>
            <p class="am-flexbox-item am-ft-center {{RealData.buyCount2 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.buyPrice2 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.buyPrice2 ? parseFloat(RealData.buyPrice2).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.buyCount2 ? Math.transScientific(parseFloat(RealData.buyCount2)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.buyPrice3" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">买3</p>
            <p class="am-flexbox-item am-ft-center {{RealData.buyCount3 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.buyPrice3 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.buyPrice3 ? parseFloat(RealData.buyPrice3).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.buyCount3 ? Math.transScientific(parseFloat(RealData.buyCount3)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.buyPrice4" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">买4</p>
            <p class="am-flexbox-item am-ft-center {{RealData.buyCount4 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.buyPrice4 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.buyPrice4 ? parseFloat(RealData.buyPrice4).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.buyCount4 ? Math.transScientific(parseFloat(RealData.buyCount4)) : '--'}}</p>
          </li>
          <li @click="this.P3021.entrust_price = this.RealData.buyPrice5" class="am-flexbox">
            <p class="am-ft-darkgray am-flexbox-item am-ft-center">买5</p>
            <p class="am-flexbox-item am-ft-center {{RealData.buyCount5 >= 100 ? 'am-ft-smmm' : ''}} {{RealData.buyPrice5 > RealData.prevClosePrice? 'am-ft-red' : 'am-ft-green'}}">
              {{RealData.buyPrice5 ? parseFloat(RealData.buyPrice5).toFixed(RS1050.price_step ? (RS1050.price_step === '10' ? 2 : 3) : 2) : '--'}}
            </p>
            <p class="am-flexbox-item am-ft-right">{{RealData.buyCount5 ? Math.transScientific(parseFloat(RealData.buyCount5)) : '--'}}</p>
          </li>
        </ul>
        <ul class="am-ft-smm am-mt-5 sell-5 sell-8 am-ml-5">
          <li class="am-flexbox">
            <div class="am-flexbox-item">涨停价<span class="am-ft-red am-left-5">{{RealData.upPrice ? RealData.upPrice : '———'}}</span></div>
          </li>
          <li class="am-flexbox">
            <div class="am-flexbox-item">跌停价<span class="am-ft-green am-left-5">{{RealData.downPrice ? RealData.downPrice : '———'}}</span></div>
          </li>
        </ul>
      </div>
    </section>

    <ul class="itme border-bottom head-list amTop294">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">担保品持仓</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">盈亏比例</p>
          <p class="am-ft-15 am-ft-smm">盈亏</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">股票余额</p>
          <p class="am-ft-15 am-ft-smm">可用</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">当前价</p>
          <p class="am-ft-15 am-ft-smm">市值</p>
        </div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"  }'>
      <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <li class="am-flexbox border-bottom am-pd-15" v-for="item in RS4030" v-bind:class="{ 'high_light': P3021.stock_code === item.stock_code }" @click="this.P3021.stock_code = item.stock_code">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
          </div>
          <div class="am-flexbox-item text-center">
            <p class="am-ft-11 am-ft-sm {{item.income_balance_ratio > 0 ? 'am-ft-red' : 'am-ft-green'}}">{{item.income_balance_ratio}}%</p>
            <p class="am-ft-15 am-ft-smm {{item.income_balance > 0 ? 'am-ft-red' : 'am-ft-green'}}">{{Math.transCNScientific(parseFloat(item.income_balance))}}</p>
          </div>
          <div class="am-flexbox-item text-center">
            <p class="am-ft-15 am-ft-sm">{{Math.transCNScientific(parseInt(item.current_amount))}}</p>
            <p class="am-ft-11 am-ft-smm">{{Math.transCNScientific(parseInt(item.enable_amount))}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-11 am-ft-sm">{{item.last_price}}</p>
            <p class="am-ft-15 am-ft-smm">{{Math.transCNScientific(parseFloat(item.market_value))}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: absolute;
    top: 353px;
  }
</style>
<script>
  import {$P, $Macro, $Market} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default{
    created () {
      this.AS4070()
      // 监听市场类别
      this.$watch('P3021.exchange_type', function (val, oldVal) {
        if (val === '') { // 没有市场类别
          // this.P3021['stock_account'] = ''
        } else {
          this.RS4070.map((account) => { // 信用账户
            if (account['exchange_type'] === val) {
              this.P3021['stock_account'] = account['stock_account']
              this.P3000['stock_account'] = account['stock_account']
            }
          })
        }
      })
      // 监听股票代码
      this.$watch('P3021.stock_code', function (val, oldVal) {
        this.StockList = []
        this.RealData = {}
        if (val && val.length === 6) { // 输入完成
          $Macro(val, 1).then((list) => {
            if ((list instanceof Array) && list.length === 1) {
              if (!list[0]['exchange_type']) {
                this.P3021['stock_code'] = ''
              } else {
                // 填充其他数据
                // 实时行情数据
                $Market(val).then((obj) => {
                  this.RealData = obj
                  // 卖出价
                  this.P3021.entrust_price = obj.buyPrice1
                })
                this.P1050['stock_code'] = val
                this.AS1050()
                this.P3021.exchange_type = list[0]['exchange_type']
                this.P3021.stock_name = list[0]['stock_name']
                // 设置要查询可卖数量的股票代码、市场内别、股东账户
                this.P3000['stock_code'] = val
                this.P3000['exchange_type'] = list[0]['exchange_type']
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
          this.P3021['exchange_type'] = ''
          this.P3021['stock_name'] = ''
          this.P3021['entrust_price'] = ''
          this.P3021['entrust_amount'] = ''
          // 重置要查询可买数量的股票代码
          // this.P3010['stock_code'] = ''
        }
      })
      // 监听根据股票代码查询 - 可卖数量
      this.$watch('P3000.stock_code', function (val, oldVal) {
        if (val === '') {
          // this.AS3010RESET()
        } else {
          this.AS3000()
        }
      })

      // 监听列表内容是否发生变化
      this.$watch('RS4030.length', function (val, oldVal) {
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
        StockList: [], // 模糊搜索、股票代码集合
        RealData: {}, // 行情实时数据
        wrapper: {
          height: 0
        },
        P1050: $P('105:0'),
        P3021: $P('302:1'),
        P4030: $P('403:0'),
        P3000: $P('300:0')
      }
    },
    route: {
      data: function (transition) {
        this.RL4030()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS3021: state => state.all['302:1'],
        RS4030: state => state.all['403:0'],
        RS3000: state => state.all['300:0'],
        RS4070: state => state.all['407:0'],
        RS1050: state => state.all['105:0']
      },
      actions: {
        AS1050: $AS('105:0'),
        AS4030: $AS('403:0'),
        RL4030: $RELOAD('403:0:0:4'),
        AS3000: $AS('300:0'),
        AS3021: $AS('302:1'),
        AS4070: $AS('407:0')
      }
    },
    methods: {
      loadMore () {
        $P('403:0').position_str = this.RS4030[this.RS4030.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS4030()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      }
    }
  }
</script>
