<template>
  <section class="am-left-15 am-right-15 am-ft-sm am-pb-10">
      <h4 class="am-pt-10 am-pb-10">信用资金额度</h4>
      <table border="1" style="width:100%;background: #fff;">
        <tr>
          <td class="asset-info">担保资产</td>
          <td>{{RS705.assure_asset}}</td>
        </tr>
        <tr>
          <td>负债总额</td>
          <td>{{RS705.total_debit}}</td>
        </tr>
        <tr>
          <td class="asset-info">净资产</td>
          <td>{{RS705.nav_balance}}</td>
        </tr>
        <tr>
          <td>保证金可用余额</td>
          <td>{{RS705.credit_balance}}</td>
        </tr>
        <tr>
          <td>维持担保比例</td>
          <td>{{RS705.acc_assure_ratio}}</td>
        </tr>
        <tr>
          <td>融资融券可用还款金额</td>
          <td>{{RS705.enable_balance}}</td>
        </tr>
        <tr>
          <td>直接还款可还负债金额</td>
          <td>{{RS705.enable_return_balance}}</td>
        </tr>
        <tr>
          <td class="asset-info">现金资产</td>
          <td>{{RS705.fund_asset}}</td>
        </tr>
        <tr>
          <td>当前最大可转出资产总值</td>
          <td>{{RS705.vaild_balance}}</td>
        </tr>
        <tr>
          <td>费用负债</td>
          <td>{{RS705.fare_debit}}</td>
        </tr>
        <tr>
          <td>其他负债</td>
          <td>{{RS705.other_debit}}</td>
        </tr>
        <tr>
          <td>预计利息</td>
          <td>{{RS705.sum_compact_interest}}</td>
        </tr>

        <tr>
          <td>融券总合约盈亏</td>
          <td>{{RS705.shortsell_compact_profit}}</td>
        </tr>
        <tr>
          <td>融资总合约盈亏</td>
          <td>{{RS705.finance_compact_profit}}</td>
        </tr>
        <tr>
          <td>信用评级</td>
          <td>{{RS705.credit_level}}</td>
        </tr>
      </table>
      <h4 class="am-pt-10 am-pb-10">融资信息</h4>
      <table border="1" style="width:100%;background: #fff;">
        <tr>
          <td>最高融资额度</td>
          <td>{{RS705.finance_max_quota}}</td>
        </tr>
        <tr>
          <td>融资负债</td>
          <td>{{RS705.finance_debit}}</td>
        </tr>
        <tr>
          <td>融资保证金</td>
          <td>{{RS705.finance_bail_balance}}</td>
        </tr>
        <tr>
          <td>融资已融额度</td>
          <td>{{RS705.fin_used_quota}}</td>
        </tr>
        <tr>
          <td>融资可融额度</td>
          <td>{{RS705.fin_enable_quota}}</td>
        </tr>
        <tr>
          <td>融资年利率（%）</td>
          <td>{{(parseFloat(RS729.finance_rate) * 100).toFixed(3)}}%</td>
        </tr>
      </table>
      <h4 class="am-pt-10 am-pb-10">融券信息</h4>
      <table border="1" style="width:100%;background: #fff;">
        <tr>
          <td>最高融券额度</td>
          <td>{{RS705.shortsell_max_quota}}</td>
        </tr>
        <tr>
          <td>融券负债</td>
          <td>{{RS705.shortsell_debit}}</td>
        </tr>
        <tr>
          <td>融券保证金</td>
          <td>{{RS705.shortsell_bail_balance}}</td>
        </tr>
        <tr>
          <td>融券已融额度</td>
          <td>{{RS705.slo_used_quota}}</td>
        </tr>
        <tr>
          <td>融券可融额度</td>
          <td>{{RS705.shortsell_enable_balance}}</td>
        </tr>
        <tr>
          <td>融券年利率（%）</td>
          <td>{{(parseFloat(RS729.shortsell_rate) * 100).toFixed(3)}}%</td>
        </tr>
      </table>
  </section>
</template>
<style>
</style>
<script>
  import {$AS} from 'vuexx/action/ui-action'
  export default{
    vuex: {
      getters: {
        RS705: state => state.all['705:0'],
        RS729: state => state.all['729:0'],
        RS28324: state => state.all['28324:0']
      },
      actions: {
        AS705: $AS('705:0'),
        AS729: $AS('729:0'),
        AS28324: $AS('28324:0')
      }
    },
    route: {
      data: function (transition) {
        this.AS705()
        this.AS729()
        this.AS28324()
      }
    }
  }
</script>

