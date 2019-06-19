<script>
export default {
    name:'tabs'
}
</script>

<template>
    <div>
        <OMTabs>
            <OMTabpane name="推荐">
                <div class="panner panner-1">
                    <div >
                        <Swiper
                        :duration="300" 
                        dots
                        autoplay
                        >
                        <SwiperItem key="0">
                            <div class="banner-1">red</div>
                        </SwiperItem>
                        <SwiperItem key="1">
                            <div class="banner-2">green</div>
                        </SwiperItem>
                        <SwiperItem key="2">
                            <div class="banner-3">blue</div>
                        </SwiperItem>
                    </Swiper>
                    </div>
                    <div class="section-title">
                        <div class="section-title-main">限时团购<span class="eng-title">/  FLASH SALE</span></div>
                        <div class="section-title-page"><span style="font-weight:bold;color:black">1</span>/7</div>
                    </div>
                </div>
            </OMTabpane>
            <OMTabpane name="限时团购">
                <div class="panner panner-2">
                    限时团购
                </div>
            </OMTabpane>
            <OMTabpane name="新品秒杀">
                <div class="panner panner-3">
                    新品秒杀
                </div>
            </OMTabpane>
        </OMTabs>
    </div>
</template>

<style lang="stylus" scoped>
.panner
    position relative
    background-color #fff
    color black
    width 7.5rem
.panner-1 
    height 15rem
.banner-1 
    background-color red
    height 4rem
    width 7.5rem
.banner-2 
    background-color green
    height 4rem
    width 7.5rem
.banner-3 
    background-color blue
    height 4rem
    width 7.5rem
.section-title
    padding  .5rem .5rem .2rem .5rem
    display flex 
    justify-content space-between
    position relative
    &-main 
        font-size .36rem
        font-weight bold
        .eng-title
            margin-left .1rem
            color #a4a4a4
            font-style italic
    &-page 
        vertical-align bottom
        color #a4a4a4
        align-self flex-end
</style>

