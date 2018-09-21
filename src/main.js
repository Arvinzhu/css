import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
// import store from './vuex/store'
// import Vuex from 'vuex'

import  TodoList  from './components/todoList.vue'

import routes from '@/router/index.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(Vuex)

Vue.component('todo-list', TodoList )

const router = new VueRouter({
  routes
})

new Vue({
   el: '#app',
  // template: '<App/>',
  router,
  // store,
  components: { TodoList },
  render: h => h(App)
})
