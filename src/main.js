import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './assets/styles/index.scss'
import './plugins/element.js'
import './icons'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

// 将路由信息放入store中
sync(store, router)

/**
 * 功能权限自定义指令
 * @author zc
 */
Vue.directive('has', {
  inserted (el, binding) {
    if (!store.state.user.permissionRouterObj[binding.value]) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
