import Vue from 'vue'
import App from './App'
import * as myRequest from './http/api.js'
import toast from './util/toast.js'
import { baseUrl } from './http/request.js'

Vue.config.productionTip = false
Vue.prototype.$ajax = myRequest
Vue.prototype.$message = toast
Vue.prototype.baseUrlHeader = baseUrl

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
