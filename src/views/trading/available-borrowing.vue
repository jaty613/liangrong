<template>
  <div>
    <article class="wrapper">
      <!--顶部-->
      <aside class="self_search">
        <div class="am-search-input btn-border">
          <span class="am-search-input-icon"><i class=" type-ico2"></i></span>
          <input v-model="P7160.stock_code" debounce="700" type="number" class="text-input" placeholder="输入股票代码">
          <a v-show="P7160.stock_code" @click="P7160.stock_code = ''" class="close-ico"></a>
        </div>
      </aside>
      <!--顶部-->
    </article>
    <section class="">
      <ul class="itme head-list amTop44 border-bottom">
        <li class="am-flexbox itme-title  am-bg-l am-ft-smm am-ft-gray">
          <div class="am-flexbox-item">证券代码/证券名称</div>
          <div class="am-flexbox-item itme-list-mild">可融数量</div>
        </li>
      </ul>
      <div class="container-list page-infinite-wrapper" v-el:wrapper :style='{ height: wrapper.height+"px"}'>
        <ul class="itme am-cells" v-infinite-scroll='loadMore()' infinite-scroll-disabled='loading' infinite-scroll-distance='50'>
          <li class="am-flexbox border-bottom am-relative" v-for="item in RS7160">
            <div class="am-flexbox-item">
              <p class="am-ft-15 am-ft-sm">{{item.stock_code}}/{{item.stock_name}}</p>
            </div>
            <div class="am-flexbox-item">
              <p class="am-ft-11 am-ft-sm">{{Math.transCNScientific(parseInt(item.enable_amount))}}</p>
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
    top: 82px
  }
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS, $RELOAD} from 'vuexx/action/ui-action'
  export default {
    created () {
      // 监听股票代码输入
      this.$watch('P7160.stock_code', function (val, oldVal) {
        this.search()
      })

      // 监听列表内容是否发生变化
      this.$watch('RS7160.length', function (val, oldVal) {
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
        P7160: $P('716:0')

      }
    },
    route: {
      data: function (transition) {
        this.RL7160()
        this.reload = true
      }
    },
    vuex: {
      getters: {
        RS7160: state => state.all['716:0']
      },
      actions: {
        AS7160: $AS('716:0'),
        RL7160: $RELOAD('716:0:0:4'),
        search: $AS('716:0:SEARCH')
      }
    },
    methods: {
      loadMore () {
        $P('716:0').position_str = this.RS7160[this.RS7160.length - 1].position_str
        if (!this.reload) {
          if (this.loading === false) {
            this.AS7160()
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
