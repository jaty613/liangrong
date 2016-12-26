<template>
  <section class="pd-bottom46">
    <section class="am-flexbox pd15 am-pt-10 border-top am-pb-5">
      <div class="am-flexbox-item">
        <select v-model="params.crquota_type" class="con-select am-ft-smm" style="margin-bottom:0;padding-left: 6px;">
          <option value="2">额度调整申请</option>
        </select>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input name="" type="text" readonly= "true" class="text_input " value="" placeholder="人民币" style="font-size:12px;">
                    </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">融资额度</div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                      <input  v-model.number="params.fin_apply_quota" debounce="100" type="number"  class="text_input am-ft-smm am-ft-gray" placeholder="输入融资额度" style="font-size:12px;">
                      <a v-show="params.fin_apply_quota" @click="params.fin_apply_quota=''" class="close-ico bottom-3"></a>
                    </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">融券额度</div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input v-model.number="params.slo_apply_quota" type="number" class="text_input am-ft-smm am-ft-gray" placeholder="输入融券额度" style="font-size:12px;">
                        <a v-show="params.slo_apply_quota" @click="params.slo_apply_quota=''" class="close-ico bottom-3"></a>
                    </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">申请总额</div>
          <div class=" borderNo am-flexbox-item">
                    <span class="ui-form-field">
                        <input v-model="params.total_apply_quota"  debounce="100"type="number" readonly="true" class="text_input " style="font-size:12px;">
                    </span>
          </div>
        </div>
        <div class="am-flexbox ui-formContainer am-flexbox-remind firmb-flexbox-buy am-mt-10 btn-border am-bg-white">
          <div class="am-right-10 am-ft-lightgray am-ft-smmm border-right am-relative am-left-10">有效日期</div>
          <div class=" borderNo am-flexbox-item">
              <mt-datetime-picker
                :value.sync="defDate"
                @confirm="_handleChange"
                :visible.sync="pickerVisible"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日">
              </mt-datetime-picker>
                    <span class="ui-form-field">
                        <input v-on:focus="this.pickerVisible=true" v-model="params.valid_date" type="text" value="{{((new Date()).Format('yyyy-MM-dd'))}}" class="text_input " value="" placeholder="有效日期" style="font-size:12px;">
                    </span>
          </div>
        </div>
        <div class="am-flexbox am-mt-10 am-bg-white">
          <div class=" borderNo am-flexbox-item">
            <textarea v-model="params.remark" class="text_area" placeholder="备注"></textarea>
          </div>
        </div>
        <a @click="AS28572(this)"  class="am-button am-mt-10" am-mode="red ">确定</a>
      </div>
    </section>
  </section>
</template>
<style>
</style>
<script>
  import {$P} from 'vuexx/action/data-action'
  import {$AS} from 'vuexx/action/ui-action'
  export default{
    created () {
      // 融资、融券 额度
      this.AS28325().then((msg) => {
        if (!msg) {
          this.params.fin_apply_quota = this.RS28325.finance_max_quota
          this.params.slo_apply_quota = this.RS28325.shortsell_max_quota
        }
      })
      // 监听融资额度,计算总额度
      this.$watch('params.fin_apply_quota', function (val, oldVal) {
        if (!isNaN(val)) {
          this.params.fin_apply_quota = parseFloat(val) > parseFloat(this.RS28325.finance_max_quota) ? this.RS28325.finance_max_quota : val
        }
        this.params.total_apply_quota = parseFloat(!isNaN(parseFloat(val)) ? val : 0) + parseFloat(!isNaN(parseFloat(this.params.slo_apply_quota)) ? this.params.slo_apply_quota : 0)
      })
      // 监听融券额度,计算总额度
      this.$watch('params.slo_apply_quota', function (val, oldVal) {
        if (!isNaN(val)) {
          this.params.slo_apply_quota = parseFloat(val) > parseFloat(this.RS28325.shortsell_max_quota) ? this.RS28325.shortsell_max_quota : val
        }
        this.params.total_apply_quota = parseFloat(!isNaN(parseFloat(val)) ? val : 0) + parseFloat(!isNaN(parseFloat(this.params.fin_apply_quota)) ? this.params.fin_apply_quota : 0)
      })
    },
    ready () {
    },
    data () {
      return {
        defDate: ((new Date()).Format('yyyy-MM-dd')), // 缺省时间
        pickerVisible: false, // 时间选择框是否显示
        params: $P('28572:0')
      }
    },
    vuex: {
      getters: {
        RS28325: state => state.all['28325:0']
      },
      actions: {
        AS28325: $AS('28325:0'),
        AS28572: $AS('28572:0')
      }
    },
    methods: {
      _handleChange (value) { // 通过时间选择框,选择时间,并赋值到文本框
        this.params.valid_date = value.Format('yyyy-MM-dd')
      }
    }
  }
</script>

