//require("babel-polyfill");
import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from 'config/routers'
//import app from './app.vue'
import hmt from 'hmt'

let isDebug = process.env.NODE_ENV !== 'production';

//开启错误提示
Vue.config.debug = isDebug;
Vue.config.silent = !isDebug;
Vue.use(VueRouter);

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});   


let app = Vue.extend({});

//注册全局组件
Vue.component('app-header', (resolve) => {
    require(['./components/header.vue'], resolve);
});
routerMap(router);
router.start(app, "#app");