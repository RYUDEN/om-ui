import Vue from 'vue'
import Router from 'vue-router'
import promise from 'es6-promise'

promise.polyfill();
Vue.use(Router);
const index = ()=>import('./pages/index');
const button = ()=>import('./pages/button');
const curtain = ()=>import('./pages/curtain');
const badge = ()=>import('./pages/badge');
const loadmore = ()=>import('./pages/loadmore');
const action = ()=>import('./pages/action');
const modal = ()=>import('./pages/modal');
const toast = ()=>import('./pages/toast');
export default new Router({
    mode:'hash',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
    routes:[
        {
            path:'/',
            name:'index',
            component:index
        },
        {
            path:'/button',
            name:'button',
            component:button
        },
        {
            path:'/curtain',
            name:'curtain',
            component:curtain
        },
        {
            path:'/badge',
            name:'badge',
            component:badge
        },
        {
            path:'/loadmore',
            name:'loadmore',
            component:loadmore
        },
        {
            path:'/action',
            name:'action',
            component:action
        },
        {
            path:'/toast',
            name:'toast',
            component:toast
        },
        {
            path:'/modal',
            name:'modal',
            component:modal
        },
    ]
})