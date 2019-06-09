import Icon from '../packages/Icon/index'
import Button from '../packages/Button/index'
import Curtain from '../packages/Curtain/index'

const components = [
    Icon,
    Button,
    Curtain
]
const install = function(Vue,opts={}){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    version: '2.9.1',
    Icon,
    Button,
    Curtain,
    install
}