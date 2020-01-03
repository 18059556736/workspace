import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
import MyServerHttp from '@/plugins/http.js'
import Pagination from './plugins/pagination/index'
import Form from './plugins/Form/index'
import NewForm from './plugins/NewForm/index'
// import axios from 'axios'
// Vue.prototype.$http = axios
import { Button,Dialog,Menu,Submenu, MenuItem,MenuItemGroup,Table,tableColumn,DatePicker,Breadcrumb ,BreadcrumbItem,Radio,Checkbox,checkboxGroup,Upload,Tabs,TabPane,Message} from 'element-ui';
// import moment from 'moment'
import unploadFile from './plugins/unploadFile/index'
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(tableColumn)
Vue.use(DatePicker )
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(checkboxGroup)
Vue.use(Upload )
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(MyServerHttp)
Vue.use(getNowFormatDate)

Vue.prototype.$message=Message
Vue.prototype.$success=Message.success
Vue.prototype.$warning=Message.warning
Vue.prototype.$info=Message.info
Vue.prototype.$error=Message.error
import getNowFormatDate from './plugins/moment'
// Vue.use(Message)
//全局时间过滤器
// Vue.filter('fmtdate',(v)=>{
//   return moment(v).format('YYYY-MM-DD')
// })
import '@/assets/css/base.css'
var HRComponentsLib = {
  Pagination,
  Form,
  NewForm,
  unploadFile
}
Object.keys(HRComponentsLib).forEach(key => {
  HRComponentsLib[key].install(Vue)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
