import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'

//axios请求拦截
axios.interceptors.request.use(config => {
  //为请求头对象，添加Token 验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//将axios添加到原型中，那么vue实例就可以直接通过http来访问axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
