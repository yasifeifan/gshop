//引入vue
import Vue from 'vue'
//引入根组件
import App from './App'
//引入路由器
import router from './router'

new Vue({
  el:"#app",
  render:h=>h(App),
  router
})
