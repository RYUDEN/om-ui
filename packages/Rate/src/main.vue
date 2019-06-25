<script>
export default {
    name:'Rate',
    props:{
        value:Number,
        max:Number,
        size:String,
        margin:String,
        read:Boolean
    },
    methods:{
        handleClick(val){
            if(this.read){
                return 
            }
            this.$emit('input',val)
        }
    }
}
</script>
<template>
    <div class="om-rate">
        <i 
        v-for="(i,index) in max"
        :key="index"
        :class="['iconfont','icon-star-fill',size,i<=value&&'active']"
        :style="{'margin-right':margin+'px'}"
        @click="handleClick(i)"
        ></i>
    </div>
</template>