<script>
export default {
    name:'OMCurtain',
    props:{
        show:Boolean
    },
    methods:{
        handleClose(e){
            this.$emit('close',e)
        }
    }
}
</script>
<template>
    <transition name="fade">
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
            <div
            class="om-curtain--main"
            >
                <slot></slot>
            </div>
            <i 
            class="iconfont icon-close-circle om-curtain--close"
            @click="handleClose"
            ></i>
            </div>
        </div>
    </transition>  
</template>