<script>
export default {
    name:'OMbadge',
    props:{
        value:String,
        max:{
            type:String,
            default:'99'
        },
        min:{
            type:String,
            default:'0'
        },
        isdot:Boolean
    },
    computed:{
        STR(){
            let value = parseInt(this.value)
            let max   = this.max
            let min   = this.min 
            if(value>max){
                return max+'+'
            }else if(value<min){
                return false 
            }else{
                return this.value
            }

        }
    }
}
</script>
<template>
    <div
    class="om-badge"
    v-if="STR"
    >
        <slot></slot>
        <span 
         v-if="isdot"
        :class="['om-badge-ico',isdot&&'isdot']"></span>
        <span 
         v-else
         class="om-badge-ico">{{STR}}</span>
        
    </div>
</template>