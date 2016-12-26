<template>
  <section class="pd-bottom46">
    <mt-datetime-picker  :value="begin_date" :visible.sync="pickerStartVisible" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleStartChange"></mt-datetime-picker>
    <mt-datetime-picker  :value="end_date" :visible.sync="pickerEndVisible" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleEndChange"></mt-datetime-picker>
    <hgroup class="dealTop am-bg-writh weui_cells header-top">
      <div class="am-flexbox">
        <div class="am-flexbox-item">
          <p class="am-ft-gray am-pt-5 am-ft-smm"><span>起始时间</span></p>
          <p class="select" @click="this.pickerStartVisible=true">
            {{begin_date}}
          </p>
        </div>
        <div class="">
          <i class="icon-type icon-change"></i>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-gray am-pt-5 am-ft-smm"><span>起始时间</span></p>
          <p class="select" @click="this.pickerEndVisible=true">
            {{end_date}}
          </p>
        </div>
      </div>
    </hgroup>
    <ul class="itme border-bottom am-cells head-list">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">名称</p>
          <p class="am-ft-11 am-ft-smm">代码</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">成交日期</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">成交量</p>
          <p class="am-ft-11 am-ft-smm">成交价</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">发生金额</p>
        </div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme weui_cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <li class="am-flexbox weui_cell am-pd-15" v-for="item in RS728">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.stock_name}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-11 am-ft-smm">{{item.init_date}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.occur_amount}}</p>
            <p class="am-ft-15 am-ft-smm">{{item.business_price}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.occur_balance}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: absolute;
    top: 120px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS} from 'vuexx/action/ui-action'
  export default {
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
      this.queryParams.begin_date = new Date(this.begin_date).Format('yyyyMMdd')
      this.queryParams.end_date = new Date(this.end_date).Format('yyyyMMdd')
    },
    data () {
      return {
        begin_date: (new Date(new Date().setMonth((new Date().getMonth() - 3))).Format('yyyy-MM-dd')),
        end_date: ((new Date()).Format('yyyy-MM-dd')),
        loading: false,
        pickerStartVisible: false,
        pickerEndVisible: false,
        wrapper: {
          height: 0
        },
        queryParams: $P('728:0')
      }
    },
    vuex: {
      getters: {
        RS728: state => state.all['728:0']
      },
      actions: {
        AS728: $AS('728:0'),
        search: $AS('728:0:SEARCH')
      }
    },
    methods: {
      loadMore () {
        if (this.loading === false) {
          this.AS728()
        }
      },
      handleStartChange (value) {
        this.begin_date = value.Format('yyyy-MM-dd')
        this.queryParams.begin_date = new Date(this.begin_date).Format('yyyyMMdd')
        this.search()
      },
      handleEndChange (value) {
        this.end_date = value.Format('yyyy-MM-dd')
        this.queryParams.end_date = new Date(this.end_date).Format('yyyyMMdd')
        this.search()
      }
    }
  }
</script>

