require("babel-polyfill");
import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from 'config/routers'
import ToastCustom from 'plugins/toast'
import Vuex from 'vuex'
import store from './store/store';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import CountUp from 'countup.js'

//import app from './app.vue'
//import hmt from 'hmt'

require("less/common/reset.css")
require("less/common/common.less")


let isDebug = process.env.NODE_ENV !== 'production';

//开启错误提示
Vue.config.debug = isDebug;
Vue.config.silent = !isDebug;
Vue.use(VueRouter);
Vue.use(ToastCustom);
Vue.use(Vuex);
Vue.use(MintUI);
// Vue.use(CountUp);

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});   


let app = Vue.extend({
    store
});

//注册全局组件
Vue.component('app-header', (resolve) => {
    require(['./components/header.vue'], resolve);
});
Vue.component('scroll-paging', (resolve) => {
    require(['./components/scrollPaging.vue'], resolve);
});
routerMap(router);
router.start(app, "#app");