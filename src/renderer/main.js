import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// 引入antdv
import { Dropdown, Menu, Popover, Button, Modal, Form, Input } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

// 引入自定义指令
import Directives from './directive/index'

Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Popover)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Form)
Vue.use(Input)

Vue.use(Directives)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
