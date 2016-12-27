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
          <p class="am-ft-gray am-pt-5 am-ft-smm"><span>结束时间</span></p>
          <p class="select" @click="this.pickerEndVisible=true">
            {{end_date}}
          </p>
        </div>
      </div>
    </hgroup>
    <ul class="itme am-cells border-bottom head-list">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">时间/操作</div>
        <div class="" style="width:66px;">价格/数量</div>
        <div class="am-flexbox-item">发生金额</div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme am-cells">
        <li class="itme-list am-flexbox am-ft-sm border-bottom am-relative" v-for="item in RS4120">
          <div class="am-flexbox-item">
            <p class="">{{item.business_date}}</p>
            <p class="am-ft-smm am-ft-lightgray">{{item.business_name}}</p>
          </div>
          <div class="" style="width:66px;">
            <p class="">{{item.business_price ? Math.transCNScientific(parseFloat(item.business_price)) : 0}}</p>
            <p class="am-ft-sm">{{item.occur_amount ? Math.transCNScientific(parseInt(item.occur_amount)) : 0}}</p>
          </div>
          <div class="am-flexbox-item {{ item.occur_balance > 0 ? 'am-ft-red' : 'am-ft-green'}} ">{{item.occur_balance}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: fixed;
    top: 98px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
      //      this.P4120.begin_date = new Date(this.begin_date).Format('yyyyMMdd')
      //      this.P4120.start_date = new Date(this.begin_date).Format('yyyyMMdd')
      //      this.P4120.end_date = new Date(this.end_date).Format('yyyyMMdd')
      //      this.AS4120()
    },
    data () {
      return {
        begin_date: (new Date(new Date().setDate((new Date().getDate() - 30))).Format('yyyy-MM-dd')),
        end_date: ((new Date()).Format('yyyy-MM-dd')),
        pickerStartVisible: false,
        pickerEndVisible: false,
        wrapper: {
          height: 0
        },
        P4120: $P('412:0')
      }
    },
    route: {
      data: function (transition) {
        this.P4120.begin_date = new Date(this.begin_date).Format('yyyyMMdd')
        this.P4120.start_date = new Date(this.begin_date).Format('yyyyMMdd')
        this.P4120.end_date = new Date(this.end_date).Format('yyyyMMdd')
        this.RL4120()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS4120: state => state.all['412:0']
      },
      actions: {
        AS4120: $AS('412:0'),
        RL4120: $RELOAD('412:0:0:4'),
        search: $AS('412:0:SEARCH')
      }
    },
    methods: {
      handleStartChange (value) {
        this.begin_date = value.Format('yyyy-MM-dd')
        this.P4120.start_date = new Date(this.begin_date).Format('yyyyMMdd')
        this.P4120.begin_date = new Date(this.begin_date).Format('yyyyMMdd')
        this.search()
      },
      handleEndChange (value) {
        this.end_date = value.Format('yyyy-MM-dd')
        this.P4120.end_date = new Date(this.end_date).Format('yyyyMMdd')
        this.search()
      }
    }
  }
</script>

