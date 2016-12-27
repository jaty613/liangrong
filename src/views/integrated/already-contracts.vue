<template>
  <section class='pd-bottom46'>
    <mt-datetime-picker  :value="begin_date" :visible.sync="pickerStartVisible" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleStartChange"></mt-datetime-picker>
    <mt-datetime-picker  :value="end_date" :visible.sync="pickerEndVisible" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleEndChange"></mt-datetime-picker>
    <hgroup class="dealTop am-bg-writh border-bottom header-top">
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
        <div class="am-flexbox-item" @click="this.pickerEndVisible=true">
          <p class="am-ft-gray am-pt-5 am-ft-smm"><span>结束时间</span></p>
          <p class="select">
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
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">委托价</p>
          <p class="am-ft-15 am-ft-smm">委托量</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-11 am-ft-sm">合约类型</p>
          <p class="am-ft-11 am-ft-smm">状态</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">委托时间</p>
        </div>
      </li>
    </ul>
    <div class='container-list page-infinite-wrapper' v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class='itme weui_cells' v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <li class='am-flexbox weui_cell am-pd-15' v-for='item in RS28501'>
          <div class='am-flexbox-item'>
            <p class='am-ft-15 am-ft-sm'>{{ item.stock_name }}</p>
            <p class='am-ft-11 am-ft-smm'>{{ item.stock_code }}</p>
          </div>
          <div class='am-flexbox-item text-center'>
            <p class='am-ft-11 am-ft-sm'>{{item.entrust_price}}</p>
            <p class='am-ft-15 am-ft-smm'>{{Math.transCNScientific(parseInt(item.entrust_amount))}}</p>
          </div>
          <div class='am-flexbox-item text-center'>
            <p class='am-ft-11 am-ft-sm {{ item.compact_type === 0 ? "am-ft-green" : "am-ft-red" }}'>{{ $dic('compact_type',item.compact_type) }}</p>
            <p class='am-ft-15 am-ft-smm am-ft-lightgray'>{{ $dic('compact_status',item.compact_status) }}</p>
          </div>
          <div class='am-flexbox-item'>
            <p class='am-ft-15 am-ft-sm'>{{item.open_date}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

</template>
<style scoped>
  .page-infinite-wrapper {
    position: fixed;
    top: 120px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS28501.length', function (val, oldVal) {
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
        this.queryParams.begin_date = this.queryParams.begin_date ? this.queryParams.begin_date : (new Date(new Date().setMonth((new Date().getMonth() - 3))).Format('yyyyMMdd'))
        this.queryParams.end_date = this.queryParams.end_date ? this.queryParams.end_date : ((new Date()).Format('yyyyMMdd'))

        this.RL28501()
        this.reload = true
      }
    },
    data () {
      return {
        begin_date: (new Date(new Date().setMonth((new Date().getMonth() - 3))).Format('yyyy-MM-dd')),
        end_date: ((new Date()).Format('yyyy-MM-dd')),
        reload: true,
        loading: true,
        pickerStartVisible: false,
        pickerEndVisible: false,
        wrapper: {
          height: 0
        },
        queryParams: $P('28501:1')
      }
    },
    vuex: {
      getters: {
        RS28501: state => state.all['28501:1']
      },
      actions: {
        AS28501: $AS('28501:1'),
        RL28501: $RELOAD('28501:1:0:4'),
        search: $AS('28501:1:SEARCH')
      }
    },
    methods: {
      loadMore () {
        $P('28501:1').position_str = this.RS28501[this.RS28501.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS28501()
            this.loading = true
          }
        } else {
          this.reload = false
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
