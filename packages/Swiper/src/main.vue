<script>
export default {
    name:'Swiper',
    props:{
        Dots:Boolean,
        autoplay:Boolean,
        interval:{
            default:5000,
            type:Number
        },
        duration:{
            default:500,
            type:Number
        },
        current:{
            default:0,
            type:Number
        },
        circular:Boolean,
        vertical:Boolean
    },
    methods:{
        onChange(index){
            this.$emit('onChange',index)
        },
        onAnimationfinish(index){
            this.$emit('onAnimationfinish')
        }
    }
}
</script>
<template>
    <div class="om-swiper">
        <div class="om-swiper-wrapper">
            <div class="om-swiper-item">red</div>
            <div class="om-swiper-item">blue</div>
            <div class="om-swiper-item">yellow</div>
        </div>
    </div>
</template>