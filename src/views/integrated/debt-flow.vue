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
        <div class="am-flexbox-item">操作/时间</div>
        <div class="" style="width:66px;">数量</div>
        <div class="am-flexbox-item">发生金额</div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme  am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <li class="am-flexbox  weui_cell" v-for="item in RS7280">
          <div class="am-flexbox-item">
            <p class="">{{$dic('business_flag', item.business_flag)}}</p>
            <p class="am-ft-smm am-ft-lightgray">{{item.init_date}}</p>
          </div>
          <div class="" style="width:66px;">
            <p class="">{{item.business_price}}</p>
            <p class="am-ft-smm">{{item.occur_amount}}</p>
          </div>
          <div class="am-flexbox-item ">
            <p class="">{{item.occur_balance}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: absolute;
    top: 99px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  import {VAA001} from 'vuexx/action/vaild-action'
  export default {
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS7280.length', function (val, oldVal) {
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
        begin_date: (new Date(new Date().setDate((new Date().getDate() - 30))).Format('yyyy-MM-dd')),
        end_date: ((new Date()).Format('yyyy-MM-dd')),
        reload: true,
        loading: true,
        pickerStartVisible: false,
        pickerEndVisible: false,
        wrapper: {
          height: 0
        },
        queryParams: $P('728:0')
      }
    },
    route: {
      data: function (transition) {
        this.queryParams.begin_date = this.queryParams.begin_date ? this.queryParams.begin_date : (new Date(new Date().setDate((new Date().getDate() - 30))).Format('yyyyMMdd'))
        this.queryParams.end_date = this.queryParams.end_date ? this.queryParams.end_date : ((new Date()).Format('yyyyMMdd'))

        this.RL7280()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7280: state => state.all['728:0']
      },
      actions: {
        AS7280: $AS('728:0'),
        RL7280: $RELOAD('728:0:0:4'),
        search: $AS('728:0:SEARCH')
      }
    },
    methods: {
      loadMore () {
        $P('728:0').position_str = this.RS7280[this.RS7280.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7280()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      },
      handleStartChange (value) {
        this.begin_date = value.Format('yyyy-MM-dd')
        this.queryParams.begin_date = new Date(this.begin_date).Format('yyyyMMdd')
        if (VAA001({begin_date: this.begin_date, end_date: this.end_date})) {
          this.search()
        }
      },
      handleEndChange (value) {
        this.end_date = value.Format('yyyy-MM-dd')
        this.queryParams.end_date = new Date(this.end_date).Format('yyyyMMdd')
        if (VAA001({begin_date: this.begin_date, end_date: this.end_date})) {
          this.search()
        }
      }
    }
  }
</script>

