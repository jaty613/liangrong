import Vue from 'vue'
import Vuex from 'vuex'
import {modules as all} from './services'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    all
  },
  strict: debug
})
