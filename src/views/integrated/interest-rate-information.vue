<template>
  <section class="">
    <ul class="itme weui_cells header-top">
      <li class="am-flexbox itme-title  am-bg-l am-ft-sm am-ft-gray">
        <div class="am-flexbox-item">类型</div>
        <div class="am-flexbox-item itme-list-mild">利率</div>
      </li>
    </ul>
    <div class="container-list">
      <ul class="itme am-cells am-mt-39">
        <li class="am-flexbox border-bottom am-relative" v-for="item in RS28502">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-sm">{{$dic('crdtrate_kind',item.crdtrate_kind)}}</p>
          </div>
          <div class="am-flexbox-item">
            <p class="am-ft-11 am-ft-sm">{{(item.year_rate * 100).toFixed(3)}}%</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style>
</style>
<script type='text/babel'>
  import {$P} from 'vuexx/action/data-action'
  import {$AS} from 'vuexx/action/ui-action'
  export default {
    data () {
      return {
        queryParams: $P('28502:0')
      }
    },
    vuex: {
      getters: {
        RS28502: state => state.all['28502:0']
      },
      actions: {
        AS28502: $AS('28502:0')
      }
    },
    route: {
      data: function (transition) {
        this.AS28502()
      }
    }
  }
</script>


