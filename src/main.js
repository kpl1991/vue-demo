import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
import axios from 'axios'
import GLOBAL from '@/config_dev'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = GLOBAL
Vue.prototype.echarts = echarts
Vue.prototype.$http = axios
// Vue.use(VueResource)
Vue.use(ElementUI)

new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
