import Vue from 'vue'
import Main from './main.vue'
import {isVNode}  from '../../../utils/vdom'

let MessageConstructor = Vue.extend(Main);

let vnode;

const Message = function(options){
    options = options || {};
    if (typeof options === 'string') {
        options = {
            value: options
        };
    }
    let userOnCancel = options.onCancel;
    options.onCancel = function() {
        Message.close(userOnCancel);
    };
    vnode = new MessageConstructor({
        data: options
    })
    vnode.visible = true;
    vnode.$mount();
    document.body.appendChild(vnode.$el);
    return vnode 
}
Message.close = function(userOnCancel){
    userOnCancel(vnode)
}

export default Message