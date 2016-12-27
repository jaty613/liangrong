<template>
  <div>
    <section class="pd-bottom46">
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
          <div class="am-flexbox-item">
            <p class="am-ft-gray am-pt-5 am-ft-smm"><span>结束时间</span></p>
            <p class="select" @click="this.pickerEndVisible=true">
              {{end_date}}
            </p>
          </div>
        </div>
      </hgroup>
      <ul class="itme border-bottom am-cells head-list amTop67">
        <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">状态</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">申请额度</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">申请类型</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">有效日期</p>
          </div>
        </li>
      </ul>
      <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
        <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
          <li class="am-flexbox weui_cell" v-for="item in RS7240">
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm am-ft-blue2">{{$dic('crquota_status',item.crquota_status)}}</p>
              <!--<p class="am-ft-15 am-ft-sm am-ft-green">已审批</p>-->
              <!--<p class="am-ft-15 am-ft-sm am-ft-green">已授信</p>-->
              <!--<p class="am-ft-15 am-ft-sm am-ft-red">已撤销</p>-->
              <!--<p class="am-ft-15 am-ft-sm am-ft-red">已过期</p>-->
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-11 am-ft-sm">{{item.total_apply_quota}}</p>

            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{$dic('crquota_type',item.crquota_type)}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.valid_date}}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: absolute;
    top: 105px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS7240.length', function (val, oldVal) {
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
        begin_date: (new Date(new Date().setMonth((new Date().getMonth() - 1))).Format('yyyy-MM-dd')),
        end_date: ((new Date()).Format('yyyy-MM-dd')),
        reload: true,
        loading: true,
        pickerStartVisible: false,
        pickerEndVisible: false,
        wrapper: {
          height: 0
        },
        queryParams: $P('724:0')
      }
    },
    route: {
      data: function (transition) {
        this.queryParams.begin_date = this.queryParams.begin_date ? this.queryParams.begin_date : (new Date(new Date().setMonth((new Date().getMonth() - 1))).Format('yyyyMMdd'))
        this.queryParams.end_date = this.queryParams.end_date ? this.queryParams.end_date : ((new Date()).Format('yyyyMMdd'))

        this.RL7240()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7240: state => state.all['724:0']
      },
      actions: {
        AS7240: $AS('724:0'),
        RL7240: $RELOAD('724:0:0:4'),
        search: $AS('724:0:SEARCH')
      }
    },
    methods: {
      loadMore () {
        $P('724:0').position_str = this.RS7240[this.RS7240.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7240()
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

