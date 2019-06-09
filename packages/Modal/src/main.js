import Vue from 'vue'
import Main from './main.vue'
import {isVNode}  from '../../../utils/vdom'

let ModalConstructor = Vue.extend(Main);

let vnode;

const Modal  = function(options){
    options = options || {};
    if (typeof options === 'string') {
        options = {
            content: options
        };
    }
    let userOnCancel = options.onCancel;
    options.onCancel = function() {
        Modal.close(userOnCancel);
    };
    vnode = new ModalConstructor({
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
Modal.close = function(userOnCancel){
    userOnCancel(vnode)
}

export default Modal