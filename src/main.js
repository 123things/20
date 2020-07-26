import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 统一样式
import '@styles/reset.css'

//一像素显示
import '@styles/border.css'

//延迟300m fastclick
import fastclick from 'fastclick'
fastclick.attach(document.body)

//公共样式 
import '@styles/general.css'

//公共方法
import  { browser,os } from  '@js/common.js'
const isPc = os.isPc;
isPc ? import('@js/html5shiv.min.js') : ''

// 移动端适应屏幕
import '@js/flexible.js'

//响应式布局-栅格系统
import '@styles/grid.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
