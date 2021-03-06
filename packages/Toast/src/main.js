import Vue from 'vue'
import Main from './main.vue'
import {isVNode}  from '../../../utils/vdom'

let ToastConstructor = Vue.extend(Main);

let vnode;

const Toast  = function(options){
    options = options || {};
    if (typeof options === 'string') {
        options = {
            content: options
        };
    }
    let userOnCancel = options.onCancel;
    options.onCancel = function() {
        Toast.close(userOnCancel);
    };
    vnode = new ToastConstructor({
        data: options
    })
    if (isVNode(vnode.content)) {
        vnode.$slots.default = [vnode.content];
        vnode.content = null;
    }
    vnode.visible = true;
    vnode.$mount();
    document.body.appendChild(vnode.$el);
    return vnode 
}
Toast.close = function(userOnCancel){
    userOnCancel(vnode)
}

export default Toast