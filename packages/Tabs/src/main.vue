<script>
export default {
    name:'OMTabs',
    props:{
        value:String
    },
    data(){
        return {
            start:0,
            startY:0,
            move:0,
            moveY:0,
            end:0,
            clientWidth:0,
            current:0,
            tabs:[],
            ItemLength:0,
            dura:500,
            vertical:false
        }
    },
    methods:{
        changeTab(k){
            this.current = k
        },
        handleStart(e){
            this.start = e.changedTouches[0].clientX;
            this.startY = e.changedTouches[0].clientY;
            this.dura = 0 ;
            
        },
        handleEnd(e){
            this.end = e.changedTouches[0].clientX;
            this.move = 0;
            this.moveY = 0;
            this.dura = 500;
            if((this.end-this.start)>100&&this.moveY<50){
                if(this.current==0){
                    this.current = 0
                }else{
                    this.current-=1
                }
            }else if((this.end-this.start)<-100&&this.moveY<50){
                if((this.current+1)==this.ItemLength){
                     this.current = (this.ItemLength-1)
                }else{
                    this.current+=1
                }
            }
            this.vertical  = ''
        },
        hanldeMove(e){
            this.moveY = e.changedTouches[0].clientY-this.startY;
            this.move = e.changedTouches[0].clientX-this.start;
            if(this.vertical === 'vertical'){
               this.move = 0;
               this.end =  this.start
            }else if(this.vertical === 'standard'){
                this.move = e.changedTouches[0].clientX-this.start;
            }
            else if(Math.abs(this.move)>30||Math.abs(this.moveY)>30) {
                if(Math.abs(this.moveY/this.move)>1.25){
                    this.vertical = 'vertical' 
                }else{
                    this.vertical = 'standard'
                }
            }
            // if(Math.abs(this.moveY)>Math.abs(e.changedTouches[0].clientX-this.start)&&Math.abs(this.moveY)>50){
            //     this.move = 0;
            //     this.end =  this.start
            // }else{
            //     this.move = e.changedTouches[0].clientX-this.start;
            // }
        }
    },
    mounted(){
        this.tabs = this.$children.map((item,key)=>{
            return item.$attrs.name
        });
        this.ItemLength = this.tabs.length
        this.clientWidth = this.$refs.paneGroup.clientWidth;
    },
    computed:{
        transform(){
            if(Math.abs(this.move)>30&&this.moveY<50){
                return `translate3d(${-((this.clientWidth*this.current)-this.move)}px, 0, 0)`
            }else{
                return `translate3d(${-((this.clientWidth*this.current))}px, 0, 0)`
            }
        },
        transformDur(){
            return `all cubic-bezier(.36,.66,.04,1) ${this.dura}ms`
        }
    }
}
</script>
<template>
    <div class="om-tabs">
        <div class="om-tabs-switch">
            <div class="om-tabs-switch-container">
                <div 
                :class="['om-tabs-switch-item',k===current?'om-tabs-switch-item__active':'']"
                v-for="(i,k) in tabs"
                :key="k"
                @click="changeTab(k)"
                >{{i}}</div>
            </div>
        </div>
        <div class="om-pane-view">
            <div 
            class="om-pane-group"
            ref="paneGroup"
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
        </div>
    </div>
</template>