import Icon from '../packages/Icon/index'
import Button from '../packages/Button/index'
import Curtain from '../packages/Curtain/index'
import Badge from '../packages/Badge/index'
import Loading from '../packages/Loading/index'
import Loadmore from '../packages/Loadmore/index'
import {ActionSheet,ActionSheetItem} from '../packages/ActionSheet/index'
import Modal from '../packages/Modal/index'
import Toast from '../packages/Toast/index'
import Tag from '../packages/Tag/index'
import Message from '../packages/Message/index'
import {Swiper,SwiperItem} from '../packages/Swiper/index'
import Divider from '../packages/Divider/index'
import Input from '../packages/Input/index'
import Slider from '../packages/Slider/index'
import OMSwitch from '../packages/Switch/index'
import Rate from '../packages/Rate/index'
import Picker from '../packages/Picker/index'
import {Tabs,Tabpane} from '../packages/Tabs/index'


const components = [
    Icon,
    Button,
    Curtain,
    Badge,
    Loading,
    Loadmore,
    ActionSheet,
    ActionSheetItem,
    Tag,
    Swiper,
    SwiperItem,
    Divider,
    Input,
    Slider,
    Tabs,
    Tabpane,
    Rate,
    Picker,
    OMSwitch
]
const install = function(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
    Vue.prototype.$modal   = Modal
    Vue.prototype.$toast   = Toast
    Vue.prototype.$message = Message
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
    Tag,
    Message,
    Swiper,
    SwiperItem,
    Divider,
    Input,
    Slider,
    Tabs,
    Tabpane,
    OMSwitch,
    Rate,
    Picker,
    install
}