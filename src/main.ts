import Vue from "vue";              // vue
import App from "./App.vue";        // enter
import "./registerServiceWorker";   // PWA
import router from "./router";      // router
import store from "./store";        // vuex-class
import './assets/css/common.less'   // 公共css
import Element from 'element-ui'    // element
import 'element-ui/lib/theme-chalk/index.css' // element css
// 引入mockjs
require('./mock/mock')  // m模拟接口

Vue.use(Element)        // 实例
Vue.prototype.Element = Element     // 挂载
Vue.config.productionTip = false;   // 生产提示

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
