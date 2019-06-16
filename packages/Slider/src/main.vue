<script>
export default {
    name:'OMSlider',
    props:{
        max:{
            default:100,
            type:Number
        },
        min:{
            default:0,
            type:Number
        },
        step:{
            default:1,
            type:Number
        },
        content:{
            default:0,
            type:Number
            }
    },
    data(){
        return {
            value:0,
            start:0,
            move:0,
            end:0,
            clientWidth:0
        }
    },
    created(){
        this.value = this.content
    },
    computed:{
        track(){
            let {step,value,max,min,clientWidth,move} = this 
            let stepPX = clientWidth/((max-min)/step)
            let cvalue = value-min
            if((cvalue/step*stepPX+move)<=0){
                return '0px'
            }else if((cvalue/step*stepPX+move)>=clientWidth){
                return clientWidth+'px'
            }else{
                return `${cvalue/step*stepPX+move}px` 
            }
        }
    },
    methods:{
        handleStart(e){
            this.start = e.changedTouches[0].clientX;
        },
        handleMove(e){
            let {step,value,max,min,clientWidth,start} = this 
            let stepPX = clientWidth/(max-min)*step;
            let move = e.changedTouches[0].clientX-this.start;
            let cvalue = value-min
            if(cvalue/step*stepPX+move >= clientWidth&&(move-this.move)>0){
                return
            }else if(cvalue/step*stepPX+move <=0&&(move-this.move)<0){
                return 
            }else{
                this.move = move
            }
        },
        handleEnd(e){
            let {step,value,max,min,clientWidth,start} = this 
            let end = e.changedTouches[0].clientX;
            let stepPX = clientWidth/(max-min)*step;
            let move = end-start
            let cvalue = value-min
            if(cvalue/step*stepPX+move >= clientWidth){
                this.value = max
            }else if(cvalue/step*stepPX+move <=0){
                 this.value = min 
            }else{
                this.value+=Math.round(move/stepPX)*step;
            }
            this.$emit('input',this.value)
            this.start = 0;
            this.move = 0;
        }
    },
    mounted(){
        this.clientWidth = this.$refs.full.clientWidth;
        console.log(this.track)
    }
}
</script>
<template>
    <div class="om-slider">
        <div class="om-slider__inner">
            <div class="om-slider__inner--box">
                <div class="om-slider__full" ref="full">
                    <div 
                        class="om-slider__track"
                        :style="{width:track}"
                        ref="track"
                        ></div>
                    <div 
                        class="om-slider__handler"
                        :style="{left:track}"
                        @touchstart="handleStart"
                        @touchmove="handleMove"
                        @touchend="handleEnd"
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="om-slider__text">{{value}}</div>
    </div>
</template>