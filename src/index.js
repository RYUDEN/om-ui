import Icon from '../packages/Icon/index'
import Button from '../packages/Button/index'
import Curtain from '../packages/Curtain/index'
import Badge from '../packages/Badge/index'
import Loading from '../packages/Loading/index'
import Loadmore from '../packages/Loadmore/index'
import {ActionSheet,ActionSheetItem} from '../packages/ActionSheet/index'
import Modal from '../packages/Modal/index'
import Toast from '../packages/Toast/index'

const components = [
    Icon,
    Button,
    Curtain,
    Badge,
    Loading,
    Loadmore,
    ActionSheet,
    ActionSheetItem
]
const install = function(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
    Vue.prototype.$modal = Modal
    Vue.prototype.$toast = Toast
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    version: '2.9.1',
    Icon,
    Button,
    Curtain,
    Badge,
    Loading,
    Loadmore,
    ActionSheet,
    ActionSheetItem,
    Modal,
    install
}