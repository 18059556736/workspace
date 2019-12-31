//插件模块
import axios from 'axios'

const MyhttpServer = {}

MyhttpServer.install = (Vue) =>{
    axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/posts'
    Vue.prototype.$http = axios
}
export default MyhttpServer