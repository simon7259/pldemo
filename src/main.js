import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';
import HelloWorld from "./components/HelloWorld";


Vue.config.productionTip = false;


Vue.use(Antd);
Vue.use(VueRouter);

//创建路由对象并配置路由规则
let router = new VueRouter({
  routes: [
    {path: '/HelloWorld', component: HelloWorld}
  ]
});

new Vue({
  //让vue知道我们的路由规则
  router: router,
  render: h => h(App),
}).$mount('#app');
