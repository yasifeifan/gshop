/*vuex最核心的管理对象*/

/*引入常用模块与自定义模块*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)         //使用vuex

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
