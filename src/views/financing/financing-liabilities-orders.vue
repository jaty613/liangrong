<template>
  <section class="pd-bottom46">
    <ul class="itme am-cells  border-bottom">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">证券名称</p>
          <p class="am-ft-11 am-ft-smm">证券代码</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">负债金额</p>
          <p class="am-ft-11 am-ft-smm">负债利息</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">发生日期</p>
          <p class="am-ft-11 am-ft-smm">到期日期</p>
        </div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <li class="am-flexbox border-bottom am-relative am-pd-15" v-for="item in RS7200">
          <div class="am-flexbox-item">
            <p class="am-ft-11 am-ft-sm">{{item.stock_name}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
          </div>
          <div class="am-flexbox-item text-center">
            <p class="am-ft-15 am-ft-sm">{{Math.transCNScientific(parseFloat(item.debit_balance))}}</p>
            <p class="am-ft-15 am-ft-smm">{{Math.transCNScientific(parseFloat(item.debit_interest))}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.init_date}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.back_date}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: fixed;
    top: 55px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS7200.length', function (val, oldVal) {
        this.loading = false
        if (val === oldVal) {
          this.loading = true
        }
      })
    },
    data () {
      return {
        reload: true,
        loading: true,
        wrapper: {
          height: 0
        },
        P7200: $P('720:0')
      }
    },
    route: {
      data: function (transition) {
        this.RL7200()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7200: state => state.all['720:0']
      },
      actions: {
        AS7200: $AS('720:0'),
        RL7200: $RELOAD('720:0:0:4')
      }
    },
    methods: {
      loadMore () {
        $P('720:0').position_str = this.RS7200[this.RS7200.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7200()
            this.loading = true
          }
        } else {
          this.reload = false
        }
      }
    },
    ready () {
      this.wrapper.height = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top
    }
  }
</script>


