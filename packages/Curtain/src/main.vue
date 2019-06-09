<script>
import {addClass,removeClass} from '../../../utils/class'
export default {
    name:'OMCurtain',
    props:{
        show:Boolean
    },
    methods:{
        handleClose(e){
            let mask = document.querySelector('.om-curtain');
            // let mask = document.querySelector('.om-mask');
            addClass(mask,'fade__close');
            setTimeout(()=>{
                this.$emit('close',e)
            },288)
        }
    },
    mounted(){
       console.log( document.querySelector('.om-curtain'))
        // let mask = document.querySelector('.om-curtain');
        // addClass (mask,'.om-curtain__show')
        // setTimeout(()=>{
        //     removeClass(mask,'.om-curtain__show')
        // },300)
    }
}
</script>
<template>
    <div 
    class="om-curtain"
    v-if="show"
    >
        <div
        class="om-mask"
        ></div>
        <div
        class="om-curtain--container"
        >
        <slot></slot>
        <i 
        class="iconfont icon-close-circle om-curtain--close"
        @click="handleClose"
        ></i>
        </div>
    </div>
</template>