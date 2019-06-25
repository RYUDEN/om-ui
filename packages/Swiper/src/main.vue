<script>
export default {
    name:'Swiper',
    data(){
        return {
            start:0,
            move:0,
            end:0,
            clientWidth:0,
            currentItem:0,
            ItemLength:0,
            dura:500,
            timer:null
        }
    },
    props:{
        dots:Boolean,
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
        }
    },
    created(){
        this.dura = this.duration;
    },
    mounted(){
        this.ItemLength = this.$children.length;
        this.clientWidth = this.$refs.wraper.clientWidth;
        if(this.autoplay){
            this.autoplayItem()
        }
    },
    methods:{
        autoplayItem(){
            this.timer = setInterval(
                ()=>{
                    if((this.currentItem+1)==this.ItemLength){
                        this.currentItem = 0
                    }else{
                        this.currentItem+=1
                    }
                },this.interval
            )
        },
        onChange(index){
            this.$emit('onChange',index)
        },
        handleStart(e){
            if(this.autoplay){
                clearInterval(this.timer)
            }
            this.start = e.changedTouches[0].clientX;
            this.dura = 0 ;
        },
        hanldeMove(e){
            this.move = e.changedTouches[0].clientX-this.start ;
        },
        handleEnd(e){
            if(this.autoplay){
                this.autoplayItem()
            }
            this.end = e.changedTouches[0].clientX;
            this.move = 0;
            this.dura = this.duration;
            if((this.end-this.start)>50){
                if(this.currentItem==0){
                    this.currentItem = 0
                }else{
                    this.currentItem-=1
                }
            }else if((this.end-this.start)<-50){
                if((this.currentItem+1)==this.ItemLength){
                     this.currentItem = (this.ItemLength-1)
                }else{
                    this.currentItem+=1
                }
            }
            this.onChange(this.currentItem)
        },
        handleDot(k){
            this.currentItem = k-1;
            this.onChange(this.currentItem)
        }
    },
    computed:{
        transform(){
            return `translate3d(${-((this.clientWidth*this.currentItem)-this.move)}px, 0, 0)`
        },
        transformDur(){
            return `all cubic-bezier(.36,.66,.04,1) ${this.dura}ms`
        }
    }
}
</script>
<template>
    <div class="om-swiper">
        <div 
        class="om-swiper-wrapper" 
        ref='wraper'
        :style="{
            transform:transform,
            transition:transformDur
        }"
        @touchstart.stop="handleStart"
        @touchmove.stop="hanldeMove"
        @touchend.stop="handleEnd"
        >
            <slot></slot>
        </div>
        <div class="om-swiper-dots" v-if="dots">
            <div 
            v-for="i in ItemLength"
            :key="i"
            @click="handleDot(i)"
            :class="['om-swiper-dot',i===currentItem+1?'dot-active':'']"
            ></div>
        </div>
    </div>
</template>