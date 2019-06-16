<script>
export default {
    name:'swiper'
}
</script>

<template>
    <div
    class="swiper"
    >
    <h1>swiper:</h1>
    <Swiper
     :duration="300" 
     dots
     autoplay
     >
        <SwiperItem key="0">
           <div class="red">red</div>
        </SwiperItem>
        <SwiperItem key="1">
            <div class="green">green</div>
        </SwiperItem>
        <SwiperItem key="2">
            <div class="blue">blue</div>
        </SwiperItem>
    </Swiper>
    </div>
</template>
<style lang="stylus" scoped>

.red
    width 7.5rem 
    height 3rem 
    color #fff
    background-color red
.green
    width 7.5rem 
    height 3rem 
    color #fff
    background-color #25bb0a 
.blue 
    width 7.5rem 
    height 3rem 
    color #fff
    background-color blue
</style>

