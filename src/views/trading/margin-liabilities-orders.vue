<template>
  <section class="pd-bottom46">
    <ul class="itme am-cells border-bottom">
      <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray am-pd-15">
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">证券名称</p>
          <p class="am-ft-11 am-ft-smm">证券代码</p>
        </div>
        <div class="am-flexbox-item text-center">
          <p class="am-ft-15 am-ft-sm">成交数量</p>
        </div>
        <div class="am-flexbox-item">
          <p class="am-ft-15 am-ft-sm">发生日期</p>
          <p class="am-ft-11 am-ft-smm">到期日期</p>
        </div>
      </li>
    </ul>
    <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
      <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
        <li class="am-flexbox border-bottom am-relative am-pd-15" v-for="item in RS7060">
          <div class="am-flexbox-item">
            <p class="am-ft-11 am-ft-sm">{{item.stock_name}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.stock_code}}</p>
          </div>
          <div class="am-flexbox-item text-center">
            <p class="am-ft-15 am-ft-sm">{{Math.transCNScientific(parseInt(item.business_amount))}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{item.open_date}}</p>
            <p class="am-ft-11 am-ft-smm">{{item.back_date}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  .page-infinite-wrapper {
    position: absolute;
    top: 55px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听列表内容是否发生变化
      this.$watch('RS7060.length', function (val, oldVal) {
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
        P7060: $P('706:0')
      }
    },
    route: {
      data: function (transition) {
        this.RL7060()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7060: state => state.all['706:0']
      },
      actions: {
        AS7060: $AS('706:0'),
        RL7060: $RELOAD('706:0:0:4')
      }
    },
    methods: {
      loadMore () {
        $P('706:0').position_str = this.RS7060[this.RS7060.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7060()
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


