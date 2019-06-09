<script>
import Loading from '../../Loading/src/main'

export default {
    name:'OMLoadmore',
    props:{
        value:{
            type:Array,
            default:()=>{
                return [
                    '查看更多',
                    '加载中',
                    '没有更多'
                ]
            }
        },
        status:{
            type:String,
            default:'more'
        }
    },
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    },
    components:{
        Loading
    }
}
</script>
<template>
    <div
    :class="['om-loadmore',status?'om-loadmore-'+status:'']"
    @click="handleClick"
    >
        <Loading v-if="status=='loading'" dark/>
        <span v-if="status=='more'">{{value[0]}}</span>
        <span v-if="status=='loading'">{{value[1]}}</span>
        <span v-if="status=='nomore'">{{value[2]}}</span>
    </div>
</template>