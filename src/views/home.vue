<template>
  <div class="index-content">
    <div class="list">
      <div class="nav weui_cells am-ft-sm cell-color">普通交易</div>
      <div class="am-ft-sm flex-container">
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/transaction/purchase'}" >普通买入</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/transaction/sold'}" >普通卖出</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/transaction/entrust'}" >委托撤单</a></div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="nav weui_cells am-ft-sm cell-color">融资</div>
      <div class="am-ft-sm flex-container">
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/financing/buyouts'}"  >融资买入</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/financing/ticket-payments'}"  >卖券还款</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/financing/cash-payments'}"  >现金还款</a></div>
        </div>
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/financing/financeable-securities'}"  >可融资证券查询</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/financing/financing-liabilities-orders'}"  >融资负债订单明细</a></div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="nav weui_cells am-ft-sm cell-color">融券</div>
      <div class="am-ft-sm flex-container">
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/trading/margin-trading'}"  >融券卖出</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/trading/buy-voucher-still-voucher'}"  >买券还券</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/trading/cash-voucher-still-voucher'}"  >现券还券</a></div>
        </div>
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/trading/available-borrowing'}"  >可融券证券查询</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/trading/margin-liabilities-orders'}"  >融券负债订单明细</a></div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="nav weui_cells am-ft-sm cell-color">担保品</div>
      <div class="am-ft-sm flex-container">
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/collateral/collateral-submit'}" >担保品提交</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/collateral/collateral-back'}"  >担保品返回</a></div>
        </div>
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/collateral/collateral-revoke'}" >担保物撤单</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/collateral/non-transactional-transfer'}"  >非交易过户查询</a></div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="nav weui_cells am-ft-sm cell-color">综合查询</div>
      <div class="am-ft-sm flex-container">
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/credit-assets'}"  >信用资产查询</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/capital-flow'}"  >资金流水查询</a></div>
        </div>
        <div class="display-webkit" >
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/single-day-contract'}"  >当日合约查询</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/debt-flow'}"  >负债流水查询</a></div>

        </div>
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/already-contracts'}"  >已了合约查询</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/interest-rate-information'}"  >利率信息查询</a></div>
        </div>
        <div class="display-webkit">
          <div class="flex-tag2 am-flexbox-item border-dark"><a hexternal v-link="{ path: '/integrated/outstanding-contracts'}"  >未了合约查询</a></div>
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/credit-limit-adjustment'}"  >信用额度调整查询</a></div>
        </div>
        <div class="display-webkit" style="width:50%;">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/credit-shareholders'}"  >信用股东查询</a></div>
          <div style="display:none" class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/integrated/cash-pre-payment'}"  >现金预还款查询</a></div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="nav weui_cells am-ft-sm cell-color">额度调整</div>
      <div class="am-ft-sm flex-container">
        <div class="display-webkit" style="width:50%;">
          <div class="flex-tag2 am-flexbox-item border-dark"><a external v-link="{ path: '/limit/credit-limit-adjustment'}"  >信用额度调整申请</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    ready: function () {
    },
    methods: {
    }
  }
</script>

<!-- 添加 "scoped" 属性 表示该标签下所有属性样式针对该组件 -->
<style scoped>

</style>
