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
            <div class="om-swiper-item">
                <div 
                class="om-swiper-content"
                >red</div>
            </div>
            <div class="om-swiper-item">
                <div 
                class="om-swiper-content"
                >blue</div>
            </div>
            <div class="om-swiper-item">
                <div 
                class="om-swiper-content"
                >yellow</div>
            </div>
        </div>
    </div>
</template>