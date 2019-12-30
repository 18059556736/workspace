import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
import MyServerHttp from '@/plugins/http.js'
import Pagination from './plugins/pagination/index'
import Form from './plugins/Form/index'
// import axios from 'axios'
// Vue.prototype.$http = axios
//使用用户自己的插件
import { Button ,DatePicker } from 'element-ui';
import ElementUI from 'element-ui'
import moment from 'moment'
// Vue.component(Button.namCCe, Button);
// Vue.component(DatePicker.name, DatePicker);
Vue.use(ElementUI)
Vue.use(MyServerHttp)
//全局时间过滤器
Vue.filter('fmtdate',(v)=>{
  return moment(v).format('YYYY-MM-DD')
})
import '@/assets/css/base.css'
var HRComponentsLib = {
  Pagination,
  Form
}
Object.keys(HRComponentsLib).forEach(key => {
  HRComponentsLib[key].install(Vue)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
