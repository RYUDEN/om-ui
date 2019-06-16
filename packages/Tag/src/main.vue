<script>
export default {
    name:'EmTag',
    props:{
        value:String,
        checked:Boolean,
        cycle:Boolean, //圆角
        primary:Boolean //实心标签
    },
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    }
}
</script>
<template>
    <span 
    @click="handleClick" 
    :class="[
        'em-tag',
        checked?'em-tag__checked':'',
        cycle?'em-tag__cycle':'',
        primary?'em-tag__primary':'',
    ]"
    >{{value}}</span>
</template>