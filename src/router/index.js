import NotFound from '@/views/404.vue'
import Home from '@/views/Home.vue'
// import Main from './views/Main.vue'
import LayoutCenter from '@/views/layout/center.vue'
import LayoutVetically from '@/views/layout/vetically.vue'
import LayoutMultiColumn from '@/views/layout/multiColumn.vue'
import LayoutHorizontally from '@/views/layout/horizontally.vue'
import Layout from '@/views/layout/layout.vue'
import Demo from '@/views/nav1/demo.vue'
import D3Drag from '@/views/d3/drag.vue'


let routes = [
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '/layout',
    component: Home,
    name: '布局',
    iconCls: 'fa fa-arrows', // 图标样式class
    children: [{
      path: '/center',
      component: LayoutCenter,
      name: '居中'
    },{
      path: '/vetically',
      component: LayoutVetically,
      name: '垂直居中'
    },{
      path: '/horizontally',
      component: LayoutHorizontally,
      name: '水平居中'
    },{
      path: '/column',
      component: LayoutMultiColumn,
      name: '多列布局'
    },{
      path: '/buju',
      component: Layout,
      name: '布局'
    }]
  },
  {
    path: '/demo',
    component: Home,
    name: 'Demo',
    iconCls: 'fa fa-cubes',
    children: [{
      path: '/test',
      component: Demo,
      name: '测试'
    }]
  },
  {
    path: '/d3',
    component: Home,
    name: 'D3',
    iconCls: 'fa fa-cubes',
    children: [{
      path: '/drag',
      component: D3Drag,
      name: '拖拽'
    }]
  },
  {
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  }
]

export default routes