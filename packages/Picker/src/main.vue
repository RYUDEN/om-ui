<script>
export default {
    name:'Picker',
    data(){
        return{
            status:false,
            index:0,
            dura:300,
            start:0,
            end:0,
            move:0
        }
    },
    props:{
        placeholder:{
            default:'请选择',
            type:String
        },
        list:{
            default:()=>{
                return []
            },
            type:Array
        },
        label:{
            type:String,
            default:'label'
        },
        value:{
            type:String,
            default:'value'
        }
    },
    methods:{
        handleClose(e){
            this.status = false
        },
        handleOpen(){
            this.status = true
        },
        handleChange(){
            this.$emit('input',this.selected)
        },
        handleStart(e){
            this.start = e.changedTouches[0].clientY;
            this.dura = 0 ;
        },
        handleMove(e){
            this.move = e.changedTouches[0].clientY-this.start ;
        },
        handleEnd(e){
            const ITEM_HEIGHT = 30 
            const TRANS_Y     = this.index*ITEM_HEIGHT-this.move;
            const DEFAULT_DURA= 300
            this.end = e.changedTouches[0].clientY;
            this.move = 0;
            this.dura = DEFAULT_DURA;
            if(TRANS_Y>0){
                if(Math.round(TRANS_Y/ITEM_HEIGHT)>this.list.length-1){
                    this.index = this.list.length-1
                }else{
                    this.index = Math.round(TRANS_Y/ITEM_HEIGHT)
                }
                this.dura  = DEFAULT_DURA
            }else{
                this.dura  = DEFAULT_DURA
                this.index = 0
            }
            this.handleChange()
        }
    },
    computed:{
        transformY(){
            const itemHeight = 30;
            return `translate3d(0,${-((this.index*itemHeight)-this.move)}px,0)`
        },
        duration(){
            return `${this.dura}ms`
        },
        selected(){
            return this.list[this.index]
        }
    }
}
</script>
<template>
    <div class="om-picker">
        <div class="om-picker-label" 
        @click="handleOpen">
        {{placeholder}}
        </div>
        <transition name="slide">
            <div class="om-picker-sheet"
            v-if="status"
            >
                <div
                class="om-mask"
                @click="handleClose"
                ></div>

                <div 
                class="om-picker-sheet--container"
                >
                    <div
                    class="om-picker-sheet--title"
                    >
                    <span>取消</span>
                    <span>确认</span>
                    </div>
                    <div
                    class="om-picker-sheet--body"
                    >
                        <div
                        class="om-picker-sheet--preview"
                        >
                            <div 
                            :style="{transform:transformY,transition:duration}"
                            class="om-picker-sheet--list"
                            @touchstart.stop="handleStart"
                            @touchmove.stop="handleMove"
                            @touchend.stop="handleEnd"
                            >
                                <div
                                v-for="(i,k) in list"
                                class="om-picker-sheet--list__item"
                                :key="k"
                                >
                                    {{label?i[label]:i}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>