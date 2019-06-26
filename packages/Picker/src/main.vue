<script>
export default {
    name:'Picker',
    data(){
        return{
            status:false,
            index:[0],
            dura:300,
            start:0,
            startTime:0,
            end:0,
            move:[0]
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
        },
        select:{
            default:()=>{
                return [0]
            },
            type:Array
        }
    },
    created(){
        this.index = this.select
    },
    methods:{
        handleClose(e){
            this.status = false
        },
        handleOpen(){
            this.status = true
        },
        handleColChange(k,key){
            this.$emit('columeChange',this.list[k][key],k)
        },
        handleChange(){
            let li = [];
            for(let i = 0;i<this.list.length;i++){
                li.push(this.list[i][this.index[i]])
            }
            this.$emit('change',li);
            this.status = false
        },
        handleStart(e){
            this.startTime = +new Date();
            this.start = e.changedTouches[0].clientY;
            this.dura = 0 ;
        },
        handleMove(k,e){
            this.$set(this.move,k,e.changedTouches[0].clientY-this.start) 
        },
        handleEnd(k,e){
            const ENT_TIME    = +new Date()
            const ITEM_HEIGHT = 30 
            let TRANS_Y
            if(ENT_TIME-this.startTime<100){
                let v = this.move[k]/(ENT_TIME-this.startTime);//触摸时间不超过100ms的时候 执行惯性运动 这里是速度
                TRANS_Y = this.index[k]*ITEM_HEIGHT-(this.move[k]+v*150);//Y轴位移距离
            }else{
                TRANS_Y = this.index[k]*ITEM_HEIGHT-this.move[k];
            }
            const DEFAULT_DURA= 300 
            if(TRANS_Y>0){
                if(Math.round(TRANS_Y/ITEM_HEIGHT)>this.list[k].length-1){
                    this.index[k] = this.list[k].length-1
                }else{
                    this.index[k] = Math.round(TRANS_Y/ITEM_HEIGHT)
                }
                this.move[k] = 0
                this.dura  = DEFAULT_DURA
            }else{
                this.move[k] = 0
                this.dura  = DEFAULT_DURA
                this.index[k] = 0
            }
            this.handleColChange(k,this.index[k])
        },
        transformY(k){
            const itemHeight = 30;
            return `translate3d(0,${-((this.index[k]*itemHeight)-this.move[k])}px,0)`
        }
    },
    computed:{
        duration(){
            return `${this.dura}ms`
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
                    <span @click="handleClose">取消</span>
                    <span @click="handleChange">确认</span>
                    </div>
                    <div
                    class="om-picker-sheet--body"
                    >
                        <div
                        class="om-picker-sheet--preview"
                        >
                            <div 
                            v-for="(i,k) in index"
                            :key="k"
                            :style="{transform:transformY(k),transition:duration}"
                            class="om-picker-sheet--list"
                            @touchstart.stop.prevent="handleStart"
                            @touchmove.stop.prevent="handleMove(k,$event)"
                            @touchend.stop.prevent="handleEnd(k,$event)"
                            >
                                <div
                                v-for="(item,key) in list[k]"
                                class="om-picker-sheet--list__item"
                                :key="`kk_${key}`"
                                >
                                    {{label?item[label]:item}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>